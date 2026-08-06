import { createIcon } from '../createIcon';

export const NPU = createIcon('NPU', {
  outline: () => [
    ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2 }],
    ['path', { d: 'M9 20v2M15 20v2M9 2v2M15 2v2M20 9h2M20 15h2M2 9h2M2 15h2' }],
    ['circle', { cx: 9, cy: 12, r: 1.5 }],
    ['circle', { cx: 15, cy: 9, r: 1.5 }],
    ['circle', { cx: 15, cy: 15, r: 1.5 }],
    ['path', { d: 'M9 12l6-3M9 12l6 3' }]
  ],
  filled: (color) => [
    ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2, fill: color, stroke: 'none' }],
    ['path', { d: 'M9 20v2M15 20v2M9 2v2M15 2v2M20 9h2M20 15h2M2 9h2M2 15h2' }],
    ['circle', { cx: 9, cy: 12, r: 1.5, fill: 'none', stroke: 'white', strokeWidth: 1.5 }],
    ['circle', { cx: 15, cy: 9, r: 1.5, fill: 'none', stroke: 'white', strokeWidth: 1.5 }],
    ['circle', { cx: 15, cy: 15, r: 1.5, fill: 'none', stroke: 'white', strokeWidth: 1.5 }],
    ['path', { d: 'M9 12l6-3M9 12l6 3', stroke: 'white' }]
  ],
  duotone: (color) => [
    ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M9 20v2M15 20v2M9 2v2M15 2v2M20 9h2M20 15h2M2 9h2M2 15h2', stroke: color, opacity: 0.2 }],
    ['circle', { cx: 9, cy: 12, r: 1.5, fill: color, opacity: 0.2, stroke: 'none' }],
    ['circle', { cx: 15, cy: 9, r: 1.5, fill: color, opacity: 0.2, stroke: 'none' }],
    ['circle', { cx: 15, cy: 15, r: 1.5, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M9 12l6-3M9 12l6 3', stroke: color, opacity: 0.2 }],
    ['rect', { x: 4, y: 4, width: 16, height: 16, rx: 2, ry: 2, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M9 20v2M15 20v2M9 2v2M15 2v2M20 9h2M20 15h2M2 9h2M2 15h2', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['circle', { cx: 9, cy: 12, r: 1.5, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['circle', { cx: 15, cy: 9, r: 1.5, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['circle', { cx: 15, cy: 15, r: 1.5, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M9 12l6-3M9 12l6 3', fill: 'none', stroke: color, strokeWidth: 1.5 }]
  ]
});
