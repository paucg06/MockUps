/* ==========================================================================
   TEMPLATES LIBRARY (NO EMOJIS - MODULAR SORTABLE ZONES)
   Every element is editable and reorderable inside its zone (AREA).
   ========================================================================== */

const WireframeTemplates = {
  // 1. GESTOR DE VÍDEOS (YOUTUBE CLÁSICO - IDÉNTICO A IMAGEN 1)
  youtubeClassic: {
    id: 'youtubeClassic',
    name: 'Gestor de Vídeos (YouTube)',
    iconKey: 'video',
    badge: 'Imagen 1',
    description: 'Wireframe idéntico a la Imagen 1: cabecera con enlaces y búsqueda, sección Featured con thumbnail X y vídeos relacionados, pop-up 251x264 y More Videos.',
    html: `
      <div class="wf-container wf-sort-zone">
        <!-- CABECERA YOUTUBE -->
        <div class="wf-draggable-block wf-yt-header">
          <div class="wf-sort-zone wf-yt-header-top">
            <div class="wf-draggable-block wf-yt-logo-block">
              <div class="wf-yt-logo">You<span class="yt-box">Tube</span></div>
              <div class="wf-yt-logo-slogan wf-editable-text" contenteditable="true">Broadcast Yourself!</div>
            </div>
            <div class="wf-draggable-block wf-search-group" style="flex: 1; max-width: 440px;">
              <input type="text" class="wf-input" placeholder="" />
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

        <!-- SECCIÓN SUPERIOR: FEATURED (70%) + POP-UP (30%) -->
        <div class="wf-draggable-block wf-sort-zone wf-row-split">
          <div class="wf-draggable-block wf-col-main">
            <div class="wf-panel" style="margin-bottom: 0; height: 100%;">
              <div class="wf-draggable-block wf-panel-header wf-editable-text" contenteditable="true">Featured</div>
              <div class="wf-sort-zone wf-featured-layout">
                <div class="wf-draggable-block wf-featured-main">
                  ${WireframeComponents.renderPlaceholderX('Video Thumbnail', 280)}
                </div>
                <div class="wf-draggable-block wf-sort-zone wf-featured-playlist">
                  ${Array.from({ length: 3 }).map(() => `
                    <div class="wf-draggable-block wf-playlist-item">
                      <div class="wf-playlist-thumb">
                        ${WireframeComponents.renderPlaceholderX('', 65)}
                      </div>
                      <div class="wf-playlist-info">
                        ${WireframeComponents.renderTextLines(6)}
                      </div>
                    </div>
                  `).join('')}
                </div>
              </div>
            </div>
          </div>

          <div class="wf-draggable-block wf-sort-zone wf-col-side">
            <div class="wf-draggable-block wf-ad-box">
              <span class="wf-editable-text" contenteditable="true">Square Pop-Up<br>251x264</span>
            </div>
            <div class="wf-draggable-block" style="margin-top: 14px;">
              ${WireframeComponents.renderTextLines(8)}
            </div>
          </div>
        </div>

        <!-- SECCIÓN INFERIOR: MORE VIDEOS (REJILLA 4x2) -->
        <div class="wf-draggable-block wf-panel wf-panel-subtle">
          <div class="wf-draggable-block wf-panel-header wf-editable-text" contenteditable="true">More Videos</div>
          <div class="wf-sort-zone wf-grid-4">
            ${Array.from({ length: 8 }).map(() => `
              <div class="wf-draggable-block wf-video-card-horiz">
                <div class="wf-video-thumb">
                  ${WireframeComponents.renderPlaceholderX('', 75)}
                </div>
                <div class="wf-video-meta">
                  ${WireframeComponents.renderTextLines(6)}
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- FOOTER -->
        <div class="wf-draggable-block" style="margin-top: 18px; font-size: 0.8rem; font-weight: 700; color: #333;" class="wf-editable-text" contenteditable="true">
          YouTube is a Trademark of YouTube.com
        </div>
      </div>
    `
  },

  // 2. TIENDA ONLINE & E-COMMERCE (IMAGEN 2)
  ecommerceStore: {
    id: 'ecommerceStore',
    name: 'Tienda Online & E-Commerce',
    iconKey: 'shoppingCart',
    badge: 'Imagen 2',
    description: 'Catálogo comercial responsive inspirado en la Imagen 2: buscador, pills de categorías, rejilla de productos con precio y estrellas, y seguimiento de pedido.',
    html: `
      <div class="wf-container wf-sort-zone">
        <!-- BARRA SUPERIOR -->
        <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px;">
          <div class="wf-sort-zone wf-flex-between" style="margin-bottom: 10px;">
            <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 10px;">
              <span style="font-weight: 800; font-size: 0.85rem; border: 1.5px solid #111; padding: 2px 6px;">MENU</span>
              <span style="font-weight: 900; font-size: 1.05rem; border: 1.5px solid #111; padding: 2px 8px;" class="wf-editable-text" contenteditable="true">STORE LOGO</span>
            </div>
            <div class="wf-draggable-block" style="font-size: 0.78rem; font-weight: 600;" class="wf-editable-text" contenteditable="true">Location: Main Ave 102</div>
            <div class="wf-draggable-block" style="display: flex; gap: 12px; font-size: 0.8rem; font-weight: 700;">
              <span>Alerts</span>
              <span>Cart (3)</span>
            </div>
          </div>
          <div class="wf-draggable-block wf-search-group">
            <input type="text" class="wf-input" placeholder="Search products, brands and items..." />
            <button class="wf-btn">Search</button>
          </div>
        </div>

        <!-- CATEGORÍAS (PILLS REORDENABLES) -->
        <div class="wf-draggable-block wf-sort-zone wf-flex-wrap" style="margin-bottom: 16px;">
          <span class="wf-draggable-block wf-chip active wf-editable-text" contenteditable="true">All Items</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Electronics</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Food & Dining</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Fashion</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Home</span>
          <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Sports</span>
        </div>

        <!-- BANNER PROMOCIONAL -->
        <div class="wf-draggable-block" style="margin-bottom: 20px;">
          ${WireframeComponents.renderPlaceholderX('Seasonal Sale - Up to 50% Off', 110)}
        </div>

        <!-- SECCIÓN 1: FOOD AND MORE -->
        <div class="wf-draggable-block" style="margin-bottom: 22px;">
          <div class="wf-flex-between" style="margin-bottom: 10px;">
            <h3 style="font-size: 1.05rem; font-weight: 800;" class="wf-editable-text" contenteditable="true">Food and More</h3>
            <a href="#" style="font-size: 0.8rem; font-weight: 700; color: #111;" class="wf-editable-text" contenteditable="true">View all</a>
          </div>
          <div class="wf-sort-zone wf-grid-4">
            ${[
              { name: 'Hotel Name Deluxe', price: 'Rs. 999', old: '1,499' },
              { name: 'Family Combo Pack', price: 'Rs. 450', old: '600' },
              { name: 'Selection Dish Box', price: 'Rs. 1,200', old: '1,500' },
              { name: 'Gourmet Pack Set', price: 'Rs. 380', old: '500' }
            ].map(item => WireframeComponents.library['product-card'].render(item.name, item.price, item.old)).join('')}
          </div>
        </div>

        <!-- SECCIÓN 2: ELECTRONICS AND MORE -->
        <div class="wf-draggable-block" style="margin-bottom: 22px;">
          <div class="wf-flex-between" style="margin-bottom: 10px;">
            <h3 style="font-size: 1.05rem; font-weight: 800;" class="wf-editable-text" contenteditable="true">Electronics and More</h3>
            <a href="#" style="font-size: 0.8rem; font-weight: 700; color: #111;" class="wf-editable-text" contenteditable="true">View all</a>
          </div>
          <div class="wf-sort-zone wf-grid-4">
            ${[
              { name: 'Smart Model Pro X', price: 'Rs. 24,999', old: '29,999' },
              { name: 'Wireless Headset ANC', price: 'Rs. 3,499', old: '4,999' },
              { name: 'Fitness Tracker Band', price: 'Rs. 1,999', old: '2,999' },
              { name: 'Bluetooth Speaker Box', price: 'Rs. 1,299', old: '1,899' }
            ].map(item => WireframeComponents.library['product-card'].render(item.name, item.price, item.old)).join('')}
          </div>
        </div>

        <!-- SECCIÓN 3: SEGUIMIENTO DE PEDIDO -->
        <div class="wf-draggable-block wf-sort-zone wf-row-split">
          <div class="wf-draggable-block wf-col-main">
            ${WireframeComponents.library['order-tracker'].render()}
          </div>
          <div class="wf-draggable-block wf-col-side">
            <div class="wf-box" style="padding: 14px;">
              <h4 style="font-weight: 800; margin-bottom: 10px;" class="wf-draggable-block wf-editable-text" contenteditable="true">Order Summary</h4>
              <div class="wf-flex-between" style="font-size: 0.8rem; margin-bottom: 6px;">
                <span class="wf-editable-text" contenteditable="true">Subtotal (3 items):</span>
                <span style="font-weight: 700;">Rs. 3,448</span>
              </div>
              <div class="wf-flex-between" style="font-size: 0.8rem; margin-bottom: 12px;">
                <span class="wf-editable-text" contenteditable="true">Shipping:</span>
                <span style="font-weight: 700;">FREE</span>
              </div>
              <button class="wf-draggable-block wf-btn wf-btn-primary wf-btn-block">Checkout</button>
            </div>
          </div>
        </div>

        <!-- NAVEGACIÓN MÓVIL INFERIOR -->
        ${WireframeComponents.library['bottom-nav'].render()}
      </div>
    `
  },

  // 3. COLECCIÓN DE CARTAS (TCG)
  cardCollection: {
    id: 'cardCollection',
    name: 'Colección de Cartas (TCG)',
    iconKey: 'layers',
    badge: 'TCG / Cartas',
    description: 'Constructor de baraja y galería de cartas coleccionables con coste, ilustración X, tipo, reglas y estadísticas de combate.',
    html: `
      <div class="wf-container wf-sort-zone">
        <!-- BARRA SUPERIOR -->
        <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 16px;">
          <div class="wf-flex-between" style="margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
            <div>
              <h2 style="font-size: 1.25rem; font-weight: 900;" class="wf-editable-text" contenteditable="true">Deck: Eldoria Chronicles</h2>
              <div style="font-size: 0.78rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">Standard Tournament Deck • 40 / 60 Cards</div>
            </div>
            <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
              <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true">+ Add Card</button>
              <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true">Save Deck</button>
            </div>
          </div>

          <!-- FILTROS (PILLS REORDENABLES) -->
          <div class="wf-flex-between" style="align-items: center; flex-wrap: wrap; gap: 10px;">
            <div class="wf-sort-zone wf-flex-wrap">
              <span class="wf-draggable-block wf-chip active wf-editable-text" contenteditable="true">All (240)</span>
              <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Fire</span>
              <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Water</span>
              <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Earth</span>
              <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Lightning</span>
              <span class="wf-draggable-block wf-chip wf-editable-text" contenteditable="true">Shadow</span>
            </div>
            <div style="width: 180px;">
              <input type="text" class="wf-input" placeholder="Filter cards..." style="padding: 3px 6px; font-size: 0.78rem;" />
            </div>
          </div>
        </div>

        <!-- REJILLA DE CARTAS (TODAS REORDENABLES Y EDITABLES) -->
        <div class="wf-draggable-block wf-sort-zone wf-grid-4" style="margin-bottom: 20px;">
          ${[
            { name: 'Abyss Dragon', cost: '6', type: 'Creature - Dragon', stats: '6 / 6' },
            { name: 'Lightning Strike', cost: '2', type: 'Instant Spell', stats: '- / -' },
            { name: 'Solar Knight', cost: '3', type: 'Creature - Paladin', stats: '3 / 4' },
            { name: 'Arcane Potion', cost: '1', type: 'Artifact', stats: '- / -' },
            { name: 'Steel Golem', cost: '5', type: 'Creature - Golem', stats: '4 / 7' },
            { name: 'Dark Invocation', cost: '4', type: 'Sorcery Spell', stats: '- / -' },
            { name: 'Golden Phoenix', cost: '5', type: 'Mythic Creature', stats: '5 / 3' },
            { name: 'Shield of Light', cost: '2', type: 'Enchantment', stats: '- / -' }
          ].map(c => WireframeComponents.library['tcg-card'].render(c.name, c.cost, c.type, c.stats)).join('')}
        </div>

        <!-- FOOTER -->
        <div class="wf-draggable-block wf-panel wf-panel-subtle wf-flex-between">
          <div style="font-size: 0.8rem; font-weight: 700;" class="wf-editable-text" contenteditable="true">
            Collection Status: 187 / 240 Cards Unlocked (78%)
          </div>
          <div class="wf-text-lines" style="width: 160px;">
            <div class="wf-text-line thick w-80"></div>
          </div>
        </div>
      </div>
    `
  },

  // 4. VIDEOJUEGOS (GAMING HUD & HUB)
  videoGameHUD: {
    id: 'videoGameHUD',
    name: 'Videojuegos (HUD & Gaming)',
    iconKey: 'gamepad',
    badge: 'Gaming',
    description: 'Interfaz de videojuego completa: barras de vida y maná, visor 3D con X, minimapa, inventario de casillas y barra de habilidades.',
    html: `
      <div class="wf-container wf-sort-zone">
        <!-- TOP HUD -->
        ${WireframeComponents.library['game-hud'].render()}

        <!-- MAIN LAYOUT -->
        <div class="wf-draggable-block wf-sort-zone wf-row-split">
          <!-- Personaje -->
          <div class="wf-draggable-block wf-col-side">
            <div class="wf-box" style="padding: 12px; height: 100%;">
              <div style="font-weight: 800; font-size: 0.82rem; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true">
                Character Equipment
              </div>
              <div class="wf-draggable-block" style="margin-bottom: 8px;">
                ${WireframeComponents.renderPlaceholderX('Character Model', 130)}
              </div>
              <div class="wf-sort-zone" style="display: grid; grid-template-columns: 1fr 1fr; gap: 4px;">
                <div class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Weapon: +4</div>
                <div class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Shield: Elven</div>
                <div class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Armor: Steel</div>
                <div class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true">Boots: Swift</div>
              </div>
            </div>
          </div>

          <!-- Visor 3D Central -->
          <div class="wf-draggable-block wf-col-main">
            <div class="wf-box" style="padding: 6px;">
              ${WireframeComponents.renderPlaceholderX('3D Game Viewport (1920x1080)', 280)}
            </div>
          </div>

          <!-- Minimapa y Quest -->
          <div class="wf-draggable-block wf-sort-zone wf-col-side">
            <div class="wf-draggable-block" style="margin-bottom: 10px;">
              <div style="font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">Minimap</div>
              ${WireframeComponents.renderPlaceholderX('Radar / Map', 110)}
            </div>
            <div class="wf-draggable-block wf-box" style="padding: 8px;">
              <div style="font-weight: 800; font-size: 0.78rem;" class="wf-editable-text" contenteditable="true">Active Quest:</div>
              <div style="font-weight: 700; font-size: 0.75rem;" class="wf-editable-text" contenteditable="true">Assault the Keep</div>
              <div style="margin-top: 4px;">${WireframeComponents.renderTextLines(3)}</div>
            </div>
          </div>
        </div>

        <!-- ACTION HOTBAR (SLOTS REORDENABLES) -->
        <div class="wf-draggable-block wf-panel" style="margin-bottom: 14px;">
          <div class="wf-flex-between" style="margin-bottom: 6px;">
            <span style="font-weight: 800; font-size: 0.8rem;" class="wf-editable-text" contenteditable="true">Skill Hotbar</span>
            <span style="font-size: 0.7rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">Keys [1-8]</span>
          </div>
          <div class="wf-sort-zone wf-hotbar-row" style="display: flex; gap: 6px; justify-content: center; flex-wrap: wrap;">
            ${['1 (Attack)', '2 (Fire)', '3 (Heal)', '4 (Shield)', 'Q (Dash)', 'E (Burst)', 'R (Potion)', 'F (Interact)'].map(key => `
              <div class="wf-draggable-block wf-box" style="width: 64px; height: 50px; display: flex; align-items: center; justify-content: center; font-size: 0.72rem; font-weight: 800;">
                <span>${key}</span>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- INVENTARIO -->
        ${WireframeComponents.library['inventory-grid'].render()}
      </div>
    `
  },

  // 5. LANDING PAGE & SAAS (MIRO FLOW - IMAGEN 3)
  saasLandingPage: {
    id: 'saasLandingPage',
    name: 'Landing Page & SaaS (Miro)',
    iconKey: 'layout',
    badge: 'Imagen 3',
    description: 'Estructura de producto web estilo boceto Miro (Imagen 3): hero con titular, 3 columnas de características y equipo.',
    html: `
      <div class="wf-container wf-sort-zone">
        <!-- NAVBAR -->
        <div class="wf-draggable-block wf-sort-zone wf-flex-between" style="border-bottom: 2px solid var(--wf-border-color); padding: 12px 6px; margin-bottom: 20px;">
          <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 8px;">
            ${WireframeComponents.renderCircle('', 26)}
            <span style="font-weight: 900; font-size: 1rem;" class="wf-editable-text" contenteditable="true">COMPANY LOGO</span>
          </div>
          <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 16px; font-weight: 700; font-size: 0.85rem;">
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">PRODUCTS</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">ABOUT</a>
            <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true">CONTACT</a>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true">Sign In</button>
        </div>

        <!-- HERO SECTION -->
        <div class="wf-draggable-block wf-sort-zone wf-hero-section">
          <h1 class="wf-draggable-block" style="font-size: 2rem; font-weight: 900; max-width: 600px; line-height: 1.2;" class="wf-editable-text" contenteditable="true">
            Design Wireframes in Minutes With Pure Line Simplicity
          </h1>
          <div class="wf-draggable-block" style="width: 340px; margin-bottom: 8px;">
            ${WireframeComponents.renderTextLines(3)}
          </div>
          <div class="wf-draggable-block wf-sort-zone wf-flex-row" style="gap: 10px;">
            <button class="wf-draggable-block wf-btn wf-btn-primary" style="padding: 8px 18px; font-size: 0.9rem;">GET STARTED FREE</button>
            <button class="wf-draggable-block wf-btn" style="padding: 8px 16px; font-size: 0.9rem;">WATCH DEMO</button>
          </div>
          <div class="wf-draggable-block" style="width: 100%; max-width: 760px; margin-top: 14px;">
            ${WireframeComponents.renderPlaceholderX('Hero Product Showcase / App Screenshot', 260)}
          </div>
        </div>

        <!-- HIGHLIGHTS / FEATURES (3 COLS) -->
        <div class="wf-draggable-block" style="margin-top: 24px; margin-bottom: 24px;">
          <div style="text-align: center; margin-bottom: 16px;">
            <h2 style="font-size: 1.35rem; font-weight: 800;" class="wf-editable-text" contenteditable="true">HIGHLIGHT FEATURES</h2>
          </div>
          <div class="wf-sort-zone wf-grid-3">
            ${['HIGHLIGHT #1', 'HIGHLIGHT #2', 'HIGHLIGHT #3'].map(title => `
              <div class="wf-draggable-block wf-box" style="padding: 14px;">
                ${WireframeComponents.renderPlaceholderX('', 100)}
                <h4 style="margin-top: 10px; margin-bottom: 4px; font-weight: 800;" class="wf-editable-text" contenteditable="true">${title}</h4>
                <div style="margin-bottom: 10px;">${WireframeComponents.renderTextLines(3)}</div>
                <button class="wf-btn wf-btn-sm">Learn More</button>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- TEAM SECTION -->
        <div class="wf-draggable-block wf-panel" style="margin-bottom: 24px;">
          <div class="wf-draggable-block wf-panel-header wf-editable-text" contenteditable="true">OUR TEAM</div>
          <div class="wf-sort-zone wf-grid-4">
            ${[
              { name: 'Elena Vance', role: 'Head of Product' },
              { name: 'Marcus Chen', role: 'Lead Architect' },
              { name: 'Sarah Connor', role: 'Senior Designer' },
              { name: 'David Miller', role: 'Developer' }
            ].map(m => `
              <div class="wf-draggable-block wf-box" style="padding: 10px; text-align: center;">
                <div style="width: 100%; aspect-ratio: 1/1; margin-bottom: 6px;">
                  ${WireframeComponents.renderPlaceholderX('Photo', '100%')}
                </div>
                <div style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true">${m.name}</div>
                <div style="font-size: 0.72rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">${m.role}</div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- FOOTER -->
        <div class="wf-draggable-block" style="border-top: 2px solid var(--wf-border-color); padding: 16px 0; text-align: center;">
          <div style="font-weight: 700; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true">ADDRESS & CONTACT INFORMATION</div>
          <div style="font-size: 0.72rem; color: var(--wf-text-muted);" class="wf-editable-text" contenteditable="true">
            100 Tech District • contact@product-mockup.com • 2026 Wireframe Studio
          </div>
        </div>
      </div>
    `
  }
};
