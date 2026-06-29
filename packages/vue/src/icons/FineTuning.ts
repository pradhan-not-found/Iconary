import { createIcon } from '../createIcon';

export const FineTuning = createIcon('FineTuning', {
  outline: () => [
    ['path', { d: 'M12 3v4M12 17v4M3 12h4M17 12h4' }],
    ['circle', { cx: 12, cy: 12, r: 5 }]
  ],
  filled: (color) => [
    ['circle', { cx: 12, cy: 12, r: 6, fill: color, stroke: 'none' }],
    ['rect', { x: 11, y: 1, width: 2, height: 4, fill: color, stroke: 'none' }],
    ['rect', { x: 11, y: 19, width: 2, height: 4, fill: color, stroke: 'none' }],
    ['rect', { x: 1, y: 11, width: 4, height: 2, fill: color, stroke: 'none' }],
    ['rect', { x: 19, y: 11, width: 4, height: 2, fill: color, stroke: 'none' }]
  ],
  duotone: (color) => [
    ['circle', { cx: 12, cy: 12, r: 8, fill: color, opacity: 0.2, stroke: 'none' }],
    ['circle', { cx: 12, cy: 12, r: 5, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    [
      'path',
      {
        d: 'M12 3v4M12 17v4M3 12h4M17 12h4',
        fill: 'none',
        stroke: color,
        strokeWidth: 1.5
      }
    ]
  ]
});
