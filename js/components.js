/* ==========================================================================
   COMPONENTS REGISTRY & GENERATORS (NO EMOJIS - SVG ONLINE ICONS ONLY)
   Modular, fully editable and draggable inside every zone (AREA).
   ========================================================================== */

const WireframeComponents = {
  // SVG Diagonal Cross generator for Image / Video Placeholders
  renderPlaceholderX(label = 'Image Placeholder', height = 140, extraClass = '') {
    return `
      <div class="wf-placeholder-x ${extraClass}" style="height: ${typeof height === 'number' ? height + 'px' : height};">
        <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
        <span class="wf-x-label wf-editable-text" contenteditable="true">${label}</span>
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
    return `<div class="wf-text-lines">${linesHtml}</div>`;
  },

  // Circle placeholder for Avatars & Icons
  renderCircle(label = '', size = 48) {
    return `
      <div class="wf-placeholder-circle" style="width: ${size}px; height: ${size}px;">
        <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
        ${label ? `<span class="wf-x-label" style="font-size: 0.65rem;">${label}</span>` : ''}
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
    // 1. BASICS
    'image-x': {
      name: 'Imagen con X',
      category: 'basic',
      iconFunc: () => Icons.image(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px;">
          ${WireframeComponents.renderPlaceholderX('Image Placeholder', 160)}
        </div>
      `
    },
    'avatar-circle': {
      name: 'Avatar Perfil',
      category: 'basic',
      iconFunc: () => Icons.user(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 12px; margin-bottom: 14px;">
          <div class="wf-draggable-block">
            ${WireframeComponents.renderCircle('', 50)}
          </div>
          <div class="wf-draggable-block" style="flex: 1;">
            <div style="font-weight: 700; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true">User Profile Name</div>
            <div style="font-size: 0.8rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">@username_handle</div>
          </div>
        </div>
      `
    },
    'text-lines': {
      name: 'Líneas de Texto',
      category: 'basic',
      iconFunc: () => Icons.textLines(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px; padding: 6px 0;">
          ${WireframeComponents.renderTextLines(5)}
        </div>
      `
    },
    'heading': {
      name: 'Encabezado H2',
      category: 'basic',
      iconFunc: () => Icons.heading(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 12px;">
          <h2 style="font-size: 1.35rem; font-weight: 800;" class="wf-editable-text" contenteditable="true">
            Título de Sección Wireframe
          </h2>
        </div>
      `
    },
    'button-group': {
      name: 'Botones',
      category: 'basic',
      iconFunc: () => Icons.button(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 8px; margin-bottom: 14px;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true">Acción Principal</button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true">Cancelar</button>
        </div>
      `
    },
    'paragraph': {
      name: 'Párrafo de Texto',
      category: 'basic',
      iconFunc: () => Icons.textLines(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 12px;">
          <p class="wf-editable-text" contenteditable="true" style="font-size: 0.9rem; line-height: 1.5; color: #374151;">
            Este es un párrafo de texto completamente editable. Haz clic aquí para escribir directamente tu contenido, descripción o instrucciones.
          </p>
        </div>
      `
    },
    'input-field': {
      name: 'Campo Formulario',
      category: 'basic',
      iconFunc: () => Icons.edit(14),
      render: () => `
        <div class="wf-draggable-block" style="margin-bottom: 14px;">
          <label class="wf-editable-text" contenteditable="true" style="display: block; font-size: 0.8rem; font-weight: 700; margin-bottom: 4px; color: #374151;">
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
        <div class="wf-draggable-block wf-search-group" style="margin-bottom: 14px;">
          <input type="text" class="wf-input" placeholder="Buscar..." />
          <button class="wf-btn wf-editable-text" contenteditable="true">Buscar</button>
        </div>
      `
    },

    // 2. VIDEO & STREAMING (IMAGE 1)
    'yt-header': {
      name: 'Cabecera Vídeo',
      category: 'video',
      iconFunc: () => Icons.video(14),
      render: () => `
        <div class="wf-draggable-block wf-yt-header">
          <div class="wf-sort-zone wf-yt-header-top">
            <div class="wf-draggable-block wf-yt-logo-block">
              <div class="wf-yt-logo">You<span class="yt-box">Tube</span></div>
              <div class="wf-yt-logo-slogan wf-editable-text" contenteditable="true">Broadcast Yourself!</div>
            </div>
            <div class="wf-draggable-block wf-search-group" style="flex: 1; max-width: 440px;">
              <input type="text" class="wf-input" placeholder="Search videos..." />
              <button class="wf-btn">Search</button>
            </div>
            <div class="wf-draggable-block wf-yt-account-links">
              <a href="#" class="wf-editable-text" contenteditable="true">Create Account</a> or 
              <a href="#" class="wf-editable-text" contenteditable="true">Sign-In</a>
            </div>
          </div>
          <div class="wf-flex-between">
            <div class="wf-sort-zone wf-yt-nav-links">
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Home</a>
              <span class="wf-yt-pipe">|</span>
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Videos</a>
              <span class="wf-yt-pipe">|</span>
              <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Channels</a>
            </div>
            <div class="wf-sort-zone wf-yt-account-links" style="font-weight: 700;">
              <span class="wf-draggable-block wf-editable-text" contenteditable="true">Subscriptions</span> &nbsp;
              <span class="wf-draggable-block wf-editable-text" contenteditable="true">History</span> &nbsp;
              <span class="wf-draggable-block wf-editable-text" contenteditable="true">Upload</span>
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
        <div class="wf-draggable-block wf-sort-zone wf-video-card-horiz" style="margin-bottom: 12px;">
          <div class="wf-draggable-block wf-video-thumb">
            ${WireframeComponents.renderPlaceholderX('Thumb', 75)}
          </div>
          <div class="wf-draggable-block wf-video-meta">
            ${WireframeComponents.renderTextLines(5)}
          </div>
        </div>
      `
    },
    'ad-popup': {
      name: 'Square Pop-Up (Ad)',
      category: 'video',
      iconFunc: () => Icons.square(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone" style="margin-bottom: 14px;">
          <div class="wf-draggable-block wf-ad-box">
            <span class="wf-editable-text" contenteditable="true">Square Pop-Up<br>251x264</span>
          </div>
          <div class="wf-draggable-block" style="margin-top: 10px;">
            ${WireframeComponents.renderTextLines(7)}
          </div>
        </div>
      `
    },

    // 3. TIENDA / E-COMMERCE (IMAGE 2)
    'product-card': {
      name: 'Tarjeta Producto',
      category: 'shop',
      iconFunc: () => Icons.shoppingCart(14),
      render: (title = 'Model Name', price = 'Rs. 999', oldPrice = '1,599') => `
        <div class="wf-draggable-block wf-sort-zone wf-product-card">
          <div class="wf-draggable-block wf-product-img">
            ${WireframeComponents.renderPlaceholderX('Product Photo', '100%')}
          </div>
          <div class="wf-draggable-block wf-product-title wf-editable-text" contenteditable="true">${title}</div>
          <div class="wf-draggable-block">
            ${WireframeComponents.renderStars(4)}
          </div>
          <div class="wf-draggable-block wf-product-price">
            <span class="wf-editable-text" contenteditable="true">${price}</span>
            <span class="wf-product-price-old wf-editable-text" contenteditable="true">${oldPrice}</span>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true">Add to Cart</button>
        </div>
      `
    },
    'order-tracker': {
      name: 'Estado de Pedido',
      category: 'shop',
      iconFunc: () => Icons.shoppingCart(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 14px;">
          <h4 style="margin-bottom: 12px; font-weight: 800;" class="wf-draggable-block wf-editable-text" contenteditable="true">Order Details #84920</h4>
          <div class="wf-sort-zone wf-tracking-stepper">
            <div class="wf-draggable-block wf-tracking-step">
              <div class="wf-step-node completed"></div>
              <div style="font-weight: 700; font-size: 0.85rem;" class="wf-editable-text" contenteditable="true">Ordered and Approved</div>
              <div style="font-size: 0.72rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">Sun, Nov 10th</div>
            </div>
            <div class="wf-draggable-block wf-tracking-step">
              <div class="wf-step-node completed"></div>
              <div style="font-weight: 700; font-size: 0.85rem;" class="wf-editable-text" contenteditable="true">Packed & Ready</div>
              <div style="font-size: 0.72rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">Sun, Nov 10th</div>
            </div>
            <div class="wf-draggable-block wf-tracking-step">
              <div class="wf-step-node"></div>
              <div style="font-weight: 700; font-size: 0.85rem;" class="wf-editable-text" contenteditable="true">Shipped / In Transit</div>
              <div style="font-size: 0.72rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">Mon, Nov 11th</div>
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
        <div class="wf-draggable-block wf-sort-zone wf-tcg-card">
          <div class="wf-draggable-block wf-tcg-header">
            <span class="wf-tcg-name wf-editable-text" contenteditable="true">${name}</span>
            <span class="wf-tcg-cost wf-editable-text" contenteditable="true">${cost}</span>
          </div>
          <div class="wf-draggable-block wf-tcg-art">
            ${WireframeComponents.renderPlaceholderX('Card Art', 110)}
          </div>
          <div class="wf-draggable-block wf-tcg-type">
            <span class="wf-editable-text" contenteditable="true">${type}</span>
            <span class="wf-editable-text" contenteditable="true">[Rare]</span>
          </div>
          <div class="wf-draggable-block wf-tcg-text-box">
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-tcg-footer">
            <div class="wf-tcg-stats wf-editable-text" contenteditable="true">${stats}</div>
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
        <div class="wf-draggable-block wf-sort-zone wf-game-hud-bar" style="margin-bottom: 14px;">
          <div class="wf-draggable-block">
            ${WireframeComponents.renderCircle('LVL 42', 44)}
          </div>
          <div class="wf-draggable-block wf-hud-meter">
            <div class="wf-meter-label wf-editable-text" contenteditable="true">HP: 850 / 1000</div>
            <div class="wf-meter-track"><div class="wf-meter-fill-hp"></div></div>
          </div>
          <div class="wf-draggable-block wf-hud-meter">
            <div class="wf-meter-label wf-editable-text" contenteditable="true">MANA: 420 / 600</div>
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
        <div class="wf-draggable-block wf-box" style="padding: 12px; margin-bottom: 14px;">
          <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 8px;" class="wf-draggable-block wf-editable-text" contenteditable="true">Inventory (8 Slots)</div>
          <div class="wf-sort-zone wf-inventory-grid">
            ${Array.from({ length: 8 }).map((_, i) => `
              <div class="wf-draggable-block wf-inventory-slot">
                <span class="wf-slot-key">${i + 1}</span>
                ${i % 2 === 0 ? WireframeComponents.renderPlaceholderX('', 38) : '<span style="color:#aaa; font-size:0.7rem;">Empty</span>'}
              </div>
            `).join('')}
          </div>
        </div>
      `
    },

    // 6. LAYOUT & CONTAINERS
    'row-50-50': {
      name: '2 Columnas (50/50)',
      category: 'layout',
      iconFunc: () => Icons.split2(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-row-50-50" style="margin-bottom: 16px;">
          <div class="wf-draggable-block wf-box" style="padding: 14px;">
            <h4 class="wf-editable-text" contenteditable="true" style="font-weight: 800; margin-bottom: 6px;">Columna Izquierda</h4>
            ${WireframeComponents.renderTextLines(4)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 14px;">
            <h4 class="wf-editable-text" contenteditable="true" style="font-weight: 800; margin-bottom: 6px;">Columna Derecha</h4>
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
            <h4 class="wf-editable-text" contenteditable="true" style="font-weight: 800; margin-bottom: 6px;">Columna 1</h4>
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 12px;">
            <h4 class="wf-editable-text" contenteditable="true" style="font-weight: 800; margin-bottom: 6px;">Columna 2</h4>
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-box" style="padding: 12px;">
            <h4 class="wf-editable-text" contenteditable="true" style="font-weight: 800; margin-bottom: 6px;">Columna 3</h4>
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
        <div class="wf-draggable-block wf-box" style="padding: 12px 18px; margin-bottom: 16px; display: flex; justify-content: space-between; align-items: center;">
          <div class="wf-draggable-block wf-editable-text" contenteditable="true" style="font-weight: 900; font-size: 1.1rem;">
            MI LOGOTIPO
          </div>
          <div class="wf-sort-zone wf-flex-row" style="gap: 12px;">
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" style="font-weight: 700; font-size: 0.85rem; color: #111;">Inicio</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" style="font-weight: 700; font-size: 0.85rem; color: #111;">Servicios</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" style="font-weight: 700; font-size: 0.85rem; color: #111;">Precios</a>
            <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true">Contacto</button>
          </div>
        </div>
      `
    },
    'footer': {
      name: 'Pie de Página',
      category: 'layout',
      iconFunc: () => Icons.layout(14),
      render: () => `
        <div class="wf-draggable-block wf-box" style="padding: 20px; margin-top: 24px; text-align: center; border-top: 2px solid #111;">
          <div class="wf-editable-text" contenteditable="true" style="font-weight: 800; font-size: 0.95rem; margin-bottom: 6px;">
            Wireframe Studio &copy; 2026 Todos los derechos reservados
          </div>
          <div class="wf-sort-zone wf-flex-row" style="justify-content: center; gap: 14px; font-size: 0.8rem;">
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Aviso Legal</a>
            <span>•</span>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Privacidad</a>
            <span>•</span>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">Contacto</a>
          </div>
        </div>
      `
    },
    'panel-box': {
      name: 'Panel con Título',
      category: 'layout',
      iconFunc: () => Icons.square(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-panel">
          <div class="wf-draggable-block wf-panel-header wf-editable-text" contenteditable="true">Section Panel</div>
          <div class="wf-draggable-block">
            ${WireframeComponents.renderPlaceholderX('Content Placeholder', 130)}
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
            <div class="wf-draggable-block">
              ${WireframeComponents.renderPlaceholderX('Item ' + (i + 1), 90)}
              <div style="margin-top: 6px;">${WireframeComponents.renderTextLines(3)}</div>
            </div>
          `).join('')}
        </div>
      `
    },
    'bottom-nav': {
      name: 'Nav Inferior Móvil',
      category: 'layout',
      iconFunc: () => Icons.smartphone(14),
      render: () => `
        <div class="wf-draggable-block wf-sort-zone wf-mobile-bottom-nav">
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.monitor(18)}</span>
            <span class="wf-editable-text" contenteditable="true">Home</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.search(18)}</span>
            <span class="wf-editable-text" contenteditable="true">Search</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.shoppingCart(18)}</span>
            <span class="wf-editable-text" contenteditable="true">Orders</span>
          </div>
          <div class="wf-draggable-block wf-bottom-nav-item">
            <span style="display:inline-flex;">${Icons.user(18)}</span>
            <span class="wf-editable-text" contenteditable="true">Profile</span>
          </div>
        </div>
      `
    }
  }
};
