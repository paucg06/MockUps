/* ==========================================================================
   ONLINE / VECTOR SVG ICONS (NO EMOJIS - CLEAN CANVAS STYLE)
   Lightweight, stroke-based vector icons (Lucide / Feather style)
   ========================================================================== */

const Icons = {
  svg(pathData, size = 16, strokeWidth = 2, viewBox = '0 0 24 24') {
    return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="${viewBox}" fill="none" stroke="currentColor" stroke-width="${strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="icon-svg">${pathData}</svg>`;
  },

  monitor(s = 16) {
    return this.svg('<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>', s);
  },

  laptop(s = 16) {
    return this.svg('<rect x="3" y="4" width="18" height="12" rx="2"/><path d="M2 20h20"/>', s);
  },

  tablet(s = 16) {
    return this.svg('<rect x="4" y="2" width="16" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>', s);
  },

  smartphone(s = 16) {
    return this.svg('<rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/>', s);
  },

  columns(s = 16) {
    return this.svg('<path d="M12 3v18"/><rect width="18" height="18" x="3" y="3" rx="2"/>', s);
  },

  image(s = 16) {
    return this.svg('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="3" x2="21" y2="21"/><line x1="21" y1="3" x2="3" y2="21"/>', s);
  },

  textLines(s = 16) {
    return this.svg('<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="17" y2="12"/><line x1="3" y1="18" x2="13" y2="18"/>', s);
  },

  heading(s = 16) {
    return this.svg('<path d="M6 4v16"/><path d="M18 4v16"/><path d="M6 12h12"/>', s);
  },

  button(s = 16) {
    return this.svg('<rect x="3" y="6" width="18" height="12" rx="2"/><line x1="7" y1="12" x2="17" y2="12"/>', s);
  },

  search(s = 16) {
    return this.svg('<circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>', s);
  },

  user(s = 16) {
    return this.svg('<path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/>', s);
  },

  video(s = 16) {
    return this.svg('<polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/>', s);
  },

  shoppingCart(s = 16) {
    return this.svg('<circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>', s);
  },

  layers(s = 16) {
    return this.svg('<polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/>', s);
  },

  gamepad(s = 16) {
    return this.svg('<line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><rect x="2" y="6" width="20" height="12" rx="4"/>', s);
  },

  layout(s = 16) {
    return this.svg('<rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/>', s);
  },

  plus(s = 16) {
    return this.svg('<line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>', s);
  },

  trash(s = 16) {
    return this.svg('<polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>', s);
  },

  copy(s = 16) {
    return this.svg('<rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/>', s);
  },

  arrowUp(s = 16) {
    return this.svg('<line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/>', s);
  },

  arrowDown(s = 16) {
    return this.svg('<line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>', s);
  },

  download(s = 16) {
    return this.svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/>', s);
  },

  save(s = 16) {
    return this.svg('<path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/><polyline points="17 21 17 13 7 13 7 21"/><polyline points="7 3 7 8 15 8"/>', s);
  },

  folder(s = 16) {
    return this.svg('<path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>', s);
  },

  printer(s = 16) {
    return this.svg('<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>', s);
  },

  sliders(s = 16) {
    return this.svg('<line x1="4" y1="21" x2="4" y2="14"/><line x1="4" y1="10" x2="4" y2="3"/><line x1="12" y1="21" x2="12" y2="12"/><line x1="12" y1="8" x2="12" y2="3"/><line x1="20" y1="21" x2="20" y2="16"/><line x1="20" y1="12" x2="20" y2="3"/><line x1="1" y1="14" x2="7" y2="14"/><line x1="9" y1="8" x2="15" y2="8"/><line x1="17" y1="16" x2="23" y2="16"/>', s);
  },

  penTool(s = 16) {
    return this.svg('<path d="M12 19l7-7 3 3-7 7-3-3z"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/><circle cx="11" cy="11" r="2"/>', s);
  },

  square(s = 16) {
    return this.svg('<rect x="3" y="3" width="18" height="18" rx="2"/>', s);
  },

  grip(s = 16) {
    return this.svg('<circle cx="9" cy="12" r="1"/><circle cx="9" cy="5" r="1"/><circle cx="9" cy="19" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="5" r="1"/><circle cx="15" cy="19" r="1"/>', s);
  },

  menu(s = 16) {
    return this.svg('<line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="18" x2="21" y2="18"/>', s);
  },

  bell(s = 16) {
    return this.svg('<path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/>', s);
  },

  mapPin(s = 16) {
    return this.svg('<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>', s);
  },

  star(s = 14) {
    return this.svg('<polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>', s);
  },

  alignLeft(s = 14) {
    return this.svg('<line x1="21" y1="6" x2="3" y2="6"/><line x1="15" y1="12" x2="3" y2="12"/><line x1="17" y1="18" x2="3" y2="18"/>', s);
  },

  alignCenter(s = 14) {
    return this.svg('<line x1="18" y1="6" x2="6" y2="6"/><line x1="21" y1="12" x2="3" y2="12"/><line x1="18" y1="18" x2="6" y2="18"/>', s);
  },

  alignRight(s = 14) {
    return this.svg('<line x1="21" y1="6" x2="3" y2="6"/><line x1="21" y1="12" x2="9" y2="12"/><line x1="21" y1="18" x2="7" y2="18"/>', s);
  },

  split2(s = 14) {
    return this.svg('<rect x="3" y="3" width="8" height="18" rx="1"/><rect x="13" y="3" width="8" height="18" rx="1"/>', s);
  },

  fullWidth(s = 14) {
    return this.svg('<rect x="3" y="3" width="18" height="18" rx="1"/><line x1="3" y1="12" x2="21" y2="12"/>', s);
  },

  close(s = 16) {
    return this.svg('<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>', s);
  },

  play(s = 16) {
    return this.svg('<polygon points="5 3 19 12 5 21 5 3"/>', s);
  },

  link(s = 16) {
    return this.svg('<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>', s);
  },

  filePlus(s = 16) {
    return this.svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/>', s);
  },

  fileText(s = 16) {
    return this.svg('<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/>', s);
  },

  eye(s = 16) {
    return this.svg('<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>', s);
  },

  undo(s = 14) {
    return this.svg('<path d="M3 7v6h6"/><path d="M21 17a9 9 0 0 0-9-9 9 9 0 0 0-6 2.3L3 13"/>', s);
  },

  redo(s = 14) {
    return this.svg('<path d="M21 7v6h-6"/><path d="M3 17a9 9 0 0 1 9-9 9 9 0 0 1 6 2.3L21 13"/>', s);
  },

  upload(s = 14) {
    return this.svg('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="17 8 12 3 7 8"/><line x1="12" y1="3" x2="12" y2="15"/>', s);
  },

  check(s = 14) {
    return this.svg('<polyline points="20 6 9 17 4 12"/>', s);
  },

  edit(s = 14) {
    return this.svg('<path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>', s);
  },

  arrowLeft(s = 16) {
    return this.svg('<line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>', s);
  },

  chevronDown(s = 12) {
    return this.svg('<polyline points="6 9 12 15 18 9"/>', s);
  }
};
