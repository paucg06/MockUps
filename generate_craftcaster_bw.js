const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/paucr/Documents/Proyectos/MockUps');

// Helper for top navigation bar in STRICT WIREFRAME BLACK & WHITE
function getCraftNav(activePageKey = 'home') {
  return `
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
  </div>`;
}

// 8 Screens
const pages = [
  // 1. INICIO / PORTAL (HERO & 6 MAZOS TOP CON PUNTUACIÓN DE MAZMORRAS)
  {
    id: 'page_craft_home',
    title: '1. Inicio / Portal (Hero & 6 Mazos TOP con Mazmorras)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('home')}

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

  // 2. CATÁLOGO DE MAZOS DE CREADORES
  {
    id: 'page_craft_mazos_catalogo',
    title: '2. Catálogo & Explorador de Mazos de Creadores',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('mazos')}

  <!-- Cabecera de Mazos -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; margin-bottom: 18px; width: 100%; box-sizing: border-box; background: #f9fafb; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div>
        <span style="font-size: 0.72rem; font-weight: 800; background: #111; color: #fff; padding: 2px 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">EXPLORADOR DE MAZOS</span>
        <h2 style="font-size: 1.35rem; font-weight: 900; margin: 4px 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          MAZOS CREADOS POR LA COMUNIDAD
        </h2>
        <p style="font-size: 0.8rem; color: #555; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Encuentra barajas de 30 cartas completas, clónalas a tu cuenta o pruébalas directamente en la arena.
        </p>
      </div>

      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 900; padding: 8px 16px;">
        + Crear Mi Propio Mazo (30 Cartas)
      </button>
    </div>
  </div>

  <!-- Barra de Filtros de Mazos -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 14px; margin-bottom: 20px; background: #fff; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 10px; flex-wrap: wrap; align-items: center;">
      <div class="wf-search-group" style="flex: 1 1 240px;">
        <input type="text" class="wf-input" placeholder="Buscar mazo por nombre, creador o palabras clave..." style="width: 100%;" />
        <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Buscar</button>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Todas las Estrategias</option>
          <option>Control de Mesa</option>
          <option>Agresivo (Aggro)</option>
          <option>Combo de Bloques Scratch</option>
          <option>Defensa / Guardia</option>
        </select>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Nivel Mazmorra: Todos</option>
          <option>Piso 9-10 (Élite)</option>
          <option>Piso 6-8 (Avanzado)</option>
          <option>Piso 1-5 (Iniciación)</option>
        </select>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Ordenar: Más Populares</option>
          <option>Mayor Ratio de Victoria</option>
          <option>Más Recientes</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Catálogo de Mazos en 4 Columnas (8 Mazos) -->
  <div class="wf-draggable-block" style="margin-bottom: 24px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-grid-4" style="gap: 16px;">
      ${[
        { name: 'Tempestad Arcana', type: 'COMBO', author: '@JesusPerez', floor: 'Piso 10', cost: '2.4 Maná' },
        { name: 'Fuego & Control', type: 'CONTROL', author: '@PauCremades', floor: 'Piso 9', cost: '2.8 Maná' },
        { name: 'Gólems de Piedra', type: 'DEFENSA', author: '@AntonioC', floor: 'Piso 8', cost: '3.1 Maná' },
        { name: 'Chispa Veloz', type: 'AGGRO', author: '@AlvaroMarquez', floor: 'Piso 9', cost: '1.9 Maná' },
        { name: 'Nigromancia Almas', type: 'INVOCACIÓN', author: '@SombraOscura', floor: 'Piso 7', cost: '2.6 Maná' },
        { name: 'Escudos de Cristal', type: 'DEFENSA', author: '@IronGuard', floor: 'Piso 8', cost: '2.7 Maná' },
        { name: 'Dragones Volcánicos', type: 'FINISHER', author: '@DragonMaster', floor: 'Piso 10', cost: '3.6 Maná' },
        { name: 'Sinergia Scratch Pro', type: 'MODULAR', author: '@BlockCoder', floor: 'Piso 9', cost: '2.5 Maná' }
      ].map(m => `
        <div class="wf-draggable-block wf-box" style="padding: 12px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #111; background: #fff;">
          <div>
            <div class="wf-placeholder-x" style="height: 100px; width: 100%; margin-bottom: 8px;">
              <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
              <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">${m.name}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <span style="font-size: 0.65rem; font-weight: 800; background: #111; color: #fff; padding: 1px 5px;">${m.type}</span>
              <span style="font-size: 0.7rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">${m.cost}</span>
            </div>
            <h4 style="font-size: 0.88rem; font-weight: 900; margin: 4px 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">${m.name}</h4>
            <div style="font-size: 0.7rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Por ${m.author} • 30 Cartas</div>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Mazmorra: ${m.floor} ★★★★★</div>
          </div>

          <div style="display: flex; flex-direction: column; gap: 4px;">
            <button class="wf-btn wf-btn-sm wf-btn-primary wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 800; font-size: 0.72rem;">
              Clonar a Mi Colección →
            </button>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-size: 0.7rem;">
              Probar en Arena
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>
</div>
`
  },

  // 3. EDITOR DE CARTAS CON BLOQUES SCRATCH
  {
    id: 'page_craft_card_creator',
    title: '3. Editor de Cartas (Scratch Bloques Modulares)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('cards')}

  <!-- Barra Superior del Editor de Cartas -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap;">
      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <span style="font-weight: 900; font-size: 1.05rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ✨ Creador de Cartas (Lógica Modular Scratch)
        </span>
        <span style="font-size: 0.72rem; border: 1.5px solid #111; padding: 2px 6px; background: #f3f4f6; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ⚖️ Balance: 100% Equilibrada (Coste Sugerido: 4 Maná)
        </span>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test">
          🧪 Probar en Test
        </button>
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="6. Discovery & Comunidad">
          🔗 Compartir en Discovery
        </button>
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 900;">
          💾 Guardar Carta en Mi Colección
        </button>
      </div>
    </div>
  </div>

  <!-- Parámetros Principales de la Carta -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 16px; background: #f9fafb; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nombre de Carta:</span>
        <input type="text" class="wf-input" value="Bola de Fuego Arcana" style="font-weight: 800; min-width: 180px;" />
      </div>

      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tipo:</span>
        <select class="wf-input" style="font-weight: 700;">
          <option selected>Hechizo de Ataque</option>
          <option>Criatura Invocada</option>
          <option>Artefacto Mágico</option>
          <option>Encantamiento de Campo</option>
        </select>
      </div>

      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Coste de Maná:</span>
        <input type="number" class="wf-input" value="4" style="width: 50px; text-align: center; font-weight: 900;" />
      </div>

      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Rareza:</span>
        <select class="wf-input" style="font-weight: 700;">
          <option>Común</option>
          <option>Rara</option>
          <option selected>Épica</option>
          <option>Legendaria</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Layout de 3 Columnas: Paleta Scratch | Lienzo de Ensamblaje | Vista Previa de la Carta -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 24px;">
    <!-- COL 1: Paleta de Bloques Scratch (STRICT B&W) -->
    <div class="wf-draggable-block wf-col-side" style="flex: 3 1 220px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div style="font-weight: 900; font-size: 0.9rem; margin-bottom: 10px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          🧩 Paleta de Bloques Scratch
        </div>

        <!-- Categoría 1: Eventos -->
        <div style="margin-bottom: 12px;">
          <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 4px; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">EVENTOS (SOMBREROS)</div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div class="wf-scratch-block block-hat block-event" style="cursor: grab;">
              <span>al lanzar hechizo</span>
            </div>
            <div class="wf-scratch-block block-hat block-event" style="cursor: grab;">
              <span>al entrar en combate</span>
            </div>
            <div class="wf-scratch-block block-hat block-event" style="cursor: grab;">
              <span>al recibir daño</span>
            </div>
          </div>
        </div>

        <!-- Categoría 2: Control & Bucles -->
        <div style="margin-bottom: 12px;">
          <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 4px; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">CONTROL &amp; BUCLES</div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div class="wf-scratch-block block-stack block-control" style="cursor: grab;">
              <span>🔄 repetir</span>
              <span class="wf-scratch-pill">2</span>
              <span>veces</span>
            </div>
            <div class="wf-scratch-block block-stack block-control" style="cursor: grab;">
              <span>si</span>
              <span class="wf-scratch-pill">salud &lt; 10</span>
              <span>entonces</span>
            </div>
          </div>
        </div>

        <!-- Categoría 3: Objetivos -->
        <div style="margin-bottom: 12px;">
          <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 4px; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">OBJETIVOS &amp; DIANAS</div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div class="wf-scratch-block block-stack block-target" style="cursor: grab;">
              <span>🎯 apuntar a</span>
              <span class="wf-scratch-pill">1 enemigo</span>
            </div>
            <div class="wf-scratch-block block-stack block-target" style="cursor: grab;">
              <span>apuntar a</span>
              <span class="wf-scratch-pill">todos aliados</span>
            </div>
          </div>
        </div>

        <!-- Categoría 4: Efectos & Daño -->
        <div>
          <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 4px; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">EFECTOS &amp; MODIFICADORES</div>
          <div style="display: flex; flex-direction: column; gap: 6px;">
            <div class="wf-scratch-block block-stack block-effect" style="cursor: grab;">
              <span>💥 infligir</span>
              <span class="wf-scratch-pill">4</span>
              <span>daño</span>
            </div>
            <div class="wf-scratch-block block-stack block-effect" style="cursor: grab;">
              <span>🛡️ otorgar</span>
              <span class="wf-scratch-pill">2</span>
              <span>escudo</span>
            </div>
            <div class="wf-scratch-block block-stack block-effect" style="cursor: grab;">
              <span>🃏 robar</span>
              <span class="wf-scratch-pill">1</span>
              <span>carta</span>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COL 2: Espacio de Trabajo / Lienzo Scratch -->
    <div class="wf-draggable-block wf-col-main" style="flex: 5 1 320px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 10px;">
          <div style="font-weight: 900; font-size: 0.9rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            🛠️ Espacio de Ensamblaje Visual (Lógica Scratch)
          </div>
          <span style="font-size: 0.72rem; color: #666;" class="wf-editable-text" contenteditable="true" spellcheck="false">Arrastra o haz clic para editar valores</span>
        </div>

        <div class="wf-scratch-workspace">
          <!-- Pila Ensamblada de Bloques Scratch -->
          <div class="wf-scratch-stack">
            <!-- Bloque 1: Sombrero Evento -->
            <div class="wf-scratch-block block-hat block-event">
              <span>al lanzar hechizo</span>
              <input type="text" class="wf-scratch-pill wf-editable-text" value="Bola de Fuego Arcana" style="width: 140px;" />
            </div>

            <!-- Bloque 2: Repetir -->
            <div class="wf-scratch-block block-stack block-control">
              <span>🔄 repetir</span>
              <input type="number" class="wf-scratch-pill wf-editable-text" value="2" style="width: 45px; text-align: center;" />
              <span>veces</span>
            </div>

            <!-- Bloque 3: Objetivo -->
            <div class="wf-scratch-block block-stack block-target">
              <span>🎯 apuntar a</span>
              <select class="wf-scratch-pill wf-editable-text">
                <option selected>1 enemigo</option>
                <option>todos los enemigos</option>
                <option>héroe rival</option>
              </select>
            </div>

            <!-- Bloque 4: Infligir Daño -->
            <div class="wf-scratch-block block-stack block-effect">
              <span>💥 infligir</span>
              <input type="number" class="wf-scratch-pill wf-editable-text" value="4" style="width: 45px; text-align: center;" />
              <span>de daño de fuego</span>
            </div>

            <!-- Bloque 5: Otorgar Escudo -->
            <div class="wf-scratch-block block-stack block-effect">
              <span>🛡️ otorgar</span>
              <input type="number" class="wf-scratch-pill wf-editable-text" value="2" style="width: 45px; text-align: center;" />
              <span>de escudo a tu héroe</span>
            </div>
          </div>

          <div style="border-top: 1.5px dashed #ccc; padding-top: 10px; margin-top: 14px; font-size: 0.75rem; color: #666;">
            💡 <strong>Regla de balance:</strong> Cada repetición incrementa el coste de maná base (+1 Maná por ciclo y +1 por cada 3 de daño).
          </div>
        </div>
      </div>
    </div>

    <!-- COL 3: Vista Previa de la Carta en Tiempo Real -->
    <div class="wf-draggable-block wf-col-side" style="flex: 4 1 260px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div style="font-weight: 900; font-size: 0.9rem; margin-bottom: 12px; text-align: center;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          👁️ Vista Previa de la Carta
        </div>

        <!-- Marco de Carta Wireframe Completo -->
        <div class="wf-box" style="border: 2.5px solid #111; border-radius: 6px; padding: 12px; background: #ffffff; box-shadow: 0 4px 6px rgba(0,0,0,0.06); max-width: 260px; margin: 0 auto;">
          <!-- Cabecera de la Carta -->
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 2px solid #111; padding-bottom: 6px; margin-bottom: 8px;">
            <span style="font-weight: 900; font-size: 0.85rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Bola de Fuego Arcana</span>
            <span style="font-weight: 900; font-size: 0.95rem; border: 1.5px solid #111; border-radius: 50%; width: 22px; height: 22px; display: inline-flex; align-items: center; justify-content: center; background: #f3f4f6;" class="wf-editable-text" contenteditable="true" spellcheck="false">4</span>
          </div>

          <!-- Arte de la Carta -->
          <div class="wf-placeholder-x" style="height: 120px; width: 100%; margin-bottom: 8px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Ilustración de Carta</span>
          </div>

          <!-- Tipo & Subtipo -->
          <div style="font-size: 0.7rem; font-weight: 800; border-bottom: 1.5px solid #111; padding-bottom: 4px; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Hechizo de Ataque • Épica
          </div>

          <!-- Caja de Texto de Habilidad generada por Scratch -->
          <div class="wf-box" style="padding: 8px; font-size: 0.75rem; line-height: 1.35; background: #f9fafb; margin-bottom: 8px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">
              <strong>Al lanzar hechizo:</strong> Repite 2 veces: Inflige 4 de daño a 1 objetivo enemigo y otorga 2 de escudo a tu héroe.
            </span>
          </div>

          <!-- Pie de Carta -->
          <div style="display: flex; justify-content: space-between; align-items: center; font-size: 0.65rem; color: #666;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Autor: @AlvaroMarquez</span>
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">CraftCaster v2</span>
          </div>
        </div>

        <div style="margin-top: 14px;">
          <button class="wf-btn wf-btn-sm wf-btn-block wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos" style="font-weight: 900;">
            Añadir Directamente a un Mazo →
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
  },

  // 4. CREADOR DE MAZOS (DECK CREATOR)
  {
    id: 'page_craft_deck_creator',
    title: '4. Creador de Mazos (Gestor & Curva de Maná)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('mazos')}

  <!-- Cabecera del Creador de Mazos -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; align-items: center; gap: 10px; flex-wrap: wrap;">
        <span style="font-weight: 900; font-size: 1.05rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          📚 Creador &amp; Gestor de Mazos (30 Cartas)
        </span>
        <span style="font-size: 0.72rem; border: 1.5px solid #111; padding: 2px 6px; background: #f3f4f6; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ✓ Mazo Válido (30 / 30 Cartas)
        </span>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="6. Discovery & Comunidad">
          🔗 Compartir en Discovery
        </button>
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="font-weight: 900;">
          ⚔️ Jugar con este Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- Parámetros del Mazo & Curva de Maná -->
  <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 18px; background: #f9fafb; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 16px; flex-wrap: wrap; align-items: center; margin-bottom: 12px;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nombre del Mazo:</span>
        <input type="text" class="wf-input" value="Mazo Fuego &amp; Control Arcana" style="font-weight: 800; min-width: 220px;" />
      </div>

      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Estrategia:</span>
        <select class="wf-input" style="font-weight: 700;">
          <option selected>Control de Mesa &amp; Hechizos</option>
          <option>Agresivo Rápido (Aggro)</option>
          <option>Combo de Bloques Scratch</option>
          <option>Midrange Equilibrado</option>
        </select>
      </div>

      <div style="font-size: 0.8rem; font-weight: 800;">
        <span class="wf-editable-text" contenteditable="true" spellcheck="false">Estadísticas: 18 Criaturas • 10 Hechizos • 2 Artefactos | Coste Medio: 2.8</span>
      </div>
    </div>

    <!-- Gráfico Wireframe de Curva de Maná -->
    <div>
      <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 6px; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        CURVA DE MANÁ (DISTRIBUCIÓN POR COSTE)
      </div>
      <div style="display: flex; gap: 10px; align-items: flex-end; height: 60px; border-bottom: 2px solid #111; padding-bottom: 2px;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">4</span>
          <div style="width: 100%; height: 32px; background: #d1d5db; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">1</span>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">8</span>
          <div style="width: 100%; height: 55px; background: #9ca3af; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">2</span>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">7</span>
          <div style="width: 100%; height: 48px; background: #9ca3af; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">3</span>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">6</span>
          <div style="width: 100%; height: 40px; background: #d1d5db; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">4</span>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">3</span>
          <div style="width: 100%; height: 24px; background: #e5e7eb; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">5</span>
        </div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center; gap: 2px;">
          <span style="font-size: 0.65rem; font-weight: 800;">2</span>
          <div style="width: 100%; height: 16px; background: #e5e7eb; border: 1.5px solid #111;"></div>
          <span style="font-size: 0.7rem; font-weight: 800;">6+</span>
        </div>
      </div>
    </div>
  </div>

  <!-- Layout en 2 Columnas: Colección de Cartas Disponibles | Composición del Mazo -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 24px;">
    <!-- COL 1: Biblioteca de Cartas Propias & Favoritas -->
    <div class="wf-draggable-block wf-col-main" style="flex: 6 1 340px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
          <div style="font-weight: 900; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Colección de Cartas Disponibles
          </div>
          <div style="display: flex; gap: 6px;">
            <input type="text" class="wf-input" placeholder="Buscar por nombre..." style="width: 140px; font-size: 0.75rem;" />
            <select class="wf-input" style="font-size: 0.75rem;">
              <option>Todos los Tipos</option>
              <option>Criaturas</option>
              <option>Hechizos</option>
            </select>
          </div>
        </div>

        <!-- Rejilla de Cartas Disponibles -->
        <div class="wf-sort-zone wf-grid-3" style="gap: 10px;">
          <!-- Carta 1 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Bola de Fuego</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">4💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Hechizo • 4 Daño x2</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (2/2)
            </button>
          </div>

          <!-- Carta 2 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Vapor</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">3💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura 3/4 • Guardia</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (2/2)
            </button>
          </div>

          <!-- Carta 3 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Chispa Arcana</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">1💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Hechizo • 2 Daño</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (2/2)
            </button>
          </div>

          <!-- Carta 4 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Caballero Rayo</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">2💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura 4/3 • Carga</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (2/2)
            </button>
          </div>

          <!-- Carta 5 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Escudo Reflejo</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">2💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Artefacto • +3 Escudo</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (2/2)
            </button>
          </div>

          <!-- Carta 6 -->
          <div class="wf-draggable-block wf-box" style="padding: 10px; display: flex; flex-direction: column; justify-content: space-between; border: 1.5px solid #111;">
            <div>
              <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.8rem; margin-bottom: 4px;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">Dragón Magma</span>
                <span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem; background: #eee;">6💎</span>
              </div>
              <div style="font-size: 0.7rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura 6/6 • Vuelo</div>
            </div>
            <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; font-size: 0.72rem;">
              + Añadir (1/2)
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- COL 2: Lista del Mazo Actual -->
    <div class="wf-draggable-block wf-col-side" style="flex: 4 1 260px;">
      <div class="wf-box" style="padding: 16px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 10px;">
          <div style="font-weight: 900; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Cartas en el Mazo (30)
          </div>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.7rem;">Vaciar</button>
        </div>

        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 6px; font-size: 0.78rem;">
          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[1💎] Chispa Arcana</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x2</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[2💎] Caballero del Rayo</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x2</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[2💎] Escudo Reflejante</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x2</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[3💎] Gólem de Vapor</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x2</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[4💎] Bola de Fuego Arcana</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x2</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>

          <div class="wf-draggable-block wf-box" style="padding: 6px 10px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[6💎] Dragón de Magma</span>
            <div style="display: flex; align-items: center; gap: 4px;">
              <strong>x1</strong>
              <button class="wf-btn wf-btn-sm" style="padding: 1px 5px;">-</button>
            </div>
          </div>
        </div>

        <div style="margin-top: 14px;">
          <button class="wf-btn wf-btn-primary wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test" style="padding: 10px; font-weight: 900;">
            💾 Guardar y Jugar Partida
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
  },

  // 5. TABLERO DE BATALLA & ZONA DE TEST
  {
    id: 'page_craft_arena_battle',
    title: '5. Tablero de Batalla & Zona de Test (Duelos 1v1)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('battle')}

  <!-- Cabecera de la Arena de Batalla -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 14px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_home" data-link-name="1. Inicio / Portal" style="font-weight: 800;">
          ← Salir al Portal
        </button>
        <span style="font-weight: 900; font-size: 1.05rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ⚔️ Tablero de Batalla &amp; Zona de Test (1v1)
        </span>
        <span style="font-size: 0.72rem; border: 1.5px solid #111; padding: 2px 6px; background: #f3f4f6; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          MODO: 🧪 Zona de Test (Sandbox Sin Riesgo)
        </span>
      </div>

      <div style="display: flex; gap: 6px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false">
          💾 Guardar Partida
        </button>
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false">
          🔄 Reiniciar Tablero
        </button>
      </div>
    </div>
  </div>

  <!-- TABLERO PRINCIPAL DE DUELO (ARENA) -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; margin-bottom: 16px; background: #f9fafb; width: 100%; box-sizing: border-box; border: 2.5px solid #111;">
    <!-- 1. ZONA SUPERIOR: RIVAL / BOT DE PRUEBA -->
    <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 12px; background: #ffffff; border: 1.5px solid #111;">
      <div class="wf-sort-zone wf-flex-between" style="gap: 12px; margin-bottom: 8px; align-items: center;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border: 2px solid #111; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">🤖</div>
          <div>
            <div style="font-weight: 900; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Bot de Entrenamiento v2.4</div>
            <div style="font-size: 0.72rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Estrategia: Resistencia &amp; Control</div>
          </div>
        </div>

        <div style="display: flex; gap: 12px; align-items: center;">
          <div style="font-weight: 900; font-size: 1rem; border: 2px solid #111; padding: 4px 10px; background: #f3f4f6;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ❤️ HP Rival: 22 / 30
          </div>
          <div style="font-weight: 900; font-size: 0.9rem; border: 1.5px solid #111; padding: 4px 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            💎 Maná: 5 / 5
          </div>
          <div style="font-size: 0.75rem; font-weight: 800; color: #555;">[3 Cartas en Mano]</div>
        </div>
      </div>

      <!-- Criaturas Enemigas en Mesa -->
      <div style="font-size: 0.7rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">CAMPO ENEMIGO (BLOQUEO Y GUARDIAS):</div>
      <div class="wf-sort-zone wf-grid-4" style="gap: 8px;">
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 2px solid #111; background: #f9fafb;">
          <div style="font-weight: 900; font-size: 0.78rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Guardián Piedra</div>
          <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">⚔️ 2 / ❤️ 4 (Guardia)</div>
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 2px solid #111; background: #f9fafb;">
          <div style="font-weight: 900; font-size: 0.78rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Arquero Espectral</div>
          <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">⚔️ 3 / ❤️ 2 (Rango)</div>
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 1.5px dashed #aaa; color: #888; font-size: 0.75rem;">
          [Casilla Libre]
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 1.5px dashed #aaa; color: #888; font-size: 0.75rem;">
          [Casilla Libre]
        </div>
      </div>
    </div>

    <!-- 2. ZONA CENTRAL: LÍNEA DE COMBATE Y RESOLUCIÓN -->
    <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 12px; background: #f3f4f6; border: 2px dashed #111; text-align: center;">
      <div class="wf-sort-zone wf-flex-between" style="gap: 10px; align-items: center; flex-wrap: wrap;">
        <div style="font-size: 0.78rem; font-weight: 800; text-align: left;">
          <div>⚡ <strong>Fase de Resolución:</strong> Turno 5 • Selecciona objetivo o ataca</div>
          <div style="font-size: 0.72rem; color: #555;">Última acción: Has invocado Orbe de Fuego causando 4 de daño.</div>
        </div>
        <div style="display: flex; gap: 8px;">
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            🎯 Seleccionar Objetivo
          </button>
          <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 900; padding: 6px 14px;">
            ⚡ DECLARAR ATAQUE
          </button>
        </div>
      </div>
    </div>

    <!-- 3. ZONA INFERIOR: TU CAMPO Y TUS CRIATURAS -->
    <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 12px; background: #ffffff; border: 1.5px solid #111;">
      <div style="font-size: 0.7rem; font-weight: 800; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">TUS CRIATURAS EN COMBATE:</div>
      <div class="wf-sort-zone wf-grid-4" style="gap: 8px; margin-bottom: 10px;">
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 2px solid #111; background: #ffffff;">
          <div style="font-weight: 900; font-size: 0.78rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Caballero del Rayo</div>
          <div style="font-size: 0.7rem; color: #111;" class="wf-editable-text" contenteditable="true" spellcheck="false">⚔️ 4 / ❤️ 3 (Listo para atacar)</div>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.65rem; padding: 1px 4px; margin-top: 2px;">Atacar</button>
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 2px solid #111; background: #ffffff;">
          <div style="font-weight: 900; font-size: 0.78rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Elemental de Agua</div>
          <div style="font-size: 0.7rem; color: #111;" class="wf-editable-text" contenteditable="true" spellcheck="false">⚔️ 1 / ❤️ 5 (Bloqueo)</div>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.65rem; padding: 1px 4px; margin-top: 2px;">Defender</button>
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 1.5px dashed #aaa; color: #888; font-size: 0.75rem;">
          [Espacio de Invocación]
        </div>
        <div class="wf-draggable-block wf-box" style="padding: 6px; text-align: center; border: 1.5px dashed #aaa; color: #888; font-size: 0.75rem;">
          [Espacio de Invocación]
        </div>
      </div>

      <!-- Estado de Tu Héroe -->
      <div class="wf-sort-zone wf-flex-between" style="gap: 12px; align-items: center; border-top: 1.5px solid #eee; padding-top: 8px;">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 32px; height: 32px; border: 2px solid #111; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900;">🧙</div>
          <div>
            <div style="font-weight: 900; font-size: 0.95rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tu Héroe (Álvaro)</div>
            <div style="font-size: 0.72rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Mazo Fuego &amp; Control Arcana</div>
          </div>
        </div>

        <div style="display: flex; gap: 10px; align-items: center;">
          <div style="font-weight: 900; font-size: 1rem; border: 2px solid #111; padding: 4px 10px; background: #f3f4f6;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ❤️ Tu HP: 26 / 30
          </div>
          <div style="font-weight: 900; font-size: 0.9rem; border: 1.5px solid #111; padding: 4px 8px; background: #ffffff;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            💎 Maná: 4 / 6
          </div>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            📚 Robar Carta (22 rest.)
          </button>
        </div>
      </div>
    </div>

    <!-- 4. MANO DEL JUGADOR (4 CARTAS JUGABLES) & ACCIONES -->
    <div class="wf-draggable-block" style="margin-top: 14px;">
      <div class="wf-flex-between" style="margin-bottom: 6px;">
        <span style="font-size: 0.78rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">TU MANO (4 CARTAS):</span>
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 900; padding: 6px 16px;">
          ⏭️ PASAR TURNO AL RIVAL
        </button>
      </div>

      <div class="wf-sort-zone wf-grid-4" style="gap: 10px;">
        <!-- Mano Carta 1 -->
        <div class="wf-draggable-block wf-box" style="padding: 8px; border: 2px solid #111; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.78rem; margin-bottom: 2px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Bola de Fuego</span>
            <span style="border: 1px solid #111; padding: 1px 3px; font-size: 0.65rem;">4💎</span>
          </div>
          <div style="font-size: 0.68rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Hechizo • 4 Daño x2</div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem; font-weight: 800;">
            Lanzar Hechizo
          </button>
        </div>

        <!-- Mano Carta 2 -->
        <div class="wf-draggable-block wf-box" style="padding: 8px; border: 2px solid #111; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.78rem; margin-bottom: 2px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Vapor</span>
            <span style="border: 1px solid #111; padding: 1px 3px; font-size: 0.65rem;">3💎</span>
          </div>
          <div style="font-size: 0.68rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura 3/4 • Guardia</div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem; font-weight: 800;">
            Invocar al Campo
          </button>
        </div>

        <!-- Mano Carta 3 -->
        <div class="wf-draggable-block wf-box" style="padding: 8px; border: 2px solid #111; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.78rem; margin-bottom: 2px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Chispa Arcana</span>
            <span style="border: 1px solid #111; padding: 1px 3px; font-size: 0.65rem;">1💎</span>
          </div>
          <div style="font-size: 0.68rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Hechizo • 2 Daño Rápido</div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem; font-weight: 800;">
            Lanzar Hechizo
          </button>
        </div>

        <!-- Mano Carta 4 -->
        <div class="wf-draggable-block wf-box" style="padding: 8px; border: 2px solid #111; background: #ffffff;">
          <div style="display: flex; justify-content: space-between; font-weight: 900; font-size: 0.78rem; margin-bottom: 2px;">
            <span class="wf-editable-text" contenteditable="true" spellcheck="false">Escudo Reflejante</span>
            <span style="border: 1px solid #111; padding: 1px 3px; font-size: 0.65rem;">2💎</span>
          </div>
          <div style="font-size: 0.68rem; color: #555; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Artefacto • +3 Escudo</div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem; font-weight: 800;">
            Equipar Artefacto
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Panel Inferior de Inspección de Carta -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; background: #ffffff; width: 100%; box-sizing: border-box; border: 2px solid #111;">
    <div style="font-size: 0.72rem; font-weight: 800; color: #555; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">INSPECCIÓN DETALLADA DE CARTA SELECCIONADA:</div>
    <div style="display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 10px;">
      <div>
        <strong style="font-size: 0.88rem;">Bola de Fuego Arcana (Hechizo • Coste 4💎)</strong>
        <div style="font-size: 0.78rem; color: #444;">Bloques Scratch: [al lanzar] -> [repetir 2] -> [apuntar 1] -> [infligir 4] -> [escudo 2].</div>
      </div>
      <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)">
        Editar Lógica en Creador →
      </button>
    </div>
  </div>
</div>
`
  },

  // 6. DISCOVERY & COMUNIDAD
  {
    id: 'page_craft_discovery',
    title: '6. Discovery & Comunidad (Búsqueda, Favoritos & Reportes)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('discovery')}

  <!-- Cabecera de Discovery -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-weight: 900; font-size: 1.1rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          🌐 Discovery &amp; Comunidad CraftCaster
        </span>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="3. Editor de Cartas (Scratch)">
          + Compartir Mi Carta
        </button>
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos">
          + Compartir Mi Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- Pestañas de Navegación Discovery -->
  <div class="wf-draggable-block" style="margin-bottom: 16px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-row" style="gap: 8px; border-bottom: 2px solid #111; padding-bottom: 8px;">
      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
        🃏 Cartas de la Comunidad
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Catálogo de Mazos" style="font-weight: 800;">
        📚 Mazos Populares
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
        ⭐ Mis Elementos Favoritos
      </button>
    </div>
  </div>

  <!-- Barra de Filtros y Búsqueda Avanzada -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 14px; margin-bottom: 20px; background: #f9fafb; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 10px; flex-wrap: wrap; align-items: center;">
      <div class="wf-search-group" style="flex: 1 1 240px;">
        <input type="text" class="wf-input" placeholder="Buscar por nombre, efecto, palabra clave o autor..." style="width: 100%;" />
        <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false">Buscar</button>
      </div>

      <div style="display: flex; gap: 8px; flex-wrap: wrap;">
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Todos los Costes</option>
          <option>1-2 Maná</option>
          <option>3-4 Maná</option>
          <option>5+ Maná</option>
        </select>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Cualquier Rareza</option>
          <option>Común</option>
          <option>Rara</option>
          <option>Épica</option>
          <option>Legendaria</option>
        </select>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Ordenar: Más Votadas ★</option>
          <option>Más Recientes</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Rejilla de Creaciones de la Comunidad -->
  <div class="wf-draggable-block" style="margin-bottom: 24px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-grid-3" style="gap: 16px;">
      <!-- Tarjeta 1 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #111; background: #fff;">
        <div>
          <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Orbe de Fuego Concentrado</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <h4 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Orbe de Fuego</h4>
            <span style="font-weight: 900; border: 1.5px solid #111; padding: 1px 5px; font-size: 0.75rem;">4💎</span>
          </div>
          <div style="font-size: 0.72rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Creador: <strong>@PauCremades</strong> • Épica
          </div>
          <p style="font-size: 0.75rem; color: #444; line-height: 1.3; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Lógica Scratch: Repite 2 veces -> Daño 4 + Escudo 2. Gran rematador en turnos medios.
          </p>
          <div style="font-size: 0.75rem; font-weight: 800; margin-bottom: 10px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ★★★★★ (4.9 / 5 • 142 votos)
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            ⭐ Favorito
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test">
            🧪 Probar
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="color: #666;">
            ⚠️ Reportar
          </button>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #111; background: #fff;">
        <div>
          <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Vapor Ancestral</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <h4 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Vapor</h4>
            <span style="font-weight: 900; border: 1.5px solid #111; padding: 1px 5px; font-size: 0.75rem;">3💎</span>
          </div>
          <div style="font-size: 0.72rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Creador: <strong>@AntonioC</strong> • Rara
          </div>
          <p style="font-size: 0.75rem; color: #444; line-height: 1.3; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Criatura 3/4 con habilidad de Guardia: Absorbe el primer impacto dirigido a tu héroe.
          </p>
          <div style="font-size: 0.75rem; font-weight: 800; margin-bottom: 10px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ★★★★★ (4.8 / 5 • 98 votos)
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            ⭐ Favorito
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="5. Tablero de Batalla & Zona Test">
            🧪 Probar
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="color: #666;">
            ⚠️ Reportar
          </button>
        </div>
      </div>

      <!-- Tarjeta 3 (Mazo) -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #111; background: #f9fafb;">
        <div>
          <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Mazo Tempestad Arcana</span>
          </div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
            <h4 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tempestad Arcana [Mazo]</h4>
            <span style="font-weight: 800; font-size: 0.7rem; background: #111; color: #fff; padding: 2px 4px;">30 CARTAS</span>
          </div>
          <div style="font-size: 0.72rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Autor: <strong>@JesusPerez</strong> • Control / Combo
          </div>
          <p style="font-size: 0.75rem; color: #444; line-height: 1.3; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Sinergia completa basada en generar maná extra con artefactos y finalizar con hechizos en cadena.
          </p>
          <div style="font-size: 0.75rem; font-weight: 800; margin-bottom: 10px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ★★★★★ (5.0 / 5 • 210 votos)
          </div>
        </div>

        <div style="display: flex; gap: 6px; flex-wrap: wrap;">
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            ⭐ Favorito
          </button>
          <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="4. Creador de Mazos">
            Clonar Mazo
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="color: #666;">
            ⚠️ Reportar
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- Formulario de Reporte de Contenido -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; border: 2px dashed #111; background: #ffffff; width: 100%; box-sizing: border-box;">
    <h4 style="font-size: 1rem; font-weight: 900; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      ⚠️ Reportar Carta o Mazo a los Administradores
    </h4>
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 10px; margin-bottom: 10px;">
      <div>
        <label style="font-size: 0.75rem; font-weight: 800; display: block; margin-bottom: 3px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Motivo del Reporte:</label>
        <select class="wf-input" style="width: 100%; font-size: 0.8rem;">
          <option>Mecánica Rota / Desbalanceada</option>
          <option>Contenido Ofensivo o Inapropiado</option>
          <option>Plagio / Copia sin Atribución</option>
          <option>Error en Bloques Scratch</option>
        </select>
      </div>
      <div>
        <label style="font-size: 0.75rem; font-weight: 800; display: block; margin-bottom: 3px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Explicación para el Administrador:</label>
        <input type="text" class="wf-input" value="La carta genera un bucle infinito que impide responder al oponente." style="width: 100%;" />
      </div>
    </div>
    <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_admin" data-link-name="7. Panel Admin" style="font-weight: 800;">
      Enviar Reporte a Moderación →
    </button>
  </div>
</div>
`
  },

  // 7. PANEL DE ADMINISTRACIÓN
  {
    id: 'page_craft_admin',
    title: '7. Panel de Administración & Moderación',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('admin')}

  <!-- Cabecera del Panel de Administración -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <span style="font-weight: 900; font-size: 1.1rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          🛡️ Panel de Administración &amp; Moderación de CraftCaster
        </span>
        <span style="font-size: 0.72rem; border: 1.5px solid #111; padding: 2px 6px; background: #f3f4f6; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Rol: Administrador Maestro
        </span>
      </div>

      <div style="font-size: 0.75rem; color: #555;">
        Responsables: Antonio Carbonell • Jesús Pérez Moreno
      </div>
    </div>
  </div>

  <!-- Pestañas de Gestión -->
  <div class="wf-draggable-block" style="margin-bottom: 16px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-row" style="gap: 8px; border-bottom: 2px solid #111; padding-bottom: 8px;">
      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
        👥 Gestión de Usuarios
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
        🚨 Cartas Reportadas (3 Pendientes)
      </button>
      <button class="wf-btn wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
        📊 Métricas &amp; Balance del Sistema
      </button>
    </div>
  </div>

  <!-- SECCIÓN 1: GESTIÓN DE USUARIOS -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; margin-bottom: 20px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-flex-between" style="margin-bottom: 12px; flex-wrap: wrap; gap: 8px;">
      <div>
        <h3 style="font-size: 1.05rem; font-weight: 900; margin: 0 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Listado de Usuarios Registrados
        </h3>
        <span style="font-size: 0.75rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Buscar usuarios, inspeccionar creaciones y aplicar suspensiones o cambios de rol.
        </span>
      </div>

      <div class="wf-search-group" style="width: 260px;">
        <input type="text" class="wf-input" placeholder="Buscar por usuario o correo..." style="font-size: 0.78rem;" />
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false">Filtrar</button>
      </div>
    </div>

    <!-- Tabla de Usuarios -->
    <div style="overflow-x: auto;">
      <table class="wf-table" style="width: 100%; border-collapse: collapse; font-size: 0.78rem;">
        <thead>
          <tr style="background: #f3f4f6; border-bottom: 2px solid #111; text-align: left;">
            <th style="padding: 8px;">ID</th>
            <th style="padding: 8px;">Usuario</th>
            <th style="padding: 8px;">Correo</th>
            <th style="padding: 8px;">Rol</th>
            <th style="padding: 8px;">Cartas</th>
            <th style="padding: 8px;">Mazos</th>
            <th style="padding: 8px;">Infracciones</th>
            <th style="padding: 8px;">Estado</th>
            <th style="padding: 8px;">Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">#U-001</td>
            <td style="padding: 8px; font-weight: 800;">@PauCremades</td>
            <td style="padding: 8px;">pau@craftcaster.io</td>
            <td style="padding: 8px;"><span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem;">Admin</span></td>
            <td style="padding: 8px;">24</td>
            <td style="padding: 8px;">6</td>
            <td style="padding: 8px;">0</td>
            <td style="padding: 8px;"><span style="font-weight: 800;">Activo</span></td>
            <td style="padding: 8px;">
              <button class="wf-btn wf-btn-sm" style="font-size: 0.7rem;">Editar Rol</button>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd;">
            <td style="padding: 8px;">#U-002</td>
            <td style="padding: 8px; font-weight: 800;">@AlvaroMarquez</td>
            <td style="padding: 8px;">alvaro@craftcaster.io</td>
            <td style="padding: 8px;"><span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem;">Jugador</span></td>
            <td style="padding: 8px;">18</td>
            <td style="padding: 8px;">4</td>
            <td style="padding: 8px;">0</td>
            <td style="padding: 8px;"><span style="font-weight: 800;">Activo</span></td>
            <td style="padding: 8px;">
              <button class="wf-btn wf-btn-sm" style="font-size: 0.7rem;">Suspender</button>
            </td>
          </tr>
          <tr style="border-bottom: 1px solid #ddd; background: #f9fafb;">
            <td style="padding: 8px;">#U-089</td>
            <td style="padding: 8px; font-weight: 800;">@Spammer99</td>
            <td style="padding: 8px;">spammer99@tempmail.com</td>
            <td style="padding: 8px;"><span style="border: 1px solid #111; padding: 1px 4px; font-size: 0.7rem;">Jugador</span></td>
            <td style="padding: 8px;">12</td>
            <td style="padding: 8px;">1</td>
            <td style="padding: 8px; font-weight: 900;">3 Reportes</td>
            <td style="padding: 8px;"><span style="font-weight: 800; border: 1px solid #111; padding: 1px 4px;">En Revisión</span></td>
            <td style="padding: 8px;">
              <button class="wf-btn wf-btn-sm" style="font-size: 0.7rem; font-weight: 800;">
                Suspender Cuenta
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <!-- SECCIÓN 2: GESTIÓN DE CARTAS REPORTADAS -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-flex-between" style="margin-bottom: 12px;">
      <div>
        <h3 style="font-size: 1.05rem; font-weight: 900; margin: 0 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Cartas Reportadas Pendientes de Resolución
        </h3>
        <span style="font-size: 0.75rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Revisa el contenido, valida si infringe las normas de equilibrio o conducta y aplica resolución.
        </span>
      </div>
      <span style="font-size: 0.75rem; font-weight: 800; border: 1.5px solid #111; padding: 2px 8px; background: #f3f4f6;">
        3 Reportes Nuevos
      </span>
    </div>

    <!-- Lista de Casos de Moderación -->
    <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 12px;">
      <!-- Caso 1 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; background: #f9fafb; border: 1.5px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 8px; flex-wrap: wrap; gap: 6px;">
          <div>
            <span style="font-weight: 900; font-size: 0.85rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Reporte #104: Carta "Hechizo Destructor Infinito"</span>
            <span style="font-size: 0.72rem; color: #555; margin-left: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">(Autor: @Spammer99 • Denunciante: @AntonioC)</span>
          </div>
          <span style="font-size: 0.7rem; font-weight: 800; border: 1px solid #111; padding: 1px 6px;">
            Motivo: Desbalanceada / Bucle Infinito
          </span>
        </div>

        <div style="display: flex; gap: 14px; margin-bottom: 10px; flex-wrap: wrap;">
          <div style="flex: 1 1 200px; font-size: 0.75rem; color: #444;">
            <strong>Descripción del denunciante:</strong> "El usuario encadenó 10 bloques de repetir sin incremento de maná creando un bug en el que el rival nunca puede jugar su turno."
          </div>
          <div style="flex: 1 1 200px; font-size: 0.75rem; background: #fff; border: 1px solid #111; padding: 6px;">
            <strong>Bloques detectados:</strong> [al lanzar] -> [repetir 99 veces] -> [infligir 1 daño].
          </div>
        </div>

        <!-- Botones de Resolución -->
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            ✓ Desestimar Reporte
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800; background: #111; color: #fff;">
            🚫 Retirar Carta de Discovery (Despublicar)
          </button>
          <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="font-weight: 800;">
            ⚠️ Sancionar Creador (Advertencia)
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
  },

  // 8. ACCESO Y REGISTRO
  {
    id: 'page_craft_auth',
    title: '8. Acceso y Registro (Login & Sign Up)',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCraftNav('auth')}

  <!-- Contenedor central de Login / Registro en 2 Columnas -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 20px;">
    <!-- Formulario 1: Iniciar Sesión -->
    <div class="wf-draggable-block wf-col-main" style="flex: 5 1 300px;">
      <div class="wf-box" style="padding: 20px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <h2 style="font-size: 1.3rem; font-weight: 900; margin: 4px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Iniciar Sesión
        </h2>
        <p style="font-size: 0.8rem; color: #555; margin-bottom: 16px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Accede para recuperar tu perfil, mazos y cartas personalizadas.
        </p>

        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 16px;">
          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Usuario o Correo Electrónico:</label>
            <input type="text" class="wf-input" value="alvaro.marquez@craftcaster.io" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Contraseña:</label>
            <input type="password" class="wf-input" value="••••••••••••" style="width: 100%; box-sizing: border-box;" />
            <div style="text-align: right; margin-top: 4px;">
              <a href="#" style="font-size: 0.72rem; font-weight: 700; color: #111;" class="wf-editable-text" contenteditable="true" spellcheck="false">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button class="wf-btn wf-btn-primary wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_home" data-link-name="1. Inicio / Portal" style="padding: 10px; font-weight: 900; font-size: 0.9rem;">
            Entrar a CraftCaster
          </button>

          <div style="text-align: center; font-size: 0.75rem; color: #666; margin: 4px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">- O también -</div>

          <button class="wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_home" data-link-name="1. Inicio / Portal" style="padding: 9px; font-weight: 800;">
            [G] Continuar con Google
          </button>
        </div>
      </div>
    </div>

    <!-- Formulario 2: Registrarse -->
    <div class="wf-draggable-block wf-col-side" style="flex: 5 1 300px;">
      <div class="wf-box" style="padding: 20px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
        <h2 style="font-size: 1.3rem; font-weight: 900; margin: 4px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Crear Nueva Cuenta
        </h2>
        <p style="font-size: 0.8rem; color: #555; margin-bottom: 16px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Únete a la comunidad para crear cartas y combatir en la arena.
        </p>

        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nombre de Usuario:</label>
            <input type="text" class="wf-input" placeholder="Ej: PauCremades" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Correo Electrónico:</label>
            <input type="email" class="wf-input" placeholder="tu@correo.com" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Contraseña:</label>
            <input type="password" class="wf-input" placeholder="Mínimo 8 caracteres" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.8rem; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Confirmar Contraseña:</label>
            <input type="password" class="wf-input" placeholder="Repite la contraseña" style="width: 100%; box-sizing: border-box;" />
          </div>

          <button class="wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_home" data-link-name="1. Inicio / Portal" style="padding: 10px; font-weight: 900; background: #f3f4f6; border: 2px solid #111;">
            Registrarse y Empezar a Jugar
          </button>
        </div>
      </div>
    </div>
  </div>
</div>
`
  }
];

const craftProject = {
  id: 'proj_craftcaster',
  name: 'CraftCaster (Sistema Completo de Cartas & Duelos)',
  createdAt: Date.now() - 3600000,
  updatedAt: Date.now(),
  activePageId: 'page_craft_home',
  pages: pages
};

const bundle = {
  app: 'WireframeStudio',
  formatVersion: '2.0',
  exportedAt: new Date().toISOString(),
  project: craftProject
};

// 1. Write craftcaster_project.wireframe & craftcaster_project.json
fs.writeFileSync(path.join(baseDir, 'craftcaster_project.wireframe'), JSON.stringify(bundle, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'craftcaster_project.json'), JSON.stringify(bundle, null, 2), 'utf8');

// 2. Also overwrite magic_wizards_project.* so if the user imports that file, it's 100% updated with CraftCaster!
fs.writeFileSync(path.join(baseDir, 'magic_wizards_project.wireframe'), JSON.stringify(bundle, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'magic_wizards_project.json'), JSON.stringify(bundle, null, 2), 'utf8');

console.log('Written all 4 json/wireframe files with updated CraftCaster content!');

// 3. Update storage.js
let storageCode = fs.readFileSync(path.join(baseDir, 'js', 'storage.js'), 'utf8');

// Replace getDefaultProjects in storage.js
const defaultProjectsReplacement = `  getDefaultProjects() {
    return [
      ${JSON.stringify(craftProject, null, 6)},
      {
        id: 'proj_ecommerce',
        name: 'Tienda E-Commerce Completa',
        createdAt: Date.now() - 3600000,
        updatedAt: Date.now(),
        activePageId: 'page_tienda',
        pages: []
      }
    ];
  }`;

storageCode = storageCode.replace(/getDefaultProjects\(\)\s*\{[\s\S]*?\}\s*\}\;/m, `${defaultProjectsReplacement}\n};`);
fs.writeFileSync(path.join(baseDir, 'js', 'storage.js'), storageCode, 'utf8');
console.log('Updated storage.js getDefaultProjects!');

// 4. Update templates.js
let templatesCode = fs.readFileSync(path.join(baseDir, 'js', 'templates.js'), 'utf8');

const craftTemplateObj = `  // 0. CRAFTCASTER (PORTAL, MAZOS & DUELOS B&W)
  craftCaster: {
    id: 'craftCaster',
    name: 'CraftCaster (Sistema Completo de Cartas & Duelos)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal completo en blanco y negro: Cabecera con Cartas/Mazos/Duelos/Admin, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador de mazos, editor Scratch de cartas y tablero de combate.',
    html: \`${pages[0].html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
  },
  magicWizards: {
    id: 'magicWizards',
    name: 'CraftCaster (Portal & Duelos B&W)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal completo en blanco y negro: Cabecera con Cartas/Mazos/Duelos/Admin, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador de mazos, editor Scratch de cartas y tablero de combate.',
    html: \`${pages[0].html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
  },`;

// Replace first template in templates.js
if (templatesCode.includes('magicWizards: {')) {
  templatesCode = templatesCode.replace(/\/\/\s*0\.\s*MAGIC:[\s\S]*?magicWizards:\s*\{[\s\S]*?html:\s*`[\s\S]*?`\s*\},/m, craftTemplateObj);
} else if (templatesCode.includes('craftCaster: {')) {
  templatesCode = templatesCode.replace(/\/\/\s*0\.\s*CRAFTCASTER[\s\S]*?craftCaster:\s*\{[\s\S]*?html:\s*`[\s\S]*?`\s*\},/m, craftTemplateObj);
}
fs.writeFileSync(path.join(baseDir, 'js', 'templates.js'), templatesCode, 'utf8');
console.log('Updated templates.js!');
