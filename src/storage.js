const STORAGE_KEY = 'growyoursb-project';

export function configureStorage() {
  return {
    type: 'local',
    autosave: true,
    autoload: true,
    stepsBeforeSave: 1,
    options: {
      local: {
        key: STORAGE_KEY,
      },
    },
  };
}

export function saveProject(editor) {
  editor.store();
}

export function loadProject(editor) {
  editor.load();
}

export function clearProject(editor) {
  editor.DomComponents.clear();
  editor.CssComposer.clear();
  localStorage.removeItem(STORAGE_KEY);
  editor.UndoManager.clear();
}
