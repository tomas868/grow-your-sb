import { exportProject } from './export.js';
import { clearProject, saveProject, loadProject } from './storage.js';

export function configurePanels(editor) {
  const actionsContainer = document.getElementById('top-bar-actions');

  const buttons = [
    {
      id: 'new', label: 'New', icon: '📄', action: () => {
        if (confirm('Start a new project? Unsaved changes will be lost.')) {
          clearProject(editor);
          editor.setComponents(getStarterContent());
        }
      },
    },
    {
      id: 'save', label: 'Save', icon: '💾', action: () => {
        saveProject(editor);
        showToast('Project saved!');
      },
    },
    { id: 'divider1', divider: true },
    { id: 'undo', label: 'Undo', icon: '↩', action: () => editor.UndoManager.undo() },
    { id: 'redo', label: 'Redo', icon: '↪', action: () => editor.UndoManager.redo() },
    { id: 'divider2', divider: true },
    { id: 'preview', label: 'Preview', icon: '👁', action: () => editor.runCommand('preview') },
    { id: 'fullscreen', label: 'Fullscreen', icon: '⛶', action: () => editor.runCommand('fullscreen') },
    { id: 'divider3', divider: true },
    { id: 'export', label: 'Export', icon: '⬇', action: () => exportProject(editor) },
  ];

  buttons.forEach(btn => {
    if (btn.divider) {
      const divider = document.createElement('div');
      divider.className = 'top-bar-divider';
      actionsContainer.appendChild(divider);
      return;
    }
    const el = document.createElement('button');
    el.className = 'top-bar-btn';
    el.title = btn.label;
    el.innerHTML = `<span class="btn-icon">${btn.icon}</span><span class="btn-label">${btn.label}</span>`;
    el.addEventListener('click', btn.action);
    actionsContainer.appendChild(el);
  });

  // Left panel tab switching
  setupTabSwitching('left-panel');
  // Right panel tab switching
  setupTabSwitching('right-panel');

  // Auto-switch right panel tab based on selected component
  editor.on('component:selected', (component) => {
    const isHtmlBlock = component && component.get('type') === 'custom-html-block';
    const targetPanel = isHtmlBlock ? 'traits' : 'styles';
    const tab = document.querySelector(`#right-panel-header .panel-tab[data-panel="${targetPanel}"]`);
    if (tab && !tab.classList.contains('active')) {
      tab.click();
    }
  });
}

function setupTabSwitching(panelId) {
  const panel = document.getElementById(panelId);
  if (!panel) return;
  const tabs = panel.querySelectorAll('.panel-tab');
  const contents = panel.querySelectorAll('.panel-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const target = tab.getAttribute('data-panel');
      tabs.forEach(t => t.classList.remove('active'));
      contents.forEach(c => c.classList.remove('active'));
      tab.classList.add('active');
      const targetEl = document.getElementById(`${target}-panel`);
      if (targetEl) targetEl.classList.add('active');
    });
  });
}

function showToast(message) {
  const existing = document.getElementById('gysb-toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.id = 'gysb-toast';
  toast.textContent = message;
  document.body.appendChild(toast);
  setTimeout(() => toast.remove(), 2000);
}

export function getStarterContent() {
  return `
    <div style="max-width:800px; margin:40px auto; padding:20px; font-family:Inter,sans-serif">
      <h1 style="font-size:36px; margin-bottom:16px; color:#1a1a2e">Welcome to Grow Your SB</h1>
      <p style="font-size:18px; color:#64748b; line-height:1.6">
        Drag blocks from the left panel onto this canvas. Click any element to edit its styles in the right panel.
        Double-click text to edit it inline.
      </p>
    </div>
  `;
}
