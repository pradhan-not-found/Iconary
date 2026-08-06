import { createIcon } from '../createIcon';

export const Epoch = createIcon('Epoch', {
  outline: () => [
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }],
    ['path', { d: 'M3 3v5h5' }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' }],
    ['path', { d: 'M16 21h5v-5' }],
    ['circle', { cx: 12, cy: 12, r: 2 }]
  ],
  filled: (color) => [
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8' }],
    ['path', { d: 'M3 3v5h5' }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16' }],
    ['path', { d: 'M16 21h5v-5' }],
    ['circle', { cx: 12, cy: 12, r: 2.5, fill: color, stroke: 'none' }]
  ],
  duotone: (color) => [
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', stroke: color, opacity: 0.2 }],
    ['path', { d: 'M3 3v5h5', stroke: color, opacity: 0.2 }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16', stroke: color, opacity: 0.2 }],
    ['path', { d: 'M16 21h5v-5', stroke: color, opacity: 0.2 }],
    ['circle', { cx: 12, cy: 12, r: 2, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M21 12a9 9 0 0 0-9-9 9.75 9.75 0 0 0-6.74 2.74L3 8', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M3 3v5h5', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M3 12a9 9 0 0 0 9 9 9.75 9.75 0 0 0 6.74-2.74L21 16', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M16 21h5v-5', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['circle', { cx: 12, cy: 12, r: 2, fill: 'none', stroke: color, strokeWidth: 1.5 }]
  ]
});
