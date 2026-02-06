export function registerBlocks(editor) {
  const bm = editor.BlockManager;

  bm.add('heading', {
    label: 'Heading',
    category: 'Basic',
    content: '<h2 style="padding:10px">Your Heading</h2>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>',
  });

  bm.add('text', {
    label: 'Text',
    category: 'Basic',
    content: '<p style="padding:10px">Insert your text here. Click to edit.</p>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></svg>',
  });

  bm.add('image', {
    label: 'Image',
    category: 'Basic',
    content: { type: 'image' },
    activate: true,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>',
  });

  bm.add('container', {
    label: 'Container',
    category: 'Layout',
    content: '<div style="padding:20px; min-height:100px"></div>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14z"/></svg>',
  });

  bm.add('two-columns', {
    label: '2 Columns',
    category: 'Layout',
    content: `<div style="display:flex; gap:10px; padding:10px">
      <div style="flex:1; padding:20px; min-height:80px"></div>
      <div style="flex:1; padding:20px; min-height:80px"></div>
    </div>`,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M10 18h5V5h-5v13zm-6 0h5V5H4v13zM16 5v13h5V5h-5z"/></svg>',
  });

  bm.add('link', {
    label: 'Link',
    category: 'Basic',
    content: '<a href="#" style="padding:10px; display:inline-block; color:#4f46e5">Your Link</a>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
  });

  bm.add('video', {
    label: 'Video',
    category: 'Media',
    content: { type: 'video' },
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>',
  });
}
