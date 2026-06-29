import { createIcon } from '../createIcon';

export const Pipeline = createIcon('Pipeline', {
  outline: () => [
    ['path', { d: 'M4 6h16M4 12h10M4 18h13' }]
  ],
  filled: (color) => [
    ['rect', { x: 4, y: 5, width: 16, height: 2, fill: color, stroke: 'none' }],
    ['rect', { x: 4, y: 11, width: 10, height: 2, fill: color, stroke: 'none' }],
    ['rect', { x: 4, y: 17, width: 13, height: 2, fill: color, stroke: 'none' }]
  ],
  duotone: (color) => [
    ['rect', { x: 4, y: 5, width: 16, height: 14, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M4 6h16M4 12h10M4 18h13', fill: 'none', stroke: color, strokeWidth: 1.5 }]
  ]
});
