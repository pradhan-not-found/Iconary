import { createIcon } from '../createIcon';

export const Agent = createIcon('Agent', {
  outline: () => [
    ['circle', { cx: 12, cy: 8, r: 4 }],
    ['path', { d: 'M4 21c0-4 3.5-7 8-7s8 3 8 7' }]
  ],
  filled: (color) => [
    ['circle', { cx: 12, cy: 8, r: 4 }],
    [
      'path',
      {
        d: 'M4 21c0-4 3.5-7 8-7s8 3 8 7z',
        fill: color,
        stroke: 'none'
      }
    ]
  ],
  duotone: (color) => [
    ['circle', { cx: 12, cy: 8, r: 4, fill: color, opacity: 0.2, stroke: 'none' }],
    [
      'path',
      {
        d: 'M4 21c0-4 3.5-7 8-7s8 3 8 7z',
        fill: color,
        opacity: 0.2,
        stroke: 'none'
      }
    ],
    ['circle', { cx: 12, cy: 8, r: 4, fill: 'none', stroke: color, strokeWidth: 1.5 }],
    [
      'path',
      {
        d: 'M4 21c0-4 3.5-7 8-7s8 3 8 7',
        fill: 'none',
        stroke: color,
        strokeWidth: 1.5
      }
    ]
  ]
});
