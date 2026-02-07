import grapesjs from 'grapesjs';
import { registerBlocks } from './blocks.js';
import { registerComponents } from './components.js';
import { configurePanels, getStarterContent } from './panels.js';
import { configureStyleManager } from './styles.js';
import { configureStorage } from './storage.js';

const storageConfig = configureStorage();

const editor = grapesjs.init({
  container: '#editor',
  fromElement: false,
  height: '100%',
  width: 'auto',

  storageManager: storageConfig,

  styleManager: {
    appendTo: '#style-manager-panel',
    sectors: configureStyleManager(),
  },

  selectorManager: {
    appendTo: '#selector-panel',
  },

  traitManager: {
    appendTo: '#traits-panel',
  },

  layerManager: {
    appendTo: '#layers-panel',
  },

  blockManager: {
    appendTo: '#blocks-panel',
  },

  deviceManager: {
    devices: [
      { name: 'Desktop', width: '' },
      { name: 'Tablet', width: '768px', widthMedia: '992px' },
      { name: 'Mobile portrait', width: '375px', widthMedia: '480px' },
    ],
  },

  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap',
    ],
  },

  panels: { defaults: [] },

  // Rich Text Editor config — bold, italic, underline, link
  richTextEditor: {
    actions: ['bold', 'italic', 'underline', 'strikethrough', 'link'],
  },
});

// Register custom component types (carousel, html block)
registerComponents(editor);

// Register all blocks
registerBlocks(editor);

// Set up top bar + tab switching
configurePanels(editor);

// Add default content on first load
editor.on('load', () => {
  const components = editor.DomComponents.getComponents();
  if (components.length === 0) {
    editor.setComponents(getStarterContent());
  }
});
