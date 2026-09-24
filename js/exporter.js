/* ==========================================================================
   EXPORTER MODULE - WIREFRAME STUDIO
   Supports PNG (via html2canvas), SVG, JSON Project Save/Load, and Print
   ========================================================================== */

const WireframeExporter = {
  // 1. Export as High-Resolution PNG
  async exportPNG(elementId = 'wireframeCanvas', filename = 'wireframe-mockup.png') {
    const element = document.getElementById(elementId);
    if (!element) {
      alert('Error: No se encontró el lienzo para exportar.');
      return;
    }

    try {
      if (typeof html2canvas === 'undefined') {
        alert('Cargando motor de renderizado...');
        return;
      }

      // Deseleccionar temporalmente elementos activos
      const selected = element.querySelector('.wf-element-selected');
      if (selected) selected.classList.remove('wf-element-selected');

      const canvas = await html2canvas(element, {
        scale: 2, // 2x high resolution
        backgroundColor: '#ffffff',
        useCORS: true,
        logging: false
      });

      // Restaurar selección si había
      if (selected) selected.classList.add('wf-element-selected');

      const imageURI = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = filename;
      link.href = imageURI;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      WireframeStudio.showToast('Wireframe exportado como PNG');
    } catch (err) {
      console.error('Error exportando PNG:', err);
      alert('Hubo un error al generar la imagen PNG: ' + err.message);
    }
  },

  // 2. Export as Scalable Vector Graphics (SVG)
  exportSVG(elementId = 'wireframeCanvas', filename = 'wireframe-mockup.svg') {
    const element = document.getElementById(elementId);
    if (!element) return;

    try {
      const cloned = element.cloneNode(true);
      // Quitar clases interactivas
      const selected = cloned.querySelector('.wf-element-selected');
      if (selected) selected.classList.remove('wf-element-selected');

      const width = element.offsetWidth || 1200;
      const height = element.offsetHeight || 800;

      // Generar SVG con foreignObject para preservar fidelidad CSS
      const svgString = `
        <svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}">
          <foreignObject width="100%" height="100%">
            <div xmlns="http://www.w3.org/1999/xhtml" style="background:#fff; font-family: -apple-system, sans-serif;">
              ${cloned.outerHTML}
            </div>
          </foreignObject>
        </svg>
      `;

      const blob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = filename;
      link.href = url;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      URL.revokeObjectURL(url);

      WireframeStudio.showToast('Wireframe exportado como SVG');
    } catch (err) {
      console.error('Error exportando SVG:', err);
      alert('Error exportando a SVG: ' + err.message);
    }
  },

  // 3. Save Project as JSON
  saveJSON(projectData, filename = 'wireframe-project.json') {
    try {
      const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(projectData, null, 2));
      const link = document.createElement('a');
      link.setAttribute('href', dataStr);
      link.setAttribute('download', filename);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      WireframeStudio.showToast('Proyecto guardado en JSON');
    } catch (err) {
      console.error('Error guardando JSON:', err);
      alert('Error guardando proyecto: ' + err.message);
    }
  },

  // 4. Import Project from JSON File
  importJSON(callback) {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';

    input.onchange = (e) => {
      const file = e.target.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (event) => {
        try {
          const parsed = JSON.parse(event.target.result);
          callback(parsed);
          WireframeStudio.showToast('Proyecto importado con éxito');
        } catch (err) {
          alert('El archivo seleccionado no es un JSON de Wireframe válido.');
        }
      };
      reader.readAsText(file);
    };

    input.click();
  },

  // 5. Interactive Multi-Page PDF with clickable inter-page links
  async exportInteractivePDF() {
    const jspdfModule = window.jspdf || window;
    if (!jspdfModule || !jspdfModule.jsPDF) {
      alert('Cargando motor PDF...');
      return;
    }

    const { jsPDF } = jspdfModule;
    const pages = WireframeStudio.pages;
    if (!pages || pages.length === 0) {
      alert('No hay páginas para exportar.');
      return;
    }

    WireframeStudio.saveCurrentPageContent();
    const originalActivePageId = WireframeStudio.activePageId;

    WireframeStudio.showToast('Generando PDF interactivo con enlaces entre páginas...');

    try {
      const offscreen = document.createElement('div');
      offscreen.style.position = 'fixed';
      offscreen.style.left = '-9999px';
      offscreen.style.top = '0';
      offscreen.style.width = '1100px';
      offscreen.style.backgroundColor = '#ffffff';
      offscreen.className = 'wf-canvas-content';
      document.body.appendChild(offscreen);

      let pdf = null;

      for (let i = 0; i < pages.length; i++) {
        const page = pages[i];
        offscreen.innerHTML = page.html;

        // Quitar toolbar flotante de la captura
        offscreen.querySelectorAll('.wf-floating-toolbar, .wf-resize-handle').forEach(h => h.remove());

        const canvas = await html2canvas(offscreen, {
          scale: 1.5,
          backgroundColor: '#ffffff',
          logging: false
        });

        const imgWidth = 210; // A4 mm
        const minPageHeight = 297; // A4 mm
        const imgHeight = (canvas.height * imgWidth) / canvas.width;
        const totalHeight = Math.max(minPageHeight, imgHeight);

        if (i === 0) {
          pdf = new jsPDF('p', 'mm', [imgWidth, totalHeight]);
        } else {
          pdf.addPage([imgWidth, totalHeight], 'p');
        }

        const imgData = canvas.toDataURL('image/jpeg', 0.95);
        pdf.addImage(imgData, 'JPEG', 0, 0, imgWidth, imgHeight);

        // Añadir enlaces clicables entre páginas del PDF
        const linkedElements = offscreen.querySelectorAll('[data-link-page]');
        linkedElements.forEach(el => {
          const targetPageId = el.getAttribute('data-link-page');
          const targetPageIndex = pages.findIndex(p => p.id === targetPageId);
          if (targetPageIndex !== -1) {
            const offscreenRect = offscreen.getBoundingClientRect();
            const elRect = el.getBoundingClientRect();

            const x = ((elRect.left - offscreenRect.left) / offscreenRect.width) * imgWidth;
            const y = ((elRect.top - offscreenRect.top) / offscreenRect.height) * imgHeight;
            const w = (elRect.width / offscreenRect.width) * imgWidth;
            const h = (elRect.height / offscreenRect.height) * imgHeight;

            // Enlace de salto de página dentro del PDF
            pdf.link(x, y, w, h, { pageNumber: targetPageIndex + 1 });

            // Rectángulo azul de indicación de botón interactivo
            pdf.setDrawColor(37, 99, 235);
            pdf.setLineWidth(0.4);
            pdf.rect(x, y, w, h);
          }
        });
      }

      document.body.removeChild(offscreen);
      WireframeStudio.switchPage(originalActivePageId);

      pdf.save('wireframe-mockups-interactivo.pdf');
      WireframeStudio.showToast('PDF interactivo con enlaces entre páginas exportado');
    } catch (err) {
      console.error('Error exportando PDF interactivo:', err);
      alert('Error exportando PDF: ' + err.message);
    }
  },

  // 6. Export Animated Standalone Prototype HTML
  exportAnimatedHTML() {
    WireframeStudio.saveCurrentPageContent();
    const pages = WireframeStudio.pages;

    const htmlBundle = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Prototipo Interactivo Wireframe</title>
  <style>
    * { margin:0; padding:0; box-sizing:border-box; }
    body { font-family:-apple-system, sans-serif; background:#0f172a; height:100vh; display:flex; flex-direction:column; color:#fff; overflow:hidden; }
    .proto-nav { height:48px; background:#1e293b; border-bottom:1px solid #334155; display:flex; align-items:center; justify-content:space-between; padding:0 20px; font-weight:700; font-size:0.85rem; }
    .proto-stage { flex:1; overflow:auto; display:flex; align-items:center; justify-content:center; padding:24px; }
    .proto-card { width:1100px; max-width:100%; background:#fff; color:#111; border-radius:4px; box-shadow:0 20px 40px rgba(0,0,0,0.5); overflow:hidden; position:relative; min-height:600px; }
    .screen-in { animation: slideIn 0.26s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    .screen-out { animation: slideOut 0.26s cubic-bezier(0.4, 0, 0.2, 1) forwards; }
    @keyframes slideIn { from { transform:translateX(50px); opacity:0; } to { transform:translateX(0); opacity:1; } }
    @keyframes slideOut { from { transform:translateX(0); opacity:1; } to { transform:translateX(-50px); opacity:0; } }
    [data-link-page] { cursor:pointer !important; outline:2px solid #2563eb !important; outline-offset:2px; }
    [data-link-page]:hover { opacity:0.85; }
    /* Wireframe Styles */
    .wf-placeholder-x { border:2px solid #111; background:#fff; position:relative; display:flex; align-items:center; justify-content:center; overflow:hidden; min-height:80px; }
    .wf-placeholder-x svg { position:absolute; top:0; left:0; width:100%; height:100%; stroke:#111; stroke-width:1.5px; }
    .wf-placeholder-x span { position:relative; z-index:2; background:#fff; padding:2px 8px; font-weight:700; font-size:0.85rem; border:1px solid #111; }
    .wf-text-lines { display:flex; flex-direction:column; gap:5px; width:100%; }
    .wf-text-line { height:3px; background:#777; width:100%; }
    .wf-btn { border:2px solid #111; background:#fff; font-weight:700; padding:6px 14px; cursor:pointer; }
    .wf-btn-primary { background:#111; color:#fff; }
    .wf-box { border:2px solid #111; background:#fff; padding:12px; }
    .wf-panel { border:2px solid #111; background:#e5e7eb; padding:14px; margin-bottom:16px; }
    .wf-grid-4 { display:grid; grid-template-columns:repeat(4,1fr); gap:14px; }
    .wf-grid-3 { display:grid; grid-template-columns:repeat(3,1fr); gap:14px; }
    .wf-row-split { display:flex; gap:16px; }
    .wf-col-main { flex:7; } .wf-col-side { flex:3; }
    .wf-flex-between { display:flex; justify-content:space-between; align-items:center; }
    .wf-flex-row { display:flex; gap:12px; align-items:center; }
    .wf-product-card, .wf-tcg-card { border:2px solid #111; padding:10px; background:#fff; }
  </style>
</head>
<body>
  <div class="proto-nav">
    <div style="display:flex; align-items:center; gap:12px;">
      <span>Prototipo Animado</span>
      <select id="pageSelect" onchange="goToPage(this.value)" style="padding:4px 10px; background:#0f172a; color:#fff; border:1px solid #475569; border-radius:4px; font-weight:700;">
        ${pages.map(p => `<option value="${p.id}">${p.title}</option>`).join('')}
      </select>
    </div>
    <div style="font-size:0.8rem; color:#94a3b8;">Los elementos resaltados con borde azul son clicables</div>
  </div>
  <div class="proto-stage">
    <div class="proto-card" id="screenCard"></div>
  </div>
  <script>
    const pages = ${JSON.stringify(pages)};
    let activePageId = pages[0].id;
    const card = document.getElementById('screenCard');
    const select = document.getElementById('pageSelect');

    function renderScreen(pageId) {
      const page = pages.find(p => p.id === pageId);
      if(!page) return;
      card.innerHTML = page.html;
      card.querySelectorAll('[data-link-page]').forEach(el => {
        el.onclick = (e) => {
          e.stopPropagation();
          const target = el.getAttribute('data-link-page');
          goToPage(target);
        };
      });
    }

    function goToPage(targetId) {
      if(targetId === activePageId) return;
      card.className = 'proto-card screen-out';
      setTimeout(() => {
        activePageId = targetId;
        select.value = targetId;
        renderScreen(targetId);
        card.className = 'proto-card screen-in';
      }, 160);
    }

    renderScreen(activePageId);
  <\/script>
</body>
</html>`;

    const blob = new Blob([htmlBundle], { type: 'text/html;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = 'wireframe-prototipo-animado.html';
    link.href = url;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    WireframeStudio.showToast('Prototipo HTML interactivo descargado');
  },

  // 7. Print
  printWireframe() {
    window.print();
  }
};
