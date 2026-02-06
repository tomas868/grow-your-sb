import { exportProject } from './export.js';
import { clearProject } from './storage.js';

export function configurePanels(editor) {
  // Add action buttons to the top bar
  const actionsContainer = document.getElementById('top-bar-actions');

  const buttons = [
    { id: 'undo', label: 'Undo', icon: '↩', action: () => editor.UndoManager.undo() },
    { id: 'redo', label: 'Redo', icon: '↪', action: () => editor.UndoManager.redo() },
    { id: 'divider1', divider: true },
    { id: 'preview', label: 'Preview', icon: '👁', action: () => editor.runCommand('preview') },
    { id: 'fullscreen', label: 'Fullscreen', icon: '⛶', action: () => editor.runCommand('fullscreen') },
    { id: 'divider2', divider: true },
    { id: 'clear', label: 'Clear', icon: '🗑', action: () => {
      if (confirm('Clear the entire canvas? This cannot be undone.')) {
        clearProject(editor);
      }
    }},
    { id: 'export', label: 'Export HTML', icon: '⬇', action: () => exportProject(editor) },
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

  // Configure device manager buttons
  editor.Panels.addPanel({
    id: 'devices',
    el: '.panel__devices',
    buttons: [{
      id: 'device-desktop',
      label: '🖥',
      command: 'set-device-desktop',
      active: true,
      togglable: false,
    }, {
      id: 'device-tablet',
      label: '📱',
      command: 'set-device-tablet',
      togglable: false,
    }, {
      id: 'device-mobile',
      label: '📲',
      command: 'set-device-mobile',
      togglable: false,
    }],
  });

  editor.Commands.add('set-device-desktop', {
    run: (ed) => ed.setDevice('Desktop'),
  });
  editor.Commands.add('set-device-tablet', {
    run: (ed) => ed.setDevice('Tablet'),
  });
  editor.Commands.add('set-device-mobile', {
    run: (ed) => ed.setDevice('Mobile portrait'),
  });
}
