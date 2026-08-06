import { createIcon } from '../createIcon';

export const LoRA = createIcon('LoRA', {
  outline: () => [
    ['rect', { x: 3, y: 4, width: 6, height: 16, rx: 1 }],
    ['path', { d: 'M11 12h2M12 11v2' }],
    ['rect', { x: 15, y: 4, width: 3, height: 8, rx: 1 }],
    ['rect', { x: 15, y: 14, width: 6, height: 3, rx: 1 }]
  ],
  filled: (color) => [
    ['rect', { x: 3, y: 4, width: 6, height: 16, rx: 1, fill: color, stroke: 'none' }],
    ['path', { d: 'M11 12h2M12 11v2' }],
    ['rect', { x: 15, y: 4, width: 3, height: 8, rx: 1, fill: color, stroke: 'none' }],
    ['rect', { x: 15, y: 14, width: 6, height: 3, rx: 1, fill: color, stroke: 'none' }]
  ],
  duotone: (color) => [
    ['rect', { x: 3, y: 4, width: 6, height: 16, rx: 1, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M11 12h2M12 11v2', stroke: color, opacity: 0.2 }],
    ['rect', { x: 15, y: 4, width: 3, height: 8, rx: 1, fill: color, opacity: 0.2, stroke: 'none' }],
    ['rect', { x: 15, y: 14, width: 6, height: 3, rx: 1, fill: color, opacity: 0.2, stroke: 'none' }],
    ['rect', { x: 3, y: 4, width: 6, height: 16, rx: 1, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M11 12h2M12 11v2', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['rect', { x: 15, y: 4, width: 3, height: 8, rx: 1, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['rect', { x: 15, y: 14, width: 6, height: 3, rx: 1, fill: 'none', stroke: color, strokeWidth: 1.5 }]
  ]
});
