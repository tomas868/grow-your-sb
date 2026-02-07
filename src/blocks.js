export function registerBlocks(editor) {
  const bm = editor.BlockManager;

  // --- Basic ---

  bm.add('h1', {
    label: 'Heading 1',
    category: 'Basic',
    content: '<h1 style="padding:10px; font-size:2.5em">Heading 1</h1>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>',
  });

  bm.add('h2', {
    label: 'Heading 2',
    category: 'Basic',
    content: '<h2 style="padding:10px; font-size:2em">Heading 2</h2>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>',
  });

  bm.add('h3', {
    label: 'Heading 3',
    category: 'Basic',
    content: '<h3 style="padding:10px; font-size:1.5em">Heading 3</h3>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 4v3h5.5v12h3V7H19V4z"/></svg>',
  });

  bm.add('text', {
    label: 'Text',
    category: 'Basic',
    content: '<p style="padding:10px; line-height:1.6">Insert your text here. Click to edit.</p>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2.5 4v3h5v12h3V7h5V4h-13zm19 5h-9v3h3v7h3v-7h3V9z"/></svg>',
  });

  bm.add('rich-text', {
    label: 'Rich Text',
    category: 'Basic',
    content: `<div style="padding:10px; line-height:1.6">
      <h3>Rich Text Block</h3>
      <p>Edit this block to add <b>bold</b>, <i>italic</i>, <u>underlined</u> text and <a href="#">links</a>.</p>
    </div>`,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M5 17v2h14v-2H5zm4.5-4.2h5l.9 2.2h2.1L12.75 4h-1.5L6.5 15h2.1l.9-2.2zM12 5.98L13.87 11h-3.74L12 5.98z"/></svg>',
  });

  bm.add('button', {
    label: 'Button',
    category: 'Basic',
    content: `<a href="#" style="display:inline-block; padding:12px 24px; background:#4f46e5; color:#ffffff; border-radius:6px; text-decoration:none; font-weight:600; font-size:16px; cursor:pointer; text-align:center">Click Me</a>`,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 7H5c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 8H5V9h14v6z"/></svg>',
  });

  bm.add('link', {
    label: 'Link',
    category: 'Basic',
    content: '<a href="#" style="padding:10px; display:inline-block; color:#4f46e5">Your Link</a>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3.9 12c0-1.71 1.39-3.1 3.1-3.1h4V7H7c-2.76 0-5 2.24-5 5s2.24 5 5 5h4v-1.9H7c-1.71 0-3.1-1.39-3.1-3.1zM8 13h8v-2H8v2zm9-6h-4v1.9h4c1.71 0 3.1 1.39 3.1 3.1s-1.39 3.1-3.1 3.1h-4V17h4c2.76 0 5-2.24 5-5s-2.24-5-5-5z"/></svg>',
  });

  bm.add('image', {
    label: 'Image',
    category: 'Media',
    content: { type: 'image' },
    activate: true,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>',
  });

  bm.add('video', {
    label: 'Video',
    category: 'Media',
    content: { type: 'video' },
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 10.5V7c0-.55-.45-1-1-1H4c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h12c.55 0 1-.45 1-1v-3.5l4 4v-11l-4 4z"/></svg>',
  });

  bm.add('carousel', {
    label: 'Carousel',
    category: 'Media',
    content: { type: 'carousel' },
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 19h10V4H7v15zm-5-2h4V6H2v11zM18 6v11h4V6h-4z"/></svg>',
  });

  // --- Layout ---

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

  bm.add('three-columns', {
    label: '3 Columns',
    category: 'Layout',
    content: `<div style="display:flex; gap:10px; padding:10px">
      <div style="flex:1; padding:20px; min-height:80px"></div>
      <div style="flex:1; padding:20px; min-height:80px"></div>
      <div style="flex:1; padding:20px; min-height:80px"></div>
    </div>`,
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 5v14h5V5H2zm7 0v14h6V5H9zm8 0v14h5V5h-5z"/></svg>',
  });

  bm.add('divider', {
    label: 'Divider',
    category: 'Layout',
    content: '<hr style="border:none; border-top:1px solid #e2e8f0; margin:20px 0" />',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M2 11h20v2H2z"/></svg>',
  });

  bm.add('spacer', {
    label: 'Spacer',
    category: 'Layout',
    content: '<div style="height:40px"></div>',
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 4l-4 4h3v8H4l4 4 4-4H9V8h3L8 4zm10 0l-4 4h3v8h-3l4 4 4-4h-3V8h3l-4-4z"/></svg>',
  });

  // --- Advanced ---

  bm.add('custom-html', {
    label: 'HTML',
    category: 'Advanced',
    content: { type: 'custom-html-block' },
    media: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9.4 16.6L4.8 12l4.6-4.6L8 6l-6 6 6 6 1.4-1.4zm5.2 0l4.6-4.6-4.6-4.6L16 6l6 6-6 6-1.4-1.4z"/></svg>',
  });
}
