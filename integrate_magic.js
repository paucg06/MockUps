const fs = require('fs');
const path = require('path');

const magicProject = JSON.parse(fs.readFileSync('C:\\Users\\paucr\\Documents\\Proyectos\\MockUps\\magic_wizards_project.json', 'utf8'));

// 1. Update js/templates.js
let templatesContent = fs.readFileSync('C:\\Users\\paucr\\Documents\\Proyectos\\MockUps\\js\\templates.js', 'utf8');

const magicTemplateCode = `
  // 0. MAGIC: THE GATHERING (PORTAL, TIENDA & DUELOS)
  magicWizards: {
    id: 'magicWizards',
    name: 'Magic: The Gathering (Portal & Duelos)',
    iconKey: 'layers',
    badge: 'Magic Wizards',
    description: 'Portal oficial inspirado en Wizards: Cabecera con selector de cartas/mazos, Hero Banner, 6 mazos famosos con puntuación de mazmorras, tienda Reality Fracture, creador de mazos y tablero de combate.',
    html: \`${magicProject.pages[0].html.replace(/`/g, '\\`').replace(/\${/g, '\\${')}\`
  },
`;

if (!templatesContent.includes('magicWizards:')) {
  templatesContent = templatesContent.replace('const WireframeTemplates = {', 'const WireframeTemplates = {' + magicTemplateCode);
  fs.writeFileSync('C:\\Users\\paucr\\Documents\\Proyectos\\MockUps\\js\\templates.js', templatesContent, 'utf8');
}

// 2. Update js/storage.js
let storageContent = fs.readFileSync('C:\\Users\\paucr\\Documents\\Proyectos\\MockUps\\js\\storage.js', 'utf8');

const magicDefaultProj = JSON.stringify(magicProject, null, 8);

const magicCreateCode = `
    if (templateKey === 'magic') {
      const defaultMagic = this.getDefaultProjects().find(p => p.id === 'proj_magic_wizards');
      if (defaultMagic && defaultMagic.pages) {
        initialPages = JSON.parse(JSON.stringify(defaultMagic.pages));
      }
    } else `;

if (!storageContent.includes("if (templateKey === 'magic')")) {
  storageContent = storageContent.replace('if (templateKey === \'ecommerce\')', magicCreateCode + 'if (templateKey === \'ecommerce\')');
}

if (!storageContent.includes('proj_magic_wizards')) {
  storageContent = storageContent.replace('getDefaultProjects() {\n    return [', 'getDefaultProjects() {\n    return [\n      ' + magicDefaultProj + ',');
}

fs.writeFileSync('C:\\Users\\paucr\\Documents\\Proyectos\\MockUps\\js\\storage.js', storageContent, 'utf8');

console.log('Successfully integrated Magic project into templates.js and storage.js');
