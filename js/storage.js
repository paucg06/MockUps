/* ==========================================================================
   WIREFRAME STORAGE & MULTI-PROJECT ENGINE
   Real-time localStorage persistence, multi-project CRUD, full project export/import.
   ========================================================================== */

const WireframeStorage = {
  KEY_PROJECTS: 'wf_studio_projects_v2',
  KEY_ACTIVE_ID: 'wf_studio_active_project_id_v2',

  // 1. Load All Projects from LocalStorage (or seed defaults)
  getAllProjects() {
    try {
      const raw = localStorage.getItem(this.KEY_PROJECTS);
      if (raw) {
        const parsed = JSON.parse(raw);
        if (Array.isArray(parsed) && parsed.length > 0) {
          return parsed;
        }
      }
    } catch (e) {
      console.warn('Error al cargar proyectos de localStorage:', e);
    }

    const defaults = this.getDefaultProjects();
    this.saveAllProjects(defaults);
    return defaults;
  },

  // 2. Save All Projects to LocalStorage
  saveAllProjects(projects) {
    try {
      localStorage.setItem(this.KEY_PROJECTS, JSON.stringify(projects));
      return true;
    } catch (e) {
      console.error('Error al guardar proyectos en localStorage:', e);
      return false;
    }
  },

  // 3. Get / Set Active Project ID
  getActiveProjectId(projects) {
    try {
      const savedId = localStorage.getItem(this.KEY_ACTIVE_ID);
      if (savedId && projects.some(p => p.id === savedId)) {
        return savedId;
      }
    } catch (e) {}
    return projects && projects.length > 0 ? projects[0].id : null;
  },

  setActiveProjectId(projectId) {
    try {
      localStorage.setItem(this.KEY_ACTIVE_ID, projectId);
    } catch (e) {}
  },

  // 4. Save Single Project (Auto-save)
  saveProject(project) {
    const projects = this.getAllProjects();
    const index = projects.findIndex(p => p.id === project.id);
    project.updatedAt = Date.now();

    if (index !== -1) {
      projects[index] = project;
    } else {
      projects.push(project);
    }

    this.saveAllProjects(projects);
  },

  // Template Suggestions Catalog (Minimalist, No Emojis)
  TEMPLATE_SUGGESTIONS: [
    {
      key: 'blank',
      title: 'Lienzo en Blanco',
      desc: 'Pantalla limpia vacía para diseñar desde cero arrastrando bloques.',
      screens: 1,
      icon: 'square'
    },
    {
      key: 'ecommerce',
      title: 'Tienda E-Commerce',
      desc: '3 pantallas: Catálogo con buscador, Ficha detallada y Carrito con checkout.',
      screens: 3,
      icon: 'shoppingCart'
    },
    {
      key: 'youtube',
      title: 'Gestor de Vídeos (YouTube)',
      desc: '3 pantallas: Feed principal con buscador, Reproductor y Mi Canal.',
      screens: 3,
      icon: 'video'
    },
    {
      key: 'gaming',
      title: 'Videojuegos (HUD & Gaming)',
      desc: '3 pantallas: Menú Principal, Pantalla de Juego HUD con barras e Inventario.',
      screens: 3,
      icon: 'gamepad'
    },
    {
      key: 'cards',
      title: 'Colección de Cartas (TCG)',
      desc: '2 pantallas: Galería de Baraja con estadísticas y Tablero de Duelo.',
      screens: 2,
      icon: 'layers'
    },
    {
      key: 'saas',
      title: 'Landing Page & SaaS',
      desc: '2 pantallas: Portada Hero con características y Tabla de Planes/Precios.',
      screens: 2,
      icon: 'layout'
    },
    {
      key: 'mobile',
      title: 'App Móvil',
      desc: '2 pantallas: Feed Móvil con barra inferior y Perfil de Usuario.',
      screens: 2,
      icon: 'smartphone'
    }
  ],

  // 5. Create Project From Template
  createProjectFromTemplate(name = 'Nuevo Proyecto', templateKey = 'blank') {
    const projects = this.getAllProjects();
    const newId = 'proj_' + Date.now();
    let initialPages = [];

    if (templateKey === 'ecommerce') {
      const defaultEcommerce = this.getDefaultProjects().find(p => p.id === 'proj_ecommerce');
      if (defaultEcommerce && defaultEcommerce.pages) {
        initialPages = JSON.parse(JSON.stringify(defaultEcommerce.pages));
      }
    } else if (templateKey === 'youtube') {
      initialPages = [
        {
          id: 'page_yt_home',
          title: '1. Portada y Destacados',
          html: WireframeTemplates.youtubeClassic ? WireframeTemplates.youtubeClassic.html : '<div class="wf-container"><h3>YouTube Home</h3></div>'
        },
        {
          id: 'page_yt_player',
          title: '2. Reproductor y Comentarios',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_yt_home" data-link-name="1. Portada y Destacados" style="font-weight:800;">
                  ← Volver al Feed de Vídeos
                </button>
                <div style="font-weight:800; font-size:0.9rem;" class="wf-editable-text" contenteditable="true">Reproductor de Vídeo</div>
                <button class="wf-btn wf-btn-sm" data-link-page="page_yt_channel" data-link-name="3. Canal y Suscripciones">
                  Ver Canal →
                </button>
              </div>
              <div class="wf-draggable-block wf-sort-zone wf-row-split">
                <div class="wf-draggable-block wf-col-main" style="flex:7;">
                  <div class="wf-placeholder-x" style="height:320px; margin-bottom:12px;">
                    <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                    <span class="wf-x-label">Reproductor de Vídeo (1080p 60fps)</span>
                  </div>
                  <h2 style="font-size:1.25rem; font-weight:800; margin-bottom:8px;" class="wf-editable-text" contenteditable="true">Cómo Crear Wireframes Simples y Claros</h2>
                  <div class="wf-flex-between" style="border-bottom:1px solid #ddd; padding-bottom:10px; margin-bottom:14px;">
                    <div style="font-size:0.8rem; color:#666;">1.2M visualizaciones • Hace 3 días</div>
                    <div style="display:flex; gap:8px;">
                      <button class="wf-btn wf-btn-sm">Me gusta</button>
                      <button class="wf-btn wf-btn-sm">Compartir</button>
                    </div>
                  </div>
                  <div class="wf-box" style="padding:14px;">
                    <h4 style="font-weight:800; margin-bottom:10px;">Comentarios (48)</h4>
                    ${WireframeComponents.renderTextLines(6)}
                  </div>
                </div>
                <div class="wf-draggable-block wf-col-side" style="flex:3;">
                  <h4 style="font-weight:800; font-size:0.85rem; margin-bottom:8px;">Vídeos Recomendados</h4>
                  <div class="wf-sort-zone" style="display:flex; flex-direction:column; gap:8px;">
                    ${[1, 2, 3, 4].map(n => `
                      <div class="wf-draggable-block wf-box" style="padding:8px; display:flex; gap:8px;">
                        <div class="wf-placeholder-x" style="width:70px; height:50px;"><svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg></div>
                        <div style="font-size:0.75rem; font-weight:700;">Vídeo Recomendado #${n}</div>
                      </div>
                    `).join('')}
                  </div>
                </div>
              </div>
            </div>
          `
        },
        {
          id: 'page_yt_channel',
          title: '3. Canal y Suscripciones',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_yt_home" data-link-name="1. Portada y Destacados" style="font-weight:800;">
                  ← Volver al Feed
                </button>
                <div style="font-weight:800; font-size:0.9rem;" class="wf-editable-text" contenteditable="true">Canal Oficial</div>
                <button class="wf-btn wf-btn-sm wf-btn-primary" data-link-page="page_yt_player" data-link-name="2. Reproductor">
                  Último Vídeo →
                </button>
              </div>
              <div class="wf-draggable-block" style="margin-bottom:14px;">
                <div class="wf-placeholder-x" style="height:140px;">
                  <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                  <span class="wf-x-label">Banner de Cabecera del Canal</span>
                </div>
              </div>
              <div class="wf-draggable-block wf-panel">
                <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
                  <div>
                    <h2 style="font-weight:900; font-size:1.2rem;" class="wf-editable-text" contenteditable="true">Nombre del Canal</h2>
                    <div style="font-size:0.8rem; color:#666;">240K Suscriptores • 180 Vídeos</div>
                  </div>
                  <button class="wf-btn wf-btn-primary" style="font-weight:800;">Suscribirme</button>
                </div>
              </div>
            </div>
          `
        }
      ];
    } else if (templateKey === 'gaming') {
      initialPages = [
        {
          id: 'page_game_menu',
          title: '1. Menú Principal',
          html: `
            <div class="wf-container wf-sort-zone" style="text-align:center; padding: 40px 20px;">
              <div class="wf-draggable-block" style="margin-bottom:24px;">
                <h1 style="font-size:2.4rem; font-weight:900; letter-spacing:2px;" class="wf-editable-text" contenteditable="true">CYBER ODYSSEY 2026</h1>
                <div style="font-size:0.85rem; color:#666;" class="wf-editable-text" contenteditable="true">Press Any Key or Click to Start</div>
              </div>
              <div class="wf-draggable-block" style="max-width:320px; margin: 0 auto; display:flex; flex-direction:column; gap:12px;">
                <button class="wf-btn wf-btn-primary" data-link-page="page_game_hud" data-link-name="2. Pantalla de Juego HUD" style="padding:12px; font-weight:900; font-size:1rem;">
                  ▶ JUGAR PARTIDA
                </button>
                <button class="wf-btn" data-link-page="page_game_inv" data-link-name="3. Inventario y Casillas" style="padding:10px; font-weight:800;">
                  INVENTARIO & EQUIPO
                </button>
                <button class="wf-btn" style="padding:10px; font-weight:700;">OPCIONES</button>
                <button class="wf-btn" style="padding:10px; font-weight:700;">SALIR AL ESCRITORIO</button>
              </div>
            </div>
          `
        },
        {
          id: 'page_game_hud',
          title: '2. Pantalla de Juego HUD',
          html: WireframeTemplates.videoGameHUD ? WireframeTemplates.videoGameHUD.html : '<div class="wf-container"><h3>Game HUD</h3></div>'
        },
        {
          id: 'page_game_inv',
          title: '3. Inventario y Casillas',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_game_hud" data-link-name="2. Pantalla de Juego HUD" style="font-weight:800;">
                  ← Volver al Juego
                </button>
                <div style="font-weight:900; font-size:1.05rem;" class="wf-editable-text" contenteditable="true">Inventario de Objetos y Armas</div>
                <button class="wf-btn wf-btn-sm" data-link-page="page_game_menu" data-link-name="1. Menú Principal">
                  Menú Principal
                </button>
              </div>
              ${WireframeComponents.library['inventory-grid'] ? WireframeComponents.library['inventory-grid'].render() : ''}
            </div>
          `
        }
      ];
    } else if (templateKey === 'cards') {
      initialPages = [
        {
          id: 'page_cards_deck',
          title: '1. Baraja y Cartas',
          html: WireframeTemplates.cardCollection ? WireframeTemplates.cardCollection.html : '<div class="wf-container"><h3>Cartas</h3></div>'
        },
        {
          id: 'page_cards_battle',
          title: '2. Tablero de Batalla',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_cards_deck" data-link-name="1. Baraja y Cartas" style="font-weight:800;">
                  ← Ver Colección
                </button>
                <div style="font-weight:900; font-size:1.05rem;" class="wf-editable-text" contenteditable="true">Tablero de Duelo TCG</div>
                <div style="font-size:0.8rem; font-weight:800;">Turno 4</div>
              </div>
              <div class="wf-draggable-block wf-box" style="padding:16px; margin-bottom:14px; text-align:center;">
                <div style="font-weight:800; margin-bottom:6px;">Zona Enemiga (HP: 20/20)</div>
                <div class="wf-sort-zone wf-grid-4">
                  ${[1, 2, 3, 4].map(n => `<div class="wf-draggable-block wf-box" style="height:100px; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:800;">Carta #${n}</div>`).join('')}
                </div>
              </div>
              <div class="wf-draggable-block wf-box" style="padding:16px; text-align:center;">
                <div style="font-weight:800; margin-bottom:6px;">Tu Zona de Batalla (HP: 18/20)</div>
                <div class="wf-sort-zone wf-grid-4">
                  ${[1, 2, 3, 4].map(n => `<div class="wf-draggable-block wf-box" style="height:100px; display:flex; align-items:center; justify-content:center; font-size:0.75rem; font-weight:800;">Tu Monstruo #${n}</div>`).join('')}
                </div>
              </div>
            </div>
          `
        }
      ];
    } else if (templateKey === 'saas') {
      initialPages = [
        {
          id: 'page_saas_home',
          title: '1. Portada Principal',
          html: WireframeTemplates.saasLandingPage ? WireframeTemplates.saasLandingPage.html : '<div class="wf-container"><h3>Landing</h3></div>'
        },
        {
          id: 'page_saas_pricing',
          title: '2. Planes y Contacto',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:14px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_saas_home" data-link-name="1. Portada Principal" style="font-weight:800;">
                  ← Volver al Inicio
                </button>
                <div style="font-weight:900; font-size:1.05rem;" class="wf-editable-text" contenteditable="true">Planes y Precios Transparentes</div>
                <button class="wf-btn wf-btn-sm wf-btn-primary">Registrarse Gratis</button>
              </div>
              <div class="wf-draggable-block wf-sort-zone wf-grid-3" style="margin-bottom:20px;">
                ${['Starter ($0)', 'Pro ($29/mes)', 'Enterprise ($99/mes)'].map(plan => `
                  <div class="wf-draggable-block wf-box" style="padding:16px; text-align:center;">
                    <h3 style="font-weight:900; font-size:1.15rem; margin-bottom:8px;" class="wf-editable-text" contenteditable="true">${plan}</h3>
                    <div style="margin-bottom:14px;">${WireframeComponents.renderTextLines(4)}</div>
                    <button class="wf-btn wf-btn-block wf-btn-primary">Elegir Plan</button>
                  </div>
                `).join('')}
              </div>
            </div>
          `
        }
      ];
    } else if (templateKey === 'mobile') {
      initialPages = [
        {
          id: 'page_mobile_feed',
          title: '1. Feed Móvil',
          html: `
            <div class="wf-container wf-sort-zone" style="max-width:390px; margin:0 auto;">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <span style="font-weight:900; font-size:1.05rem;">APP MÓVIL</span>
                <button class="wf-btn wf-btn-sm" data-link-page="page_mobile_profile" data-link-name="2. Perfil">Perfil →</button>
              </div>
              <div class="wf-draggable-block" style="margin-bottom:14px;">
                ${WireframeComponents.renderPlaceholderX('Contenido Destacado Móvil', 180)}
              </div>
              <div class="wf-draggable-block wf-box" style="padding:12px; margin-bottom:14px;">
                <h4 style="font-weight:800; margin-bottom:6px;">Noticias Recientes</h4>
                ${WireframeComponents.renderTextLines(4)}
              </div>
              ${WireframeComponents.library['bottom-nav'] ? WireframeComponents.library['bottom-nav'].render() : ''}
            </div>
          `
        },
        {
          id: 'page_mobile_profile',
          title: '2. Perfil de Usuario',
          html: `
            <div class="wf-container wf-sort-zone" style="max-width:390px; margin:0 auto;">
              <div class="wf-draggable-block wf-box" style="padding:10px 14px; margin-bottom:10px; display:flex; justify-content:space-between; align-items:center;">
                <button class="wf-btn wf-btn-sm" data-link-page="page_mobile_feed" data-link-name="1. Feed Móvil">← Feed</button>
                <span style="font-weight:900; font-size:1rem;">Mi Cuenta</span>
                <span style="font-size:0.8rem; font-weight:700;">Ajustes</span>
              </div>
              <div class="wf-draggable-block wf-box" style="padding:16px; text-align:center; margin-bottom:14px;">
                ${WireframeComponents.renderCircle('Avatar', 64)}
                <div style="font-weight:900; font-size:1.05rem; margin-top:8px;">Alex Morgan</div>
                <div style="font-size:0.75rem; color:#666; margin-bottom:10px;">@alex_ui • Diseñador UI/UX</div>
                <button class="wf-btn wf-btn-sm wf-btn-block">Editar Perfil</button>
              </div>
              ${WireframeComponents.library['bottom-nav'] ? WireframeComponents.library['bottom-nav'].render() : ''}
            </div>
          `
        }
      ];
    } else {
      // Default: Blank Canvas
      initialPages = [
        {
          id: 'page_1',
          title: 'Pantalla 1',
          html: `
            <div class="wf-container wf-sort-zone">
              <div class="wf-draggable-block wf-box" style="padding: 14px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                <div style="font-weight: 800; font-size: 1.15rem;" class="wf-editable-text" contenteditable="true">${name}</div>
                <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
                  <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Inicio</button>
                  <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Catálogo</button>
                  <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true">Contacto</button>
                </div>
              </div>
              <div class="wf-draggable-block" style="margin-bottom: 20px;">
                <div class="wf-placeholder-x" style="height: 160px;">
                  <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                  <span class="wf-x-label wf-editable-text" contenteditable="true">Cabecera Principal (Arrastra componentes aquí)</span>
                </div>
              </div>
              <div class="wf-draggable-block wf-sort-zone wf-row-50-50">
                <div class="wf-draggable-block wf-box" style="padding: 14px;">
                  <h3 style="font-weight: 800; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true">Columna Izquierda</h3>
                  <div class="wf-text-lines">
                    <div class="wf-text-line thick w-100"></div>
                    <div class="wf-text-line thick w-80"></div>
                    <div class="wf-text-line thick w-90"></div>
                  </div>
                </div>
                <div class="wf-draggable-block wf-box" style="padding: 14px;">
                  <h3 style="font-weight: 800; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true">Columna Derecha</h3>
                  <div class="wf-text-lines">
                    <div class="wf-text-line thick w-100"></div>
                    <div class="wf-text-line thick w-70"></div>
                    <div class="wf-text-line thick w-85"></div>
                  </div>
                </div>
              </div>
            </div>
          `
        }
      ];
    }

    const newProject = {
      id: newId,
      name: name,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      activePageId: initialPages[0].id,
      pages: initialPages
    };

    projects.push(newProject);
    this.saveAllProjects(projects);
    this.setActiveProjectId(newId);
    return newProject;
  },

  // Backward compatible alias
  createProject(name = 'Nuevo Proyecto', starterTemplateId = null) {
    return this.createProjectFromTemplate(name, starterTemplateId || 'blank');
  },

  // 6. Duplicate Project
  duplicateProject(projectId) {
    const projects = this.getAllProjects();
    const source = projects.find(p => p.id === projectId);
    if (!source) return null;

    const newId = 'proj_' + Date.now();
    const cloned = JSON.parse(JSON.stringify(source));
    cloned.id = newId;
    cloned.name = `${source.name} (Copia)`;
    cloned.createdAt = Date.now();
    cloned.updatedAt = Date.now();

    projects.push(cloned);
    this.saveAllProjects(projects);
    return cloned;
  },

  // 7. Delete Project
  deleteProject(projectId) {
    let projects = this.getAllProjects();
    if (projects.length <= 1) {
      alert('Debes conservar al menos un proyecto.');
      return false;
    }

    projects = projects.filter(p => p.id !== projectId);
    this.saveAllProjects(projects);

    const activeId = this.getActiveProjectId(projects);
    if (activeId === projectId) {
      this.setActiveProjectId(projects[0].id);
    }
    return true;
  },

  // 8. Full Project File Export (.wireframe / JSON)
  exportProjectFile(project) {
    const bundle = {
      app: 'WireframeStudio',
      formatVersion: '2.0',
      exportedAt: new Date().toISOString(),
      project: project
    };

    const filename = `${project.name.toLowerCase().replace(/[^a-z0-9]/gi, '_')}.wireframe`;
    const dataStr = 'data:text/json;charset=utf-8,' + encodeURIComponent(JSON.stringify(bundle, null, 2));
    const link = document.createElement('a');
    link.setAttribute('href', dataStr);
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },

  // 9. Full Project File Import (.wireframe / JSON)
  importProjectFile(jsonString) {
    try {
      const parsed = JSON.parse(jsonString);
      const projData = parsed.project || parsed;

      if (!projData.name || !Array.isArray(projData.pages) || projData.pages.length === 0) {
        throw new Error('El archivo no tiene la estructura de páginas válida de Wireframe Studio.');
      }

      // Assign new ID to avoid collisions
      const importedProject = {
        id: 'proj_' + Date.now(),
        name: projData.name + (parsed.project ? '' : ' (Importado)'),
        createdAt: Date.now(),
        updatedAt: Date.now(),
        activePageId: projData.activePageId || projData.pages[0].id,
        pages: projData.pages
      };

      const projects = this.getAllProjects();
      projects.push(importedProject);
      this.saveAllProjects(projects);
      this.setActiveProjectId(importedProject.id);

      return importedProject;
    } catch (e) {
      alert('Error importando el archivo: ' + e.message);
      return null;
    }
  },

  // 10. Default Starter Projects (Seeded on first run)
  getDefaultProjects() {
    return [
      {
        id: 'proj_ecommerce',
        name: 'Tienda E-Commerce Completa',
        createdAt: Date.now() - 3600000,
        updatedAt: Date.now(),
        activePageId: 'page_tienda',
        pages: [
          {
            id: 'page_tienda',
            title: '1. Catálogo / Inicio',
            html: `
              <div class="wf-container wf-sort-zone">
                <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px;">
                  <div class="wf-sort-zone wf-flex-between" style="margin-bottom: 10px;">
                    <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 10px;">
                      <span style="font-weight: 800; font-size: 0.85rem; border: 1.5px solid #111; padding: 2px 6px;">MENU</span>
                      <span style="font-weight: 900; font-size: 1.05rem; border: 1.5px solid #111; padding: 2px 8px;" class="wf-editable-text" contenteditable="true">TIENDA STORE</span>
                    </div>
                    <div class="wf-draggable-block wf-search-group" style="flex: 1; max-width: 420px; margin: 0 16px;">
                      <input type="text" class="wf-input" placeholder="Buscar productos..." />
                      <button class="wf-btn">Buscar</button>
                    </div>
                    <div class="wf-draggable-block">
                      <button class="wf-btn" data-link-page="page_carrito" data-link-name="3. Carrito y Envío" style="font-weight: 800;">
                        Carrito (3) →
                      </button>
                    </div>
                  </div>
                  <div class="wf-sort-zone wf-flex-wrap" style="gap: 6px;">
                    <span class="wf-draggable-block wf-chip active wf-editable-text" contenteditable="true">Todos</span>
                    <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Electrónica</span>
                    <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Hogar</span>
                    <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Ofertas</span>
                  </div>
                </div>

                <div class="wf-draggable-block" style="margin-bottom: 20px;">
                  <div class="wf-placeholder-x" style="height: 130px;">
                    <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                    <span class="wf-x-label wf-editable-text" contenteditable="true">Banner Promocional - Hasta 50% Dto.</span>
                  </div>
                </div>

                <div class="wf-draggable-block" style="margin-bottom: 24px;">
                  <div class="wf-flex-between" style="margin-bottom: 12px;">
                    <h3 style="font-size: 1.05rem; font-weight: 800;" class="wf-editable-text" contenteditable="true">Productos Destacados</h3>
                    <span style="font-size: 0.8rem; color: #666;">Haz clic en un producto para ver su ficha</span>
                  </div>
                  <div class="wf-sort-zone wf-grid-4">
                    <div class="wf-draggable-block wf-product-card" data-link-page="page_detalle" data-link-name="2. Detalle Producto">
                      <div class="wf-placeholder-x" style="height: 120px; margin-bottom: 8px;">
                        <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                        <span class="wf-x-label">Smart Model Pro X</span>
                      </div>
                      <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">Smart Model Pro X</div>
                      <div style="font-weight: 900; font-size: 0.95rem; margin-bottom: 8px;">Rs. 24,999</div>
                      <button class="wf-btn wf-btn-sm wf-btn-primary wf-btn-block" data-link-page="page_detalle" data-link-name="2. Detalle Producto">
                        Ver Ficha de Producto →
                      </button>
                    </div>

                    <div class="wf-draggable-block wf-product-card">
                      <div class="wf-placeholder-x" style="height: 120px; margin-bottom: 8px;">
                        <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                        <span class="wf-x-label">Auriculares ANC</span>
                      </div>
                      <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">Auriculares ANC Wireless</div>
                      <div style="font-weight: 900; font-size: 0.95rem; margin-bottom: 8px;">Rs. 3,499</div>
                      <button class="wf-btn wf-btn-sm wf-btn-block" data-link-page="page_carrito" data-link-name="3. Carrito y Envío">
                        Añadir al Carrito
                      </button>
                    </div>

                    <div class="wf-draggable-block wf-product-card">
                      <div class="wf-placeholder-x" style="height: 120px; margin-bottom: 8px;">
                        <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                        <span class="wf-x-label">Smartwatch Pulse</span>
                      </div>
                      <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">Smartwatch Pulse Band</div>
                      <div style="font-weight: 900; font-size: 0.95rem; margin-bottom: 8px;">Rs. 1,999</div>
                      <button class="wf-btn wf-btn-sm wf-btn-block" data-link-page="page_carrito" data-link-name="3. Carrito y Envío">
                        Añadir al Carrito
                      </button>
                    </div>

                    <div class="wf-draggable-block wf-product-card">
                      <div class="wf-placeholder-x" style="height: 120px; margin-bottom: 8px;">
                        <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                        <span class="wf-x-label">Altavoz 30W</span>
                      </div>
                      <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">Altavoz Portátil 30W</div>
                      <div style="font-weight: 900; font-size: 0.95rem; margin-bottom: 8px;">Rs. 1,299</div>
                      <button class="wf-btn wf-btn-sm wf-btn-block" data-link-page="page_carrito" data-link-name="3. Carrito y Envío">
                        Añadir al Carrito
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `
          },
          {
            id: 'page_detalle',
            title: '2. Detalle de Producto',
            html: `
              <div class="wf-container wf-sort-zone">
                <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                  <button class="wf-btn wf-btn-sm" data-link-page="page_tienda" data-link-name="1. Catálogo / Inicio" style="font-weight: 800;">
                    ← Volver al Catálogo
                  </button>
                  <div style="font-size: 0.8rem; font-weight: 700; color: #666;" class="wf-editable-text" contenteditable="true">
                    Inicio > Electrónica > Smart Model Pro X
                  </div>
                  <button class="wf-btn wf-btn-sm" data-link-page="page_carrito" data-link-name="3. Carrito y Envío" style="font-weight: 800;">
                    Ver Carrito (3)
                  </button>
                </div>

                <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 20px;">
                  <div class="wf-draggable-block wf-col-main" style="flex: 5;">
                    <div class="wf-placeholder-x" style="height: 300px; margin-bottom: 12px;">
                      <svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg>
                      <span class="wf-x-label">Fotografía Detallada del Producto</span>
                    </div>
                    <div class="wf-sort-zone wf-grid-4">
                      <div class="wf-draggable-block wf-placeholder-x" style="height: 65px;"><svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg></div>
                      <div class="wf-draggable-block wf-placeholder-x" style="height: 65px;"><svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg></div>
                      <div class="wf-draggable-block wf-placeholder-x" style="height: 65px;"><svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg></div>
                      <div class="wf-draggable-block wf-placeholder-x" style="height: 65px;"><svg><line x1="0" y1="0" x2="100%" y2="100%"/><line x1="100%" y1="0" x2="0" y2="100%"/></svg></div>
                    </div>
                  </div>

                  <div class="wf-draggable-block wf-col-side" style="flex: 5;">
                    <div class="wf-box" style="padding: 16px;">
                      <span style="font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; padding: 2px 6px;">DISPONIBLE</span>
                      <h2 style="font-size: 1.35rem; font-weight: 900; margin: 8px 0 6px 0;" class="wf-editable-text" contenteditable="true">
                        Smart Model Pro X (128GB)
                      </h2>
                      <div style="font-size: 1.5rem; font-weight: 900; margin-bottom: 14px;">Rs. 24,999</div>

                      <div style="display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px;">
                        <button class="wf-draggable-block wf-btn wf-btn-primary" data-link-page="page_carrito" data-link-name="3. Carrito y Envío" style="padding: 10px 16px; font-weight: 800;">
                          Comprar Ahora (Ir al Carrito) →
                        </button>
                        <button class="wf-draggable-block wf-btn" data-link-page="page_carrito" data-link-name="3. Carrito y Envío" style="font-weight: 700;">
                          + Añadir a la Cesta
                        </button>
                      </div>

                      <div class="wf-text-lines">
                        <div class="wf-text-line thick w-100"></div>
                        <div class="wf-text-line thick w-80"></div>
                        <div class="wf-text-line thick w-90"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            `
          },
          {
            id: 'page_carrito',
            title: '3. Carrito y Envío',
            html: `
              <div class="wf-container wf-sort-zone">
                <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
                  <button class="wf-btn wf-btn-sm" data-link-page="page_tienda" data-link-name="1. Catálogo / Inicio" style="font-weight: 800;">
                    ← Seguir Comprando
                  </button>
                  <div style="font-weight: 800; font-size: 1rem;" class="wf-editable-text" contenteditable="true">
                    Cesta de Compra & Tramitación
                  </div>
                  <button class="wf-btn wf-btn-sm" data-link-page="page_detalle" data-link-name="2. Detalle Producto">
                    Volver a la Ficha
                  </button>
                </div>

                <div class="wf-draggable-block" style="margin-bottom: 20px;">
                  <div class="wf-tracking-stepper">
                    <div class="wf-step-item completed">
                      <div class="wf-step-circle">1</div>
                      <span class="wf-step-label">1. Cesta (3)</span>
                    </div>
                    <div class="wf-step-line completed"></div>
                    <div class="wf-step-item active">
                      <div class="wf-step-circle">2</div>
                      <span class="wf-step-label">2. Envío</span>
                    </div>
                    <div class="wf-step-line"></div>
                    <div class="wf-step-item">
                      <div class="wf-step-circle">3</div>
                      <span class="wf-step-label">3. Confirmación</span>
                    </div>
                  </div>
                </div>

                <div class="wf-draggable-block wf-sort-zone wf-row-split">
                  <div class="wf-draggable-block wf-col-main" style="flex: 7;">
                    <div class="wf-box" style="padding: 14px;">
                      <h4 style="font-weight: 800; margin-bottom: 10px;" class="wf-editable-text" contenteditable="true">Artículos en Cesta</h4>
                      <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px solid #ddd;">
                        <div>
                          <div style="font-weight: 800; font-size: 0.88rem;">Smart Model Pro X</div>
                          <div style="font-size: 0.75rem; color: #666;">Cantidad: 1</div>
                        </div>
                        <div style="font-weight: 900;">Rs. 24,999</div>
                      </div>
                    </div>
                  </div>

                  <div class="wf-draggable-block wf-col-side" style="flex: 3;">
                    <div class="wf-box" style="padding: 16px;">
                      <h4 style="font-weight: 800; margin-bottom: 12px;">Total: Rs. 24,999</h4>
                      <button class="wf-draggable-block wf-btn wf-btn-primary wf-btn-block" data-link-page="page_tienda" data-link-name="1. Catálogo / Inicio" style="padding: 10px; font-weight: 900;">
                        Confirmar y Finalizar →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            `
          }
        ]
      },
      {
        id: 'proj_video',
        name: 'Gestor de Vídeos (YouTube)',
        createdAt: Date.now() - 7200000,
        updatedAt: Date.now() - 3600000,
        activePageId: 'page_yt_home',
        pages: [
          {
            id: 'page_yt_home',
            title: '1. Portada y Destacados',
            html: WireframeTemplates.youtubeClassic ? WireframeTemplates.youtubeClassic.html : '<div class="wf-container"><h3>YouTube Home</h3></div>'
          }
        ]
      },
      {
        id: 'proj_gaming',
        name: 'Videojuego (HUD & Inventario)',
        createdAt: Date.now() - 10800000,
        updatedAt: Date.now() - 7200000,
        activePageId: 'page_game_hud',
        pages: [
          {
            id: 'page_game_hud',
            title: '1. Pantalla HUD',
            html: WireframeTemplates.videoGameHUD ? WireframeTemplates.videoGameHUD.html : '<div class="wf-container"><h3>Game HUD</h3></div>'
          }
        ]
      }
    ];
  }
};
