/* ==========================================================================
   TEMPLATES LIBRARY (NO EMOJIS - MODULAR SORTABLE ZONES)
   Every element is editable and reorderable inside its zone (AREA).
   ========================================================================== */

const WireframeTemplates = {
  // 0. CRAFTCASTER (SISTEMA COMPLETO DE CARTAS, MAZOS & DUELOS)
  craftCaster: {
    id: 'craftCaster',
    name: 'CraftCaster (Sistema Completo de Cartas & Duelos)',
    iconKey: 'layers',
    badge: 'CraftCaster',
    description: 'Plataforma completa de 7 pantallas (RF-01 a RF-07 / CU-01 a CU-16): Dashboard, Auth, Editor Scratch de Cartas, Creador de Mazos, Discovery & Comunidad, Tablero de Duelos/Test y Panel de Admin.',
    html: `
<div class="wf-container wf-sort-zone">
  <!-- 1. BARRA DE NAVEGACIÓN SUPERIOR -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 18px; margin-bottom: 18px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap;">
      <!-- Logo y Secciones -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 14px; align-items: center;">
        <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 900; font-size: 1.25rem; letter-spacing: 1px; border: 2px solid #111; padding: 2px 8px; background: #f3f4f6;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER</span>
        </div>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="font-weight: 800; font-size: 0.85rem; color: #111;">✨ CREADOR DE CARTAS</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800; font-size: 0.85rem; color: #111;">📚 MIS MAZOS</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad" style="font-weight: 800; font-size: 0.85rem; color: #111;">🌐 DISCOVERY</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_test" data-link-name="6. Tablero & Zona Test" style="font-weight: 800; font-size: 0.85rem; color: #111;">🧪 ZONA DE TEST</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_admin" data-link-name="7. Panel Admin" style="font-weight: 800; font-size: 0.85rem; color: #111;">🛡️ ADMIN</a>
      </div>

      <!-- Perfil de Usuario & Acceso -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 10px; align-items: center; font-size: 0.82rem;">
        <div class="wf-draggable-block wf-box" style="padding: 4px 10px; background: #f9fafb; font-weight: 800;">
          <span class="wf-editable-text" contenteditable="true" spellcheck="false">👤 Álvaro Márquez</span>
          <span style="color: #666; margin-left: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">(Nvl 14 • 💎 450)</span>
        </div>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_auth" data-link-name="2. Acceso y Registro (Login)" style="font-weight: 800;">
          Cerrar Sesión / Cambiar Cuenta
        </button>
      </div>
    </div>
  </div>

  <!-- 2. HERO BANNER PRINCIPAL DE BIENVENIDA -->
  <div class="wf-draggable-block wf-box" style="padding: 24px; margin-bottom: 24px; width: 100%; box-sizing: border-box; background: #f9fafb; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 20px; align-items: center; flex-wrap: wrap;">
      <div style="flex: 1 1 380px;">
        <span style="font-size: 0.75rem; font-weight: 800; text-transform: uppercase; border: 1.5px solid #111; padding: 2px 6px; background: #fff;" class="wf-editable-text" contenteditable="true" spellcheck="false">PLATAFORMA DE CARTAS GAMIFICADA</span>
        <h1 style="font-size: 1.8rem; font-weight: 900; margin: 8px 0 10px 0; line-height: 1.2;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          CRAFTCASTER: DISEÑA, FORJA Y COMPITE
        </h1>
        <p style="font-size: 0.9rem; color: #444; margin-bottom: 16px; line-height: 1.4;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Crea tus propias cartas mediante lógica visual de bloques modulares estilo Scratch, construye mazos equilibrados de 30 cartas y desafía a otros jugadores o practica sin riesgo en la zona de test.
        </p>
        <div class="wf-sort-zone wf-flex-row" style="gap: 10px; flex-wrap: wrap;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_test" data-link-name="6. Tablero & Zona Test" style="padding: 10px 20px; font-weight: 900; font-size: 0.95rem;">
            ⚔️ INICIAR PARTIDA
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="padding: 10px 18px; font-weight: 800;">
            ✨ Crear Nueva Carta (Scratch)
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="padding: 10px 18px; font-weight: 800;">
            📚 Constructor de Mazos
          </button>
        </div>
      </div>
      <div style="flex: 0 1 280px; width: 100%;">
        <div class="wf-placeholder-x" style="height: 170px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Ilustración / Banner CraftCaster Arena</span>
        </div>
      </div>
    </div>
  </div>

  <!-- 3. ACCESOS RÁPIDOS A LOS 4 MÓDULOS PRINCIPALES (CU-11, CU-12, CU-13, CU-14) -->
  <div class="wf-draggable-block" style="margin-bottom: 24px; width: 100%; box-sizing: border-box;">
    <h3 style="font-size: 1.15rem; font-weight: 900; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Módulos del Sistema (Casos de Uso)
    </h3>
    <div class="wf-sort-zone wf-grid-4" style="gap: 14px;">
      <!-- Módulo 1 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">RF-02 • CU-09 &amp; CU-12</div>
          <h4 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">✨ Editor de Cartas</h4>
          <p style="font-size: 0.78rem; color: #555; line-height: 1.35; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Diseña hechizos y criaturas encajando bloques tipo Scratch (eventos, bucles, objetivos y efectos) con balance automático de maná.
          </p>
        </div>
        <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="font-weight: 800;">
          Abrir Creador de Cartas →
        </button>
      </div>

      <!-- Módulo 2 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">RF-03 • CU-10</div>
          <h4 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">📚 Creador de Mazos</h4>
          <p style="font-size: 0.78rem; color: #555; line-height: 1.35; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Organiza tus 30 cartas, evalúa la curva de distribución de costes de maná y valida el equilibrio de tu estrategia.
          </p>
        </div>
        <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800;">
          Gestionar Mis Mazos →
        </button>
      </div>

      <!-- Módulo 3 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">RF-04 • CU-13</div>
          <h4 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">🌐 Discovery &amp; Comunidad</h4>
          <p style="font-size: 0.78rem; color: #555; line-height: 1.35; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Explora cartas públicas, guarda favoritos, clona mazos populares y reporta contenidos desbalanceados o inapropiados.
          </p>
        </div>
        <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad" style="font-weight: 800;">
          Explorar Discovery →
        </button>
      </div>

      <!-- Módulo 4 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between;">
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">RF-06 • CU-14</div>
          <h4 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">🧪 Zona de Test (Sandbox)</h4>
          <p style="font-size: 0.78rem; color: #555; line-height: 1.35; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Experimenta con cartas y mecánicas en un simulador libre sin afectar tu rango, con reseteo instantáneo del tablero.
          </p>
        </div>
        <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_test" data-link-name="6. Tablero & Zona Test" style="font-weight: 800;">
          Entrar a Zona de Test →
        </button>
      </div>
    </div>
  </div>

  <!-- 4. SECCIÓN: TUS MAZOS LISTOS & CARTAS POPULARES -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 24px;">
    <!-- Mazos del Usuario -->
    <div class="wf-draggable-block wf-col-main" style="flex: 6 1 320px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box;">
        <div class="wf-flex-between" style="margin-bottom: 12px;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Tus Mazos Listos para Jugar
          </h3>
          <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-size: 0.8rem; font-weight: 800; color: #111;">
            + Crear Nuevo Mazo
          </a>
        </div>

        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 10px;">
          <div class="wf-draggable-block wf-box" style="padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; background: #ffffff;">
            <div>
              <div style="font-weight: 900; font-size: 0.9rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">🔥 Mazo Fuego &amp; Control Arcana</div>
              <div style="font-size: 0.75rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">30/30 Cartas • Coste medio: 2.8 • Victoria: 68%</div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_test" data-link-name="6. Tablero & Zona Test" style="font-weight: 800;">
                ⚔️ Jugar
              </button>
              <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos">
                Editar
              </button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; background: #ffffff;">
            <div>
              <div style="font-weight: 900; font-size: 0.9rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">⚡ Combo Eléctrico Veloz</div>
              <div style="font-size: 0.75rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">30/30 Cartas • Coste medio: 2.1 • Victoria: 54%</div>
            </div>
            <div style="display: flex; gap: 6px;">
              <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_test" data-link-name="6. Tablero & Zona Test" style="font-weight: 800;">
                ⚔️ Jugar
              </button>
              <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos">
                Editar
              </button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 10px 14px; display: flex; justify-content: space-between; align-items: center; background: #f3f4f6; border-style: dashed;">
            <div>
              <div style="font-weight: 900; font-size: 0.9rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">🛡️ Defensa Arcana (Incompleto)</div>
              <div style="font-size: 0.75rem; color: #777;" class="wf-editable-text" contenteditable="true" spellcheck="false">28/30 Cartas • Faltan 2 cartas para poder jugar</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800;">
              Completar Mazo
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Cartas en Tendencia -->
    <div class="wf-draggable-block wf-col-side" style="flex: 4 1 260px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box;">
        <div class="wf-flex-between" style="margin-bottom: 12px;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Tendencias de Comunidad
          </h3>
          <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad" style="font-size: 0.8rem; font-weight: 800; color: #111;">
            Ver Todo →
          </a>
        </div>

        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 8px;">
          <div class="wf-draggable-block wf-box" style="padding: 8px 10px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 900; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Orbe de Fuego Concentrado</div>
              <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Por @PauCremades • ★★★★★ (4.9)</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad">
              Ver
            </button>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 8px 10px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 900; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Vapor Ancestral</div>
              <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Por @AntonioC • ★★★★★ (4.8)</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad">
              Ver
            </button>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 8px 10px; display: flex; justify-content: space-between; align-items: center;">
            <div>
              <div style="font-weight: 900; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Escudo Reflejante</div>
              <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Por @JesusPerez • ★★★★☆ (4.5)</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="5. Discovery & Comunidad">
              Ver
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- 5. FOOTER OFICIAL CRAFTCASTER -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; text-align: center; background: #ffffff; border-top: 2px solid #111;">
    <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      CraftCaster • Diseño de Sistemas Multimedia (Curso 2026-2027)
    </div>
    <div style="font-size: 0.75rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Equipo: Antonio Carbonell Gómez (Scrum Master), Pau Cremades García, Jesús Pérez Moreno, Álvaro Márquez Sirvent
    </div>
  </div>
</div>
`
  },

    // 0. CRAFTCASTER (PORTAL, MAZOS & DUELOS B&W)
  craftCaster: {
    id: 'craftCaster',
    name: 'CraftCaster (Sistema Completo de Cartas & Duelos)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal completo en blanco y negro: Cabecera con Cartas/Mazos/Duelos/Admin, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador de mazos, editor Scratch de cartas y tablero de combate.',
    html: `
<div class="wf-container wf-sort-zone">
  
  <!-- BARRA SUPERIOR DE NAVEGACIÓN (CRAFTCASTER - STRICT BLACK & WHITE WIREFRAME) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 18px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; color: #111111; border: 2px solid #111111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; margin-bottom: 8px; flex-wrap: wrap; align-items: center;">
      <!-- Logo y Secciones Principales -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 14px; align-items: center; flex-wrap: wrap;">
        <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 900; font-size: 1.15rem; letter-spacing: 1px; border: 2px solid #111; padding: 2px 8px; background: #111; color: #fff;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER</span>
        </div>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">CARTAS (CREADOR)</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">MAZOS DE CREADORES</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">JUGAR PARTIDA</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">ZONA DE TEST</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="6. Discovery & Comunidad" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">DESARROLLADORES &amp; COMUNIDAD</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_admin" data-link-name="7. Panel Admin" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">ADMINISTRACIÓN</a>
      </div>

      <!-- Enlaces de Cuenta y Herramientas -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 12px; font-size: 0.78rem; align-items: center; flex-wrap: wrap;">
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="color: #555; font-weight: 700; cursor: pointer;">☷ BASE DE DATOS DE CARTAS</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_auth" data-link-name="8. Acceso y Registro" style="color: #111; font-weight: 800; border: 1.5px solid #111; padding: 2px 6px;">👤 CUENTAS (@AlvaroMarquez)</span>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 900; padding: 6px 12px;">
          + Crear Tu Propio Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- 2. HERO BANNER PRINCIPAL (STRICT B&W WIREFRAME) -->
  <div class="wf-draggable-block wf-box" style="margin-bottom: 26px; width: 100%; box-sizing: border-box; position: relative; border: 2.5px solid #111; overflow: hidden; background: #f9fafb;">
    <div class="wf-placeholder-x" style="height: 300px; width: 100%; border: none;">
      <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      <div style="position: absolute; bottom: 20px; left: 20px; max-width: 540px; background: rgba(255,255,255,0.96); border: 2px solid #111; padding: 18px 22px; border-radius: 2px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span style="font-size: 0.8rem; font-weight: 900; background: #111; color: #fff; padding: 2px 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER ARENA</span>
          <span style="font-size: 0.8rem; font-weight: 800; border: 1.5px solid #111; padding: 2px 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">EDICIÓN 2026-2027</span>
        </div>
        <h2 style="font-size: 1.3rem; font-weight: 900; margin: 6px 0 8px 0; line-height: 1.25;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          DISEÑA TUS CARTAS CON BLOQUES SCRATCH Y FORJA TU MAZO
        </h2>
        <p style="font-size: 0.78rem; color: #555; margin-bottom: 14px; line-height: 1.35;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Crea hechizos y criaturas modulares, desafía a otros jugadores en duelos tácticos 1v1 o prueba sinergias en la zona de test sin penalización.
        </p>
        <div class="wf-sort-zone wf-flex-row" style="gap: 10px; flex-wrap: wrap;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 900; padding: 8px 18px;">
            ⚔️ JUGAR PARTIDA
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="font-weight: 800; padding: 8px 16px;">
            EXPLORAR MAZOS
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="font-weight: 800; padding: 8px 16px;">
            ✨ CREADOR DE CARTAS
          </button>
        </div>
      </div>
    </div>
    <!-- Carrusel Controls B&W -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: #ffffff; border-top: 1.5px solid #111;">
      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #111; display: inline-block;"></span>
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #fff; display: inline-block;"></span>
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #fff; display: inline-block;"></span>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">←</button>
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">→</button>
      </div>
    </div>
  </div>

  <!-- 3. SECCIÓN: MAZOS MÁS FAMOSOS & PUNTUACIÓN DE MAZMORRAS (6 TARJETAS EN B&W) -->
  <div class="wf-draggable-block" style="margin-bottom: 30px; width: 100%; box-sizing: border-box;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="font-size: 1.45rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ÚLTIMAS NOVEDADES &amp; MAZOS MÁS FAMOSOS
      </h2>
      <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="font-size: 0.85rem; font-weight: 800; color: #111; text-decoration: underline;">
        Ver catálogo completo de mazos de la comunidad →
      </a>
    </div>

    <div class="wf-sort-zone wf-grid-3" style="gap: 18px;">
      <!-- Tarjeta 1 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Tempestad Arcana</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO COMBO</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Tempestad Arcana (30 Cartas)
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Sinergia de bloques Scratch con aceleración de maná y hechizos en cadena para rematar en turnos 4-6. Creado por @JesusPerez.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 10 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Fuego &amp; Control</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO CONTROL</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Fuego &amp; Control Arcana
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Lanza bolas de fuego de daño doble mientras generas escudos continuos con bloques de repetición. Creado por @PauCremades.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 9 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Gólems de Piedra</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO DEFENSA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Gólems de Piedra &amp; Guardia
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Criaturas robustas de alta vida que absorben todo el daño dirigido a tu héroe y devuelven daño de espinas. Creado por @AntonioC.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 8 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#ccc;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 4 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Chispa Veloz</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO AGGRO</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Chispa Veloz &amp; Rayos
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Inundación de cartas de 1-2 manás con daño directo para ganar la partida antes del turno 5. Creado por @AlvaroMarquez.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 9 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 5 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Nigromancia</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO INVOCACIÓN</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Nigromancia de Almas
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Bloques Scratch de evento 'al morir' que invocan copias del cementerio y drenan vida del héroe enemigo.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 7 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#ccc;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 6 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Dragones de Magma</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO FINISHER</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Dragones Volcánicos
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Estrategia de ramp de cristales para invocar criaturas de coste 6 con ataque de área total.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 10 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. LLAMADA A LA ACCIÓN INFERIOR -->
  <div class="wf-draggable-block wf-box" style="padding: 24px; text-align: center; margin-bottom: 26px; border: 2px solid #111; background: #f9fafb;">
    <h2 style="font-size: 1.3rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      JUEGA A CRAFTCASTER DONDE QUIERAS
    </h2>
    <p style="font-size: 0.82rem; color: #555; margin-bottom: 16px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Disponible en navegador web, cliente de escritorio para PC y versión móvil táctil.
    </p>
    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 900;">
        Jugar en Navegador
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800;">
        Descargar Cliente PC
      </button>
    </div>
  </div>

  <!-- 5. FOOTER COMPLETO 4 COLUMNAS -->
  <div class="wf-draggable-block wf-box" style="padding: 20px; border: 2px solid #111; background: #fff;">
    <div class="wf-sort-zone wf-grid-4" style="gap: 16px; margin-bottom: 16px; font-size: 0.78rem;">
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">CRAFTCASTER</h4>
        <div style="color: #666; line-height: 1.4;">Juego de cartas y duelos con programación visual por bloques.</div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">HERRAMIENTAS</h4>
        <div><a href="#" data-link-page="page_craft_card_creator" style="color: #111;">Editor Scratch</a></div>
        <div><a href="#" data-link-page="page_craft_deck_creator" style="color: #111;">Creador de Mazos</a></div>
        <div><a href="#" data-link-page="page_craft_arena_battle" style="color: #111;">Zona de Test</a></div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">COMUNIDAD</h4>
        <div><a href="#" data-link-page="page_craft_discovery" style="color: #111;">Discovery</a></div>
        <div><a href="#" data-link-page="page_craft_mazos_catalogo" style="color: #111;">Mazos TOP</a></div>
        <div><a href="#" data-link-page="page_craft_admin" style="color: #111;">Moderación</a></div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">EQUIPO</h4>
        <div style="color: #666;">Antonio Carbonell (Scrum Master)<br/>Pau Cremades García<br/>Jesús Pérez Moreno<br/>Álvaro Márquez Sirvent</div>
      </div>
    </div>
  </div>
</div>
`
  },
  magicWizards: {
    id: 'magicWizards',
    name: 'CraftCaster (Portal & Duelos B&W)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal completo en blanco y negro: Cabecera con Cartas/Mazos/Duelos/Admin, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador de mazos, editor Scratch de cartas y tablero de combate.',
    html: `
<div class="wf-container wf-sort-zone">
  
  <!-- BARRA SUPERIOR DE NAVEGACIÓN (CRAFTCASTER - STRICT BLACK & WHITE WIREFRAME) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 18px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; color: #111111; border: 2px solid #111111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; margin-bottom: 8px; flex-wrap: wrap; align-items: center;">
      <!-- Logo y Secciones Principales -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 14px; align-items: center; flex-wrap: wrap;">
        <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 900; font-size: 1.15rem; letter-spacing: 1px; border: 2px solid #111; padding: 2px 8px; background: #111; color: #fff;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER</span>
        </div>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">CARTAS (CREADOR)</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">MAZOS DE CREADORES</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">JUGAR PARTIDA</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">ZONA DE TEST</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="6. Discovery & Comunidad" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">DESARROLLADORES &amp; COMUNIDAD</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_admin" data-link-name="7. Panel Admin" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">ADMINISTRACIÓN</a>
      </div>

      <!-- Enlaces de Cuenta y Herramientas -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 12px; font-size: 0.78rem; align-items: center; flex-wrap: wrap;">
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="color: #555; font-weight: 700; cursor: pointer;">☷ BASE DE DATOS DE CARTAS</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_auth" data-link-name="8. Acceso y Registro" style="color: #111; font-weight: 800; border: 1.5px solid #111; padding: 2px 6px;">👤 CUENTAS (@AlvaroMarquez)</span>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 900; padding: 6px 12px;">
          + Crear Tu Propio Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- 2. HERO BANNER PRINCIPAL (STRICT B&W WIREFRAME) -->
  <div class="wf-draggable-block wf-box" style="margin-bottom: 26px; width: 100%; box-sizing: border-box; position: relative; border: 2.5px solid #111; overflow: hidden; background: #f9fafb;">
    <div class="wf-placeholder-x" style="height: 300px; width: 100%; border: none;">
      <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      <div style="position: absolute; bottom: 20px; left: 20px; max-width: 540px; background: rgba(255,255,255,0.96); border: 2px solid #111; padding: 18px 22px; border-radius: 2px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span style="font-size: 0.8rem; font-weight: 900; background: #111; color: #fff; padding: 2px 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER ARENA</span>
          <span style="font-size: 0.8rem; font-weight: 800; border: 1.5px solid #111; padding: 2px 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">EDICIÓN 2026-2027</span>
        </div>
        <h2 style="font-size: 1.3rem; font-weight: 900; margin: 6px 0 8px 0; line-height: 1.25;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          DISEÑA TUS CARTAS CON BLOQUES SCRATCH Y FORJA TU MAZO
        </h2>
        <p style="font-size: 0.78rem; color: #555; margin-bottom: 14px; line-height: 1.35;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Crea hechizos y criaturas modulares, desafía a otros jugadores en duelos tácticos 1v1 o prueba sinergias en la zona de test sin penalización.
        </p>
        <div class="wf-sort-zone wf-flex-row" style="gap: 10px; flex-wrap: wrap;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 900; padding: 8px 18px;">
            ⚔️ JUGAR PARTIDA
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="font-weight: 800; padding: 8px 16px;">
            EXPLORAR MAZOS
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)" style="font-weight: 800; padding: 8px 16px;">
            ✨ CREADOR DE CARTAS
          </button>
        </div>
      </div>
    </div>
    <!-- Carrusel Controls B&W -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: #ffffff; border-top: 1.5px solid #111;">
      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #111; display: inline-block;"></span>
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #fff; display: inline-block;"></span>
        <span style="width: 10px; height: 10px; border: 1.5px solid #111; background: #fff; display: inline-block;"></span>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">←</button>
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">→</button>
      </div>
    </div>
  </div>

  <!-- 3. SECCIÓN: MAZOS MÁS FAMOSOS & PUNTUACIÓN DE MAZMORRAS (6 TARJETAS EN B&W) -->
  <div class="wf-draggable-block" style="margin-bottom: 30px; width: 100%; box-sizing: border-box;">
    <div style="text-align: center; margin-bottom: 20px;">
      <h2 style="font-size: 1.45rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ÚLTIMAS NOVEDADES &amp; MAZOS MÁS FAMOSOS
      </h2>
      <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="font-size: 0.85rem; font-weight: 800; color: #111; text-decoration: underline;">
        Ver catálogo completo de mazos de la comunidad →
      </a>
    </div>

    <div class="wf-sort-zone wf-grid-3" style="gap: 18px;">
      <!-- Tarjeta 1 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Tempestad Arcana</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO COMBO</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Tempestad Arcana (30 Cartas)
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Sinergia de bloques Scratch con aceleración de maná y hechizos en cadena para rematar en turnos 4-6. Creado por @JesusPerez.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 10 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Fuego &amp; Control</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO CONTROL</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Fuego &amp; Control Arcana
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Lanza bolas de fuego de daño doble mientras generas escudos continuos con bloques de repetición. Creado por @PauCremades.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 9 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Gólems de Piedra</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO DEFENSA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Gólems de Piedra &amp; Guardia
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Criaturas robustas de alta vida que absorben todo el daño dirigido a tu héroe y devuelven daño de espinas. Creado por @AntonioC.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 8 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#ccc;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 4 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Chispa Veloz</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO AGGRO</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Chispa Veloz &amp; Rayos
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Inundación de cartas de 1-2 manás con daño directo para ganar la partida antes del turno 5. Creado por @AlvaroMarquez.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 9 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 5 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Nigromancia</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO INVOCACIÓN</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Nigromancia de Almas
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Bloques Scratch de evento 'al morir' que invocan copias del cementerio y drenan vida del héroe enemigo.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 7 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#ccc;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 6 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 2px solid #111; background: #fff;">
        <div class="wf-draggable-block" style="position: relative;">
          <div class="wf-placeholder-x" style="height: 130px; width: 100%;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Dragones de Magma</span>
          </div>
          <span style="position: absolute; bottom: 8px; left: 8px; background: #111; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAZO FINISHER</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 6px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mazo Dragones Volcánicos
          </h3>
          <p style="font-size: 0.78rem; color: #555; margin-bottom: 12px; flex: 1; line-height: 1.35;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Estrategia de ramp de cristales para invocar criaturas de coste 6 con ataque de área total.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px; border-top: 1px solid #eee; padding-top: 6px;">
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Récord en Mazmorra: Piso 10 / 10</div>
            <div class="wf-rating-stars"><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span><span style="display:inline-flex; color:#111;">★</span></div>
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. LLAMADA A LA ACCIÓN INFERIOR -->
  <div class="wf-draggable-block wf-box" style="padding: 24px; text-align: center; margin-bottom: 26px; border: 2px solid #111; background: #f9fafb;">
    <h2 style="font-size: 1.3rem; font-weight: 900; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      JUEGA A CRAFTCASTER DONDE QUIERAS
    </h2>
    <p style="font-size: 0.82rem; color: #555; margin-bottom: 16px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Disponible en navegador web, cliente de escritorio para PC y versión móvil táctil.
    </p>
    <div style="display: flex; gap: 10px; justify-content: center; flex-wrap: wrap;">
      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 900;">
        Jugar en Navegador
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800;">
        Descargar Cliente PC
      </button>
    </div>
  </div>

  <!-- 5. FOOTER COMPLETO 4 COLUMNAS -->
  <div class="wf-draggable-block wf-box" style="padding: 20px; border: 2px solid #111; background: #fff;">
    <div class="wf-sort-zone wf-grid-4" style="gap: 16px; margin-bottom: 16px; font-size: 0.78rem;">
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">CRAFTCASTER</h4>
        <div style="color: #666; line-height: 1.4;">Juego de cartas y duelos con programación visual por bloques.</div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">HERRAMIENTAS</h4>
        <div><a href="#" data-link-page="page_craft_card_creator" style="color: #111;">Editor Scratch</a></div>
        <div><a href="#" data-link-page="page_craft_deck_creator" style="color: #111;">Creador de Mazos</a></div>
        <div><a href="#" data-link-page="page_craft_arena_battle" style="color: #111;">Zona de Test</a></div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">COMUNIDAD</h4>
        <div><a href="#" data-link-page="page_craft_discovery" style="color: #111;">Discovery</a></div>
        <div><a href="#" data-link-page="page_craft_mazos_catalogo" style="color: #111;">Mazos TOP</a></div>
        <div><a href="#" data-link-page="page_craft_admin" style="color: #111;">Moderación</a></div>
      </div>
      <div>
        <h4 style="font-weight: 900; margin-bottom: 6px;">EQUIPO</h4>
        <div style="color: #666;">Antonio Carbonell (Scrum Master)<br/>Pau Cremades García<br/>Jesús Pérez Moreno<br/>Álvaro Márquez Sirvent</div>
      </div>
    </div>
  </div>
</div>
`
  },

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
        <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box;">
          <div class="wf-sort-zone wf-flex-between" style="margin-bottom: 10px; gap: 12px;">
            <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.85rem; border: 1.5px solid #111; padding: 2px 6px;">MENU</span>
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 900; font-size: 1.05rem; border: 1.5px solid #111; padding: 2px 8px;">STORE LOGO</span>
            </div>
            <div class="wf-draggable-block wf-editable-text" style="font-size: 0.78rem; font-weight: 600;" contenteditable="true" spellcheck="false">Location: Main Ave 102</div>
            <div class="wf-sort-zone wf-flex-row" style="gap: 12px; font-size: 0.8rem; font-weight: 700;">
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Alerts</span>
              <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Cart (3)</span>
            </div>
          </div>
          <div class="wf-draggable-block wf-search-group" style="width: 100%;">
            <input type="text" class="wf-input" placeholder="Search products, brands and items..." style="flex: 1; min-width: 120px;" />
            <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Search</button>
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
