export function exportProject(editor) {
  const html = editor.getHtml();
  const css = editor.getCss();
  const js = editor.getJs();

  const fullPage = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Website</title>
  <style>
    * { box-sizing: border-box; margin: 0; padding: 0; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; }
    ${css}
  </style>
</head>
<body>
  ${html}
  ${js ? `<script>${js}<\/script>` : ''}
</body>
</html>`;

  const blob = new Blob([fullPage], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'export.html';
  a.click();
  URL.revokeObjectURL(url);
}
