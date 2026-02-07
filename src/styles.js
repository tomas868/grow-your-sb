export function configureStyleManager() {
  return [
    {
      name: 'Typography',
      open: true,
      properties: [
        {
          property: 'font-family',
          type: 'select',
          options: [
            { id: 'Arial, Helvetica, sans-serif', label: 'Arial' },
            { id: "'Inter', sans-serif", label: 'Inter' },
            { id: "'Georgia', serif", label: 'Georgia' },
            { id: "'Times New Roman', serif", label: 'Times New Roman' },
            { id: "'Courier New', monospace", label: 'Courier New' },
            { id: "'Verdana', sans-serif", label: 'Verdana' },
            { id: "'Trebuchet MS', sans-serif", label: 'Trebuchet MS' },
            { id: "system-ui, sans-serif", label: 'System UI' },
          ],
        },
        'font-size',
        {
          property: 'font-weight',
          type: 'select',
          options: [
            { id: '300', label: 'Light' },
            { id: '400', label: 'Normal' },
            { id: '500', label: 'Medium' },
            { id: '600', label: 'Semi Bold' },
            { id: '700', label: 'Bold' },
            { id: '800', label: 'Extra Bold' },
          ],
        },
        {
          property: 'font-style',
          type: 'select',
          options: [
            { id: 'normal', label: 'Normal' },
            { id: 'italic', label: 'Italic' },
          ],
        },
        {
          property: 'text-decoration',
          type: 'select',
          options: [
            { id: 'none', label: 'None' },
            { id: 'underline', label: 'Underline' },
            { id: 'line-through', label: 'Line Through' },
            { id: 'overline', label: 'Overline' },
          ],
        },
        'color',
        'line-height',
        'letter-spacing',
        {
          property: 'text-align',
          type: 'radio',
          options: [
            { id: 'left', label: 'L' },
            { id: 'center', label: 'C' },
            { id: 'right', label: 'R' },
            { id: 'justify', label: 'J' },
          ],
        },
        {
          property: 'text-transform',
          type: 'select',
          options: [
            { id: 'none', label: 'None' },
            { id: 'uppercase', label: 'Uppercase' },
            { id: 'lowercase', label: 'Lowercase' },
            { id: 'capitalize', label: 'Capitalize' },
          ],
        },
      ],
    },
    {
      name: 'Layout',
      open: false,
      properties: [
        {
          property: 'display',
          type: 'select',
          options: [
            { id: 'block', label: 'Block' },
            { id: 'flex', label: 'Flex' },
            { id: 'grid', label: 'Grid' },
            { id: 'inline', label: 'Inline' },
            { id: 'inline-block', label: 'Inline Block' },
            { id: 'none', label: 'None' },
          ],
        },
        'flex-direction',
        'justify-content',
        'align-items',
        'flex-wrap',
        'gap',
      ],
    },
    {
      name: 'Size',
      open: false,
      properties: [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
      ],
    },
    {
      name: 'Spacing',
      open: false,
      properties: [
        {
          property: 'padding',
          type: 'composite',
          properties: [
            { property: 'padding-top', type: 'integer', units: ['px', '%', 'em', 'rem'], default: '0' },
            { property: 'padding-right', type: 'integer', units: ['px', '%', 'em', 'rem'], default: '0' },
            { property: 'padding-bottom', type: 'integer', units: ['px', '%', 'em', 'rem'], default: '0' },
            { property: 'padding-left', type: 'integer', units: ['px', '%', 'em', 'rem'], default: '0' },
          ],
        },
        {
          property: 'margin',
          type: 'composite',
          properties: [
            { property: 'margin-top', type: 'integer', units: ['px', '%', 'em', 'rem', 'auto'], default: '0' },
            { property: 'margin-right', type: 'integer', units: ['px', '%', 'em', 'rem', 'auto'], default: '0' },
            { property: 'margin-bottom', type: 'integer', units: ['px', '%', 'em', 'rem', 'auto'], default: '0' },
            { property: 'margin-left', type: 'integer', units: ['px', '%', 'em', 'rem', 'auto'], default: '0' },
          ],
        },
      ],
    },
    {
      name: 'Background',
      open: false,
      properties: [
        'background-color',
        'background-image',
        'background-repeat',
        'background-position',
        'background-size',
      ],
    },
    {
      name: 'Borders',
      open: false,
      properties: [
        'border-radius',
        {
          property: 'border',
          type: 'composite',
          properties: [
            { property: 'border-width', type: 'integer', units: ['px'], default: '0' },
            {
              property: 'border-style',
              type: 'select',
              options: [
                { id: 'none', label: 'None' },
                { id: 'solid', label: 'Solid' },
                { id: 'dashed', label: 'Dashed' },
                { id: 'dotted', label: 'Dotted' },
                { id: 'double', label: 'Double' },
              ],
            },
            { property: 'border-color', type: 'color' },
          ],
        },
        'box-shadow',
      ],
    },
    {
      name: 'Extra',
      open: false,
      properties: [
        'opacity',
        'overflow',
        'cursor',
        'transition',
        'position',
        'top',
        'right',
        'bottom',
        'left',
        'z-index',
      ],
    },
  ];
}
