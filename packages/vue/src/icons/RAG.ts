import { createIcon } from '../createIcon';

export const RAG = createIcon('RAG', {
  outline: () => [
    ['path', { d: 'M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4' }],
    ['path', { d: 'M18.5 4v4h-4M5.5 20v-4h4' }]
  ],
  filled: (color) => [
    ['path', { d: 'M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4', stroke: color, strokeWidth: 3, fill: 'none' }]
  ],
  duotone: (color) => [
    ['circle', { cx: 12, cy: 12, r: 9, fill: color, opacity: 0.2, stroke: 'none' }],
    ['path', { d: 'M4 12a8 8 0 0114.93-4M20 12a8 8 0 01-14.93 4', fill: 'none', stroke: color, strokeWidth: 1.5 }],
    ['path', { d: 'M18.5 4v4h-4M5.5 20v-4h4', fill: 'none', stroke: color, strokeWidth: 1.5 }]
  ]
});
