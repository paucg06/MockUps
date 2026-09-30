/* ==========================================================================
   COMPONENTS REGISTRY & GENERATORS (NO EMOJIS - SVG ICONS ONLY)
   Modular, 100% editable, granular, and responsive on all devices/canvas widths.
   ========================================================================== */

const WireframeComponents = {
  // SVG Diagonal Cross generator for Image / Video Placeholders
  renderPlaceholderX(label = 'Image Placeholder', height = 140, extraClass = '') {
    return `
      <div class="wf-placeholder-x ${extraClass}" style="height: ${typeof height === 'number' ? height + 'px' : height}; width: 100%; max-width: 100%; box-sizing: border-box;">
        <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
        <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">${label}</span>
      </div>
    `;
  },

  // Parallel horizontal placeholder text lines (=====)
  renderTextLines(count = 5, widths = ['w-100', 'w-90', 'w-80', 'w-70', 'w-60']) {
    let linesHtml = '';
    for (let i = 0; i < count; i++) {
      const widthClass = widths[i % widths.length];
      linesHtml += `<div class="wf-text-line ${widthClass}"></div>`;
    }
    return `<div class="wf-text-lines" style="width: 100%; max-width: 100%; box-sizing: border-box;">${linesHtml}</div>`;
  },

  // Circle placeholder for Avatars & Icons
  renderCircle(label = '', size = 48) {
    return `
      <div class="wf-placeholder-circle" style="width: ${size}px; height: ${size}px; min-width: ${size}px; min-height: ${size}px;">
        <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
        ${label ? `<span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.65rem;">${label}</span>` : ''}
      </div>
    `;
  },

  // Vector rating stars
  renderStars(rating = 4) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += `<span style="display:inline-flex; color:${i < rating ? '#111' : '#ccc'};">${Icons.star(13)}</span>`;
    }
    return `<div class="wf-rating-stars">${stars}</div>`;
  },

  // Component Definitions (Library)
  library: {
    // 1. BASICS & TYPOGRAPHY
    'image-x': {
      name: 'Imagen con X',
      category: 'basic',
      iconFunc: () => Icons.image(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          ${WireframeComponents.renderPlaceholderX('Image Placeholder', 160)}
        </div>
      `
    },
    'avatar-circle': {
      name: 'Avatar Perfil',
      category: 'basic',
      iconFunc: () => Icons.user(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 12px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <div class="wf-draggable-block">
            ${WireframeComponents.renderCircle('', 50)}
          </div>
          <div class="wf-draggable-block" style="flex: 1; min-width: 140px;">
            <div style="font-weight: 700; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">User Profile Name</div>
            <div style="font-size: 0.8rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true" spellcheck="false">@username_handle</div>
          </div>
        </div>
      `
    },
    'text-lines': {
      name: 'Líneas de Texto',
      category: 'basic',
      iconFunc: () => Icons.textLines(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px; padding: 6px 0; width: 100%; box-sizing: border-box;">
          ${WireframeComponents.renderTextLines(5)}
        </div>
      `
    },
    'heading': {
      name: 'Encabezado H2',
      category: 'basic',
      iconFunc: () => Icons.heading(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 12px; width: 100%; box-sizing: border-box;">
          <h2 style="font-size: 1.35rem; font-weight: 800; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Título de Sección Wireframe
          </h2>
        </div>
      `
    },
    'paragraph': {
      name: 'Párrafo de Texto',
      category: 'basic',
      iconFunc: () => Icons.textLines(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 12px; width: 100%; box-sizing: border-box;">
          <p class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.9rem; line-height: 1.5; color: #374151; margin: 0;">
            Este es un párrafo de texto completamente editable. Haz clic aquí para escribir directamente tu contenido, descripción o instrucciones.
          </p>
        </div>
      `
    },
    'button-group': {
      name: 'Botones',
      category: 'basic',
      iconFunc: () => Icons.button(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 8px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false">Acción Principal</button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Cancelar</button>
        </div>
      `
    },
    'input-field': {
      name: 'Campo Formulario',
      category: 'basic',
      iconFunc: () => Icons.edit(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <label class="wf-editable-text" contenteditable="true" spellcheck="false" style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px; color: #374151;">
            Etiqueta del Campo:
          </label>
          <input type="text" class="wf-input" placeholder="Escribe tu respuesta aquí..." style="width: 100%;" />
        </div>
      `
    },
    'search-bar': {
      name: 'Buscador',
      category: 'basic',
      iconFunc: () => Icons.search(14),
      render: () => `
        <div class="wf-draggable-block wf-search-group" style="margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <input type="text" class="wf-input" placeholder="Buscar..." style="flex: 1; min-width: 120px;" />
          <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Buscar</button>
        </div>
      `
    },

    // 2. VIDEO & STREAMING
    'yt-header': {
      name: 'Cabecera Vídeo',
      category: 'video',
      iconFunc: () => Icons.video(14),
      render: () => `
        <div class="wf-draggable-block wf-yt-header" style="width: 100%; box-sizing: border-box;">
          <div class="wf-sort-zone wf-yt-header-top" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 14px; margin-bottom: 12px;">
            <div class="wf-draggable-block wf-yt-logo-block" style="display: flex; flex-direction: column;">
              <div class="wf-yt-logo">You<span class="yt-box">Tube</span></div>
              <div class="wf-yt-logo-slogan wf-editable-text" contenteditable="true" spellcheck="false">Broadcast Yourself!</div>
            </div>
            <div class="wf-draggable-block wf-search-group" style="flex: 1 1 240px; max-width: 440px;">
              <input type="text" class="wf-input" placeholder="Search videos..." style="flex: 1; min-width: 100px;" />
              <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Search</button>
            </div>
            <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 8px; font-size: 0.85rem;">
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Create Account</a>
              <span>or</span>
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Sign-In</a>
            </div>
          </div>
          <div class="wf-flex-between" style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px;">
            <div class="wf-sort-zone wf-flex-row" style="gap: 8px; font-size: 0.95rem; font-weight: 700;">
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Home</a>
              <span class="wf-yt-pipe">|</span>
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Videos</a>
              <span class="wf-yt-pipe">|</span>
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Channels</a>
            </div>
            <div class="wf-sort-zone wf-flex-row" style="font-weight: 700; gap: 10px; font-size: 0.85rem;">
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Subscriptions</span>
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">History</span>
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Upload</span>
            </div>
          </div>
        </div>
      `
    },
    'video-card-horiz': {
      name: 'Tarjeta de Vídeo',
      category: 'video',
      iconFunc: () => Icons.video(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-video-card-horiz" style="margin-bottom: 12px; display: flex; flex-wrap: wrap; gap: 10px; align-items: flex-start; width: 100%; box-sizing: border-box;">
          <div class="wf-draggable-block wf-video-thumb" style="width: 100px; min-width: 80px; flex-shrink: 0;">
            ${WireframeComponents.renderPlaceholderX('Thumb', 75)}
          </div>
          <div class="wf-draggable-block wf-video-meta" style="flex: 1 1 120px; min-width: 0;">
            <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Título del Vídeo Relacionado</div>
            ${WireframeComponents.renderTextLines(3)}
          </div>
        </div>
      `
    },
    'ad-popup': {
      name: 'Square Pop-Up (Ad)',
      category: 'video',
      iconFunc: () => Icons.square(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone" style="margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <div class="wf-draggable-block wf-ad-box" style="width: 100%; box-sizing: border-box; min-height: 180px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Square Pop-Up<br>251x264</span>
          </div>
          <div class="wf-draggable-block" style="margin-top: 10px; width: 100%;">
            ${WireframeComponents.renderTextLines(5)}
          </div>
        </div>
      `
    },

    // 3. TIENDA / E-COMMERCE
    'product-card': {
      name: 'Tarjeta Producto',
      category: 'shop',
      iconFunc: () => Icons.shoppingCart(14),
      render: (title = 'Model Name', price = 'Rs. 999', oldPrice = '1,599') => `
        <div class="wf-draggable-block wf-sort-zone wf-product-card" style="width: 100%; box-sizing: border-box; min-width: 0;">
          <div class="wf-draggable-block wf-product-img" style="width: 100%;">
            ${WireframeComponents.renderPlaceholderX('Product Photo', 120)}
          </div>
          <div class="wf-draggable-block wf-product-title wf-editable-text" contenteditable="true" spellcheck="false">${title}</div>
          <div class="wf-draggable-block">
            ${WireframeComponents.renderStars(4)}
          </div>
          <div class="wf-draggable-block wf-product-price" style="display: flex; align-items: baseline; gap: 6px; flex-wrap: wrap;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 900;">${price}</span>
            <span class="wf-product-price-old wf-editable-text" contenteditable="true" spellcheck="false">${oldPrice}</span>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false">Añadir al Carrito</button>
        </div>
      `
    },
    'chips-bar': {
      name: 'Pills de Categoría',
      category: 'shop',
      iconFunc: () => Icons.tag(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-flex-wrap" style="gap: 8px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <span class="wf-draggable-block wf-chip active wf-editable-text" contenteditable="true" spellcheck="false">Todos</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true" spellcheck="false">Electrónica</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true" spellcheck="false">Hogar</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true" spellcheck="false">Ofertas</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true" spellcheck="false">Destacados</span>
        </div>
      `
    },
    'order-tracker': {
      name: 'Estado de Pedido',
      category: 'shop',
      iconFunc: () => Icons.shoppingCart(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <h4 style="margin-bottom: 12px; font-weight: 800;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Detalles del Pedido #84920</h4>
          <div class="wf-sort-zone wf-stepper-horiz" style="margin-bottom: 12px;">
            <div class="wf-draggable-block wf-step-item completed">
              <div class="wf-step-circle">1</div>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">1. Cesta</span>
            </div>
            <div class="wf-step-line completed"></div>
            <div class="wf-draggable-block wf-step-item active">
              <div class="wf-step-circle">2</div>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">2. Envío</span>
            </div>
            <div class="wf-step-line"></div>
            <div class="wf-draggable-block wf-step-item">
              <div class="wf-step-circle">3</div>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">3. Confirmación</span>
            </div>
          </div>
        </div>
      `
    },

    // 4. COLECCIÓN DE CARTAS (TCG)
    'tcg-card': {
      name: 'Carta TCG',
      category: 'tcg',
      iconFunc: () => Icons.layers(14),
      render: (name = 'Dragon of Abyss', cost = '5', type = 'Creature - Dragon', stats = '6 / 5') => `
        <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="width: 100%; max-width: 250px; margin: 0 auto; box-sizing: border-box;">
          <div class="wf-draggable-block wf-tcg-header">
            <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">${name}</span>
            <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">${cost}</span>
          </div>
          <div class="wf-draggable-block wf-tcg-art">
            ${WireframeComponents.renderPlaceholderX('Card Art', 110)}
          </div>
          <div class="wf-draggable-block wf-tcg-type">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">${type}</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">[Rare]</span>
          </div>
          <div class="wf-draggable-block wf-tcg-text-box">
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-tcg-footer">
            <div class="wf-tcg-stats wf-editable-text" contenteditable="true" spellcheck="false">${stats}</div>
          </div>
        </div>
      `
    },

    // 5. VIDEOJUEGOS / GAMING HUD
    'game-hud': {
      name: 'HUD de Juego',
      category: 'gaming',
      iconFunc: () => Icons.gamepad(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-game-hud-bar" style="margin-bottom: 14px; width: 100%; box-sizing: border-box; display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
          <div class="wf-draggable-block">
            ${WireframeComponents.renderCircle('LVL 42', 44)}
          </div>
          <div class="wf-draggable-block wf-hud-meter" style="flex: 1 1 130px; min-width: 0;">
            <div class="wf-meter-label wf-editable-text" contenteditable="true" spellcheck="false">HP: 850 / 1000</div>
            <div class="wf-meter-track"><div class="wf-meter-fill-hp"></div></div>
          </div>
          <div class="wf-draggable-block wf-hud-meter" style="flex: 1 1 130px; min-width: 0;">
            <div class="wf-meter-label wf-editable-text" contenteditable="true" spellcheck="false">MANA: 420 / 600</div>
            <div class="wf-meter-track"><div class="wf-meter-fill-mp"></div></div>
          </div>
        </div>
      `
    },
    'inventory-grid': {
      name: 'Inventario RPG',
      category: 'gaming',
      iconFunc: () => Icons.layout(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 12px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 8px;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Inventory (8 Slots)</div>
          <div class="wf-sort-zone wf-inventory-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(42px, 1fr)); gap: 6px;">
            ${Array.from({ length: 8 }).map((_, i) => `
              <div class="wf-draggable-block wf-inventory-slot">
                <span class="wf-slot-key wf-editable-text" contenteditable="true" spellcheck="false">${i + 1}</span>
                ${i % 2 === 0 ? WireframeComponents.renderPlaceholderX('', 38) : '<span style="color:#aaa; font-size:0.7rem;">Empty</span>'}
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // 6. LAYOUT & STRUCTURE CONTAINERS
    'row-50-50': {
      name: '2 Columnas (50/50)',
      category: 'layout',
      iconFunc: () => Icons.split2(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-row-50-50" style="margin-bottom: 16px;">
          <div class="wf-draggable-block wf-box" style="padding: 14px;">
            <h4 class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; margin-bottom: 6px;">Columna Izquierda</h4>
            ${WireframeComponents.renderTextLines(4)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 14px;">
            <h4 class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; margin-bottom: 6px;">Columna Derecha</h4>
            ${WireframeComponents.renderTextLines(4)}
          </div>
        </div>
      `
    },
    'row-33-33-33': {
      name: '3 Columnas (1/3)',
      category: 'layout',
      iconFunc: () => Icons.columns(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-grid-3" style="margin-bottom: 16px;">
          <div class="wf-draggable-block wf-box" style="padding: 12px;">
            <h4 class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; margin-bottom: 6px;">Columna 1</h4>
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 12px;">
            <h4 class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; margin-bottom: 6px;">Columna 2</h4>
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 12px;">
            <h4 class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; margin-bottom: 6px;">Columna 3</h4>
            ${WireframeComponents.renderTextLines(3)}
          </div>
        </div>
      `
    },
    'navbar': {
      name: 'Barra Navegación',
      category: 'layout',
      iconFunc: () => Icons.menu(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; width: 100%; box-sizing: border-box;">
          <div class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 900; font-size: 1.1rem;">
            MI LOGOTIPO
          </div>
          <div class="wf-sort-zone wf-flex-row" style="gap: 12px;">
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 700; font-size: 0.85rem; color: #111;">Inicio</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 700; font-size: 0.85rem; color: #111;">Servicios</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 700; font-size: 0.85rem; color: #111;">Precios</a>
            <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false">Contacto</button>
          </div>
        </div>
      `
    },
    'panel-box': {
      name: 'Panel con Título',
      category: 'layout',
      iconFunc: () => Icons.square(14),
      render: () => `
        <div class="wf-draggable-block wf-panel" style="width: 100%; box-sizing: border-box;">
          <div class="wf-draggable-block wf-panel-header wf-editable-text" contenteditable="true" spellcheck="false">Panel de Sección</div>
          <div class="wf-sort-zone wf-panel-body" style="min-height: 80px; width: 100%; box-sizing: border-box;">
            <div class="wf-draggable-block">
              ${WireframeComponents.renderPlaceholderX('Contenido del Panel', 130)}
            </div>
          </div>
        </div>
      `
    },
    'grid-4-cols': {
      name: 'Rejilla 4 Cols',
      category: 'layout',
      iconFunc: () => Icons.columns(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-grid-4" style="margin-bottom: 16px;">
          ${Array.from({ length: 4 }).map((_, i) => `
            <div class="wf-draggable-block" style="box-sizing: border-box;">
              ${WireframeComponents.renderPlaceholderX('Item ' + (i + 1), 90)}
              <div style="margin-top: 6px;">${WireframeComponents.renderTextLines(3)}</div>
            </div>
          `).join('')}
        </div>
      `
    },
    'stats-card': {
      name: 'Tarjeta Métrica KPI',
      category: 'layout',
      iconFunc: () => Icons.chart(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 14px; width: 100%; box-sizing: border-box;">
          <div style="font-size: 0.78rem; font-weight: 700; color: #6b7280; text-transform: uppercase;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Ventas del Mes</div>
          <div style="font-size: 1.8rem; font-weight: 900; margin: 4px 0;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">24,580 €</div>
          <div style="font-size: 0.75rem; color: #16a34a; font-weight: 700;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">+12.5% respecto al mes anterior</div>
        </div>
      `
    },
    'footer': {
      name: 'Pie de Página',
      category: 'layout',
      iconFunc: () => Icons.layout(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 18px; margin-top: 24px; text-align: center; border-top: 2px solid #111; width: 100%; box-sizing: border-box;">
          <div class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.95rem; margin-bottom: 8px;">
            Wireframe Studio &copy; 2026 Todos los derechos reservados
          </div>
          <div class="wf-sort-zone wf-flex-row" style="justify-content: center; gap: 14px; font-size: 0.8rem;">
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Aviso Legal</a>
            <span>•</span>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Privacidad</a>
            <span>•</span>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Contacto</a>
          </div>
        </div>
      `
    },
    'bottom-nav': {
      name: 'Nav Inferior Móvil',
      category: 'layout',
      iconFunc: () => Icons.smartphone(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-mobile-bottom-nav" style="display: flex; flex-wrap: wrap; justify-content: space-around; width: 100%; padding: 8px; box-sizing: border-box;">
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.monitor(18)}</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Home</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.search(18)}</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Search</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.shoppingCart(18)}</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Orders</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.user(18)}</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Profile</span>
          </div>
        </div>
      `
    }
  }
};
