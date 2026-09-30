const fs = require('fs');
const path = require('path');

const baseDir = path.resolve('C:/Users/paucr/Documents/Proyectos/MockUps');

// Clean, short, professional Navbar: [CRAFTCASTER] | Inicio | Explorar | Luchar | Zona Test | Comunidad | Desarrolladores | 👤 Cuenta | + Crear Mazo
function getCleanNav(active = 'inicio') {
  return `
  <!-- BARRA DE NAVEGACIÓN LIMPIA Y PROFESIONAL -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 18px; margin-bottom: 18px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <!-- Logo y Enlaces Directos -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 14px; align-items: center; flex-wrap: wrap;">
        <span style="font-weight: 900; font-size: 1.15rem; letter-spacing: 1px; border: 2px solid #111; padding: 2px 8px; background: #111; color: #fff;" class="wf-editable-text" contenteditable="true" spellcheck="false">CRAFTCASTER</span>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_home" data-link-name="1. Inicio" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">Inicio</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Explorar" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">Explorar</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="color: #111; font-weight: 900; font-size: 0.85rem; text-decoration: none; border-bottom: 2px solid #111;">⚔️ Luchar</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_arena_battle" data-link-name="6. Zona Test" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">Zona Test</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_discovery" data-link-name="7. Comunidad" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">Comunidad</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_devs" data-link-name="8. Desarrolladores" style="color: #111; font-weight: 800; font-size: 0.85rem; text-decoration: none;">Desarrolladores</a>
      </div>

      <!-- Cuenta y Botón Crear -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 10px; font-size: 0.78rem; align-items: center;">
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_auth" data-link-name="9. Cuenta" style="color: #111; font-weight: 800; border: 1.5px solid #111; padding: 3px 8px; cursor: pointer;">👤 Cuenta</span>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="5. Creador de Mazos" style="font-weight: 900; padding: 6px 14px;">
          + Crear Mazo
        </button>
      </div>
    </div>
  </div>`;
}

// Clean Footer
function getCleanFooter() {
  return `
  <!-- FOOTER LIMPIO -->
  <div class="wf-draggable-block wf-box" style="padding: 16px 20px; border: 2px solid #111; background: #ffffff;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 16px; flex-wrap: wrap; align-items: center; font-size: 0.78rem;">
      <div>
        <span style="font-weight: 900; font-size: 0.85rem;">© 2026 CraftCaster</span>
        <span style="color: #666; margin-left: 8px;">Todos los derechos reservados.</span>
      </div>
      <div style="display: flex; gap: 16px; font-weight: 700; align-items: center;">
        <a href="#" data-link-page="page_craft_luchar_game" style="color: #111; font-weight: 800;">Luchar</a>
        <a href="#" data-link-page="page_craft_discovery" style="color: #111;">Comunidad</a>
        <a href="#" data-link-page="page_craft_devs" style="color: #111; border: 1.5px solid #111; padding: 2px 6px;">Desarrolladores</a>
        <span style="color: #666;">Diseño de Sistemas Multimedia</span>
      </div>
    </div>
  </div>`;
}

const pages = [
  // 1. INICIO
  {
    id: 'page_craft_home',
    title: '1. Inicio',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('inicio')}

  <!-- HERO BANNER -->
  <div class="wf-draggable-block wf-box" style="margin-bottom: 24px; width: 100%; box-sizing: border-box; position: relative; border: 2.5px solid #111; overflow: hidden; background: #f9fafb;">
    <div class="wf-placeholder-x" style="height: 280px; width: 100%; border: none;">
      <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      <div style="position: absolute; bottom: 20px; left: 20px; max-width: 500px; background: rgba(255,255,255,0.96); border: 2px solid #111; padding: 16px 20px; border-radius: 2px;">
        <h2 style="font-size: 1.3rem; font-weight: 900; margin: 0 0 6px 0; line-height: 1.25;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Crea tus cartas y forja tu mazo
        </h2>
        <p style="font-size: 0.8rem; color: #555; margin-bottom: 12px; line-height: 1.35;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Construye barajas de 30 cartas, diseña efectos modulares y combate en la arena o practica en la zona de test.
        </p>
        <div class="wf-sort-zone wf-flex-row" style="gap: 8px; flex-wrap: wrap;">
          <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 900; padding: 8px 16px;">
            ⚔️ Luchar Ahora
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Explorar" style="font-weight: 800; padding: 8px 14px;">
            Explorar Mazos
          </button>
          <button class="wf-draggable-block wf-btn wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_card_creator" data-link-name="4. Creador de cartas" style="font-weight: 800; padding: 8px 14px;">
            Crear Carta
          </button>
        </div>
      </div>
    </div>
    <!-- Controles Carrusel -->
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 6px 14px; background: #ffffff; border-top: 1.5px solid #111;">
      <div style="display: flex; gap: 6px;">
        <span style="width: 8px; height: 8px; border: 1.5px solid #111; background: #111;"></span>
        <span style="width: 8px; height: 8px; border: 1.5px solid #111; background: #fff;"></span>
        <span style="width: 8px; height: 8px; border: 1.5px solid #111; background: #fff;"></span>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="wf-btn wf-btn-sm" style="padding: 2px 6px; font-weight: 800;">←</button>
        <button class="wf-btn wf-btn-sm" style="padding: 2px 6px; font-weight: 800;">→</button>
      </div>
    </div>
  </div>

  <!-- MAZOS MÁS FAMOSOS (6 TARJETAS EN B&W) -->
  <div class="wf-draggable-block" style="margin-bottom: 28px; width: 100%; box-sizing: border-box;">
    <div style="text-align: center; margin-bottom: 16px;">
      <h2 style="font-size: 1.35rem; font-weight: 900; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        Mazos más famosos
      </h2>
      <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Explorar" style="font-size: 0.8rem; font-weight: 800; color: #111;">
        Ver todos los mazos →
      </a>
    </div>

    <div class="wf-sort-zone wf-grid-3" style="gap: 16px;">
      <!-- Mazo 1 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Tempestad Arcana</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tempestad Arcana</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">COMBO</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Sinergia de hechizos rápidos y robo de cartas para rematar en turnos clave.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 10 ★★★★★
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>

      <!-- Mazo 2 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Fuego & Control</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Fuego & Control</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">CONTROL</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Limpia el campo con daño masivo de fuego y asegura el juego tardío.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 9 ★★★★★
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>

      <!-- Mazo 3 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Gólems de Piedra</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Gólems de Piedra</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">DEFENSA</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Criaturas con guardia que absorben daño y devuelven espinas.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 8 ★★★★☆
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>

      <!-- Mazo 4 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Chispa Veloz</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Chispa Veloz</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">AGGRO</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Ataques directos con cartas de bajo coste para ganar en turnos 1-3.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 9 ★★★★★
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>

      <!-- Mazo 5 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Nigromancia</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nigromancia</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">INVOCACIÓN</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Revive cartas caídas y activa efectos al morir.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 7 ★★★★☆
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>

      <!-- Mazo 6 -->
      <div class="wf-draggable-block wf-box" style="padding: 0; overflow: hidden; border: 2px solid #111; background: #fff; display: flex; flex-direction: column;">
        <div class="wf-placeholder-x" style="height: 120px; width: 100%;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Dragones Volcánicos</span>
        </div>
        <div style="padding: 12px; flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
              <h3 style="font-size: 0.95rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Dragones Volcánicos</h3>
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">FINISHER</span>
            </div>
            <p style="font-size: 0.75rem; color: #555; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
              Criaturas de alto coste con vuelo y daño masivo a mesa.
            </p>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">
              Mazmorra: Piso 10 ★★★★★
            </div>
          </div>
          <button class="wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 800;">
            Probar en Batalla
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- LLAMADA A LA ACCIÓN INFERIOR -->
  <div class="wf-draggable-block wf-box" style="padding: 22px; text-align: center; margin-bottom: 24px; border: 2px solid #111; background: #f9fafb;">
    <h2 style="font-size: 1.25rem; font-weight: 900; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Juega a CraftCaster
    </h2>
    <p style="font-size: 0.8rem; color: #555; margin-bottom: 14px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      Disponible en navegador y versión móvil táctil.
    </p>
    <div>
      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-weight: 900; padding: 8px 24px;">
        Jugar Partida
      </button>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 2. EXPLORAR (FILTROS EN LÍNEA RECTA HORIZONTAL)
  {
    id: 'page_craft_mazos_catalogo',
    title: '2. Explorar',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('explorar')}

  <!-- Cabecera de Explorar -->
  <div class="wf-draggable-block wf-box" style="padding: 14px 18px; margin-bottom: 14px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 900; margin: 0 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Explorar
        </h2>
        <span style="font-size: 0.78rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Descubre mazos creados por la comunidad y clónalos a tu colección.
        </span>
      </div>

      <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="5. Creador de Mazos" style="font-weight: 900; padding: 6px 14px;">
        + Crear Mazo
      </button>
    </div>
  </div>

  <!-- BUSCADOR Y FILTROS EN LÍNEA RECTA Y SIMPLE -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 18px; background: #ffffff; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 14px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; gap: 6px; align-items: center; flex: 1 1 200px;">
        <span style="font-weight: 800; font-size: 0.82rem;">Buscar:</span>
        <input type="text" class="wf-input" placeholder="Nombre de mazo..." style="width: 100%; max-width: 180px; font-weight: 700;" />
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;">Estrategia:</span>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Todas</option>
          <option>Control</option>
          <option>Aggro</option>
          <option>Combo</option>
          <option>Defensa</option>
        </select>
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;">Mazmorra:</span>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Todos</option>
          <option>Piso 9-10</option>
          <option>Piso 6-8</option>
          <option>Piso 1-5</option>
        </select>
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;">Ordenar:</span>
        <select class="wf-input" style="font-size: 0.8rem; font-weight: 700;">
          <option>Más Populares</option>
          <option>Más Recientes</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Rejilla de Mazos -->
  <div class="wf-draggable-block" style="margin-bottom: 24px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-grid-4" style="gap: 14px;">
      ${[
        { name: 'Tempestad Arcana', type: 'COMBO', author: '@JesusPerez', floor: 'Piso 10' },
        { name: 'Fuego & Control', type: 'CONTROL', author: '@PauCremades', floor: 'Piso 9' },
        { name: 'Gólems de Piedra', type: 'DEFENSA', author: '@AntonioC', floor: 'Piso 8' },
        { name: 'Chispa Veloz', type: 'AGGRO', author: '@AlvaroMarquez', floor: 'Piso 9' },
        { name: 'Nigromancia', type: 'INVOCACIÓN', author: '@Sombra', floor: 'Piso 7' },
        { name: 'Escudos Cristal', type: 'DEFENSA', author: '@IronGuard', floor: 'Piso 8' },
        { name: 'Dragones Volcánicos', type: 'FINISHER', author: '@Dragon', floor: 'Piso 10' },
        { name: 'Sinergia Modular', type: 'COMBO', author: '@BlockCoder', floor: 'Piso 9' }
      ].map(m => `
        <div class="wf-draggable-block wf-box" style="padding: 12px; display: flex; flex-direction: column; justify-content: space-between; border: 2px solid #111; background: #fff;">
          <div>
            <div class="wf-placeholder-x" style="height: 95px; width: 100%; margin-bottom: 8px;">
              <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
              <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">${m.name}</span>
            </div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 2px;">
              <span style="font-size: 0.65rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px;">${m.type}</span>
              <span style="font-size: 0.68rem; color: #666;">30 cartas</span>
            </div>
            <h4 style="font-size: 0.88rem; font-weight: 900; margin: 4px 0 2px 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">${m.name}</h4>
            <div style="font-size: 0.7rem; color: #666; margin-bottom: 4px;">Por ${m.author}</div>
            <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 8px;">${m.floor} ★★★★★</div>
          </div>

          <div style="display: flex; gap: 4px;">
            <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="5. Creador de Mazos" style="flex: 1; font-weight: 800; font-size: 0.72rem;">
              Clonar
            </button>
            <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="font-size: 0.72rem;">
              Luchar
            </button>
          </div>
        </div>
      `).join('')}
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 3. LUCHAR (NUEVA PESTAÑA DE JUEGO ROGUELIKE CARD BATTLER COMPLETA)
  {
    id: 'page_craft_luchar_game',
    title: '3. Luchar',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('luchar')}

  <!-- BARRA SUPERIOR DE PARTIDA (HUD DEL JUEGO) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 12px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; align-items: center; flex-wrap: wrap;">
      
      <!-- Izquierda: Mazo y Planta -->
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="border: 2px solid #111; padding: 4px 10px; font-weight: 900; font-size: 0.85rem; background: #eee; box-shadow: 1px 1px 0px #111;">
          🃏 Mazo: 28
        </div>
        <div>
          <div style="font-size: 0.9rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">🏰 Mazmorra • Planta 4</div>
          <div style="font-size: 0.72rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Sala de Combate Élite (Nivel 14)</div>
        </div>
      </div>

      <!-- Centro: Barra de Progreso EXP / Salas (33 / 80) -->
      <div style="flex: 1; max-width: 420px; min-width: 220px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 900; margin-bottom: 3px;">
          <span class="wf-editable-text" contenteditable="true" spellcheck="false">Progreso de Mazmorra: Sala 9 / 12</span>
          <span class="wf-editable-text" contenteditable="true" spellcheck="false">33 / 80 EXP</span>
        </div>
        <div style="width: 100%; height: 18px; border: 2px solid #111; background: #eee; position: relative; overflow: hidden;">
          <div style="width: 41%; height: 100%; background: #222;"></div>
        </div>
      </div>

      <!-- Derecha: Opciones y Pausa -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <button class="wf-btn wf-btn-sm" style="font-size: 0.78rem; font-weight: 800;">⚙️ Opciones</button>
        <button class="wf-btn wf-btn-sm" style="font-size: 0.78rem; font-weight: 800;">⏸️ Pausa</button>
      </div>

    </div>
  </div>

  <!-- CAMPO DE BATALLA / ARENA DEL JUEGO (RELIQUIAS A LA IZQUIERDA + CARTAS ENEMIGAS DE FONDO) -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; margin-bottom: 14px; background: #f8fafc; width: 100%; box-sizing: border-box; border: 2px solid #111; position: relative;">
    
    <div style="display: flex; gap: 14px; align-items: stretch;">
      
      <!-- COLUMNA LATERAL IZQUIERDA: RELIQUIAS Y POTENCIADORES -->
      <div style="width: 46px; display: flex; flex-direction: column; gap: 8px; align-items: center; border-right: 2px dashed #ccc; padding-right: 10px;">
        <div style="font-size: 0.65rem; font-weight: 900; text-align: center; color: #666;">RELIQUIAS</div>
        <div class="wf-box" style="width: 36px; height: 36px; border: 1.5px solid #111; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; font-size: 0.85rem; position: relative;" title="Espada de Acero (+2 Daño)">
          ⚔️
          <span style="position: absolute; bottom: -2px; right: -2px; background: #111; color: #fff; font-size: 0.55rem; font-weight: 900; padding: 0 2px; border-radius: 2px;">2</span>
        </div>
        <div class="wf-box" style="width: 36px; height: 36px; border: 1.5px solid #111; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Zanahoria Mágica (+5 HP)">
          🥕
        </div>
        <div class="wf-box" style="width: 36px; height: 36px; border: 1.5px solid #111; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Hacha Voraz">
          🪓
        </div>
        <div class="wf-box" style="width: 36px; height: 36px; border: 1.5px solid #111; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Escudo Robusto (+3 Armadura)">
          🛡️
        </div>
        <div class="wf-box" style="width: 36px; height: 36px; border: 1.5px solid #111; background: #fff; display: flex; align-items: center; justify-content: center; font-size: 0.85rem;" title="Poción de Maná (+1 Cristal)">
          🧪
        </div>
      </div>

      <!-- ÁREA DE COMBATE PRINCIPAL -->
      <div style="flex: 1; display: flex; flex-direction: column; justify-content: space-between;">
        
        <!-- PARTE SUPERIOR / FONDO: 3 CARTAS ENEMIGAS FORMADAS EN COMBATE -->
        <div style="margin-bottom: 20px; position: relative;">
          
          <div style="text-align: center; margin-bottom: 10px;">
            <span style="font-size: 0.72rem; font-weight: 900; background: #111; color: #fff; padding: 2px 10px; border-radius: 2px; text-transform: uppercase;">
              Enemigos en el Campo de Batalla (Cartas Adversarias)
            </span>
          </div>

          <div style="display: flex; gap: 16px; justify-content: center; align-items: flex-end; flex-wrap: wrap;">
            
            <!-- CARTA ENEMIGA 1: ATORMENTADOR ROJO -->
            <div class="wf-draggable-block wf-box" style="width: 175px; border: 2px solid #111; background: #fff; padding: 8px; box-shadow: 2px 2px 0px #111; text-align: center;">
              <!-- Intención de ataque -->
              <div style="display: flex; justify-content: center; gap: 4px; align-items: center; font-size: 0.75rem; font-weight: 900; background: #f3f4f6; border: 1.5px solid #111; padding: 2px 6px; margin-bottom: 6px;">
                <span>🗡️ 4</span>
                <span style="font-size: 0.65rem; color: #666;">(Veneno)</span>
              </div>
              <div class="wf-placeholder-x" style="height: 75px; width: 100%; margin-bottom: 6px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Atormentador Rojo</span>
              </div>
              <div style="font-size: 0.82rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Red Tormentor</div>
              <div style="font-size: 0.65rem; color: #555; margin-bottom: 4px;">CRIATURA SOMBRÍA</div>
              
              <!-- Barra de Vida -->
              <div style="border: 1.5px solid #111; background: #eee; height: 12px; width: 100%; margin-bottom: 2px;">
                <div style="width: 42%; height: 100%; background: #222;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 900;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">❤️ 21 / 50</span>
                <span style="border: 1px solid #111; padding: 0 4px; font-size: 0.62rem; background: #eee;">🟣 1 Veneno</span>
              </div>
            </div>

            <!-- CARTA ENEMIGA 2: BEHOLDER / OJO DEL ABISMO (RECIBIENDO IMPACTO DE HECHIZO) -->
            <div class="wf-draggable-block wf-box" style="width: 200px; border: 3px solid #111; background: #fff; padding: 10px; box-shadow: 4px 4px 0px #111; text-align: center; position: relative; transform: scale(1.03);">
              
              <!-- INDICADOR DE IMPACTO Y RAYO MÁGICO -->
              <div style="position: absolute; top: -14px; right: -10px; background: #111; color: #fff; font-size: 0.85rem; font-weight: 900; padding: 2px 8px; border: 2px solid #fff; box-shadow: 1px 1px 0px #111; z-index: 10;">
                💥 8 DAÑO
              </div>

              <!-- Intención de ataque masivo -->
              <div style="display: flex; justify-content: center; gap: 4px; align-items: center; font-size: 0.78rem; font-weight: 900; background: #111; color: #fff; padding: 2px 6px; margin-bottom: 6px;">
                <span>🔮 Maldición Masiva</span>
              </div>

              <div class="wf-placeholder-x" style="height: 85px; width: 100%; margin-bottom: 6px; position: relative; overflow: hidden;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Ojo del Abismo (Beholder)</span>
              </div>

              <div style="font-size: 0.9rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Beholder (Jefe)</div>
              <div style="font-size: 0.68rem; color: #555; margin-bottom: 4px;">ABERRACIÓN ÉLITE</div>

              <!-- Barra de Vida del Jefe -->
              <div style="border: 1.5px solid #111; background: #eee; height: 14px; width: 100%; margin-bottom: 2px;">
                <div style="width: 54%; height: 100%; background: #222;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 900;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">❤️ 40 / 74</span>
                <span style="border: 1px solid #111; padding: 0 4px; font-size: 0.62rem; background: #eee;">🟣 1 Vulnerable</span>
              </div>
            </div>

            <!-- CARTA ENEMIGA 3: ATORMENTADOR AZUL -->
            <div class="wf-draggable-block wf-box" style="width: 175px; border: 2px solid #111; background: #fff; padding: 8px; box-shadow: 2px 2px 0px #111; text-align: center;">
              <!-- Intención de ataque -->
              <div style="display: flex; justify-content: center; gap: 4px; align-items: center; font-size: 0.75rem; font-weight: 900; background: #f3f4f6; border: 1.5px solid #111; padding: 2px 6px; margin-bottom: 6px;">
                <span>⚔️ 9</span>
                <span style="font-size: 0.65rem; color: #666;">(Ataque)</span>
              </div>
              <div class="wf-placeholder-x" style="height: 75px; width: 100%; margin-bottom: 6px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Atormentador Azul</span>
              </div>
              <div style="font-size: 0.82rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Blue Tormentor</div>
              <div style="font-size: 0.65rem; color: #555; margin-bottom: 4px;">CRIATURA SOMBRÍA</div>
              
              <!-- Barra de Vida -->
              <div style="border: 1.5px solid #111; background: #eee; height: 12px; width: 100%; margin-bottom: 2px;">
                <div style="width: 63%; height: 100%; background: #222;"></div>
              </div>
              <div style="display: flex; justify-content: space-between; font-size: 0.72rem; font-weight: 900;">
                <span class="wf-editable-text" contenteditable="true" spellcheck="false">❤️ 33 / 52</span>
                <span style="border: 1px solid #111; padding: 0 4px; font-size: 0.62rem; background: #eee;">🟣 1 Debilitado</span>
              </div>
            </div>

          </div>
        </div>

        <!-- ZONA MEDIA: CARTA LANZADA / EN VUELO (A LA IZQUIERDA) Y TRAYECTORIA DE HECHIZO -->
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 14px; padding: 8px 12px; background: #fff; border: 1.5px dashed #999; flex-wrap: wrap; gap: 8px;">
          
          <!-- Carta en Vuelo / Activa -->
          <div style="display: flex; align-items: center; gap: 10px;">
            <div class="wf-box" style="width: 130px; border: 2px solid #111; background: #fff; padding: 6px; box-shadow: 2px 2px 0px #111; text-align: center;">
              <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #111; color: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
              </div>
              <div style="font-size: 0.72rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Proyectil Mágico</div>
              <div style="font-size: 0.58rem; color: #666; margin-bottom: 2px;">ATAQUE</div>
              <div class="wf-placeholder-x" style="height: 38px; width: 100%; margin-bottom: 2px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">⚡ Rayo</span>
              </div>
              <div style="font-size: 0.62rem; font-weight: 700; line-height: 1.1;" class="wf-editable-text" contenteditable="true" spellcheck="false">Inflige 8 de daño al Beholder.</div>
            </div>
            
            <div style="font-size: 0.75rem; font-weight: 800; color: #444;">
              ⚡ <em>Lanzando hechizo hacia 'Beholder'...</em>
            </div>
          </div>

          <!-- Resumen de Vida del Jugador -->
          <div style="display: flex; gap: 10px; align-items: center; font-size: 0.8rem; font-weight: 800;">
            <span>🧙 PauCremades</span>
            <span style="border: 1px solid #111; padding: 2px 6px; background: #eee;">❤️ 56 / 70 HP</span>
            <span style="border: 1px solid #111; padding: 2px 6px; background: #eee;">🛡️ 8 Armadura</span>
          </div>

        </div>

        <!-- PARTE INFERIOR: CONTADOR DE MANÁ + MANO DE EXACTAMENTE 4 CARTAS + TERMINAR TURNO -->
        <div style="display: flex; align-items: flex-end; justify-content: space-between; gap: 12px; flex-wrap: wrap;">
          
          <!-- ORBE DE MANÁ / ENERGÍA (6/6 CRISTALES) -->
          <div style="display: flex; flex-direction: column; align-items: center;">
            <div style="width: 58px; height: 58px; border-radius: 50%; border: 3px solid #111; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 2px 2px 0px #111; margin-bottom: 3px;">
              <span style="font-size: 0.65rem; font-weight: 800; line-height: 1;">MANÁ</span>
              <span style="font-size: 1.15rem; font-weight: 900; line-height: 1;" class="wf-editable-text" contenteditable="true" spellcheck="false">6/6</span>
            </div>
            <span style="font-size: 0.68rem; font-weight: 800;">Cristales</span>
          </div>

          <!-- MANO DE EXACTAMENTE 4 CARTAS (COMO EN LA CAPTURA) -->
          <div style="flex: 1; display: flex; gap: 10px; justify-content: center; flex-wrap: wrap; min-width: 300px;">
            
            <!-- Carta 1: Accelerate / Acelerar -->
            <div class="wf-draggable-block wf-box" style="width: 110px; border: 2px solid #111; background: #fff; padding: 6px 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 2px 2px 0px #111;">
              <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">2</span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Acelerar</div>
              <div style="font-size: 0.6rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD</div>
              <div class="wf-placeholder-x" style="height: 44px; width: 100%; margin-bottom: 4px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">🦅</span>
              </div>
              <div style="font-size: 0.65rem; line-height: 1.15; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">La siguiente carta cuesta 1 menos.</div>
            </div>

            <!-- Carta 2: Aftershock / Réplica -->
            <div class="wf-draggable-block wf-box" style="width: 110px; border: 2px solid #111; background: #fff; padding: 6px 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 2px 2px 0px #111;">
              <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">2</span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Réplica</div>
              <div style="font-size: 0.6rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">PASIVA</div>
              <div class="wf-placeholder-x" style="height: 44px; width: 100%; margin-bottom: 4px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">🔥</span>
              </div>
              <div style="font-size: 0.65rem; line-height: 1.15; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Al infligir daño, gana +2 de escudo.</div>
            </div>

            <!-- Carta 3: Amplify / Amplificar -->
            <div class="wf-draggable-block wf-box" style="width: 110px; border: 2px solid #111; background: #fff; padding: 6px 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 2px 2px 0px #111;">
              <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">2</span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Amplificar</div>
              <div style="font-size: 0.6rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD</div>
              <div class="wf-placeholder-x" style="height: 44px; width: 100%; margin-bottom: 4px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">⚔️⚔️</span>
              </div>
              <div style="font-size: 0.65rem; line-height: 1.15; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Duplica debuffs en todos los enemigos.</div>
            </div>

            <!-- Carta 4: Dark Touch / Toque Oscuro -->
            <div class="wf-draggable-block wf-box" style="width: 110px; border: 2px solid #111; background: #fff; padding: 6px 6px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; box-shadow: 2px 2px 0px #111;">
              <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
                <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
              </div>
              <div style="font-size: 0.75rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Toque Oscuro</div>
              <div style="font-size: 0.6rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">ATAQUE</div>
              <div class="wf-placeholder-x" style="height: 44px; width: 100%; margin-bottom: 4px;">
                <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
                <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">🖐️</span>
              </div>
              <div style="font-size: 0.65rem; line-height: 1.15; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Inflige 12 daño. Aplica maldición.</div>
            </div>

          </div>

          <!-- BOTÓN TERMINAR TURNO + DESCARTE -->
          <div style="display: flex; flex-direction: column; align-items: flex-end; gap: 4px;">
            <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="padding: 12px 18px; font-weight: 900; font-size: 0.85rem; border: 2.5px solid #111; box-shadow: 3px 3px 0px #111; text-transform: uppercase;">
              ⏳ Terminar Turno
            </button>
            <div style="font-size: 0.7rem; font-weight: 800; color: #666;">
              🗑️ Descarte: 4 cartas
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 4. CREADOR DE CARTAS
  {
    id: 'page_craft_card_creator',
    title: '4. Creador de cartas',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('cartas')}

  <!-- Barra Superior del Editor -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 14px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; align-items: center; gap: 10px;">
        <h2 style="font-size: 1.15rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Creador de cartas
        </h2>
        <span style="font-size: 0.72rem; border: 1.5px solid #111; padding: 2px 6px; background: #f3f4f6; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Balance: 100% Equilibrada
        </span>
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar">
          Probar en combate
        </button>
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="5. Creador de Mazos" style="font-weight: 900;">
          Guardar carta
        </button>
      </div>
    </div>
  </div>

  <!-- Parámetros Principales (Línea Horizontal Recta) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 16px; background: #ffffff; border: 2px solid #111; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nombre:</span>
        <input type="text" class="wf-input" value="Bola de Fuego" style="font-weight: 800; min-width: 160px;" />
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tipo:</span>
        <select class="wf-input" style="font-weight: 700;">
          <option selected>Hechizo</option>
          <option>Criatura</option>
          <option>Artefacto</option>
        </select>
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Coste de maná:</span>
        <input type="number" class="wf-input" value="4" style="width: 48px; text-align: center; font-weight: 900;" />
      </div>

      <div style="display: flex; gap: 6px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.82rem;" class="wf-editable-text" contenteditable="true" spellcheck="false">Rareza:</span>
        <select class="wf-input" style="font-weight: 700;">
          <option selected>Rara</option>
          <option>Común</option>
          <option>Épica</option>
          <option>Legendaria</option>
        </select>
      </div>
    </div>
  </div>

  <!-- Entorno de Creación de Cartas (Scratch + Vista Previa) -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 24px;">
    <!-- Columna Izquierda: Paleta de Bloques Scratch -->
    <div class="wf-draggable-block wf-col-side" style="flex: 3 1 240px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div style="font-weight: 900; font-size: 0.85rem; margin-bottom: 8px;">Bloques disponibles</div>
        
        <!-- Categoría Eventos -->
        <div style="margin-bottom: 10px;">
          <div style="font-size: 0.7rem; font-weight: 800; color: #555; margin-bottom: 4px;">EVENTOS</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #f3f4f6; cursor: grab;">
              [⚡ Al lanzarse esta carta]
            </div>
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #f3f4f6; cursor: grab;">
              [🛡️ Al recibir daño el héroe]
            </div>
          </div>
        </div>

        <!-- Categoría Efectos -->
        <div style="margin-bottom: 10px;">
          <div style="font-size: 0.7rem; font-weight: 800; color: #555; margin-bottom: 4px;">EFECTOS</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #ffffff; cursor: grab;">
              [💥 Infligir (8) daño a (Objetivo)]
            </div>
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #ffffff; cursor: grab;">
              [🛡️ Ganar (4) de armadura]
            </div>
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #ffffff; cursor: grab;">
              [🃏 Robar (1) carta del mazo]
            </div>
          </div>
        </div>

        <!-- Categoría Condiciones -->
        <div>
          <div style="font-size: 0.7rem; font-weight: 800; color: #555; margin-bottom: 4px;">CONDICIONES</div>
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <div class="wf-box" style="padding: 6px 8px; font-size: 0.72rem; font-weight: 800; border: 1.5px solid #111; background: #f9fafb; cursor: grab;">
              [🔍 SI (Objetivo tiene escudo)]
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Central: Lienzo de Programación Scratch -->
    <div class="wf-draggable-block wf-col-main" style="flex: 4 1 280px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111; min-height: 280px; background: #fdfdfd;">
        <div class="wf-flex-between" style="margin-bottom: 10px;">
          <div style="font-weight: 900; font-size: 0.85rem;">Ensamblador de lógica (Scratch)</div>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.7rem;">Limpiar</button>
        </div>

        <div style="border: 2px dashed #999; padding: 12px; min-height: 200px; display: flex; flex-direction: column; gap: 6px; background: #fafafa;">
          <div class="wf-box" style="padding: 8px 10px; font-size: 0.75rem; font-weight: 900; border: 2px solid #111; background: #111; color: #fff;">
            ▼ [⚡ Al lanzarse esta carta]
          </div>
          <div style="margin-left: 14px; display: flex; flex-direction: column; gap: 4px;">
            <div class="wf-box" style="padding: 8px 10px; font-size: 0.75rem; font-weight: 800; border: 2px solid #111; background: #fff;">
              ▸ [💥 Infligir 8 de daño a Objetivo]
            </div>
            <div class="wf-box" style="padding: 8px 10px; font-size: 0.75rem; font-weight: 800; border: 2px solid #111; background: #fff;">
              ▸ [🔥 Aplicar quemadura (2 turnos)]
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Columna Derecha: Vista Previa de la Carta -->
    <div class="wf-draggable-block wf-col-side" style="flex: 3 1 220px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111; text-align: center;">
        <div style="font-weight: 900; font-size: 0.85rem; margin-bottom: 10px;">Vista previa</div>
        
        <!-- Tarjeta de Carta Final -->
        <div class="wf-box" style="padding: 10px; border: 2px solid #111; background: #fff; box-shadow: 3px 3px 0px #111; max-width: 180px; margin: 0 auto 12px auto;">
          <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 900; border-bottom: 1.5px solid #111; padding-bottom: 4px; margin-bottom: 6px;">
            <span>Bola de Fuego</span>
            <span style="border: 1px solid #111; padding: 0 4px;">4💎</span>
          </div>
          <div class="wf-placeholder-x" style="height: 90px; width: 100%; margin-bottom: 6px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Ilustración</span>
          </div>
          <div style="font-size: 0.7rem; font-weight: 700; line-height: 1.25; min-height: 38px; text-align: left; border-top: 1px solid #eee; padding-top: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            Inflige 8 de daño al objetivo y aplica quemadura durante 2 turnos.
          </div>
        </div>

        <button class="wf-btn wf-btn-sm wf-btn-block wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_deck_creator" data-link-name="5. Creador de Mazos" style="font-weight: 800;">
          + Añadir a mi mazo
        </button>
      </div>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 5. CREADOR DE MAZOS
  {
    id: 'page_craft_deck_creator',
    title: '5. Creador de Mazos',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('mazos')}

  <!-- Cabecera Editor Mazo -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 18px; margin-bottom: 14px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div style="display: flex; gap: 8px; align-items: center;">
        <span style="font-weight: 800; font-size: 0.85rem;">Mazo:</span>
        <input type="text" class="wf-input" value="Mi Mazo de Fuego" style="font-weight: 800; font-size: 0.95rem; width: 180px;" />
      </div>

      <div style="display: flex; gap: 8px;">
        <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar">
          ⚔️ Probar en Lucha
        </button>
        <button class="wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_mazos_catalogo" data-link-name="2. Explorar" style="font-weight: 900;">
          Guardar Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- Estadísticas del Mazo (Línea Horizontal) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 16px; background: #ffffff; border: 2px solid #111; width: 100%; box-sizing: border-box; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px;">
    <!-- Estado de Cartas -->
    <div style="display: flex; gap: 14px; align-items: center;">
      <div>
        <div style="font-size: 0.68rem; font-weight: 800; color: #555;">RECUENTO:</div>
        <div style="font-size: 0.95rem; font-weight: 900;">30 / 30 cartas</div>
      </div>
      <div style="width: 1px; height: 28px; background: #ccc;"></div>
      <div>
        <div style="font-size: 0.68rem; font-weight: 800; color: #555;">ESTADO:</div>
        <span style="font-size: 0.72rem; font-weight: 900; border: 1.5px solid #111; padding: 1px 6px; background: #eee;">LISTO PARA DUELOS</span>
      </div>

      <div style="font-size: 0.78rem; font-weight: 800;">Coste medio: 2.8 Maná</div>
    </div>

    <!-- Curva -->
    <div>
      <div style="font-size: 0.68rem; font-weight: 800; color: #555; margin-bottom: 4px;">CURVA DE MANÁ:</div>
      <div style="display: flex; gap: 8px; align-items: flex-end; height: 45px; border-bottom: 1.5px solid #111; padding-bottom: 2px;">
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">4</span><div style="width: 100%; height: 24px; background: #ccc; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">1</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">8</span><div style="width: 100%; height: 40px; background: #999; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">2</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">7</span><div style="width: 100%; height: 35px; background: #999; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">3</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">6</span><div style="width: 100%; height: 30px; background: #ccc; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">4</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">3</span><div style="width: 100%; height: 18px; background: #eee; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">5</span></div>
        <div style="flex: 1; display: flex; flex-direction: column; align-items: center;"><span style="font-size: 0.6rem;">2</span><div style="width: 100%; height: 12px; background: #eee; border: 1px solid #111;"></div><span style="font-size: 0.65rem;">6+</span></div>
      </div>
    </div>
  </div>

  <!-- 2 Columnas -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split" style="margin-bottom: 24px;">
    <!-- Col 1: Colección -->
    <div class="wf-draggable-block wf-col-main" style="flex: 6 1 320px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 10px;">
          <div style="font-weight: 900; font-size: 0.9rem;">Colección de cartas</div>
          <input type="text" class="wf-input" placeholder="Buscar..." style="width: 120px; font-size: 0.72rem;" />
        </div>

        <div class="wf-sort-zone wf-grid-3" style="gap: 8px;">
          ${[
            { n: 'Bola de Fuego', c: '4💎' },
            { n: 'Gólem de Vapor', c: '3💎' },
            { n: 'Chispa Arcana', c: '1💎' },
            { n: 'Caballero Rayo', c: '2💎' },
            { n: 'Escudo Reflejo', c: '2💎' },
            { n: 'Dragón Magma', c: '6💎' }
          ].map(c => `
            <div class="wf-draggable-block wf-box" style="padding: 8px; border: 1.5px solid #111;">
              <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.75rem; margin-bottom: 4px;">
                <span>${c.n}</span>
                <span style="border: 1px solid #111; padding: 1px 3px; font-size: 0.65rem;">${c.c}</span>
              </div>
              <button class="wf-btn wf-btn-sm wf-btn-block" style="font-size: 0.7rem; font-weight: 800;">+ Añadir</button>
            </div>
          `).join('')}
        </div>
      </div>
    </div>

    <!-- Col 2: Mazo -->
    <div class="wf-draggable-block wf-col-side" style="flex: 4 1 240px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box; border: 2px solid #111;">
        <div class="wf-flex-between" style="margin-bottom: 8px;">
          <div style="font-weight: 900; font-size: 0.9rem;">Cartas en el mazo (30)</div>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.65rem;">Vaciar</button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.75rem;">
          <div class="wf-box" style="padding: 4px 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[1💎] Chispa Arcana</span>
            <span>x2 <button class="wf-btn wf-btn-sm" style="padding: 1px 4px;">-</button></span>
          </div>
          <div class="wf-box" style="padding: 4px 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[2💎] Caballero del Rayo</span>
            <span>x2 <button class="wf-btn wf-btn-sm" style="padding: 1px 4px;">-</button></span>
          </div>
          <div class="wf-box" style="padding: 4px 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[3💎] Gólem de Vapor</span>
            <span>x2 <button class="wf-btn wf-btn-sm" style="padding: 1px 4px;">-</button></span>
          </div>
          <div class="wf-box" style="padding: 4px 8px; display: flex; justify-content: space-between; align-items: center; border: 1px solid #111;">
            <span>[4💎] Bola de Fuego</span>
            <span>x2 <button class="wf-btn wf-btn-sm" style="padding: 1px 4px;">-</button></span>
          </div>
        </div>

        <button class="wf-btn wf-btn-primary wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_craft_luchar_game" data-link-name="3. Luchar" style="margin-top: 12px; font-weight: 900; padding: 8px;">
          Guardar y Luchar
        </button>
      </div>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 6. ZONA TEST (SANDBOX DE PRUEBAS DE COMBATE 1v1)
  {
    id: 'page_craft_arena_battle',
    title: '6. Zona Test',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('zonatest')}

  <!-- BARRA SUPERIOR: MAZMORRA, PLANTAS Y SALAS (Progreso) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 12px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; align-items: center; flex-wrap: wrap;">
      <!-- Izquierda: Planta y Mazo -->
      <div style="display: flex; align-items: center; gap: 10px;">
        <div style="border: 2px solid #111; padding: 3px 8px; font-weight: 900; font-size: 0.8rem; background: #eee;">
          🃏 Mazo: 24
        </div>
        <div>
          <div style="font-size: 0.88rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">🏰 Planta 3: Cripta del Eco</div>
          <div style="font-size: 0.7rem; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">Mazmorra de Piedra • Nivel 12</div>
        </div>
      </div>

      <!-- Centro: Barra de Progreso de Salas (7 / 84) -->
      <div style="flex: 1; max-width: 380px; min-width: 220px;">
        <div style="display: flex; justify-content: space-between; font-size: 0.75rem; font-weight: 900; margin-bottom: 3px;">
          <span class="wf-editable-text" contenteditable="true" spellcheck="false">Progreso: Sala 7 / 14</span>
          <span class="wf-editable-text" contenteditable="true" spellcheck="false">7 / 84 EXP</span>
        </div>
        <div style="width: 100%; height: 16px; border: 2px solid #111; background: #eee; position: relative; overflow: hidden;">
          <div style="width: 45%; height: 100%; background: #222;"></div>
        </div>
      </div>

      <!-- Derecha: Tipo de Sala y Ajustes -->
      <div style="display: flex; align-items: center; gap: 8px;">
        <span style="font-size: 0.75rem; font-weight: 800; border: 1.5px solid #111; padding: 3px 8px; background: #f3f4f6;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ⚔️ Sala 7: Duelo de Cartas
        </span>
        <button class="wf-btn wf-btn-sm" style="font-size: 0.75rem;">⚙️ Pausa</button>
      </div>
    </div>
  </div>

  <!-- ARENA DE COMBATE (ESTILO ROGUELIKE BATTLE) -->
  <div class="wf-draggable-block wf-box" style="padding: 16px; margin-bottom: 14px; background: #f8fafc; width: 100%; box-sizing: border-box; border: 2px solid #111;">
    
    <!-- ZONA CENTRAL DEL CAMPO: CARTAS ENEMIGAS -->
    <div style="margin-bottom: 16px; border-bottom: 2px dashed #bbb; padding-bottom: 16px;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <div style="font-size: 0.75rem; font-weight: 900; color: #444; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ⚔️ Cartas Enemigas en el Campo Rival
        </div>
        <div style="font-size: 0.72rem; font-weight: 800; color: #666;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Intención del Turno Rival
        </div>
      </div>

      <div style="display: flex; gap: 14px; justify-content: center; flex-wrap: wrap;">
        
        <!-- Carta Enemiga 1 (Líder / Golem) -->
        <div class="wf-draggable-block wf-box" style="width: 170px; border: 2px solid #111; background: #fff; padding: 8px; box-shadow: 2px 2px 0px #111; text-align: center;">
          <div style="font-size: 0.75rem; font-weight: 900; background: #222; color: #fff; padding: 2px 4px; margin-bottom: 6px; border: 1px solid #111;">
            ⚔️ Ataque 10
          </div>
          <div class="wf-placeholder-x" style="height: 70px; width: 100%; margin-bottom: 6px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Gólem Roca</span>
          </div>
          <div style="font-size: 0.8rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Gólem de Obsidiana</div>
          <div style="font-size: 0.65rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">DEFENSA • PESADO</div>
          <div style="border: 1.5px solid #111; background: #eee; height: 12px; width: 100%; position: relative; margin-bottom: 2px;">
            <div style="width: 75%; height: 100%; background: #444;"></div>
          </div>
          <div style="font-size: 0.72rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ❤️ 48 / 48 &nbsp;|&nbsp; 🛡️ 10
          </div>
        </div>

        <!-- Carta Enemiga 2 (Arquero) -->
        <div class="wf-draggable-block wf-box" style="width: 170px; border: 2px solid #111; background: #fff; padding: 8px; box-shadow: 2px 2px 0px #111; text-align: center;">
          <div style="font-size: 0.75rem; font-weight: 900; background: #eee; border: 1px solid #111; padding: 2px 4px; margin-bottom: 6px;">
            🏹 Disparo 8 + ☠️
          </div>
          <div class="wf-placeholder-x" style="height: 70px; width: 100%; margin-bottom: 6px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Arquero Sombra</span>
          </div>
          <div style="font-size: 0.8rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Arquero Sombrío</div>
          <div style="font-size: 0.65rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">DISTANCIA • VENENO</div>
          <div style="border: 1.5px solid #111; background: #eee; height: 12px; width: 100%; position: relative; margin-bottom: 2px;">
            <div style="width: 100%; height: 100%; background: #444;"></div>
          </div>
          <div style="font-size: 0.72rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ❤️ 24 / 24
          </div>
        </div>

        <!-- Carta Enemiga 3 (Tótem / Apoyo) -->
        <div class="wf-draggable-block wf-box" style="width: 170px; border: 2px solid #111; background: #fff; padding: 8px; box-shadow: 2px 2px 0px #111; text-align: center;">
          <div style="font-size: 0.75rem; font-weight: 900; background: #eee; border: 1px solid #111; padding: 2px 4px; margin-bottom: 6px;">
            ✨ Cura +6 Aliados
          </div>
          <div class="wf-placeholder-x" style="height: 70px; width: 100%; margin-bottom: 6px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">Tótem Oscuro</span>
          </div>
          <div style="font-size: 0.8rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Tótem de Maná</div>
          <div style="font-size: 0.65rem; color: #666; margin-bottom: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">APOYO • CURACIÓN</div>
          <div style="border: 1.5px solid #111; background: #eee; height: 12px; width: 100%; position: relative; margin-bottom: 2px;">
            <div style="width: 100%; height: 100%; background: #444;"></div>
          </div>
          <div style="font-size: 0.72rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">
            ❤️ 18 / 18
          </div>
        </div>

      </div>
    </div>

    <!-- SECCIÓN INTERMEDIA: CARTA EN DETALLE / SELECCIONADA + ESTADO DEL HÉROE -->
    <div style="display: flex; gap: 16px; margin-bottom: 16px; align-items: center; justify-content: space-between; flex-wrap: wrap;">
      
      <!-- CARTA EN DETALLE (ZOOM / PREVIEW LATERAL) -->
      <div class="wf-draggable-block wf-box" style="width: 210px; border: 2.5px solid #111; background: #fff; padding: 12px; box-shadow: 4px 4px 0px #111;">
        <div style="display: flex; justify-content: center; margin-top: -22px; margin-bottom: 4px;">
          <div style="width: 32px; height: 32px; border-radius: 50%; border: 2px solid #111; background: #fff; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.95rem;">
            1
          </div>
        </div>
        <div style="text-align: center; margin-bottom: 6px;">
          <div style="font-size: 0.95rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">Guardia</div>
          <div style="font-size: 0.65rem; font-weight: 800; color: #555;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD • ESCUDO</div>
        </div>
        <div class="wf-placeholder-x" style="height: 90px; width: 100%; margin-bottom: 8px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">[ 🛡️ Escudo ]</span>
        </div>
        <div style="font-size: 0.75rem; text-align: center; line-height: 1.3; font-weight: 700; border-top: 1px solid #eee; padding-top: 6px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          Otorga +4 de Armadura. Si la salud es inferior al 50%, otorga +4 adicional.
        </div>
      </div>

      <!-- ESTADO DEL JUGADOR / RESUMEN TÁCTICO -->
      <div style="flex: 1; min-width: 220px; background: #fff; border: 2px solid #111; padding: 12px; box-shadow: 2px 2px 0px #111;">
        <div class="wf-flex-between" style="margin-bottom: 8px;">
          <div style="font-size: 0.95rem; font-weight: 900;" class="wf-editable-text" contenteditable="true" spellcheck="false">🧙 PauCremades (Héroe)</div>
          <div style="font-size: 0.72rem; font-weight: 800; border: 1px solid #111; padding: 2px 6px;">Nivel 4</div>
        </div>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
          <div style="flex: 1; min-width: 110px;">
            <div style="font-size: 0.7rem; font-weight: 800; margin-bottom: 2px;">❤️ Salud: 48 / 80</div>
            <div style="height: 12px; border: 1.5px solid #111; background: #eee;">
              <div style="width: 60%; height: 100%; background: #222;"></div>
            </div>
          </div>
          <div style="flex: 1; min-width: 110px;">
            <div style="font-size: 0.7rem; font-weight: 800; margin-bottom: 2px;">🛡️ Armadura: 12</div>
            <div style="height: 12px; border: 1.5px solid #111; background: #eee;">
              <div style="width: 40%; height: 100%; background: #666;"></div>
            </div>
          </div>
        </div>
        <div style="display: flex; gap: 8px; font-size: 0.75rem; font-weight: 800; color: #444;">
          <span>🃏 Mazo: 18 cartas</span>
          <span>•</span>
          <span>🗑️ Descarte: 6 cartas</span>
          <span>•</span>
          <span>⚡ Turno 3</span>
        </div>
      </div>
    </div>

    <!-- ZONA INFERIOR: MANÁ, MANO DE CARTAS Y BOTÓN TERMINAR TURNO -->
    <div style="display: flex; align-items: flex-end; gap: 12px; justify-content: space-between; flex-wrap: wrap;">
      
      <!-- CONTADOR DE MANÁ / ENERGÍA -->
      <div style="display: flex; flex-direction: column; align-items: center;">
        <div style="width: 56px; height: 56px; border-radius: 50%; border: 3px solid #111; background: #fff; display: flex; flex-direction: column; align-items: center; justify-content: center; box-shadow: 2px 2px 0px #111; margin-bottom: 4px;">
          <span style="font-size: 0.65rem; font-weight: 800; line-height: 1;">MANÁ</span>
          <span style="font-size: 1.1rem; font-weight: 900; line-height: 1;" class="wf-editable-text" contenteditable="true" spellcheck="false">5/5</span>
        </div>
        <span style="font-size: 0.65rem; font-weight: 800;">Cristales</span>
      </div>

      <!-- MANO DE CARTAS DEL JUGADOR -->
      <div style="flex: 1; display: flex; gap: 8px; justify-content: center; flex-wrap: wrap; min-width: 260px;">
        
        <!-- Carta Mano 1 -->
        <div class="wf-draggable-block wf-box" style="width: 95px; border: 1.5px solid #111; background: #fff; padding: 6px 4px; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
            <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
          </div>
          <div style="font-size: 0.7rem; font-weight: 900; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Puño Certero</div>
          <div style="font-size: 0.58rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD</div>
          <div class="wf-placeholder-x" style="height: 38px; width: 100%; margin-bottom: 4px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">✊</span>
          </div>
          <div style="font-size: 0.62rem; line-height: 1.1; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Roba 1 carta extra.</div>
        </div>

        <!-- Carta Mano 2 -->
        <div class="wf-draggable-block wf-box" style="width: 95px; border: 1.5px solid #111; background: #fff; padding: 6px 4px; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
            <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
          </div>
          <div style="font-size: 0.7rem; font-weight: 900; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Cuchilla Rápida</div>
          <div style="font-size: 0.58rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD</div>
          <div class="wf-placeholder-x" style="height: 38px; width: 100%; margin-bottom: 4px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">🗡️</span>
          </div>
          <div style="font-size: 0.62rem; line-height: 1.1; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Roba ataque aleatorio.</div>
        </div>

        <!-- Carta Mano 3 -->
        <div class="wf-draggable-block wf-box" style="width: 95px; border: 1.5px solid #111; background: #fff; padding: 6px 4px; text-align: center; display: flex; flex-direction: column; justify-content: space-between;">
          <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
            <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
          </div>
          <div style="font-size: 0.7rem; font-weight: 900; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Corte Voraz</div>
          <div style="font-size: 0.58rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">ATAQUE</div>
          <div class="wf-placeholder-x" style="height: 38px; width: 100%; margin-bottom: 4px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">⚔️</span>
          </div>
          <div style="font-size: 0.62rem; line-height: 1.1; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">Inflige 4 de daño.</div>
        </div>

        <!-- Carta Mano 4 (Seleccionada) -->
        <div class="wf-draggable-block wf-box" style="width: 95px; border: 2.5px solid #111; background: #fff; padding: 6px 4px; text-align: center; display: flex; flex-direction: column; justify-content: space-between; transform: translateY(-4px); box-shadow: 2px 2px 0px #111;">
          <div style="display: flex; justify-content: center; margin-top: -14px; margin-bottom: 2px;">
            <span style="width: 20px; height: 20px; border-radius: 50%; border: 1.5px solid #111; background: #222; color: #fff; font-size: 0.68rem; font-weight: 900; display: flex; align-items: center; justify-content: center;">1</span>
          </div>
          <div style="font-size: 0.7rem; font-weight: 900; margin-bottom: 2px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Guardia</div>
          <div style="font-size: 0.58rem; color: #555; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">HABILIDAD</div>
          <div class="wf-placeholder-x" style="height: 38px; width: 100%; margin-bottom: 4px;">
            <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
            <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">🛡️</span>
          </div>
          <div style="font-size: 0.62rem; line-height: 1.1; font-weight: 700;" class="wf-editable-text" contenteditable="true" spellcheck="false">+4 de Armadura.</div>
        </div>

      </div>

      <!-- BOTÓN TERMINAR TURNO -->
      <div>
        <button class="wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="padding: 12px 18px; font-weight: 900; font-size: 0.85rem; border: 2.5px solid #111; box-shadow: 3px 3px 0px #111; text-transform: uppercase;">
          ⏳ Terminar Turno
        </button>
      </div>

    </div>

  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 7. COMUNIDAD (FEED DE MENSAJES Y CONSEJOS)
  {
    id: 'page_craft_discovery',
    title: '7. Comunidad',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('comunidad')}

  <!-- Cabecera Comunidad -->
  <div class="wf-draggable-block wf-box" style="padding: 14px 18px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #ffffff; border: 2px solid #111;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; flex-wrap: wrap; align-items: center;">
      <div>
        <h2 style="font-size: 1.25rem; font-weight: 900; margin: 0 0 2px 0;">Comunidad</h2>
        <span style="font-size: 0.78rem; color: #555;">Comparte mensajes, consejos de cartas y combos con la comunidad.</span>
      </div>

      <div style="display: flex; gap: 8px;">
        <input type="text" class="wf-input" placeholder="Buscar mensajes o jugadores..." style="font-size: 0.75rem; width: 200px;" />
        <button class="wf-btn wf-btn-sm wf-btn-primary" style="font-weight: 800;">+ Nuevo Post</button>
      </div>
    </div>
  </div>

  <!-- Cuadro para Escribir Mensaje -->
  <div class="wf-draggable-block wf-box" style="padding: 14px; margin-bottom: 18px; border: 2px solid #111; background: #ffffff;">
    <div style="display: flex; gap: 10px; align-items: flex-start; margin-bottom: 10px;">
      <div style="width: 36px; height: 36px; border: 1.5px solid #111; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 900; font-size: 0.9rem;">
        👤
      </div>
      <textarea class="wf-input" placeholder="Bro, he encontrado este conjunto con esta foto que hace unas cartas increíbles por un bajo precio..." rows="2" style="flex: 1; font-family: inherit; font-size: 0.82rem; padding: 8px;"></textarea>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center;">
      <div style="display: flex; gap: 6px;">
        <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">📷 Adjuntar foto / carta</button>
        <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">🧩 Adjuntar bloques</button>
      </div>
      <button class="wf-btn wf-btn-primary wf-btn-sm" style="font-weight: 800; padding: 6px 16px;">Publicar mensaje</button>
    </div>
  </div>

  <!-- Feed de Mensajes de la Comunidad -->
  <div class="wf-draggable-block" style="margin-bottom: 24px;">
    <div style="display: flex; flex-direction: column; gap: 14px;">
      <!-- Mensaje 1 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; border: 2px solid #111; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="font-size: 0.88rem;">@PauCremades</strong>
            <span style="font-size: 0.7rem; color: #666;">• Hace 20 min</span>
          </div>
          <span style="font-size: 0.7rem; font-weight: 800; border: 1px solid #111; padding: 1px 5px;">COMBO FUEGO</span>
        </div>
        <p style="font-size: 0.8rem; color: #222; line-height: 1.4; margin-bottom: 10px;">
          Bro, he encontrado este paquete de cartas con esta foto que hace unas sinergias increíbles por un bajísimo coste de maná. Repite el daño dos veces y además te regala escudo para aguantar la ronda. ¡Prueben este mazo en Zona Test!
        </p>
        <div class="wf-placeholder-x" style="height: 110px; width: 100%; max-width: 320px; margin-bottom: 10px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label">Foto: Paquete de Bloques Fuego &amp; Escudo</span>
        </div>
        <div style="display: flex; gap: 12px; font-size: 0.75rem; color: #555; border-top: 1px solid #eee; padding-top: 8px;">
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">❤️ 24 Me gusta</button>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">💬 6 Comentarios</button>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">🔗 Compartir</button>
        </div>
      </div>

      <!-- Mensaje 2 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; border: 2px solid #111; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="font-size: 0.88rem;">@AntonioC</strong>
            <span style="font-size: 0.7rem; color: #666;">• Hace 1 hora</span>
          </div>
          <span style="font-size: 0.7rem; font-weight: 800; border: 1px solid #111; padding: 1px 5px;">DEFENSA / MAZMORRA</span>
        </div>
        <p style="font-size: 0.8rem; color: #222; line-height: 1.4; margin-bottom: 10px;">
          Ojo con el Gólem de Guardia en el Piso 9 de la Mazmorra, aguanta 3 rondas seguidas de daño directo si le encadenas el bloque de absorción de espinas.
        </p>
        <div style="display: flex; gap: 12px; font-size: 0.75rem; color: #555; border-top: 1px solid #eee; padding-top: 8px;">
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">❤️ 18 Me gusta</button>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">💬 4 Comentarios</button>
        </div>
      </div>

      <!-- Mensaje 3 -->
      <div class="wf-draggable-block wf-box" style="padding: 14px; border: 2px solid #111; background: #fff;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <div style="display: flex; align-items: center; gap: 8px;">
            <strong style="font-size: 0.88rem;">@JesusPerez</strong>
            <span style="font-size: 0.7rem; color: #666;">• Hace 3 horas</span>
          </div>
          <span style="font-size: 0.7rem; font-weight: 800; border: 1px solid #111; padding: 1px 5px;">CREACIÓN DE MAZO</span>
        </div>
        <p style="font-size: 0.8rem; color: #222; line-height: 1.4; margin-bottom: 10px;">
          He subido a Explorar mi baraja completa de 30 cartas 'Tempestad Arcana'. Es perfecta para quienes buscan aceleración rápida de maná.
        </p>
        <div style="display: flex; gap: 12px; font-size: 0.75rem; color: #555; border-top: 1px solid #eee; padding-top: 8px;">
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">❤️ 31 Me gusta</button>
          <button class="wf-btn wf-btn-sm" style="font-size: 0.72rem;">💬 12 Comentarios</button>
        </div>
      </div>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 8. DESARROLLADORES
  {
    id: 'page_craft_devs',
    title: '8. Desarrolladores',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('devs')}

  <div class="wf-draggable-block wf-box" style="padding: 16px 20px; margin-bottom: 18px; border: 2px solid #111; background: #ffffff;">
    <h2 style="font-size: 1.3rem; font-weight: 900; margin: 0 0 4px 0;">Desarrolladores de CraftCaster</h2>
    <p style="font-size: 0.8rem; color: #555; margin: 0;">Diseño de Sistemas Multimedia • Curso 2026-2027</p>
  </div>

  <!-- Rejilla del Equipo (4 Columnas) -->
  <div class="wf-draggable-block" style="margin-bottom: 24px;">
    <div class="wf-sort-zone wf-grid-4" style="gap: 16px;">
      <div class="wf-box" style="padding: 14px; text-align: center; border: 2px solid #111; background: #fff;">
        <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label">Foto</span>
        </div>
        <h3 style="font-size: 0.92rem; font-weight: 900; margin: 4px 0 2px 0;">Antonio Carbonell</h3>
        <div style="font-size: 0.72rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px; display: inline-block; margin-bottom: 6px;">Scrum Master</div>
        <p style="font-size: 0.72rem; color: #555; line-height: 1.3;">Gestión del proyecto, moderación y arquitectura del sistema.</p>
      </div>

      <div class="wf-box" style="padding: 14px; text-align: center; border: 2px solid #111; background: #fff;">
        <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label">Foto</span>
        </div>
        <h3 style="font-size: 0.92rem; font-weight: 900; margin: 4px 0 2px 0;">Pau Cremades</h3>
        <div style="font-size: 0.72rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px; display: inline-block; margin-bottom: 6px;">Desarrollador</div>
        <p style="font-size: 0.72rem; color: #555; line-height: 1.3;">Motor de bloques Scratch, lienzo y lógica de cartas.</p>
      </div>

      <div class="wf-box" style="padding: 14px; text-align: center; border: 2px solid #111; background: #fff;">
        <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label">Foto</span>
        </div>
        <h3 style="font-size: 0.92rem; font-weight: 900; margin: 4px 0 2px 0;">Jesús Pérez</h3>
        <div style="font-size: 0.72rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px; display: inline-block; margin-bottom: 6px;">Desarrollador</div>
        <p style="font-size: 0.72rem; color: #555; line-height: 1.3;">Tablero de combate, Zona Test y simulación de duelos.</p>
      </div>

      <div class="wf-box" style="padding: 14px; text-align: center; border: 2px solid #111; background: #fff;">
        <div class="wf-placeholder-x" style="height: 110px; width: 100%; margin-bottom: 8px;">
          <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100"><line x1="0" y1="0" x2="100" y2="100"/><line x1="100" y1="0" x2="0" y2="100"/></svg>
          <span class="wf-x-label">Foto</span>
        </div>
        <h3 style="font-size: 0.92rem; font-weight: 900; margin: 4px 0 2px 0;">Álvaro Márquez</h3>
        <div style="font-size: 0.72rem; font-weight: 800; border: 1px solid #111; padding: 1px 4px; display: inline-block; margin-bottom: 6px;">Desarrollador</div>
        <p style="font-size: 0.72rem; color: #555; line-height: 1.3;">Módulo de autenticación, comunidad y catálogo de mazos.</p>
      </div>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  },

  // 9. CUENTA Y ACCESO
  {
    id: 'page_craft_auth',
    title: '9. Cuenta y Acceso',
    html: `
<div class="wf-container wf-sort-zone">
  ${getCleanNav('cuenta')}

  <div class="wf-row-split" style="margin-bottom: 24px;">
    <!-- Iniciar Sesión (Con Google) -->
    <div class="wf-col-main" style="flex: 5 1 280px;">
      <div class="wf-box" style="padding: 20px; border: 2px solid #111; background: #fff;">
        <h2 style="font-size: 1.25rem; font-weight: 900; margin: 0 0 4px 0;">Iniciar Sesión</h2>
        <p style="font-size: 0.78rem; color: #555; margin-bottom: 14px;">Accede a tu perfil y recupera tus mazos y creaciones.</p>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
          <div>
            <label style="display: block; font-weight: 800; font-size: 0.78rem; margin-bottom: 3px;">Usuario o correo:</label>
            <input type="text" class="wf-input" value="alvaro@craftcaster.io" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.78rem; margin-bottom: 3px;">Contraseña:</label>
            <input type="password" class="wf-input" value="••••••••••••" style="width: 100%; box-sizing: border-box;" />
            <div style="text-align: right; margin-top: 3px;">
              <a href="#" style="font-size: 0.7rem; font-weight: 700; color: #111;">¿Olvidaste tu contraseña?</a>
            </div>
          </div>

          <button class="wf-btn wf-btn-primary wf-btn-block" data-link-page="page_craft_home" style="padding: 9px; font-weight: 900;">
            Entrar a CraftCaster
          </button>

          <div style="text-align: center; font-size: 0.72rem; color: #666; margin: 2px 0;">- O también -</div>

          <!-- BOTÓN INICIAR SESIÓN CON GOOGLE -->
          <button class="wf-btn wf-btn-block" data-link-page="page_craft_home" style="padding: 8px; font-weight: 800; border: 1.5px solid #111; display: flex; align-items: center; justify-content: center; gap: 6px; background: #ffffff;">
            <span style="font-weight: 900; border: 1px solid #111; border-radius: 50%; width: 16px; height: 16px; display: inline-flex; align-items: center; justify-content: center; font-size: 0.7rem;">G</span>
            <span>Iniciar sesión con Google</span>
          </button>
        </div>
      </div>
    </div>

    <!-- Crear Cuenta -->
    <div class="wf-col-side" style="flex: 5 1 280px;">
      <div class="wf-box" style="padding: 20px; border: 2px solid #111; background: #fff;">
        <h2 style="font-size: 1.25rem; font-weight: 900; margin: 0 0 4px 0;">Crear Cuenta</h2>
        <p style="font-size: 0.78rem; color: #555; margin-bottom: 14px;">Regístrate para guardar tus cartas y jugar en la arena.</p>

        <div style="display: flex; flex-direction: column; gap: 10px; margin-bottom: 14px;">
          <div>
            <label style="display: block; font-weight: 800; font-size: 0.78rem; margin-bottom: 3px;">Usuario:</label>
            <input type="text" class="wf-input" placeholder="Ej: PauCremades" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.78rem; margin-bottom: 3px;">Correo electrónico:</label>
            <input type="email" class="wf-input" placeholder="tu@correo.com" style="width: 100%; box-sizing: border-box;" />
          </div>

          <div>
            <label style="display: block; font-weight: 800; font-size: 0.78rem; margin-bottom: 3px;">Contraseña:</label>
            <input type="password" class="wf-input" placeholder="Mínimo 8 caracteres" style="width: 100%; box-sizing: border-box;" />
          </div>

          <button class="wf-btn wf-btn-block" data-link-page="page_craft_home" style="padding: 9px; font-weight: 900; background: #f3f4f6; border: 2px solid #111;">
            Registrarse y Empezar
          </button>
        </div>
      </div>
    </div>
  </div>

  ${getCleanFooter()}
</div>
`
  }
];

const craftProject = {
  id: 'proj_craftcaster',
  name: 'CraftCaster (Sistema de Mazos & Duelos)',
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

// 1. Write all 4 export files
fs.writeFileSync(path.join(baseDir, 'craftcaster_project.wireframe'), JSON.stringify(bundle, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'craftcaster_project.json'), JSON.stringify(bundle, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'magic_wizards_project.wireframe'), JSON.stringify(bundle, null, 2), 'utf8');
fs.writeFileSync(path.join(baseDir, 'magic_wizards_project.json'), JSON.stringify(bundle, null, 2), 'utf8');
console.log('Saved all 4 project files (craftcaster & magic_wizards)!');

// 2. Update storage.js
let storageCode = fs.readFileSync(path.join(baseDir, 'js', 'storage.js'), 'utf8');

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
console.log('Updated storage.js!');

// 3. Update templates.js
let templatesCode = fs.readFileSync(path.join(baseDir, 'js', 'templates.js'), 'utf8');

const craftTemplateObj = `  // 0. CRAFTCASTER (PORTAL DE MAZOS & DUELOS B&W)
  craftCaster: {
    id: 'craftCaster',
    name: 'CraftCaster (Portal de Mazos & Duelos)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal en blanco y negro: Cabecera con Inicio/Explorar/Luchar/Zona Test/Comunidad/Desarrolladores, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador recto, batalla roguelike y editor de cartas.',
    html: \`${pages[0].html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
  },
  magicWizards: {
    id: 'magicWizards',
    name: 'CraftCaster (Portal de Mazos & Duelos)',
    iconKey: 'layers',
    badge: 'CraftCaster B&W',
    description: 'Portal en blanco y negro: Cabecera con Inicio/Explorar/Luchar/Zona Test/Comunidad/Desarrolladores, Hero Banner, 6 mazos famosos con puntuación de mazmorras, explorador recto, batalla roguelike y editor de cartas.',
    html: \`${pages[0].html.replace(/\\/g, '\\\\').replace(/`/g, '\\`').replace(/\$/g, '\\$')}\`
  },`;

if (templatesCode.includes('magicWizards: {')) {
  templatesCode = templatesCode.replace(/\/\/\s*0\.\s*MAGIC:[\s\S]*?magicWizards:\s*\{[\s\S]*?html:\s*`[\s\S]*?`\s*\},/m, craftTemplateObj);
} else if (templatesCode.includes('craftCaster: {')) {
  templatesCode = templatesCode.replace(/\/\/\s*0\.\s*CRAFTCASTER[\s\S]*?magicWizards:\s*\{[\s\S]*?html:\s*`[\s\S]*?`\s*\},/m, craftTemplateObj);
}

fs.writeFileSync(path.join(baseDir, 'js', 'templates.js'), templatesCode, 'utf8');
console.log('Updated templates.js!');
