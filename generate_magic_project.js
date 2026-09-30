const fs = require('fs');
const path = require('path');

const WireframeComponents = {
  renderPlaceholderX(label = 'Image Placeholder', height = 140) {
    return `
      <div class="wf-placeholder-x" style="height: ${typeof height === 'number' ? height + 'px' : height}; width: 100%; box-sizing: border-box;">
        <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
          <line x1="0" y1="0" x2="100" y2="100" />
          <line x1="100" y1="0" x2="0" y2="100" />
        </svg>
        <span class="wf-x-label wf-editable-text" contenteditable="true" spellcheck="false">${label}</span>
      </div>
    `;
  },
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
  renderStars(rating = 4) {
    let stars = '';
    for (let i = 0; i < 5; i++) {
      stars += `<span style="display:inline-flex; color:${i < rating ? '#111' : '#ccc'};">★</span>`;
    }
    return `<div class="wf-rating-stars">${stars}</div>`;
  }
};

const page_magic_home_html = `
<div class="wf-container wf-sort-zone">
  <!-- 1. BARRA SUPERIOR DE NAVEGACIÓN (MAGIC WIZARDS HEADER) -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 18px; margin-bottom: 16px; width: 100%; box-sizing: border-box; background: #111827; color: #ffffff; border-color: #111827;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px; margin-bottom: 8px;">
      <!-- Logo y Secciones Principales -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 14px;">
        <div class="wf-draggable-block" style="display: flex; align-items: center; gap: 8px;">
          <span style="font-weight: 900; font-size: 1.2rem; letter-spacing: 1px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAGIC</span>
          <span style="font-size: 0.65rem; background: #374151; color: #e5e7eb; padding: 2px 6px; border-radius: 2px; font-weight: 800;" class="wf-editable-text" contenteditable="true" spellcheck="false">THE GATHERING</span>
        </div>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">PRODUCTOS</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">MTG ARENA</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">JUGAR A MAGIC</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">EXPLORAR MAGIC</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_shop" data-link-name="2. Tienda de Mazos (Reality Fracture)" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">TIENDA</a>
        <a href="#" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="color: #ffffff; font-weight: 700; font-size: 0.85rem;">ARTÍCULOS</a>
      </div>

      <!-- Enlaces de Cuenta y Herramientas -->
      <div class="wf-sort-zone wf-flex-row" style="gap: 12px; font-size: 0.78rem;">
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="color: #9ca3af;">⚲ LOCALIZADOR</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="color: #9ca3af;">☷ BASE DE DATOS DE CARTAS</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false" style="color: #9ca3af;">👤 CUENTAS</span>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="background: #ea580c; color: #fff; border-color: #c2410c; font-weight: 800;">
          + Crear Tu Propio Mazo
        </button>
      </div>
    </div>
  </div>

  <!-- 2. HERO BANNER PRINCIPAL (THE HOBBIT / EDICIÓN ESPECIAL - CAPTURA 1) -->
  <div class="wf-draggable-block wf-box" style="margin-bottom: 28px; width: 100%; box-sizing: border-box; position: relative; border-width: 2.5px; overflow: hidden; background: #f9fafb;">
    <div class="wf-placeholder-x" style="height: 320px; width: 100%; border: none;">
      <svg class="wf-x-lines" preserveAspectRatio="none" viewBox="0 0 100 100">
        <line x1="0" y1="0" x2="100" y2="100" />
        <line x1="100" y1="0" x2="0" y2="100" />
      </svg>
      <div style="position: absolute; bottom: 24px; left: 24px; max-width: 520px; background: rgba(255,255,255,0.92); border: 2px solid #111; padding: 16px 20px; border-radius: 2px;">
        <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 6px;">
          <span style="font-size: 1.1rem; font-weight: 900; color: #ea580c;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAGIC</span>
          <span style="font-size: 1.1rem; font-weight: 900; color: #111;" class="wf-editable-text" contenteditable="true" spellcheck="false">THE HOBBIT™</span>
        </div>
        <h2 style="font-size: 1.15rem; font-weight: 900; margin: 4px 0 6px 0; line-height: 1.3;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          UN VIAJE DE UNA IDA Y UNA VUELTA. ¡YA DISPONIBLE EN TODO EL MUNDO!
        </h2>
        <div style="font-size: 0.72rem; color: #6b7280; margin-bottom: 12px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          ™ MEE to Wizards. TM &amp; © 2026 MEE &amp; Wizards.
        </div>
        <div class="wf-sort-zone wf-flex-row" style="gap: 10px;">
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="background: #166534; color: #fff; border-color: #14532d; font-weight: 800; padding: 8px 16px;">
            LEER MÁS
          </button>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_shop" data-link-name="2. Tienda de Mazos (Reality Fracture)" style="background: #ffffff; color: #111; border-color: #111; font-weight: 800; padding: 8px 16px;">
            COMPRAR
          </button>
        </div>
      </div>
    </div>
    <div style="display: flex; justify-content: space-between; align-items: center; padding: 8px 16px; background: #ffffff; border-top: 1.5px solid #111;">
      <div style="display: flex; gap: 6px;">
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #ea580c; display: inline-block;"></span>
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #9ca3af; display: inline-block;"></span>
        <span style="width: 8px; height: 8px; border-radius: 50%; background: #9ca3af; display: inline-block;"></span>
      </div>
      <div style="display: flex; gap: 4px;">
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">←</button>
        <button class="wf-btn wf-btn-sm" style="padding: 2px 8px; font-weight: 800;">→</button>
      </div>
    </div>
  </div>

  <!-- 3. SECCIÓN: MAZOS MÁS FAMOSOS Y ÚLTIMAS NOTICIAS (6 TARJETAS - CAPTURAS 2 Y 3) -->
  <div class="wf-draggable-block" style="margin-bottom: 30px; width: 100%; box-sizing: border-box;">
    <div style="text-align: center; margin-bottom: 18px;">
      <h1 style="font-size: 1.6rem; font-weight: 900; text-transform: uppercase; letter-spacing: 0.5px; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ÚLTIMAS NOTICIAS &amp; MAZOS MÁS FAMOSOS
      </h1>
      <a href="#" class="wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="font-size: 0.85rem; font-weight: 700; color: #ea580c; text-decoration: underline;">
        Descubre más mazos y noticias de Magic →
      </a>
    </div>

    <div class="wf-sort-zone wf-grid-3" style="gap: 18px;">
      <!-- Tarjeta 1 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Ranked Play Mazo Pro', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MTG ARENA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Detalles de la temporada clasificatoria de MTG Arena
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Juega en eventos clasificatorios de MTG Arena para ganar premios, estilos de cartas y subir de rango para conseguir invitación al Qualifier Weekend.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(5)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="font-weight: 800;">
            Probar Este Mazo en Batalla →
          </button>
        </div>
      </div>

      <!-- Tarjeta 2 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Corn Maze Deck', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #ea580c; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">ANUNCIOS</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Secret Lair: Corn Maze Superdrop
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Head into the corn maze—we've got demons to hunt. The Corn Maze Superdrop launches with eight brand new drops and powerful legendary cards!
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(4)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_shop" data-link-name="2. Tienda de Mazos (Reality Fracture)" style="font-weight: 800;">
            Ver en Tienda →
          </button>
        </div>
      </div>

      <!-- Tarjeta 3 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Arena Direct Deck', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MTG ARENA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Arena Direct | Terms and Conditions
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            These Arena Direct Official Terms and Conditions govern your participation in the MTG Arena organized play with booster box prizes.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(5)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="font-weight: 800;">
            Clonar Mazo al Editor →
          </button>
        </div>
      </div>

      <!-- Tarjeta 4 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Announcements Deck', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MTG ARENA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            MTG Arena Announcements – October 2026
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Catch up with the latest info and competitive events on MTG Arena, new card drops, and tournament formats for Planeswalkers.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(4)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="font-weight: 800;">
            Ver Lista de Cartas →
          </button>
        </div>
      </div>

      <!-- Tarjeta 5 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Realidad Fracturada Deck', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #dc2626; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">MTG ARENA</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Arena Direct de Realidad fracturada, del 2 al 11 de octubre
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            ¡Juega a MTG Arena y consigue cartas de Magic: The Gathering físicas en eventos Arena Direct exclusivos de la temporada!
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(5)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_shop" data-link-name="2. Tienda de Mazos (Reality Fracture)" style="font-weight: 800;">
            Pedir Sobres →
          </button>
        </div>
      </div>

      <!-- Tarjeta 6 -->
      <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 0; overflow: hidden; display: flex; flex-direction: column;">
        <div class="wf-draggable-block" style="position: relative;">
          ${WireframeComponents.renderPlaceholderX('Vision Design Deck', 140)}
          <span style="position: absolute; bottom: 8px; left: 8px; background: #ea580c; color: #fff; font-size: 0.65rem; font-weight: 800; padding: 2px 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">CÓMO CREAMOS MAGIC</span>
        </div>
        <div style="padding: 14px; flex: 1; display: flex; flex-direction: column;">
          <h3 style="font-size: 1.05rem; font-weight: 900; margin-bottom: 8px; line-height: 1.3;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Reality Fracture Vision Design Handoff, Part 2
          </h3>
          <p style="font-size: 0.8rem; color: #4b5563; margin-bottom: 12px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
            Mark discusses Hexhaven, Reality Fracture's twisted take on Strixhaven, along with other aspects of game design and deckbuilding.
          </p>
          <div class="wf-draggable-block" style="margin-bottom: 10px;">
            ${WireframeComponents.renderStars(5)}
          </div>
          <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)" style="font-weight: 800;">
            Ver Estrategia →
          </button>
        </div>
      </div>
    </div>
  </div>

  <!-- 4. LLAMADA A LA ACCIÓN: JUEGA A MAGIC DONDE QUIERAS (CAPTURA 3 ABAJO) -->
  <div class="wf-draggable-block wf-box" style="padding: 24px; margin-bottom: 32px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 20px; width: 100%; box-sizing: border-box;">
    <div class="wf-draggable-block" style="width: 220px; max-width: 100%;">
      ${WireframeComponents.renderPlaceholderX('MTG Arena en PC y Móvil', 120)}
    </div>
    <div class="wf-draggable-block" style="flex: 1 1 300px;">
      <h2 style="font-size: 1.4rem; font-weight: 900; margin-bottom: 6px; text-transform: uppercase;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        JUEGA A MAGIC DONDE QUIERAS
      </h2>
      <p style="font-size: 0.85rem; color: #d1d5db; line-height: 1.5; margin-bottom: 14px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ¡Descúbrelo gratis! MTG Arena es un juego digital de cartas coleccionables disponible para móviles y PC. ¡Consigue 3 sobres digitales gratis en tu buzón del juego cuando inicies sesión!
      </p>
      <button class="wf-draggable-block wf-btn wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="background: #ea580c; border-color: #c2410c; color: #fff; font-weight: 900; padding: 10px 22px; font-size: 0.95rem;">
        ⊞ CÓMO EMPEZAR (JUGAR PARTIDA AHORA) →
      </button>
    </div>
  </div>

  <!-- 5. FOOTER COMPLETO DE MAGIC (CAPTURA 4) -->
  <footer class="wf-draggable-block wf-box" style="padding: 28px 20px; background: #030712; color: #ffffff; border-color: #030712; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="align-items: flex-start; gap: 24px; margin-bottom: 24px; flex-wrap: wrap;">
      <!-- Buscador de Tienda y Redes -->
      <div class="wf-draggable-block" style="flex: 1 1 240px;">
        <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 8px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          BUSCAR UNA TIENDA
        </div>
        <div class="wf-search-group" style="margin-bottom: 16px;">
          <input type="text" class="wf-input" placeholder="Introduce tu ciudad o código postal" style="background: #1f2937; color: #fff; border-color: #374151; font-size: 0.8rem;" />
          <button class="wf-btn" style="background: #f97316; color: #fff; border-color: #ea580c;">🔍</button>
        </div>
        <div style="font-weight: 800; font-size: 0.85rem; margin-bottom: 8px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">
          SOCIAL
        </div>
        <div class="wf-sort-zone wf-flex-row" style="gap: 10px;">
          <span class="wf-draggable-block wf-chip" style="background: #1f2937; color: #fff; border-color: #374151; font-size: 0.75rem;">Facebook</span>
          <span class="wf-draggable-block wf-chip" style="background: #1f2937; color: #fff; border-color: #374151; font-size: 0.75rem;">X (Twitter)</span>
          <span class="wf-draggable-block wf-chip" style="background: #1f2937; color: #fff; border-color: #374151; font-size: 0.75rem;">Twitch</span>
          <span class="wf-draggable-block wf-chip" style="background: #1f2937; color: #fff; border-color: #374151; font-size: 0.75rem;">YouTube</span>
        </div>
      </div>

      <!-- Columnas de Enlaces -->
      <div class="wf-draggable-block" style="flex: 1 1 140px;">
        <div style="font-weight: 800; font-size: 0.8rem; margin-bottom: 8px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">DESCUBRIR</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.78rem; color: #9ca3af;">
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Artículos</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Formatos</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Reglas</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Podcasts</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Fondos De Pantalla</a>
        </div>
      </div>

      <div class="wf-draggable-block" style="flex: 1 1 140px;">
        <div style="font-weight: 800; font-size: 0.8rem; margin-bottom: 8px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">EMPRESA</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.78rem; color: #9ca3af;">
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Acerca de</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Cuentas</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Empleo</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Ayuda</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">WPN</a>
        </div>
      </div>

      <div class="wf-draggable-block" style="flex: 1 1 140px;">
        <div style="font-weight: 800; font-size: 0.8rem; margin-bottom: 8px; color: #f97316;" class="wf-editable-text" contenteditable="true" spellcheck="false">MAGIC</div>
        <div style="display: flex; flex-direction: column; gap: 4px; font-size: 0.78rem; color: #9ca3af;">
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Magic: The Gathering</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">MTG Arena</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Localizador De Tiendas</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Base de datos de cartas</a>
          <a href="#" style="color: #9ca3af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Secret Lair</a>
        </div>
      </div>
    </div>

    <div style="border-top: 1px solid #1f2937; padding-top: 14px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; font-size: 0.72rem; color: #6b7280;">
      <div class="wf-sort-zone wf-flex-row" style="gap: 12px;">
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">TÉRMINOS DE USO</span>
        <span>•</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">CÓDIGO DE CONDUCTA</span>
        <span>•</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">POLÍTICA DE PRIVACIDAD</span>
        <span>•</span>
        <span class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">ATENCIÓN AL CLIENTE</span>
      </div>
      <div class="wf-draggable-block">
        <span style="border: 1px solid #374151; padding: 3px 8px; border-radius: 2px; color: #e5e7eb;" class="wf-editable-text" contenteditable="true" spellcheck="false">Español ▼</span>
      </div>
    </div>
  </footer>
</div>
`;

const page_magic_shop_html = `
<div class="wf-container wf-sort-zone">
  <!-- BARRA DE NAVEGACIÓN TIENDA -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 16px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; width: 100%; box-sizing: border-box;">
    <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_home" data-link-name="1. Inicio - Magic Portal" style="font-weight: 800;">
      ← Volver al Portal de Inicio
    </button>
    <div style="font-weight: 800; font-size: 1rem;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
      Tienda Oficial de Mazos &amp; Sobres
    </div>
    <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
      <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_deckbuilder" data-link-name="3. Creador de Mazos (Deck Builder)">
        Creador de Mazos
      </button>
      <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)">
        Jugar Partida →
      </button>
    </div>
  </div>

  <!-- CABECERA TIENDA (CAPTURA 5) -->
  <div class="wf-draggable-block" style="text-align: center; margin: 18px 0 20px 0;">
    <h1 style="font-size: 1.8rem; font-weight: 900; color: #ea580c; letter-spacing: 1px; text-transform: uppercase; margin-bottom: 4px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
      TIENDA
    </h1>
    <div style="height: 3px; width: 60px; background: #ea580c; margin: 0 auto 16px auto;"></div>

    <!-- FILTROS DESPLEGABLES (CAPTURA 5) -->
    <div class="wf-sort-zone wf-flex-row" style="justify-content: center; gap: 12px; margin-bottom: 20px;">
      <div class="wf-draggable-block">
        <select class="wf-input" style="padding: 6px 12px; font-weight: 700; width: 200px;">
          <option>Todos los conjuntos ▼</option>
          <option>Realidad Fracturada</option>
          <option>The Hobbit</option>
          <option>Strixhaven</option>
        </select>
      </div>
      <div class="wf-draggable-block">
        <select class="wf-input" style="padding: 6px 12px; font-weight: 700; width: 200px;">
          <option>Todos los productos ▼</option>
          <option>Sobres de juego</option>
          <option>Sobres de coleccionista</option>
          <option>Draft Night</option>
          <option>Bundles</option>
        </select>
      </div>
      <div class="wf-draggable-block">
        <select class="wf-input" style="padding: 6px 12px; font-weight: 700; width: 200px;">
          <option>Ideal para ▼</option>
          <option>Principiantes</option>
          <option>Torneo Competitivo</option>
          <option>Coleccionistas</option>
        </select>
      </div>
    </div>
  </div>

  <!-- REJILLA DE 4 PRODUCTOS / MAZOS (CAPTURA 5) -->
  <div class="wf-sort-zone wf-grid-4" style="gap: 16px; margin-bottom: 24px;">
    <!-- Producto 1 -->
    <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 12px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-direction: column;">
      <div class="wf-draggable-block" style="text-align: center; margin-bottom: 8px;">
        <span style="font-size: 0.72rem; font-weight: 900; letter-spacing: 1px; color: #67e8f9;" class="wf-editable-text" contenteditable="true" spellcheck="false">REALIDAD FRACTURADA</span>
      </div>
      <div class="wf-draggable-block" style="margin-bottom: 10px;">
        ${WireframeComponents.renderPlaceholderX('Sobres de Juego (Play Boosters)', 140)}
      </div>
      <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Reality Fracture</div>
      <h3 style="font-size: 1.05rem; font-weight: 900; margin: 4px 0 6px 0;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Sobres de juego</h3>
      <p style="font-size: 0.78rem; color: #d1d5db; line-height: 1.4; margin-bottom: 14px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
        Estos sobres son la mejor manera de descubrir el multiverso alternativo de Jace. No solo contienen las cartas que necesitas, ¡sino que todos ellos incluyen pares ecoicos!
      </p>
      <button class="wf-draggable-block wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="background: #1e3a8a; color: #fff; border-color: #3b82f6; font-weight: 800; font-size: 0.78rem;">
        REALIZA TU PEDIDO ANTICIPADO ▼
      </button>
    </div>

    <!-- Producto 2 -->
    <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 12px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-direction: column;">
      <div class="wf-draggable-block" style="text-align: center; margin-bottom: 8px;">
        <span style="font-size: 0.72rem; font-weight: 900; letter-spacing: 1px; color: #67e8f9;" class="wf-editable-text" contenteditable="true" spellcheck="false">REALIDAD FRACTURADA</span>
      </div>
      <div class="wf-draggable-block" style="margin-bottom: 10px;">
        ${WireframeComponents.renderPlaceholderX('Sobres de Coleccionista', 140)}
      </div>
      <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Reality Fracture</div>
      <h3 style="font-size: 1.05rem; font-weight: 900; margin: 4px 0 6px 0;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Sobres de coleccionista</h3>
      <p style="font-size: 0.78rem; color: #d1d5db; line-height: 1.4; margin-bottom: 14px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
        ¡Descubre un nuevo multiverso repleto de maravillas! Todos los sobres contienen cartas raras míticas y foil tradicionales, además de cartas de espejo roto y mucho más.
      </p>
      <button class="wf-draggable-block wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="background: #1e3a8a; color: #fff; border-color: #3b82f6; font-weight: 800; font-size: 0.78rem;">
        REALIZA TU PEDIDO ANTICIPADO ▼
      </button>
    </div>

    <!-- Producto 3 -->
    <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 12px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-direction: column;">
      <div class="wf-draggable-block" style="text-align: center; margin-bottom: 8px;">
        <span style="font-size: 0.72rem; font-weight: 900; letter-spacing: 1px; color: #67e8f9;" class="wf-editable-text" contenteditable="true" spellcheck="false">REALIDAD FRACTURADA</span>
      </div>
      <div class="wf-draggable-block" style="margin-bottom: 10px;">
        ${WireframeComponents.renderPlaceholderX('Draft Night Box', 140)}
      </div>
      <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Reality Fracture</div>
      <h3 style="font-size: 1.05rem; font-weight: 900; margin: 4px 0 6px 0;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Draft Night</h3>
      <p style="font-size: 0.78rem; color: #d1d5db; line-height: 1.4; margin-bottom: 14px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
        Descubre la cara oculta de tus amigos y monta una fiesta de draft del Ecoverso. Incluye 12 sobres de juego, 1 de coleccionista, 90 tierras y fichas para 4 jugadores.
      </p>
      <button class="wf-draggable-block wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="background: #1e3a8a; color: #fff; border-color: #3b82f6; font-weight: 800; font-size: 0.78rem;">
        REALIZA TU PEDIDO ANTICIPADO ▼
      </button>
    </div>

    <!-- Producto 4 -->
    <div class="wf-draggable-block wf-sort-zone wf-box" style="padding: 12px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-direction: column;">
      <div class="wf-draggable-block" style="text-align: center; margin-bottom: 8px;">
        <span style="font-size: 0.72rem; font-weight: 900; letter-spacing: 1px; color: #67e8f9;" class="wf-editable-text" contenteditable="true" spellcheck="false">REALIDAD FRACTURADA</span>
      </div>
      <div class="wf-draggable-block" style="margin-bottom: 10px;">
        ${WireframeComponents.renderPlaceholderX('Bundle Caja + Dado Spindown', 140)}
      </div>
      <div style="font-size: 0.7rem; color: #9ca3af; text-transform: uppercase;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Reality Fracture</div>
      <h3 style="font-size: 1.05rem; font-weight: 900; margin: 4px 0 6px 0;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">Bundle</h3>
      <p style="font-size: 0.78rem; color: #d1d5db; line-height: 1.4; margin-bottom: 14px; flex: 1;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
        El bundle incluye nueve sobres de juego y un dado Spindown sobredimensionado para que des tus primeros pasos con carta legendaria exclusiva.
      </p>
      <button class="wf-draggable-block wf-btn wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" style="background: #1e3a8a; color: #fff; border-color: #3b82f6; font-weight: 800; font-size: 0.78rem;">
        REALIZA TU PEDIDO ANTICIPADO ▼
      </button>
    </div>
  </div>
</div>
`;

const page_magic_deckbuilder_html = `
<div class="wf-container wf-sort-zone">
  <!-- BARRA SUPERIOR DEL EDITOR DE MAZOS -->
  <div class="wf-draggable-block wf-box" style="padding: 12px 16px; margin-bottom: 16px; width: 100%; box-sizing: border-box;">
    <div class="wf-sort-zone wf-flex-between" style="gap: 12px;">
      <div class="wf-sort-zone wf-flex-row" style="gap: 10px;">
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_home" data-link-name="1. Inicio - Magic Portal">
          ← Inicio
        </button>
        <span style="font-weight: 900; font-size: 1.1rem;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
          Mazo: Dragones de Realidad Fracturada (Izzet)
        </span>
      </div>
      <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false">Guardar Mazo</button>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="background: #ea580c; border-color: #c2410c;">
          Probar en Duelo de Batalla →
        </button>
      </div>
    </div>
  </div>

  <!-- FILTROS DE COLOR DE MANÁ Y ESTADÍSTICAS -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 14px; margin-bottom: 16px; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; width: 100%; box-sizing: border-box; background: #f9fafb;">
    <div class="wf-sort-zone wf-flex-row" style="gap: 6px; font-weight: 800; font-size: 0.8rem;">
      <span style="color: #666; font-size: 0.75rem;">COLORES:</span>
      <span class="wf-draggable-block wf-chip" style="background: #fef08a;">☀️ Blanco</span>
      <span class="wf-draggable-block wf-chip active" style="background: #3b82f6; color: #fff;">💧 Azul</span>
      <span class="wf-draggable-block wf-chip" style="background: #374151; color: #fff;">💀 Negro</span>
      <span class="wf-draggable-block wf-chip active" style="background: #ef4444; color: #fff;">🔥 Rojo</span>
      <span class="wf-draggable-block wf-chip" style="background: #22c55e; color: #fff;">🌲 Verde</span>
      <span class="wf-draggable-block wf-chip" style="background: #e5e7eb;">💎 Incoloro</span>
    </div>
    <div class="wf-draggable-block" style="font-size: 0.85rem; font-weight: 800;">
      Total: <span style="color: #16a34a;">60 / 60 Cartas</span> • Banquillo: 15 / 15
    </div>
  </div>

  <!-- DISEÑO 50/50: BIBLIOTECA DE CARTAS + TU MAZO ACTUAL -->
  <div class="wf-draggable-block wf-sort-zone wf-row-split">
    <!-- COLUMNA IZQUIERDA: COLECCIÓN DE CARTAS DISPONIBLES -->
    <div class="wf-draggable-block wf-col-main" style="flex: 6 1 320px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box;">
        <div class="wf-flex-between" style="margin-bottom: 12px;">
          <h3 style="font-size: 1rem; font-weight: 900; margin: 0;" class="wf-editable-text" contenteditable="true" spellcheck="false">Biblioteca de Cartas</h3>
          <input type="text" class="wf-input" placeholder="Buscar por nombre o texto..." style="max-width: 220px; font-size: 0.78rem;" />
        </div>

        <div class="wf-sort-zone wf-grid-3" style="gap: 12px;">
          <!-- Carta 1 -->
          <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="width: 100%; max-width: 100%;">
            <div class="wf-draggable-block wf-tcg-header">
              <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Dragón del Abismo</span>
              <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">4🔥</span>
            </div>
            <div class="wf-draggable-block wf-tcg-art">
              ${WireframeComponents.renderPlaceholderX('Dragon Art', 90)}
            </div>
            <div class="wf-draggable-block wf-tcg-type">
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura - Dragón</span>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">[Mítica]</span>
            </div>
            <div class="wf-draggable-block wf-tcg-text-box">
              <div class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem;">Vuela. Prisa. Hace 3 de daño a cualquier objetivo al atacar.</div>
            </div>
            <div class="wf-draggable-block wf-tcg-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="padding: 2px 6px; font-size: 0.7rem;">+ Añadir</button>
              <div class="wf-tcg-stats wf-editable-text" contenteditable="true" spellcheck="false">6 / 5</div>
            </div>
          </div>

          <!-- Carta 2 -->
          <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="width: 100%; max-width: 100%;">
            <div class="wf-draggable-block wf-tcg-header">
              <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Mago de la Tempestad</span>
              <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">2💧</span>
            </div>
            <div class="wf-draggable-block wf-tcg-art">
              ${WireframeComponents.renderPlaceholderX('Mage Art', 90)}
            </div>
            <div class="wf-draggable-block wf-tcg-type">
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">Criatura - Hechicero</span>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">[Rara]</span>
            </div>
            <div class="wf-draggable-block wf-tcg-text-box">
              <div class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem;">Roba 2 cartas cuando lances un hechizo de fuego.</div>
            </div>
            <div class="wf-draggable-block wf-tcg-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="padding: 2px 6px; font-size: 0.7rem;">+ Añadir</button>
              <div class="wf-tcg-stats wf-editable-text" contenteditable="true" spellcheck="false">2 / 3</div>
            </div>
          </div>

          <!-- Carta 3 -->
          <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="width: 100%; max-width: 100%;">
            <div class="wf-draggable-block wf-tcg-header">
              <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Rayo Fulminante</span>
              <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">1🔥</span>
            </div>
            <div class="wf-draggable-block wf-tcg-art">
              ${WireframeComponents.renderPlaceholderX('Lightning Art', 90)}
            </div>
            <div class="wf-draggable-block wf-tcg-type">
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">Instantáneo</span>
              <span class="wf-editable-text" contenteditable="true" spellcheck="false">[Común]</span>
            </div>
            <div class="wf-draggable-block wf-tcg-text-box">
              <div class="wf-editable-text" contenteditable="true" spellcheck="false" style="font-size: 0.7rem;">Hace 3 puntos de daño a cualquier criatura o jugador.</div>
            </div>
            <div class="wf-draggable-block wf-tcg-footer" style="display: flex; justify-content: space-between; align-items: center;">
              <button class="wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" style="padding: 2px 6px; font-size: 0.7rem;">+ Añadir</button>
              <div class="wf-tcg-stats wf-editable-text" contenteditable="true" spellcheck="false">Spell</div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- COLUMNA DERECHA: MAZO EN CONSTRUCCIÓN Y CURVA DE MANÁ -->
    <div class="wf-draggable-block wf-col-side" style="flex: 4 1 260px;">
      <div class="wf-box" style="padding: 14px; width: 100%; box-sizing: border-box;">
        <h3 style="font-size: 1rem; font-weight: 900; margin-bottom: 8px;" class="wf-editable-text" contenteditable="true" spellcheck="false">Cartas del Mazo</h3>

        <!-- Curva de maná visual -->
        <div style="background: #f3f4f6; padding: 8px; border: 1px solid #ddd; margin-bottom: 12px; border-radius: 2px;">
          <div style="font-size: 0.72rem; font-weight: 800; margin-bottom: 4px;">CURVA DE MANÁ:</div>
          <div style="display: flex; align-items: flex-end; gap: 6px; height: 40px;">
            <div style="flex: 1; background: #ea580c; height: 35%; text-align: center; font-size: 0.65rem; color: #fff; font-weight: 800;">1</div>
            <div style="flex: 1; background: #ea580c; height: 75%; text-align: center; font-size: 0.65rem; color: #fff; font-weight: 800;">2</div>
            <div style="flex: 1; background: #ea580c; height: 100%; text-align: center; font-size: 0.65rem; color: #fff; font-weight: 800;">3</div>
            <div style="flex: 1; background: #ea580c; height: 50%; text-align: center; font-size: 0.65rem; color: #fff; font-weight: 800;">4</div>
            <div style="flex: 1; background: #ea580c; height: 30%; text-align: center; font-size: 0.65rem; color: #fff; font-weight: 800;">5+</div>
          </div>
        </div>

        <!-- Lista de cartas -->
        <div class="wf-sort-zone" style="display: flex; flex-direction: column; gap: 4px; font-size: 0.8rem; margin-bottom: 14px;">
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #eff6ff; border: 1px solid #bfdbfe;">
            <span>4x Dragón del Abismo</span>
            <span style="font-weight: 800;">4🔥</span>
          </div>
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #eff6ff; border: 1px solid #bfdbfe;">
            <span>4x Mago de la Tempestad</span>
            <span style="font-weight: 800;">2💧</span>
          </div>
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #eff6ff; border: 1px solid #bfdbfe;">
            <span>4x Rayo Fulminante</span>
            <span style="font-weight: 800;">1🔥</span>
          </div>
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #eff6ff; border: 1px solid #bfdbfe;">
            <span>4x Contrahechizo</span>
            <span style="font-weight: 800;">2💧</span>
          </div>
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #fef2f2; border: 1px solid #fecaca;">
            <span>12x Montaña (Tierra)</span>
            <span style="font-weight: 800;">Land</span>
          </div>
          <div class="wf-draggable-block" style="display: flex; justify-content: space-between; padding: 4px 6px; background: #f0fdf4; border: 1px solid #bbf7d0;">
            <span>12x Isla (Tierra)</span>
            <span style="font-weight: 800;">Land</span>
          </div>
        </div>

        <button class="wf-draggable-block wf-btn wf-btn-primary wf-btn-block wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_battle" data-link-name="4. Tablero de Batalla (Arena Duel)" style="padding: 10px; font-weight: 900; background: #16a34a; border-color: #15803d;">
          ⚔️ Probar Mazo en Batalla →
        </button>
      </div>
    </div>
  </div>
</div>
`;

const page_magic_battle_html = `
<div class="wf-container wf-sort-zone">
  <!-- BARRA SUPERIOR DE PARTIDA -->
  <div class="wf-draggable-block wf-box" style="padding: 10px 16px; margin-bottom: 12px; background: #111827; color: #ffffff; border-color: #111827; display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 10px; width: 100%; box-sizing: border-box;">
    <button class="wf-draggable-block wf-btn wf-btn-sm wf-editable-text" contenteditable="true" spellcheck="false" data-link-page="page_magic_home" data-link-name="1. Inicio - Magic Portal" style="background: #374151; color: #fff; border-color: #4b5563;">
      ← Rendirse / Salir al Portal
    </button>
    <div style="font-weight: 900; font-size: 1.05rem; color: #f97316;" class="wf-draggable-block wf-editable-text" contenteditable="true" spellcheck="false">
      ARENA DUEL — MESA DE COMBATE 1 VS 1
    </div>
    <div class="wf-sort-zone wf-flex-row" style="gap: 8px;">
      <span class="wf-draggable-block wf-chip" style="background: #dc2626; color: #fff; font-weight: 800;">FASE DE ATAQUE</span>
      <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-editable-text" contenteditable="true" spellcheck="false" style="background: #2563eb;">
        Pasar Turno ▶
      </button>
    </div>
  </div>

  <!-- ZONA DEL RIVAL (ENEMIGO) -->
  <div class="wf-draggable-block wf-box" style="padding: 12px; margin-bottom: 12px; background: #fef2f2; border: 2px solid #ef4444; width: 100%; box-sizing: border-box;">
    <div class="wf-flex-between" style="margin-bottom: 8px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        ${WireframeComponents.renderCircle('RIVAL', 40)}
        <div>
          <div style="font-weight: 900; font-size: 0.95rem; color: #991b1b;" class="wf-editable-text" contenteditable="true" spellcheck="false">Nicol Bolas (Planeswalker Rival)</div>
          <div style="font-size: 0.75rem; color: #666;" class="wf-editable-text" contenteditable="true" spellcheck="false">Mano: 4 cartas • Mazo: 38 cartas</div>
        </div>
      </div>
      <div style="font-size: 1.3rem; font-weight: 900; background: #dc2626; color: #fff; padding: 4px 12px; border-radius: 3px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ❤️ 20 HP
      </div>
    </div>

    <!-- Criaturas del Rival en el campo -->
    <div class="wf-sort-zone wf-grid-3" style="gap: 10px;">
      <div class="wf-draggable-block wf-tcg-card" style="max-width: 100%; background: #ffffff; padding: 6px;">
        <div style="font-weight: 800; font-size: 0.78rem; display: flex; justify-content: space-between;">
          <span>Demonio del Vórtice</span>
          <span>5/5</span>
        </div>
        <div style="font-size: 0.65rem; color: #dc2626; font-weight: 700;">[En Posición de Bloqueo]</div>
      </div>
      <div class="wf-draggable-block wf-tcg-card" style="max-width: 100%; background: #ffffff; padding: 6px;">
        <div style="font-weight: 800; font-size: 0.78rem; display: flex; justify-content: space-between;">
          <span>Guardián de Éter</span>
          <span>2/4</span>
        </div>
        <div style="font-size: 0.65rem; color: #dc2626; font-weight: 700;">[En Posición de Bloqueo]</div>
      </div>
    </div>
  </div>

  <!-- LÍNEA CENTRAL DE FASE Y COMBATE -->
  <div class="wf-draggable-block" style="text-align: center; margin: 10px 0; background: #111827; color: #fff; padding: 6px; font-weight: 900; font-size: 0.85rem; letter-spacing: 1px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
    ⚔️ ZONA DE COMBATE — DECLARA TUS CRIATURAS ATACANTES ⚔️
  </div>

  <!-- ZONA DEL JUGADOR (ALIADO & MANO) -->
  <div class="wf-draggable-block wf-box" style="padding: 12px; margin-bottom: 12px; background: #eff6ff; border: 2px solid #3b82f6; width: 100%; box-sizing: border-box;">
    <!-- Criaturas aliadas en el campo -->
    <div class="wf-sort-zone wf-grid-3" style="gap: 10px; margin-bottom: 12px;">
      <div class="wf-draggable-block wf-tcg-card" style="max-width: 100%; background: #ffffff; padding: 6px; border-color: #2563eb;">
        <div style="font-weight: 900; font-size: 0.78rem; display: flex; justify-content: space-between; color: #1e40af;">
          <span>Dragón del Abismo</span>
          <span>6/5</span>
        </div>
        <div style="font-size: 0.68rem; color: #16a34a; font-weight: 800;">[Atacando ⚔️] [Vuela]</div>
      </div>
      <div class="wf-draggable-block wf-tcg-card" style="max-width: 100%; background: #ffffff; padding: 6px; border-color: #2563eb;">
        <div style="font-weight: 900; font-size: 0.78rem; display: flex; justify-content: space-between; color: #1e40af;">
          <span>Mago de la Tempestad</span>
          <span>2/3</span>
        </div>
        <div style="font-size: 0.68rem; color: #16a34a; font-weight: 800;">[Listo para Lanzar Hechizo]</div>
      </div>
    </div>

    <!-- Información del jugador -->
    <div class="wf-flex-between" style="border-top: 1.5px solid #bfdbfe; padding-top: 8px;">
      <div style="display: flex; align-items: center; gap: 10px;">
        ${WireframeComponents.renderCircle('TÚ', 40)}
        <div>
          <div style="font-weight: 900; font-size: 0.95rem; color: #1e40af;" class="wf-editable-text" contenteditable="true" spellcheck="false">Planeswalker Pau (Tú)</div>
          <div style="font-size: 0.75rem; color: #4b5563;" class="wf-editable-text" contenteditable="true" spellcheck="false">Maná: 6/6 disponible (💧💧💧🔥🔥🔥)</div>
        </div>
      </div>
      <div style="font-size: 1.3rem; font-weight: 900; background: #2563eb; color: #fff; padding: 4px 12px; border-radius: 3px;" class="wf-editable-text" contenteditable="true" spellcheck="false">
        ❤️ 18 HP
      </div>
    </div>
  </div>

  <!-- MANO DE CARTAS DEL JUGADOR (4 CARTAS + MAZO PARA ROBAR) -->
  <div class="wf-draggable-block wf-box" style="padding: 12px; background: #ffffff; width: 100%; box-sizing: border-box;">
    <div class="wf-flex-between" style="margin-bottom: 8px;">
      <div style="font-size: 0.8rem; font-weight: 800; color: #374151;">TU MANO (4 CARTAS):</div>
      <button class="wf-btn wf-btn-sm" style="font-weight: 800; background: #f3f4f6;">
        🎴 Robar Carta del Mazo (42 restantes)
      </button>
    </div>

    <div class="wf-sort-zone wf-grid-4" style="gap: 10px;">
      <!-- Carta en Mano 1 -->
      <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="max-width: 100%;">
        <div class="wf-draggable-block wf-tcg-header">
          <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Rayo Fulminante</span>
          <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">1🔥</span>
        </div>
        <div class="wf-draggable-block wf-tcg-art">
          ${WireframeComponents.renderPlaceholderX('Lightning', 65)}
        </div>
        <div class="wf-draggable-block wf-tcg-text-box" style="font-size:0.65rem;">
          Hace 3 de daño instantáneo.
        </div>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-btn-block" style="font-weight:800; font-size:0.7rem; margin-top:4px;">
          Lanzar Hechizo
        </button>
      </div>

      <!-- Carta en Mano 2 -->
      <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="max-width: 100%;">
        <div class="wf-draggable-block wf-tcg-header">
          <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Contrahechizo</span>
          <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">2💧</span>
        </div>
        <div class="wf-draggable-block wf-tcg-art">
          ${WireframeComponents.renderPlaceholderX('Counter', 65)}
        </div>
        <div class="wf-draggable-block wf-tcg-text-box" style="font-size:0.65rem;">
          Contrarresta el hechizo objetivo.
        </div>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-btn-block" style="font-weight:800; font-size:0.7rem; margin-top:4px;">
          Lanzar Hechizo
        </button>
      </div>

      <!-- Carta en Mano 3 -->
      <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="max-width: 100%;">
        <div class="wf-draggable-block wf-tcg-header">
          <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Dragón Carmesí</span>
          <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">4🔥</span>
        </div>
        <div class="wf-draggable-block wf-tcg-art">
          ${WireframeComponents.renderPlaceholderX('Red Dragon', 65)}
        </div>
        <div class="wf-draggable-block wf-tcg-text-box" style="font-size:0.65rem;">
          Criatura 5/4 con Prisa.
        </div>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-primary wf-btn-block" style="font-weight:800; font-size:0.7rem; margin-top:4px;">
          Invocar Criatura
        </button>
      </div>

      <!-- Carta en Mano 4 -->
      <div class="wf-draggable-block wf-sort-zone wf-tcg-card" style="max-width: 100%;">
        <div class="wf-draggable-block wf-tcg-header">
          <span class="wf-tcg-name wf-editable-text" contenteditable="true" spellcheck="false">Isla Ecoica</span>
          <span class="wf-tcg-cost wf-editable-text" contenteditable="true" spellcheck="false">Land</span>
        </div>
        <div class="wf-draggable-block wf-tcg-art">
          ${WireframeComponents.renderPlaceholderX('Island', 65)}
        </div>
        <div class="wf-draggable-block wf-tcg-text-box" style="font-size:0.65rem;">
          Toca para añadir 💧.
        </div>
        <button class="wf-draggable-block wf-btn wf-btn-sm wf-btn-block" style="font-weight:800; font-size:0.7rem; margin-top:4px;">
          Jugar Tierra
        </button>
      </div>
    </div>
  </div>
</div>
`;

const magicProject = {
  version: "1.0",
  id: "proj_magic_wizards",
  name: "Magic: The Gathering (Portal, Tienda & Duelos)",
  createdAt: Date.now(),
  updatedAt: Date.now(),
  activePageId: "page_magic_home",
  pages: [
    {
      id: "page_magic_home",
      title: "1. Inicio - Magic Portal",
      html: page_magic_home_html
    },
    {
      id: "page_magic_shop",
      title: "2. Tienda de Mazos (Reality Fracture)",
      html: page_magic_shop_html
    },
    {
      id: "page_magic_deckbuilder",
      title: "3. Creador de Mazos (Deck Builder)",
      html: page_magic_deckbuilder_html
    },
    {
      id: "page_magic_battle",
      title: "4. Tablero de Batalla (Arena Duel)",
      html: page_magic_battle_html
    }
  ]
};

const targetDir = 'C:\\Users\\paucr\\Documents\\Proyectos\\MockUps';
fs.writeFileSync(path.join(targetDir, 'magic_wizards_project.wireframe'), JSON.stringify(magicProject, null, 2), 'utf8');
fs.writeFileSync(path.join(targetDir, 'magic_wizards_project.json'), JSON.stringify(magicProject, null, 2), 'utf8');

console.log('Successfully generated magic_wizards_project.wireframe and magic_wizards_project.json');
