import grapesjs from 'grapesjs';
import { registerBlocks } from './blocks.js';
import { configurePanels } from './panels.js';
import { configureStyleManager } from './styles.js';
import { configureStorage } from './storage.js';

const storageConfig = configureStorage();

const editor = grapesjs.init({
  container: '#editor',
  fromElement: false,
  height: '100%',
  width: 'auto',

  // Storage (localStorage auto-save)
  storageManager: storageConfig,

  // Style manager sectors
  styleManager: {
    sectors: configureStyleManager(),
  },

  // Device presets
  deviceManager: {
    devices: [
      { name: 'Desktop', width: '' },
      { name: 'Tablet', width: '768px', widthMedia: '992px' },
      { name: 'Mobile portrait', width: '375px', widthMedia: '480px' },
    ],
  },

  // Canvas settings
  canvas: {
    styles: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap',
    ],
  },

  // Layer manager
  layerManager: {
    appendTo: '.gjs-pn-views-container',
  },

  // Panels — we use our own top bar, so keep GrapesJS panels minimal
  panels: { defaults: [] },

  // Block manager — will be populated by blocks.js
  blockManager: {
    appendTo: '#editor',
  },
});

// Register custom blocks
registerBlocks(editor);

// Set up toolbar panels
configurePanels(editor);

// Add default content if canvas is empty (first visit)
editor.on('load', () => {
  const components = editor.DomComponents.getComponents();
  if (components.length === 0) {
    editor.setComponents(`
      <div style="max-width:800px; margin:40px auto; padding:20px; font-family:Inter,sans-serif">
        <h1 style="font-size:36px; margin-bottom:16px; color:#1a1a2e">Welcome to Grow Your SB</h1>
        <p style="font-size:18px; color:#64748b; line-height:1.6">
          Drag blocks from the right panel onto this canvas. Click any element to edit its styles.
          Double-click text to edit it inline.
        </p>
      </div>
    `);
  }
});
