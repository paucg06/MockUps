/* ==========================================================================
   WIREFRAME STUDIO - APPLICATION CONTROLLER
   Multi-project management, LocalStorage auto-persistence, full project export/import,
   inter-page linking, animated prototype preview, SortableJS drag & drop,
   50/50 splitting, element resizing, and Ctrl+Z history engine.
   ========================================================================== */

const WireframeStudio = {
  // Projects & Storage State
  projects: [],
  currentProject: null,
  pages: [],
  activePageId: null,

  // Prototype Preview State
  previewActivePageId: null,
  previewDevice: 'desktop',

  // Canvas Workspace State
  state: {
    deviceMode: 'desktop', // 'desktop' | 'laptop' | 'tablet' | 'mobile' | 'multi'
    deviceWidth: 1200,
    theme: 'crisp', // 'crisp' | 'sketchy'
    selectedElement: null
  },

  deviceWidths: {
    desktop: 1200,
    laptop: 1024,
    tablet: 768,
    mobile: 390
  },

  sortableInstances: [],

  // Undo / Redo History Stack (Ctrl+Z & Ctrl+Y)
  history: {
    past: [],
    future: [],
    maxHistory: 50
  },
  isUndoing: false,

  // ==========================================================================
  // INITIALIZATION
  // ==========================================================================
  init() {
    this.cacheElements();
    this.initProjectsEngine();
    this.renderSidebarComponents();
    this.setupEventListeners();
    this.setupDragResizer();
    this.setupKeyboardShortcuts();
    this.setupFileDropzone();
    this.updateUndoRedoButtons();
  },

  cacheElements() {
    this.dom = {
      // Views
      projectsDashboardView: document.getElementById('projectsDashboardView'),
      editorView: document.getElementById('editorView'),
      projectsDashboardGrid: document.getElementById('projectsDashboardGrid'),
      // Topbar elements
      studioLogoBtn: document.getElementById('studioLogoBtn'),
      topbarCurrentPageName: document.getElementById('topbarCurrentPageName'),
      saveStatusDot: document.getElementById('saveStatusDot'),
      saveStatusText: document.getElementById('saveStatusText'),
      btnEditPageName: document.getElementById('btnEditPageName'),
      btnUndo: document.getElementById('btnUndo'),
      btnRedo: document.getElementById('btnRedo'),
      // Canvas & Workspace
      canvasWrapper: document.getElementById('canvasDeviceWrapper'),
      canvasContent: document.getElementById('wireframeCanvas'),
      multiContainer: document.getElementById('multiPlatformContainer'),
      singleCanvasArea: document.getElementById('singleCanvasArea'),
      componentsList: document.getElementById('componentsList'),
      pagesList: document.getElementById('pagesList'),
      sidebarPagesTabTitle: document.getElementById('sidebarPagesTabTitle'),
      toast: document.getElementById('studioToast'),
      toastText: document.getElementById('toastText'),
      inspectorContent: document.getElementById('inspectorContent'),
      inspectorTitle: document.getElementById('inspectorTitle'),
      // Template Picker Modal
      templatePickerModal: document.getElementById('templatePickerModal'),
      templateSuggestionsGrid: document.getElementById('templateSuggestionsGrid'),
      newProjectTitleInput: document.getElementById('newProjectTitleInput'),
      hiddenFileInput: document.getElementById('hiddenProjectFileInput'),
      // Export Popover
      exportPopover: document.getElementById('exportMenuPopover'),
      // Prototype Modal
      previewModal: document.getElementById('prototypePreviewModal'),
      previewCard: document.getElementById('previewViewportCard'),
      previewContent: document.getElementById('previewCardContent'),
      previewPageSelect: document.getElementById('previewPageSelect')
    };
  },

  // ==========================================================================
  // MULTI-PROJECT & PERSISTENCE ENGINE
  // ==========================================================================
  initProjectsEngine() {
    this.projects = WireframeStorage.getAllProjects();
    const activeId = WireframeStorage.getActiveProjectId(this.projects);
    const initialProject = this.projects.find(p => p.id === activeId) || this.projects[0];

    if (initialProject) {
      this.loadProject(initialProject.id, false);
      this.showEditorView();
    } else {
      this.showProjectsView();
    }
  },

  // View Switching: Dashboard vs Editor
  showProjectsView() {
    this.saveCurrentPageContent();
    if (this.dom.editorView) this.dom.editorView.classList.remove('active');
    if (this.dom.projectsDashboardView) this.dom.projectsDashboardView.classList.add('active');
    this.renderProjectsDashboardGrid();
  },

  showEditorView() {
    if (this.dom.projectsDashboardView) this.dom.projectsDashboardView.classList.remove('active');
    if (this.dom.editorView) this.dom.editorView.classList.add('active');
  },

  openProject(projectId) {
    this.saveCurrentPageContent();
    this.loadProject(projectId, false);
    this.showEditorView();
  },

  loadProject(projectId, notify = true) {
    const project = this.projects.find(p => p.id === projectId);
    if (!project) return;

    this.currentProject = project;
    this.pages = project.pages;
    WireframeStorage.setActiveProjectId(projectId);

    // Clear history on project switch
    this.history.past = [];
    this.history.future = [];
    this.updateUndoRedoButtons();

    // Determine initial active page
    const initialPageId = project.activePageId && this.pages.some(p => p.id === project.activePageId)
      ? project.activePageId
      : this.pages[0].id;

    this.loadPage(initialPageId, false);
    this.renderPagesUI();

    if (notify) {
      this.showToast(`Proyecto cargado: ${project.name}`);
    }
  },

  switchProject(projectId) {
    if (projectId === this.currentProject.id) return;
    this.saveCurrentPageContent();
    this.loadProject(projectId, true);
  },

  autoSave() {
    if (!this.currentProject) return;

    this.saveCurrentPageContent();
    this.currentProject.pages = this.pages;
    this.currentProject.activePageId = this.activePageId;

    const dot = this.dom.saveStatusDot;
    const text = this.dom.saveStatusText;
    if (dot) dot.classList.add('saving');
    if (text) text.textContent = 'Guardando...';

    WireframeStorage.saveProject(this.currentProject);

    setTimeout(() => {
      if (dot) dot.classList.remove('saving');
      if (text) text.textContent = 'Guardado';
    }, 300);
  },

  // ==========================================================================
  // PROJECTS DASHBOARD GRID (RECIPROCO + Y PROYECTOS YA CREADOS)
  // ==========================================================================
  renderProjectsDashboardGrid() {
    const grid = this.dom.projectsDashboardGrid;
    if (!grid) return;

    this.projects = WireframeStorage.getAllProjects();

    const newProjectCardHtml = `
      <div class="project-new-card" onclick="WireframeStudio.openTemplatePickerModal()" title="Crear un nuevo proyecto a partir de plantillas">
        <div class="project-new-icon-box">
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
        </div>
        <div class="project-new-title">Crear Nuevo Proyecto</div>
        <div class="project-new-desc">
          Haz clic para ver las sugerencias de plantilla de manera simple y minimalista.
        </div>
      </div>
    `;

    const projectCardsHtml = this.projects.map(proj => {
      const isCurrent = this.currentProject && proj.id === this.currentProject.id;
      const count = proj.pages ? proj.pages.length : 1;
      const dateStr = new Date(proj.updatedAt || Date.now()).toLocaleDateString('es-ES', {
        day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit'
      });

      return `
        <div class="project-grid-card ${isCurrent ? 'active-proj' : ''}" onclick="WireframeStudio.openProject('${proj.id}')">
          <div class="project-grid-thumbnail">
            <div style="width: 100%; height: 100%; border: 1px dashed #d1d5db; border-radius: 4px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: #fff; gap: 4px;">
              <span style="display:inline-flex; color:#6b7280;">${Icons.layout(20)}</span>
              <span style="font-size: 0.68rem; font-weight: 700; color: #9ca3af;">${count} ${count === 1 ? 'pantalla' : 'pantallas'}</span>
            </div>
          </div>
          <div class="project-grid-info">
            <div>
              <div style="display:flex; justify-content:space-between; align-items:center;">
                <h3 class="project-grid-title" title="${proj.name}">${proj.name}</h3>
                ${isCurrent ? `<span style="font-size:0.62rem; font-weight:800; background:#2563eb; color:#fff; padding:1px 5px; border-radius:2px;">ACTIVO</span>` : ''}
              </div>
              <div class="project-grid-meta">
                <span>${count} ${count === 1 ? 'pantalla' : 'pantallas'}</span>
                <span>•</span>
                <span>${dateStr}</span>
              </div>
            </div>
            <div class="project-grid-actions" onclick="event.stopPropagation();">
              <button class="topbar-btn primary" onclick="WireframeStudio.openProject('${proj.id}')" style="padding:4px 10px; font-size:0.75rem; font-weight:700;">
                Abrir
              </button>
              <div style="display:flex; gap:3px;">
                <button class="page-action-btn" onclick="WireframeStudio.promptRenameProject('${proj.id}')" title="Renombrar">${Icons.edit(14)}</button>
                <button class="page-action-btn" onclick="WireframeStudio.duplicateProjectAction('${proj.id}')" title="Duplicar">${Icons.copy(14)}</button>
                <button class="page-action-btn" onclick="WireframeStudio.exportProjectFileAction('${proj.id}')" title="Exportar .wireframe">${Icons.download(14)}</button>
                ${this.projects.length > 1 ? `<button class="page-action-btn danger" onclick="WireframeStudio.deleteProjectAction('${proj.id}')" title="Eliminar">${Icons.trash(14)}</button>` : ''}
              </div>
            </div>
          </div>
        </div>
      `;
    }).join('');

    grid.innerHTML = newProjectCardHtml + projectCardsHtml;
  },

  // ==========================================================================
  // TEMPLATE SUGGESTIONS PICKER (SIMPLE Y MINIMALISTA)
  // ==========================================================================
  openTemplatePickerModal() {
    if (this.dom.newProjectTitleInput) {
      this.dom.newProjectTitleInput.value = `Nuevo Proyecto ${this.projects.length + 1}`;
    }
    this.renderTemplateSuggestions();
    if (this.dom.templatePickerModal) {
      this.dom.templatePickerModal.classList.add('active');
    }
  },

  closeTemplatePickerModal() {
    if (this.dom.templatePickerModal) {
      this.dom.templatePickerModal.classList.remove('active');
    }
  },

  renderTemplateSuggestions() {
    const container = this.dom.templateSuggestionsGrid;
    if (!container) return;

    const templates = WireframeStorage.TEMPLATE_SUGGESTIONS || [];
    container.innerHTML = templates.map(t => {
      const iconFn = Icons[t.icon] ? Icons[t.icon].bind(Icons) : Icons.layout.bind(Icons);
      return `
        <div class="template-card" onclick="WireframeStudio.createProjectFromSuggestion('${t.key}')">
          <div class="template-card-icon">
            ${iconFn(18)}
          </div>
          <div class="template-card-title">${t.title}</div>
          <div class="template-card-desc">${t.desc}</div>
          <div class="template-card-badge">${t.screens} ${t.screens === 1 ? 'pantalla' : 'pantallas'}</div>
        </div>
      `;
    }).join('');
  },

  createProjectFromSuggestion(templateKey) {
    const inputName = this.dom.newProjectTitleInput ? this.dom.newProjectTitleInput.value.trim() : '';
    const template = WireframeStorage.TEMPLATE_SUGGESTIONS.find(t => t.key === templateKey);
    const projectName = inputName || (template ? template.title : 'Nuevo Proyecto');

    const newProj = WireframeStorage.createProjectFromTemplate(projectName, templateKey);
    this.projects = WireframeStorage.getAllProjects();
    this.closeTemplatePickerModal();
    this.openProject(newProj.id);
    this.showToast(`Proyecto "${newProj.name}" creado con éxito`);
  },

  promptRenameProject(projId) {
    const proj = this.projects.find(p => p.id === projId);
    if (!proj) return;

    const newName = prompt('Nuevo nombre del proyecto:', proj.name);
    if (!newName || !newName.trim() || newName.trim() === proj.name) return;

    proj.name = newName.trim();
    WireframeStorage.saveProject(proj);
    this.renderProjectsDashboardGrid();
    this.showToast('Proyecto renombrado');
  },

  duplicateProjectAction(projId) {
    this.saveCurrentPageContent();
    const cloned = WireframeStorage.duplicateProject(projId);
    if (cloned) {
      this.projects = WireframeStorage.getAllProjects();
      this.renderProjectsDashboardGrid();
      this.showToast(`Proyecto duplicado: ${cloned.name}`);
    }
  },

  deleteProjectAction(projId) {
    const proj = this.projects.find(p => p.id === projId);
    if (!proj) return;

    if (!confirm(`¿Eliminar permanentemente el proyecto "${proj.name}" y todas sus pantallas?`)) return;

    if (WireframeStorage.deleteProject(projId)) {
      this.projects = WireframeStorage.getAllProjects();
      const activeId = WireframeStorage.getActiveProjectId(this.projects);
      this.loadProject(activeId, false);
      this.renderProjectsDashboardGrid();
      this.showToast('Proyecto eliminado');
    }
  },

  exportActiveProjectFile() {
    this.saveCurrentPageContent();
    this.currentProject.pages = this.pages;
    this.currentProject.activePageId = this.activePageId;
    WireframeStorage.exportProjectFile(this.currentProject);
    this.showToast(`Proyecto "${this.currentProject.name}" exportado como archivo`);
  },

  exportProjectFileAction(projId) {
    const proj = this.projects.find(p => p.id === projId);
    if (proj) {
      if (proj.id === this.currentProject.id) {
        this.exportActiveProjectFile();
      } else {
        WireframeStorage.exportProjectFile(proj);
        this.showToast(`Proyecto "${proj.name}" exportado`);
      }
    }
  },

  triggerImportProjectFile() {
    if (this.dom.hiddenFileInput) {
      this.dom.hiddenFileInput.value = '';
      this.dom.hiddenFileInput.click();
    }
  },

  handleProjectFileSelect(e) {
    const file = e.target.files && e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const imported = WireframeStorage.importProjectFile(event.target.result);
      if (imported) {
        this.projects = WireframeStorage.getAllProjects();
        this.openProject(imported.id);
        this.showToast(`Proyecto importado: ${imported.name}`);
      }
    };
    reader.readAsText(file);
  },

  setupFileDropzone() {
    window.addEventListener('dragover', (e) => e.preventDefault());
    window.addEventListener('drop', (e) => {
      const file = e.dataTransfer && e.dataTransfer.files[0];
      if (file && (file.name.endsWith('.wireframe') || file.name.endsWith('.json'))) {
        e.preventDefault();
        const reader = new FileReader();
        reader.onload = (event) => {
          const imported = WireframeStorage.importProjectFile(event.target.result);
          if (imported) {
            this.projects = WireframeStorage.getAllProjects();
            this.openProject(imported.id);
            this.showToast(`Proyecto importado: ${imported.name}`);
          }
        };
        reader.readAsText(file);
      }
    });
  },

  // ==========================================================================
  // EXPORT MENU TOGGLE
  // ==========================================================================
  toggleExportMenu(forceState = null) {
    const popover = this.dom.exportPopover;
    if (!popover) return;

    if (forceState !== null) {
      popover.classList.toggle('active', Boolean(forceState));
      return;
    }

    popover.classList.toggle('active');
  },

  // ==========================================================================
  // UNDO / REDO ENGINE (CTRL+Z & CTRL+Y)
  // ==========================================================================
  recordSnapshot() {
    if (this.isUndoing) return;
    this.saveCurrentPageContent();

    const snapshot = {
      pages: JSON.parse(JSON.stringify(this.pages)),
      activePageId: this.activePageId
    };

    const last = this.history.past[this.history.past.length - 1];
    if (last) {
      if (JSON.stringify(last.pages) === JSON.stringify(snapshot.pages) &&
          last.activePageId === snapshot.activePageId) {
        return;
      }
    }

    this.history.past.push(snapshot);
    if (this.history.past.length > this.history.maxHistory) {
      this.history.past.shift();
    }
    this.history.future = [];
    this.updateUndoRedoButtons();
  },

  undo() {
    if (this.history.past.length === 0) {
      this.showToast('No hay más acciones para deshacer');
      return;
    }

    this.deselect();
    this.saveCurrentPageContent();

    const currentSnapshot = {
      pages: JSON.parse(JSON.stringify(this.pages)),
      activePageId: this.activePageId
    };
    this.history.future.push(currentSnapshot);

    const prevState = this.history.past.pop();

    this.isUndoing = true;
    this.pages = prevState.pages;
    this.activePageId = prevState.activePageId;
    this.loadPage(this.activePageId, false);
    this.renderPagesUI();
    this.isUndoing = false;

    this.autoSave();
    this.updateUndoRedoButtons();
    this.showToast('Acción deshecha (Ctrl+Z)');
  },

  redo() {
    if (this.history.future.length === 0) {
      this.showToast('No hay acciones para rehacer');
      return;
    }

    this.deselect();
    this.saveCurrentPageContent();

    const currentSnapshot = {
      pages: JSON.parse(JSON.stringify(this.pages)),
      activePageId: this.activePageId
    };
    this.history.past.push(currentSnapshot);

    const nextState = this.history.future.pop();

    this.isUndoing = true;
    this.pages = nextState.pages;
    this.activePageId = nextState.activePageId;
    this.loadPage(this.activePageId, false);
    this.renderPagesUI();
    this.isUndoing = false;

    this.autoSave();
    this.updateUndoRedoButtons();
    this.showToast('Acción rehecha (Ctrl+Y)');
  },

  updateUndoRedoButtons() {
    const btnUndo = document.getElementById('btnUndo');
    const btnRedo = document.getElementById('btnRedo');

    if (btnUndo) {
      const canUndo = this.history.past.length > 0;
      btnUndo.disabled = !canUndo;
      btnUndo.style.opacity = canUndo ? '1' : '0.4';
      btnUndo.style.cursor = canUndo ? 'pointer' : 'not-allowed';
    }

    if (btnRedo) {
      const canRedo = this.history.future.length > 0;
      btnRedo.disabled = !canRedo;
      btnRedo.style.opacity = canRedo ? '1' : '0.4';
      btnRedo.style.cursor = canRedo ? 'pointer' : 'not-allowed';
    }
  },

  setupKeyboardShortcuts() {
    window.addEventListener('keydown', (e) => {
      const isCtrl = e.ctrlKey || e.metaKey;
      if (!isCtrl) return;

      if (this.dom.previewModal && this.dom.previewModal.classList.contains('active')) {
        return;
      }

      const key = e.key.toLowerCase();

      if (key === 'z') {
        e.preventDefault();
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
        if (e.shiftKey) {
          this.redo();
        } else {
          this.undo();
        }
      } else if (key === 'y') {
        e.preventDefault();
        if (document.activeElement && typeof document.activeElement.blur === 'function') {
          document.activeElement.blur();
        }
        this.redo();
      }
    });

    // Close export popover on outside click
    window.addEventListener('click', (e) => {
      if (!e.target.closest('.export-dropdown-wrapper')) {
        this.toggleExportMenu(false);
      }
    });
  },

  // ==========================================================================
  // MULTI-PAGE MANAGEMENT
  // ==========================================================================
  saveCurrentPageContent() {
    const currentPage = this.pages.find(p => p.id === this.activePageId);
    if (currentPage && this.dom.canvasContent) {
      const clone = this.dom.canvasContent.cloneNode(true);
      clone.querySelectorAll('.wf-floating-toolbar, .wf-resize-handle').forEach(h => h.remove());
      const sel = clone.querySelector('.wf-element-selected');
      if (sel) sel.classList.remove('wf-element-selected');
      currentPage.html = clone.innerHTML;
    }
  },

  switchPage(targetPageId) {
    if (!targetPageId || targetPageId === this.activePageId) return;

    this.saveCurrentPageContent();
    this.deselect();

    const targetPage = this.pages.find(p => p.id === targetPageId);
    if (!targetPage) return;

    this.activePageId = targetPageId;
    this.loadPage(targetPageId, true);
    this.autoSave();
  },

  loadPage(pageId, notify = true) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return;

    this.activePageId = pageId;
    this.deselect();
    this.dom.canvasContent.innerHTML = page.html;

    this.bindCanvasInteractions(this.dom.canvasContent);
    this.initSortables();
    this.renderPagesUI();
    this.syncMultiPlatformIfActive();

    // Update Topbar Current Page Name
    if (this.dom.topbarCurrentPageName) {
      this.dom.topbarCurrentPageName.textContent = page.title;
    }

    if (notify) {
      this.showToast(`Pantalla: ${page.title}`);
    }
  },

  renderPagesUI() {
    // 1. Update Topbar Current Page Title
    const curPage = this.pages.find(p => p.id === this.activePageId);
    if (this.dom.topbarCurrentPageName && curPage) {
      this.dom.topbarCurrentPageName.textContent = curPage.title;
    }

    // 2. Update Sidebar Tab Header Title
    if (this.dom.sidebarPagesTabTitle) {
      this.dom.sidebarPagesTabTitle.textContent = `Pantallas (${this.pages.length})`;
    }

    // 3. Update Left Sidebar Pages List
    if (this.dom.pagesList) {
      this.dom.pagesList.innerHTML = this.pages.map(p => {
        const isActive = p.id === this.activePageId;
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = p.html;
        const linkCount = tempDiv.querySelectorAll('[data-link-page]').length;

        return `
          <div class="page-item-row ${isActive ? 'active' : ''}" onclick="WireframeStudio.switchPage('${p.id}')">
            <div class="page-item-title">
              <span style="display:inline-flex; color:${isActive ? '#2563eb' : '#6b7280'};">
                ${isActive ? Icons.fileText(14) : Icons.layout(14)}
              </span>
              <span>${p.title}</span>
              ${linkCount > 0 ? `<span style="font-size:0.65rem; background:#dbeafe; color:#1d4ed8; padding:1px 5px; border-radius:10px; font-weight:700;">${linkCount} links</span>` : ''}
            </div>
            <div class="page-item-actions" onclick="event.stopPropagation();">
              <button class="page-action-btn" onclick="WireframeStudio.promptRenamePage('${p.id}')" title="Renombrar pantalla">
                ${Icons.edit(12)}
              </button>
              <button class="page-action-btn" onclick="WireframeStudio.duplicatePage('${p.id}')" title="Duplicar pantalla">
                ${Icons.copy(12)}
              </button>
              ${this.pages.length > 1 ? `
                <button class="page-action-btn danger" onclick="WireframeStudio.deletePage('${p.id}')" title="Eliminar pantalla">
                  ${Icons.trash(12)}
                </button>
              ` : ''}
            </div>
          </div>
        `;
      }).join('');
    }
  },

  promptRenameCurrentPage() {
    const curPage = this.pages.find(p => p.id === this.activePageId);
    if (!curPage) return;
    this.promptRenamePage(curPage.id);
  },

  promptRenamePage(pageId) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return;

    const newTitle = prompt('Nombre de la pantalla:', page.title);
    if (!newTitle || !newTitle.trim() || newTitle.trim() === page.title) return;

    this.recordSnapshot();
    page.title = newTitle.trim();
    if (this.activePageId === pageId && this.dom.topbarCurrentPageName) {
      this.dom.topbarCurrentPageName.textContent = page.title;
    }
    this.renderPagesUI();
    this.autoSave();
    this.showToast(`Pantalla renombrada: ${page.title}`);
  },

  createNewPageDirect() {
    const pageNumber = this.pages.length + 1;
    this.createNewPage(`Pantalla ${pageNumber}`);
  },

  promptNewPage() {
    this.createNewPageDirect();
  },

  createNewPage(title, templateId = null) {
    this.recordSnapshot();
    this.saveCurrentPageContent();

    let initialHtml = '';
    if (templateId && WireframeTemplates[templateId]) {
      initialHtml = WireframeTemplates[templateId].html;
    } else {
      initialHtml = `
        <div class="wf-container wf-sort-zone">
          <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
            <div style="font-weight: 800; font-size: 1.1rem;" class="wf-editable-text" contenteditable="true">${title}</div>
            <div style="display: flex; gap: 8px;">
              <button class="wf-btn" data-link-page="${this.pages[0] ? this.pages[0].id : ''}" data-link-name="Inicio">← Volver</button>
            </div>
          </div>
          <div class="wf-draggable-block wf-panel" style="text-align: center; padding: 40px 20px;">
            <h3 style="font-weight: 800; margin-bottom: 8px;">Pantalla en Blanco</h3>
            <p style="color: #666; font-size: 0.85rem; margin-bottom: 16px;">
              Arrastra componentes de la izquierda o añade bloques para comenzar.
            </p>
            <button class="wf-btn wf-btn-primary" onclick="WireframeStudio.insertComponent('image-x')">
              + Añadir Bloque Imagen X
            </button>
          </div>
        </div>
      `;
    }

    const newPage = {
      id: 'page_' + Date.now(),
      title: title,
      html: initialHtml
    };

    this.pages.push(newPage);
    this.switchPage(newPage.id);
    this.renderPagesUI();
    this.autoSave();
    this.showToast(`Nueva pantalla: ${title}`);
  },

  promptRenamePage(pageId) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return;

    const newTitle = prompt('Nuevo nombre de la pantalla:', page.title);
    if (!newTitle || !newTitle.trim() || newTitle.trim() === page.title) return;

    this.recordSnapshot();
    page.title = newTitle.trim();

    this.pages.forEach(p => {
      const div = document.createElement('div');
      div.innerHTML = p.html;
      div.querySelectorAll(`[data-link-page="${pageId}"]`).forEach(el => {
        el.setAttribute('data-link-name', page.title);
      });
      p.html = div.innerHTML;
    });

    if (this.activePageId === pageId) {
      this.dom.canvasContent.querySelectorAll(`[data-link-page="${pageId}"]`).forEach(el => {
        el.setAttribute('data-link-name', page.title);
      });
    }

    this.renderPagesUI();
    this.autoSave();
    this.showToast('Pantalla renombrada');
  },

  duplicatePage(pageId) {
    this.recordSnapshot();
    this.saveCurrentPageContent();
    const sourcePage = this.pages.find(p => p.id === pageId);
    if (!sourcePage) return;

    const newPage = {
      id: 'page_' + Date.now(),
      title: `${sourcePage.title} (Copia)`,
      html: sourcePage.html
    };

    this.pages.push(newPage);
    this.switchPage(newPage.id);
    this.renderPagesUI();
    this.autoSave();
    this.showToast(`Pantalla duplicada: ${newPage.title}`);
  },

  deletePage(pageId) {
    if (this.pages.length <= 1) {
      alert('El proyecto debe tener al menos una pantalla.');
      return;
    }

    const page = this.pages.find(p => p.id === pageId);
    if (!page) return;

    if (!confirm(`¿Estás seguro de eliminar "${page.title}"?`)) return;

    this.recordSnapshot();
    this.pages = this.pages.filter(p => p.id !== pageId);

    if (this.activePageId === pageId) {
      this.switchPage(this.pages[0].id);
    } else {
      this.renderPagesUI();
    }

    this.autoSave();
    this.showToast('Pantalla eliminada');
  },

  // ==========================================================================
  // INTER-PAGE LINKING ENGINE
  // ==========================================================================
  setElementLink(targetPageId) {
    const el = this.state.selectedElement;
    if (!el) return;

    if (!targetPageId) {
      this.removeElementLink();
      return;
    }

    const targetPage = this.pages.find(p => p.id === targetPageId);
    if (!targetPage) return;

    this.recordSnapshot();
    el.setAttribute('data-link-page', targetPage.id);
    el.setAttribute('data-link-name', targetPage.title);

    this.renderFloatingToolbar(el);
    this.renderInspector(el);
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast(`Enlace fijado a: ${targetPage.title}`);
  },

  removeElementLink() {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();
    el.removeAttribute('data-link-page');
    el.removeAttribute('data-link-name');

    this.renderFloatingToolbar(el);
    this.renderInspector(el);
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Enlace eliminado');
  },

  // ==========================================================================
  // ANIMATED PROTOTYPE PREVIEW MODAL
  // ==========================================================================
  openPrototypePreview() {
    this.saveCurrentPageContent();

    const modal = this.dom.previewModal;
    if (!modal) return;

    this.previewActivePageId = this.activePageId;
    modal.classList.add('active');

    if (this.dom.previewPageSelect) {
      this.dom.previewPageSelect.innerHTML = this.pages.map(p => `
        <option value="${p.id}" ${p.id === this.previewActivePageId ? 'selected' : ''}>
          ${p.title}
        </option>
      `).join('');
    }

    this.renderPreviewScreen(this.previewActivePageId);

    this._escHandler = (e) => {
      if (e.key === 'Escape') WireframeStudio.closePrototypePreview();
    };
    window.addEventListener('keydown', this._escHandler);
  },

  closePrototypePreview() {
    const modal = this.dom.previewModal;
    if (modal) modal.classList.remove('active');
    if (this._escHandler) {
      window.removeEventListener('keydown', this._escHandler);
      this._escHandler = null;
    }
  },

  renderPreviewScreen(pageId) {
    const page = this.pages.find(p => p.id === pageId);
    if (!page) return;

    this.previewActivePageId = pageId;
    if (this.dom.previewPageSelect) {
      this.dom.previewPageSelect.value = pageId;
    }

    const content = this.dom.previewContent;
    content.innerHTML = page.html;

    content.querySelectorAll('.wf-floating-toolbar, .wf-resize-handle').forEach(h => h.remove());

    content.querySelectorAll('[data-link-page]').forEach(clickableEl => {
      clickableEl.style.cursor = 'pointer';
      clickableEl.onclick = (e) => {
        e.stopPropagation();
        e.preventDefault();
        const targetId = clickableEl.getAttribute('data-link-page');
        if (targetId) {
          this.previewNavigateToPage(targetId);
        }
      };
    });
  },

  previewNavigateToPage(targetPageId) {
    if (!targetPageId || targetPageId === this.previewActivePageId) return;

    const card = this.dom.previewCard;
    if (!card) {
      this.renderPreviewScreen(targetPageId);
      return;
    }

    card.classList.remove('screen-transition-slide-in');
    card.classList.add('screen-transition-slide-out');

    setTimeout(() => {
      this.renderPreviewScreen(targetPageId);
      card.classList.remove('screen-transition-slide-out');
      card.classList.add('screen-transition-slide-in');

      setTimeout(() => {
        card.classList.remove('screen-transition-slide-in');
      }, 260);
    }, 180);
  },

  setPreviewDevice(device) {
    this.previewDevice = device;
    const card = this.dom.previewCard;
    if (!card) return;

    document.querySelectorAll('[data-prevdevice]').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.prevdevice === device);
    });

    if (device === 'desktop') {
      card.style.width = '1100px';
    } else if (device === 'tablet') {
      card.style.width = '768px';
    } else if (device === 'mobile') {
      card.style.width = '390px';
    }
  },

  // ==========================================================================
  // SIDEBAR TABS & COMPONENT LIBRARY
  // ==========================================================================
  switchSidebarTab(tab) {
    const tabPages = document.getElementById('sidebarTabPages');
    const tabComps = document.getElementById('sidebarTabComponents');
    const contentPages = document.getElementById('pagesTabContent');
    const contentComps = document.getElementById('componentsTabContent');

    if (tab === 'components') {
      if (tabPages) tabPages.classList.remove('active');
      if (tabComps) tabComps.classList.add('active');
      if (contentPages) contentPages.style.display = 'none';
      if (contentComps) {
        contentComps.style.display = 'block';
        this.renderSidebarComponents();
        this.initPaletteSortables();
      }
    } else {
      if (tabComps) tabComps.classList.remove('active');
      if (tabPages) tabPages.classList.add('active');
      if (contentComps) contentComps.style.display = 'none';
      if (contentPages) contentPages.style.display = 'block';
    }
  },

  initPaletteSortables() {
    if (typeof Sortable === 'undefined') return;
    document.querySelectorAll('#componentsList .component-grid').forEach(paletteGrid => {
      const existing = Sortable.get(paletteGrid);
      if (existing) {
        try { existing.destroy(); } catch (e) {}
      }

      const paletteSortable = new Sortable(paletteGrid, {
        group: {
          name: 'wireframe-shared',
          pull: 'clone',
          put: false
        },
        sort: false,
        draggable: '.comp-btn',
        animation: 160,
        onEnd: (evt) => {
          if (evt.to && evt.to !== evt.from && this.dom.canvasContent.contains(evt.to)) {
            this.recordSnapshot();
            const compKey = evt.item.dataset.componentKey;
            const comp = WireframeComponents.library[compKey];
            if (comp) {
              const tempDiv = document.createElement('div');
              tempDiv.innerHTML = comp.render().trim();
              const realEl = tempDiv.firstElementChild;
              evt.item.parentNode.replaceChild(realEl, evt.item);

              this.bindCanvasInteractions(this.dom.canvasContent);
              this.initSortables();
              this.selectElement(realEl);
              this.saveCurrentPageContent();
              this.autoSave();
              this.syncMultiPlatformIfActive();
              this.showToast('Elemento añadido: ' + comp.name);
            }
          }
        }
      });
      this.sortableInstances.push(paletteSortable);
    });
  },

  renderSidebarComponents() {
    const container = this.dom.componentsList;
    if (!container) return;

    const categories = {
      basic: 'Básicos',
      layout: 'Estructuras',
      shop: 'Tienda E-Commerce',
      video: 'Multimedia & Vídeo',
      tcg: 'Cartas TCG',
      gaming: 'Videojuegos'
    };

    let html = '';
    for (const [catKey, catTitle] of Object.entries(categories)) {
      html += `<div class="sidebar-section-title">${catTitle}</div>`;
      html += `<div class="component-grid">`;

      for (const [key, comp] of Object.entries(WireframeComponents.library)) {
        if (comp.category === catKey) {
          const iconSvg = comp.iconFunc ? comp.iconFunc() : Icons.square(14);
          html += `
            <div class="comp-btn" 
                 data-component-key="${key}"
                 onclick="WireframeStudio.insertComponent('${key}')" 
                 title="Arrastra al lienzo o haz clic para añadir">
              <div class="comp-icon-box">${iconSvg}</div>
              <span>${comp.name}</span>
            </div>
          `;
        }
      }
      html += `</div>`;
    }

    container.innerHTML = html;
  },

  insertComponent(componentKey, targetElement = null) {
    const comp = WireframeComponents.library[componentKey];
    if (!comp) return null;

    this.recordSnapshot();

    const rendered = comp.render();
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = rendered.trim();
    const newElement = tempDiv.firstElementChild;

    const mainContainer = this.dom.canvasContent.querySelector('.wf-container') || this.dom.canvasContent;

    if (targetElement && targetElement.parentElement) {
      targetElement.parentElement.insertBefore(newElement, targetElement.nextSibling);
    } else if (this.state.selectedElement && this.state.selectedElement.parentElement) {
      this.state.selectedElement.parentElement.insertBefore(newElement, this.state.selectedElement.nextSibling);
    } else {
      mainContainer.appendChild(newElement);
    }

    this.bindCanvasInteractions(this.dom.canvasContent);
    this.initSortables();
    this.selectElement(newElement);
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast(`Añadido: ${comp.name}`);

    newElement.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    return newElement;
  },

  // ==========================================================================
  // SORTABLEJS MULTI-ZONE ENGINE
  // ==========================================================================
  initSortables() {
    if (typeof Sortable === 'undefined') return;

    this.sortableInstances.forEach(inst => {
      try { inst.destroy(); } catch (e) {}
    });
    this.sortableInstances = [];

    const sortableOptions = (isHoriz = false) => ({
      group: {
        name: 'wireframe-shared',
        pull: true,
        put: true
      },
      animation: 160,
      ghostClass: 'wf-sortable-ghost',
      chosenClass: 'wf-sortable-chosen',
      dragClass: 'wf-sortable-drag',
      draggable: '.wf-draggable-block',
      filter: '[contenteditable="true"], input, select, textarea, .wf-floating-toolbar, .wf-resize-handle',
      preventOnFilter: false,
      fallbackOnBody: true,
      swapThreshold: 0.5,
      invertedSwapThreshold: 0.5,
      direction: isHoriz ? 'horizontal' : 'vertical',
      onStart: () => {
        this.recordSnapshot();
      },
      onEnd: (evt) => {
        this.saveCurrentPageContent();
        this.autoSave();
        this.syncMultiPlatformIfActive();
        if (evt.to === evt.from && evt.oldIndex !== evt.newIndex) {
          this.showToast('Elemento reordenado');
        }
      }
    });

    const rootContainer = this.dom.canvasContent.querySelector('.wf-container') || this.dom.canvasContent;
    if (rootContainer) {
      this.sortableInstances.push(new Sortable(rootContainer, sortableOptions(false)));
    }

    const allZones = this.dom.canvasContent.querySelectorAll(
      '.wf-sort-zone, .wf-grid-4, .wf-grid-3, .wf-grid-2, .wf-row-50-50, .wf-row-split, .wf-featured-layout, ' +
      '.wf-featured-playlist, .wf-inventory-grid, .wf-tracking-stepper, .wf-product-card, .wf-tcg-card, ' +
      '.wf-game-hud-bar, .wf-mobile-bottom-nav, .wf-flex-wrap, .wf-flex-row, .wf-yt-header-top, .wf-yt-nav-links, ' +
      '.wf-hotbar-row, .wf-panel'
    );

    allZones.forEach(zone => {
      const isHoriz = zone.classList.contains('wf-grid-4') || 
                      zone.classList.contains('wf-grid-3') || 
                      zone.classList.contains('wf-grid-2') || 
                      zone.classList.contains('wf-row-50-50') || 
                      zone.classList.contains('wf-flex-row') || 
                      zone.classList.contains('wf-flex-wrap') || 
                      zone.classList.contains('wf-mobile-bottom-nav') ||
                      zone.classList.contains('wf-hotbar-row') ||
                      zone.classList.contains('wf-inventory-grid') ||
                      zone.classList.contains('wf-yt-header-top') ||
                      zone.classList.contains('wf-yt-nav-links') ||
                      zone.classList.contains('wf-game-hud-bar');

      this.sortableInstances.push(new Sortable(zone, sortableOptions(isHoriz)));
    });

    this.initPaletteSortables();
  },

  // ==========================================================================
  // POSITION ALIGNMENT, ITEM INSERTION & 50/50 SPLITTING
  // ==========================================================================
  alignElement(alignType) {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();

    if (alignType === 'left') {
      el.style.marginLeft = '0px';
      el.style.marginRight = 'auto';
      el.style.alignSelf = 'flex-start';
      el.style.textAlign = 'left';
      if (el.style.display === 'flex' || el.classList.contains('wf-flex-row') || el.classList.contains('wf-flex-between') || el.classList.contains('wf-sort-zone')) {
        el.style.justifyContent = 'flex-start';
      }
    } else if (alignType === 'center') {
      el.style.marginLeft = 'auto';
      el.style.marginRight = 'auto';
      el.style.alignSelf = 'center';
      el.style.textAlign = 'center';
      if (el.style.display === 'flex' || el.classList.contains('wf-flex-row') || el.classList.contains('wf-flex-between') || el.classList.contains('wf-sort-zone')) {
        el.style.justifyContent = 'center';
      }
    } else if (alignType === 'right') {
      el.style.marginLeft = 'auto';
      el.style.marginRight = '0px';
      el.style.alignSelf = 'flex-end';
      el.style.textAlign = 'right';
      if (el.style.display === 'flex' || el.classList.contains('wf-flex-row') || el.classList.contains('wf-flex-between') || el.classList.contains('wf-sort-zone')) {
        el.style.justifyContent = 'flex-end';
      }
    }

    // Apply text-alignment to child editable texts if any
    const textChildren = el.querySelectorAll('.wf-editable-text, h1, h2, h3, h4, h5, h6, p, label, .wf-x-label');
    textChildren.forEach(t => {
      t.style.textAlign = alignType;
    });

    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast(`Alineado: ${alignType.toUpperCase()}`);
  },

  insertChildOrSibling(itemType) {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();
    let html = '';
    switch (itemType) {
      case 'text':
        html = `<p class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-size:0.9rem; margin:6px 0; color:#374151;">Nuevo texto editable...</p>`;
        break;
      case 'heading':
        html = `<h3 class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-size:1.15rem; font-weight:800; margin:6px 0;">Nuevo Encabezado</h3>`;
        break;
      case 'button':
        html = `<button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" style="margin:4px 0;">Nuevo Botón</button>`;
        break;
      case 'chip':
        html = `<span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true" spellcheck="false" style="margin:2px 4px;">Etiqueta</span>`;
        break;
      case 'input':
        html = `<div class="wf-draggable-block" style="margin:6px 0; width:100%;"><input type="text" class="wf-input" placeholder="Nuevo campo..." style="width:100%;" /></div>`;
        break;
      case 'image':
        html = `<div class="wf-draggable-block" style="margin:8px 0; width:100%;">${WireframeComponents.renderPlaceholderX('Nueva Imagen', 110)}</div>`;
        break;
      case 'row-50':
        html = WireframeComponents.library['row-50-50'].render();
        break;
      default:
        html = `<div class="wf-draggable-block wf-box" style="padding:10px;"><p class="wf-editable-text" contenteditable="true" spellcheck="false">Nuevo Bloque</p></div>`;
    }

    const tempDiv = document.createElement('div');
    tempDiv.innerHTML = html.trim();
    const newEl = tempDiv.firstElementChild;

    const targetZone = el.querySelector('.wf-sort-zone, .wf-panel-body') || (el.classList.contains('wf-sort-zone') || el.classList.contains('wf-panel') || el.classList.contains('wf-box') ? el : null);
    if (targetZone && targetZone !== newEl) {
      targetZone.appendChild(newEl);
    } else if (el.parentElement) {
      el.parentElement.insertBefore(newEl, el.nextSibling);
    } else {
      const mainContainer = this.dom.canvasContent.querySelector('.wf-container') || this.dom.canvasContent;
      mainContainer.appendChild(newEl);
    }

    this.bindCanvasInteractions(this.dom.canvasContent);
    this.initSortables();
    this.selectElement(newEl);
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Elemento añadido');
  },

  split5050() {
    const el = this.state.selectedElement;
    if (!el || !el.parentElement) return;

    this.recordSnapshot();

    if (el.parentElement.classList.contains('wf-row-50-50')) {
      const parent = el.parentElement;
      while (parent.firstChild) {
        parent.parentElement.insertBefore(parent.firstChild, parent);
      }
      parent.remove();
      this.initSortables();
      this.saveCurrentPageContent();
      this.autoSave();
      this.syncMultiPlatformIfActive();
      this.showToast('Convertido a ancho normal');
      return;
    }

    const row = document.createElement('div');
    row.className = 'wf-draggable-block wf-row-50-50';

    el.parentElement.insertBefore(row, el);
    el.style.width = '100%';
    row.appendChild(el);

    const rightCol = document.createElement('div');
    rightCol.className = 'wf-draggable-block';
    rightCol.innerHTML = WireframeComponents.renderPlaceholderX('Columna Derecha (50%)', 140);
    row.appendChild(rightCol);

    this.bindCanvasInteractions(this.dom.canvasContent);
    this.initSortables();
    this.selectElement(el);
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Seccionado en 2 columnas 50/50');
  },

  setElementWidth(percentage) {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();
    if (percentage === 'auto') {
      el.style.width = 'auto';
      el.style.flex = 'initial';
    } else {
      el.style.width = percentage;
      el.style.maxWidth = '100%';
      el.style.boxSizing = 'border-box';
    }

    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast(`Ancho: ${percentage}`);
  },

  setElementHeight(delta) {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();
    const currentHeight = el.offsetHeight || 140;
    const newHeight = Math.max(30, currentHeight + delta);
    el.style.minHeight = newHeight + 'px';

    const placeholder = el.querySelector('.wf-placeholder-x') || (el.classList.contains('wf-placeholder-x') ? el : null);
    if (placeholder) {
      placeholder.style.height = newHeight + 'px';
    }

    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
  },

  resetElementHeight() {
    const el = this.state.selectedElement;
    if (!el) return;

    this.recordSnapshot();
    el.style.minHeight = '';
    el.style.height = '';
    const placeholder = el.querySelector('.wf-placeholder-x') || (el.classList.contains('wf-placeholder-x') ? el : null);
    if (placeholder) {
      placeholder.style.height = '140px';
    }

    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Altura restablecida');
  },

  // ==========================================================================
  // FLOATING TOOLBAR & RESIZE HANDLES
  // ==========================================================================
  renderFloatingToolbar(el) {
    this.removeFloatingToolbar();
    if (!el) return;

    const hasLink = el.hasAttribute('data-link-page');
    const linkName = el.getAttribute('data-link-name') || '';

    const toolbar = document.createElement('div');
    toolbar.className = 'wf-floating-toolbar';
    toolbar.id = 'wfActiveFloatingToolbar';
    toolbar.onmousedown = (e) => e.stopPropagation();

    toolbar.innerHTML = `
      <!-- Alineador de Posición -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.alignElement('left')" title="Alinear a la izquierda">
        ${Icons.alignLeft(13)}
      </button>
      <button class="wf-toolbar-btn" onclick="WireframeStudio.alignElement('center')" title="Alinear al centro">
        ${Icons.alignCenter(13)}
      </button>
      <button class="wf-toolbar-btn" onclick="WireframeStudio.alignElement('right')" title="Alinear a la derecha">
        ${Icons.alignRight(13)}
      </button>

      <div class="wf-toolbar-sep"></div>

      <!-- Añadir Elemento Rápido -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.insertChildOrSibling('button')" title="Añadir Botón">
        + Botón
      </button>
      <button class="wf-toolbar-btn" onclick="WireframeStudio.insertChildOrSibling('text')" title="Añadir Texto">
        + Texto
      </button>

      <div class="wf-toolbar-sep"></div>

      <!-- 50/50 Split -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.split5050()" title="Dividir en 2 columnas 50/50">
        ${Icons.split2(13)} <span>50/50</span>
      </button>

      <!-- Ancho Rápido -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.setElementWidth('100%')" title="Ancho 100%">100%</button>
      <button class="wf-toolbar-btn" onclick="WireframeStudio.setElementWidth('50%')" title="Ancho 50%">50%</button>

      <div class="wf-toolbar-sep"></div>

      <!-- Enlace a Página -->
      <button class="wf-toolbar-btn ${hasLink ? 'active' : ''}" onclick="WireframeStudio.focusLinkInspector()" title="${hasLink ? 'Enlazado a: ' + linkName : 'Añadir enlace a otra pantalla'}">
        ${Icons.link(13)} <span>${hasLink ? 'Enlazado' : 'Enlace'}</span>
      </button>

      <div class="wf-toolbar-sep"></div>

      <!-- Mover -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.moveSelected(-1)" title="Mover arriba / antes">
        ${Icons.arrowUp(13)}
      </button>
      <button class="wf-toolbar-btn" onclick="WireframeStudio.moveSelected(1)" title="Mover abajo / después">
        ${Icons.arrowDown(13)}
      </button>

      <!-- Duplicar y Eliminar -->
      <button class="wf-toolbar-btn" onclick="WireframeStudio.duplicateSelected()" title="Duplicar">
        ${Icons.copy(13)}
      </button>
      <button class="wf-toolbar-btn" style="color:#fca5a5;" onclick="WireframeStudio.deleteSelected()" title="Eliminar parte">
        ${Icons.trash(13)}
      </button>
    `;

    const rect = el.getBoundingClientRect();
    const canvasRect = this.dom.canvasContent.getBoundingClientRect();
    if (rect.top - canvasRect.top < 45) {
      toolbar.style.top = 'auto';
      toolbar.style.bottom = '-42px';
    } else {
      toolbar.style.top = '-42px';
      toolbar.style.bottom = 'auto';
    }

    el.appendChild(toolbar);

    const isResizable = el.classList.contains('wf-placeholder-x') ||
                        el.classList.contains('wf-draggable-block') ||
                        el.classList.contains('wf-box') ||
                        el.classList.contains('wf-panel') ||
                        el.classList.contains('wf-product-card') ||
                        el.classList.contains('wf-tcg-card');

    if (isResizable) {
      const handleE = document.createElement('div');
      handleE.className = 'wf-resize-handle wf-resize-handle-e';
      handleE.title = 'Arrastra para cambiar el ancho';
      this.setupElementResizeHandle(handleE, el, 'width');
      el.appendChild(handleE);

      const handleS = document.createElement('div');
      handleS.className = 'wf-resize-handle wf-resize-handle-s';
      handleS.title = 'Arrastra para cambiar la altura';
      this.setupElementResizeHandle(handleS, el, 'height');
      el.appendChild(handleS);

      const handleSE = document.createElement('div');
      handleSE.className = 'wf-resize-handle wf-resize-handle-se';
      handleSE.title = 'Arrastra para cambiar ancho y altura';
      this.setupElementResizeHandle(handleSE, el, 'both');
      el.appendChild(handleSE);
    }
  },

  focusLinkInspector() {
    const select = document.getElementById('inspLinkSelect');
    if (select) {
      select.focus();
      select.scrollIntoView({ behavior: 'smooth', block: 'center' });
      this.showToast('Selecciona la pantalla de destino');
    }
  },

  removeFloatingToolbar() {
    const existing = document.getElementById('wfActiveFloatingToolbar');
    if (existing) existing.remove();

    document.querySelectorAll('.wf-resize-handle').forEach(h => h.remove());
  },

  setupElementResizeHandle(handleEl, targetEl, dimension) {
    handleEl.onmousedown = (e) => {
      this.recordSnapshot();
      e.stopPropagation();
      e.preventDefault();

      const startX = e.clientX;
      const startY = e.clientY;
      const startWidth = targetEl.offsetWidth;
      const startHeight = targetEl.offsetHeight;

      const onMouseMove = (moveEvent) => {
        if (dimension === 'width' || dimension === 'both') {
          const dx = moveEvent.clientX - startX;
          const newWidth = Math.max(60, startWidth + dx);
          targetEl.style.width = newWidth + 'px';
          targetEl.style.maxWidth = '100%';
        }

        if (dimension === 'height' || dimension === 'both') {
          const dy = moveEvent.clientY - startY;
          const newHeight = Math.max(30, startHeight + dy);
          targetEl.style.minHeight = newHeight + 'px';

          const placeholder = targetEl.querySelector('.wf-placeholder-x') || (targetEl.classList.contains('wf-placeholder-x') ? targetEl : null);
          if (placeholder) {
            placeholder.style.height = newHeight + 'px';
          }
        }
      };

      const onMouseUp = () => {
        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
        WireframeStudio.saveCurrentPageContent();
        WireframeStudio.autoSave();
        WireframeStudio.syncMultiPlatformIfActive();
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    };
  },

  // ==========================================================================
  // CANVAS SELECTION & 100% PARTE POR PARTE INTERACTION
  // ==========================================================================
  bindCanvasInteractions(container) {
    if (!container) return;

    // 1. Make all textual elements in-place editable
    const textSelectors = [
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p',
      'button', '.wf-btn', 'a',
      '.wf-editable-text', '.wf-x-label',
      '.wf-chip', '.wf-badge', '.wf-price-tag', '.wf-stat-badge',
      'label', 'span.wf-tag', 'span.wf-nav-link',
      'th', 'td', 'span'
    ].join(', ');

    container.querySelectorAll(textSelectors).forEach(textEl => {
      if (textEl.closest('.wf-floating-toolbar') || textEl.closest('.wf-resize-handle')) return;
      if (textEl.classList.contains('wf-resize-handle') || textEl.classList.contains('wf-step-line')) return;

      // Ensure text is directly editable
      textEl.setAttribute('contenteditable', 'true');
      textEl.setAttribute('spellcheck', 'false');

      textEl.onfocus = () => {
        this.recordSnapshot();
        this.selectElement(textEl);
      };

      textEl.oninput = () => {
        const inspInput = document.getElementById('inspTextInput');
        if (inspInput && this.state.selectedElement === textEl) {
          inspInput.value = textEl.innerText !== undefined ? textEl.innerText : textEl.textContent;
        }
        this.syncMultiPlatformIfActive();
      };

      textEl.onblur = () => {
        this.saveCurrentPageContent();
        this.autoSave();
      };
    });

    // 2. Click delegation for 100% granular selection on ANY clicked part
    container.onclick = (e) => {
      if (e.target.closest('.wf-floating-toolbar') || e.target.closest('.wf-resize-handle')) {
        return;
      }

      if (e.target === container || e.target.classList.contains('wf-container')) {
        this.deselect();
        return;
      }

      let part = e.target.closest(
        'button, .wf-btn, ' +
        'h1, h2, h3, h4, h5, h6, ' +
        'p, a, span, label, ' +
        '.wf-x-label, .wf-placeholder-circle, ' +
        '.wf-chip, .wf-badge, .wf-price-tag, .wf-stat-badge, ' +
        'input, select, textarea, ' +
        '.wf-placeholder-x, ' +
        '.wf-product-card, .wf-video-card-horiz, .wf-inventory-slot, .wf-playlist-item, ' +
        '.wf-tcg-card, .wf-chat-msg, ' +
        '.wf-draggable-block, .wf-box, .wf-panel'
      );

      if (part && container.contains(part)) {
        if (part.classList.contains('wf-x-label') && part.closest('.wf-placeholder-x')) {
          part = part.closest('.wf-placeholder-x');
        }
        e.stopPropagation();
        this.selectElement(part);
      }
    };
  },

  selectElement(el) {
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('wf-element-selected');
    }

    this.state.selectedElement = el;
    el.classList.add('wf-element-selected');
    this.renderFloatingToolbar(el);
    this.renderInspector(el);
  },

  deselect() {
    this.removeFloatingToolbar();
    if (this.state.selectedElement) {
      this.state.selectedElement.classList.remove('wf-element-selected');
      this.state.selectedElement = null;
    }
    this.renderInspector(null);
  },

  renderInspector(el) {
    const content = this.dom.inspectorContent;
    const title = this.dom.inspectorTitle;

    if (!el) {
      if (title) title.textContent = 'Propiedades';
      if (content) {
        content.innerHTML = `
          <div style="color: #6b7280; font-size: 0.78rem; text-align: center; margin-top: 30px; line-height: 1.5;">
            <div style="margin-bottom: 8px; color: #9ca3af;">${Icons.layout(28)}</div>
            Haz clic en <strong>cualquier parte</strong> del mockup (botón, título, texto, imagen X, tarjeta o fila) para editarla al 100%.
          </div>
        `;
      }
      return;
    }

    if (title) title.textContent = 'Editar Parte';

    // 1. Detect Part Type
    let partType = 'Elemento';
    const tag = el.tagName ? el.tagName.toLowerCase() : '';
    if (tag === 'button' || el.classList.contains('wf-btn')) {
      partType = 'Botón';
    } else if (/^h[1-6]$/.test(tag)) {
      partType = `Título (${tag.toUpperCase()})`;
    } else if (tag === 'p') {
      partType = 'Párrafo';
    } else if (el.classList.contains('wf-placeholder-x')) {
      partType = 'Imagen con X';
    } else if (el.classList.contains('wf-placeholder-circle')) {
      partType = 'Avatar / Círculo';
    } else if (el.classList.contains('wf-chip') || el.classList.contains('wf-badge') || el.classList.contains('wf-price-tag')) {
      partType = 'Etiqueta / Badge';
    } else if (tag === 'a' || el.classList.contains('wf-nav-link')) {
      partType = 'Enlace Web';
    } else if (tag === 'input' || tag === 'textarea' || tag === 'select') {
      partType = 'Campo Input';
    } else if (el.classList.contains('wf-product-card') || el.classList.contains('wf-tcg-card')) {
      partType = 'Tarjeta Individual';
    } else if (el.classList.contains('wf-row-50-50')) {
      partType = 'Fila Doble (50/50)';
    } else if (el.classList.contains('wf-draggable-block') || el.classList.contains('wf-box') || el.classList.contains('wf-panel')) {
      partType = 'Bloque Contenedor';
    }

    // 2. Extract editable text and target node
    let currentText = '';
    let textTarget = null;
    if (el.classList.contains('wf-placeholder-x')) {
      textTarget = el.querySelector('.wf-x-label');
      currentText = textTarget ? textTarget.textContent.trim() : '';
    } else if (tag === 'input' || tag === 'textarea') {
      currentText = el.value || el.placeholder || '';
    } else if (['button', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'a', 'label', 'span', 'th', 'td'].includes(tag) ||
               el.classList.contains('wf-btn') || el.classList.contains('wf-chip') || el.classList.contains('wf-badge') || el.classList.contains('wf-price-tag')) {
      textTarget = el;
      currentText = el.innerText !== undefined ? el.innerText.trim() : el.textContent.trim();
    } else {
      const sub = el.querySelector('.wf-x-label, h1, h2, h3, h4, .wf-editable-text, p');
      if (sub) {
        textTarget = sub;
        currentText = sub.textContent.trim();
      }
    }

    const currentLinkPage = el.getAttribute('data-link-page') || '';
    const hasLink = Boolean(currentLinkPage);
    const curFontSize = el.style.fontSize || '';
    const isBold = el.style.fontWeight === 'bold' || el.style.fontWeight === '700' || el.style.fontWeight === '800';

    content.innerHTML = `
      <!-- BADGE DE TIPO DE PARTE -->
      <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
        <span class="inspector-part-badge">
          ${Icons.square(11)} ${partType}
        </span>
        <button class="page-action-btn" onclick="WireframeStudio.deselect()" title="Deseleccionar">✕</button>
      </div>

      <!-- TEXTO EN DIRECTO (EDITABLE 100%) -->
      <div class="inspector-group">
        <label class="inspector-label" style="display:flex; justify-content:space-between;">
          <span>Texto / Etiqueta</span>
          <span style="font-size:0.65rem; color:#6b7280;">Edición en vivo</span>
        </label>
        <textarea id="inspTextInput" class="inspector-textarea" rows="2" placeholder="Escribe el texto de esta parte...">${currentText}</textarea>
      </div>

      <!-- AÑADIR ELEMENTOS RÁPIDOS DENTRO O AL LADO -->
      <div class="inspector-group">
        <label class="inspector-label">Añadir Elementos</label>
        <div style="display:grid; grid-template-columns:repeat(3, 1fr); gap:4px;">
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('text')">+ Texto</button>
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('button')">+ Botón</button>
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('chip')">+ Chip</button>
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('image')">+ Imagen</button>
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('input')">+ Campo</button>
          <button class="inspector-btn" onclick="WireframeStudio.insertChildOrSibling('row-50')">+ 50/50</button>
        </div>
      </div>

      <!-- TIPOGRAFÍA Y TAMAÑO DE FUENTE -->
      <div class="inspector-group">
        <label class="inspector-label">Tamaño de Texto</label>
        <div class="inspector-segmented">
          <button class="inspector-segmented-btn ${curFontSize === '12px' ? 'active' : ''}" onclick="WireframeStudio.setSelectedFontSize('12px')">12px</button>
          <button class="inspector-segmented-btn ${curFontSize === '15px' ? 'active' : ''}" onclick="WireframeStudio.setSelectedFontSize('15px')">15px</button>
          <button class="inspector-segmented-btn ${curFontSize === '18px' ? 'active' : ''}" onclick="WireframeStudio.setSelectedFontSize('18px')">18px</button>
          <button class="inspector-segmented-btn ${curFontSize === '24px' ? 'active' : ''}" onclick="WireframeStudio.setSelectedFontSize('24px')">24px</button>
          <button class="inspector-segmented-btn ${curFontSize === '32px' ? 'active' : ''}" onclick="WireframeStudio.setSelectedFontSize('32px')">32px</button>
        </div>
      </div>

      <!-- FORMATO: NEGRITA Y ALINEACIÓN -->
      <div class="inspector-group">
        <label class="inspector-label">Alineación y Formato</label>
        <div style="display:flex; gap:4px;">
          <button class="inspector-btn ${isBold ? 'active' : ''}" onclick="WireframeStudio.toggleSelectedBold()" title="Alternar Negrita" style="font-weight:800; min-width:34px;">
            B
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.alignElement('left')" title="Alinear a la izquierda">
            ${Icons.alignLeft(13)} Izq
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.alignElement('center')" title="Alinear al centro">
            ${Icons.alignCenter(13)} Centro
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.alignElement('right')" title="Alinear a la derecha">
            ${Icons.alignRight(13)} Der
          </button>
        </div>
      </div>

      <!-- ENLACE A OTRA PANTALLA (INTER-PAGE LINK) -->
      <div class="inspector-group" style="background:#eff6ff; border:1px solid #bfdbfe; padding:8px; border-radius:4px;">
        <label class="inspector-label" style="display:flex; justify-content:space-between; align-items:center; color:#1e40af; margin-bottom:4px;">
          <span>Enlace a Otra Pantalla</span>
          ${hasLink ? `<span style="font-size:0.65rem; font-weight:800; background:#2563eb; color:#fff; padding:1px 5px; border-radius:2px;">ACTIVO</span>` : ''}
        </label>
        <select id="inspLinkSelect" class="inspector-select">
          <option value="">-- Sin enlace (Estático) --</option>
          ${this.pages.map(p => `
            <option value="${p.id}" ${p.id === currentLinkPage ? 'selected' : ''}>
              ${p.title}
            </option>
          `).join('')}
        </select>
        ${hasLink ? `
          <div style="display:flex; gap:6px; margin-top:6px;">
            <button class="inspector-btn" style="flex:1;" onclick="WireframeStudio.switchPage('${currentLinkPage}')">
              Ir a esa pantalla →
            </button>
            <button class="inspector-btn danger" onclick="WireframeStudio.removeElementLink()">
              Quitar
            </button>
          </div>
        ` : ''}
      </div>

      <!-- ANCHO / DIVISIÓN 50/50 -->
      <div class="inspector-group">
        <label class="inspector-label">Ancho / División</label>
        <div class="inspector-actions-row" style="margin-top:2px;">
          <button class="inspector-btn" onclick="WireframeStudio.setElementWidth('100%')">100%</button>
          <button class="inspector-btn" onclick="WireframeStudio.split5050()" title="Compartir fila en 2 columnas 50/50">
            ${Icons.split2(12)} 50/50
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementWidth('50%')">50%</button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementWidth('auto')">Auto</button>
        </div>
      </div>

      <!-- ALTURA (PARA CAJAS, IMÁGENES O PANELES) -->
      <div class="inspector-group">
        <label class="inspector-label">Altura Individual</label>
        <div class="inspector-actions-row" style="margin-top:2px;">
          <button class="inspector-btn" onclick="WireframeStudio.setElementHeight(-30)">- 30px</button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementHeight(30)">+ 30px</button>
          <button class="inspector-btn" onclick="WireframeStudio.resetElementHeight()">Auto</button>
        </div>
      </div>

      <!-- COLOR DE FONDO SÓLIDO (COLORES ESTÁTICOS PLANOS, SIN GRADIENTES) -->
      <div class="inspector-group">
        <label class="inspector-label">Color de Fondo Sólido</label>
        <div class="inspector-swatch-row" style="margin-bottom:6px;">
          <div class="inspector-swatch" style="background:#ffffff;" title="Blanco" onclick="WireframeStudio.setElementBg('#ffffff')"></div>
          <div class="inspector-swatch" style="background:#f4f5f7;" title="Gris Claro" onclick="WireframeStudio.setElementBg('#f4f5f7')"></div>
          <div class="inspector-swatch" style="background:#e5e7eb;" title="Gris Medio" onclick="WireframeStudio.setElementBg('#e5e7eb')"></div>
          <div class="inspector-swatch" style="background:#111827;" title="Negro" onclick="WireframeStudio.setElementBg('#111827')"></div>
          <div class="inspector-swatch" style="background:#2563eb;" title="Azul" onclick="WireframeStudio.setElementBg('#2563eb')"></div>
          <div class="inspector-swatch" style="background:transparent; border:1px dashed #9ca3af;" title="Transparente" onclick="WireframeStudio.setElementBg('transparent')"></div>
        </div>
      </div>

      <!-- BORDE -->
      <div class="inspector-group">
        <label class="inspector-label">Borde</label>
        <div style="display:flex; gap:4px;">
          <button class="inspector-btn" onclick="WireframeStudio.setElementBorder('2px solid var(--wf-border-color)')">Estándar</button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementBorder('1px solid var(--wf-border-color)')">Fino</button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementBorder('2px dashed #9ca3af')">Discontinuo</button>
          <button class="inspector-btn" onclick="WireframeStudio.setElementBorder('none')">Sin Borde</button>
        </div>
      </div>

      <!-- ACCIONES DE ESTA PARTE ESPECÍFICA -->
      <div style="border-top: 1px solid #e5e7eb; padding-top: 12px; margin-top: 12px;">
        <label class="inspector-label">Acciones de esta Parte</label>
        <div class="inspector-actions-row">
          <button class="inspector-btn" onclick="WireframeStudio.duplicateSelected()">
            ${Icons.copy(13)} Duplicar
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.moveSelected(-1)" title="Subir / Mover antes">
            ${Icons.arrowUp(13)} Subir
          </button>
          <button class="inspector-btn" onclick="WireframeStudio.moveSelected(1)" title="Bajar / Mover después">
            ${Icons.arrowDown(13)} Bajar
          </button>
        </div>
        <div style="margin-top: 6px;">
          <button class="inspector-btn danger" style="width: 100%;" onclick="WireframeStudio.deleteSelected()">
            ${Icons.trash(13)} Eliminar esta Parte
          </button>
        </div>
      </div>
    `;

    // Hook up Textarea live binding
    const textInput = document.getElementById('inspTextInput');
    if (textInput) {
      textInput.onfocus = () => this.recordSnapshot();
      textInput.oninput = (e) => {
        const val = e.target.value;
        if (textTarget) {
          if (textTarget.classList.contains('wf-x-label')) {
            textTarget.textContent = val;
          } else {
            textTarget.innerText = val;
          }
        } else if (tag === 'input' || tag === 'textarea') {
          el.value = val;
          el.placeholder = val;
        } else {
          el.innerText = val;
        }
        this.syncMultiPlatformIfActive();
      };
      textInput.onblur = () => {
        this.saveCurrentPageContent();
        this.autoSave();
      };
    }


    // Hook up link select
    const linkSelect = document.getElementById('inspLinkSelect');
    if (linkSelect) {
      linkSelect.onchange = (e) => {
        this.setElementLink(e.target.value);
      };
    }
  },

  setSelectedFontSize(size) {
    const el = this.state.selectedElement;
    if (!el) return;
    this.recordSnapshot();
    el.style.fontSize = size;
    const textTarget = el.querySelector('.wf-x-label, .wf-editable-text') || el;
    if (textTarget !== el) {
      textTarget.style.fontSize = size;
    }
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.renderInspector(el);
    this.showToast(`Tamaño: ${size}`);
  },

  toggleSelectedBold() {
    const el = this.state.selectedElement;
    if (!el) return;
    this.recordSnapshot();
    const isCurrentlyBold = el.style.fontWeight === 'bold' || el.style.fontWeight === '700' || el.style.fontWeight === '800';
    const newWeight = isCurrentlyBold ? 'normal' : '800';
    el.style.fontWeight = newWeight;
    const textTarget = el.querySelector('.wf-x-label, .wf-editable-text') || el;
    if (textTarget !== el) {
      textTarget.style.fontWeight = newWeight;
    }
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.renderInspector(el);
    this.showToast(isCurrentlyBold ? 'Texto Normal' : 'Texto en Negrita');
  },

  setElementBg(color) {
    const el = this.state.selectedElement;
    if (!el) return;
    this.recordSnapshot();
    el.style.backgroundColor = color;
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast(`Fondo: ${color}`);
  },

  setElementBorder(border) {
    const el = this.state.selectedElement;
    if (!el) return;
    this.recordSnapshot();
    el.style.border = border;
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Borde actualizado');
  },

  duplicateSelected() {
    if (!this.state.selectedElement) return;
    this.recordSnapshot();
    const el = this.state.selectedElement;
    const cloned = el.cloneNode(true);
    cloned.classList.remove('wf-element-selected');
    cloned.querySelectorAll('.wf-floating-toolbar, .wf-resize-handle').forEach(h => h.remove());

    if (el.parentElement) {
      el.parentElement.insertBefore(cloned, el.nextSibling);
      this.bindCanvasInteractions(this.dom.canvasContent);
      this.initSortables();
      this.selectElement(cloned);
      this.saveCurrentPageContent();
      this.autoSave();
      this.syncMultiPlatformIfActive();
      this.showToast('Elemento duplicado');
    }
  },

  deleteSelected() {
    if (!this.state.selectedElement) return;
    this.recordSnapshot();
    this.removeFloatingToolbar();
    const el = this.state.selectedElement;
    el.remove();
    this.state.selectedElement = null;
    this.renderInspector(null);
    this.initSortables();
    this.saveCurrentPageContent();
    this.autoSave();
    this.syncMultiPlatformIfActive();
    this.showToast('Parte eliminada');
  },

  moveSelected(direction) {
    const el = this.state.selectedElement;
    if (!el || !el.parentElement) return;

    this.recordSnapshot();

    if (direction === -1) {
      if (el.previousElementSibling) {
        el.parentElement.insertBefore(el, el.previousElementSibling);
      } else {
        el.parentElement.insertBefore(el, el.parentElement.firstElementChild);
      }
    } else if (direction === 1 && el.nextElementSibling) {
      el.parentElement.insertBefore(el, el.nextElementSibling.nextSibling);
    }

    this.saveCurrentPageContent();
    this.autoSave();
    this.renderFloatingToolbar(el);
    this.syncMultiPlatformIfActive();
  },

  // ==========================================================================
  // RESPONSIVE VIEWPORT CONTROLS
  // ==========================================================================
  setDevice(mode) {
    this.state.deviceMode = mode;

    document.querySelectorAll('.device-switcher .device-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.device === mode);
    });

    if (mode === 'multi') {
      this.dom.singleCanvasArea.style.display = 'none';
      this.dom.multiContainer.classList.add('active');
      this.renderMultiPlatformSync();
      return;
    }

    this.dom.singleCanvasArea.style.display = 'flex';
    this.dom.multiContainer.classList.remove('active');

    const targetWidth = this.deviceWidths[mode] || 1200;
    this.state.deviceWidth = targetWidth;

    this.applyCanvasWidth(targetWidth, mode);
  },

  applyCanvasWidth(width, modeName = null) {
    const wrapper = this.dom.canvasWrapper;
    wrapper.style.width = width + 'px';

    wrapper.classList.remove('preview-desktop', 'preview-tablet', 'preview-mobile');
    let effectiveMode = modeName;
    if (!effectiveMode || effectiveMode === 'fluid') {
      if (width > 1024) effectiveMode = 'desktop';
      else if (width > 560) effectiveMode = 'tablet';
      else effectiveMode = 'mobile';
    }

    wrapper.classList.add('preview-' + effectiveMode);
  },

  renderMultiPlatformSync() {
    const htmlContent = this.dom.canvasContent.innerHTML;
    const themeClass = this.dom.canvasContent.className;

    this.dom.multiContainer.innerHTML = `
      <div class="multi-device-col">
        <div class="canvas-device-wrapper preview-desktop" style="width: 680px; max-height: 720px; overflow-y: auto;">
          <div class="${themeClass}" style="font-size: 0.82em; padding: 18px;">
            ${htmlContent}
          </div>
        </div>
      </div>

      <div class="multi-device-col">
        <div class="canvas-device-wrapper preview-tablet" style="width: 460px; max-height: 720px; overflow-y: auto;">
          <div class="${themeClass}" style="font-size: 0.78em; padding: 14px;">
            ${htmlContent}
          </div>
        </div>
      </div>

      <div class="multi-device-col">
        <div class="canvas-device-wrapper preview-mobile device-frame-phone" style="width: 340px; max-height: 720px; overflow-y: auto;">
          <div class="${themeClass}" style="font-size: 0.75em; padding: 12px;">
            ${htmlContent}
          </div>
        </div>
      </div>
    `;

    this.dom.multiContainer.querySelectorAll('.wf-floating-toolbar, .wf-resize-handle').forEach(h => h.remove());
  },

  syncMultiPlatformIfActive() {
    if (this.state.deviceMode === 'multi') {
      this.renderMultiPlatformSync();
    }
  },

  // ==========================================================================
  // THEMES (CRISP vs SKETCHY)
  // ==========================================================================
  setTheme(themeName) {
    this.state.theme = themeName;
    const canvas = this.dom.canvasContent;

    canvas.classList.remove('theme-sketchy');
    if (themeName === 'sketchy') {
      canvas.classList.add('theme-sketchy');
    }

    document.querySelectorAll('.style-switcher .topbar-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.style === themeName);
    });

    this.syncMultiPlatformIfActive();
    this.showToast(`Estilo: ${themeName === 'crisp' ? 'Línea Pura' : 'Boceto a Mano'}`);
  },

  // ==========================================================================
  // CANVAS RESIZER HANDLE (EDGE DRAG)
  // ==========================================================================
  setupDragResizer() {
    const handle = document.getElementById('canvasResizeHandle');
    if (!handle) return;

    let startX = 0;
    let startWidth = 0;
    let isDragging = false;

    const onMouseMove = (e) => {
      if (!isDragging) return;
      const dx = (e.clientX - startX) * 2;
      const newWidth = Math.max(340, Math.min(1600, startWidth + dx));
      this.state.deviceWidth = newWidth;
      this.applyCanvasWidth(newWidth);
    };

    const onMouseUp = () => {
      if (!isDragging) return;
      isDragging = false;
      document.body.style.cursor = '';
      document.body.style.userSelect = '';
      if (this.dom.canvasWrapper) {
        this.dom.canvasWrapper.classList.remove('is-resizing');
      }
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };

    handle.onmousedown = (e) => {
      isDragging = true;
      startX = e.clientX;
      startWidth = this.dom.canvasWrapper ? this.dom.canvasWrapper.offsetWidth : 1200;
      document.body.style.cursor = 'ew-resize';
      document.body.style.userSelect = 'none';
      if (this.dom.canvasWrapper) {
        this.dom.canvasWrapper.classList.add('is-resizing');
      }
      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
      e.preventDefault();
      e.stopPropagation();
    };
  },

  // ==========================================================================
  // EVENT LISTENERS & SIDEBAR TABS
  // ==========================================================================
  setupEventListeners() {
    this.dom.canvasContent.onclick = (e) => {
      if (e.target === this.dom.canvasContent || e.target.classList.contains('wf-container')) {
        this.deselect();
      }
    };

    // Sidebar tab switching
    document.querySelectorAll('.sidebar-tab-btn').forEach(btn => {
      btn.onclick = () => {
        const tab = btn.dataset.tab;
        this.switchSidebarTab(tab);
      };
    });
  },

  showToast(msg) {
    if (!this.dom.toast) return;
    this.dom.toastText.textContent = msg;
    this.dom.toast.classList.add('show');
    clearTimeout(this.toastTimeout);
    this.toastTimeout = setTimeout(() => {
      this.dom.toast.classList.remove('show');
    }, 2200);
  }
};

document.addEventListener('DOMContentLoaded', () => {
  WireframeStudio.init();
});
