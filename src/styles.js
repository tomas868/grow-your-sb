export function configureStyleManager() {
  return [
    {
      name: 'Layout',
      open: false,
      properties: [
        'display',
        'flex-direction',
        'justify-content',
        'align-items',
        'flex-wrap',
        'gap',
      ],
    },
    {
      name: 'Dimension',
      open: false,
      properties: [
        'width',
        'min-width',
        'max-width',
        'height',
        'min-height',
        'max-height',
        'padding',
        'margin',
      ],
    },
    {
      name: 'Typography',
      open: true,
      properties: [
        'font-family',
        'font-size',
        'font-weight',
        'letter-spacing',
        'color',
        'line-height',
        'text-align',
        'text-decoration',
        'text-transform',
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
        'border',
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
      ],
    },
  ];
}
