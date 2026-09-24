# Wireframe Studio
### Creador de Mockups Low-Fi, Auto-Responsive & Prototipos Interactivos

Aplicación web profesional para diseñar, prototipar y exportar mockups y wireframes con la estética exacta de **líneas puras, simples, claras y directas** de baja fidelidad (como los wireframes clásicos de YouTube, tiendas móviles, colecciones de cartas TCG y bocetos de Miro).

---

## Características Principales

1. **Gestión Multiproyecto y Persistencia Local**:
   - Subpágina/Dashboard de proyectos con cuadrícula visual y tarjeta `+` para crear proyectos nuevos.
   - Sugerencias de plantillas minimalistas: *Landing Page SaaS, Tienda E-Commerce, Plataforma de Vídeos, Juego de Cartas TCG, Videojuego RPG / HUD*.
   - Guardado automático continuo en `localStorage`.
   - Exportación e importación de proyectos completos en formato `.wireframe`.

2. **Multicapa y Multipantalla (Pages)**:
   - Creación ilimitada de páginas/pantallas por proyecto.
   - Enlace interactivo entre pantallas: asigna saltos de página a cualquier botón, tarjeta o texto.
   - Previsualizador interactivo animado de prototipos con transiciones suaves.
   - Exportación a **PDF interactivo** con enlaces clicables reales entre pantallas, HTML animado y capturas PNG 2x.

3. **100% Editable Parte por Parte**:
   - Selección granular de cualquier sub-elemento del mockup: botones, títulos H1-H6, párrafos, cajas de imagen con X, avatares, chips/badges, precios y tarjetas.
   - Edición en el lienzo directa con `contenteditable`.
   - Panel Inspector con edición de texto en vivo bidireccional, tamaños de fuente directos (`12px`, `15px`, `18px`, `24px`, `32px`), negrita, alineación, anchos (`100%`, `50/50`, `50%`, `Auto`), altura y colores sólidos estáticos (sin degradados).
   - Barra flotante contextual sobre cada elemento seleccionado con alineador de posición, división 50/50, enlace de página, duplicado y borrado.

4. **Biblioteca de Componentes Categorizados**:
   - Inserción con un solo clic y arrastrar y soltar (Drag & Drop) mediante SortableJS.
   - Categorías: Básicos, Estructuras, Tienda E-Commerce, Multimedia & Vídeo, Cartas TCG y Videojuegos.

5. **Motor de Historial Deshacer / Rehacer (Ctrl+Z / Ctrl+Y)**:
   - Registro de instantáneas en cada acción.
   - Botones dedicados en la barra superior y atajos de teclado globales.

6. **Diseño Auto-Responsive**:
   - Vistas para Escritorio (1200px), Laptop (1024px), Tablet (768px) y Móvil (390px).
   - Vista simultánea Multi 3-en-1 para sincronización responsive en vivo.

---

## Cómo Iniciar la Aplicación

Abre directamente en cualquier navegador:
`index.html`

O sirviendo mediante un servidor local (por ejemplo Python):
```bash
python -m http.server 8085
```
Acceder a: `http://localhost:8085`

---

## Tecnologías Utilizadas

- **HTML5 / CSS3**: Flexbox, CSS Grid, variables CSS, colores sólidos planos, sin degradados, 0 emojis (iconos vectoriales SVG en línea).
- **JavaScript Moderno (ES6+)**: Arquitectura modular con `SortableJS`, `jsPDF`, `html2canvas`.
- **Persistencia**: `localStorage` nativo con exportación/importación JSON (`.wireframe`).
