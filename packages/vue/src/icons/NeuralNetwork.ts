import { createIcon } from '../createIcon';

const nodes = [
  { cx: 5, cy: 6 }, { cx: 5, cy: 18 },
  { cx: 12, cy: 3 }, { cx: 12, cy: 12 }, { cx: 12, cy: 21 },
  { cx: 19, cy: 6 }, { cx: 19, cy: 18 }
];

const paths = "M5 6L12 3M5 6L12 12M5 6L12 21M5 18L12 3M5 18L12 12M5 18L12 21M12 3L19 6M12 3L19 18M12 12L19 6M12 12L19 18M12 21L19 6M12 21L19 18";

export const NeuralNetwork = createIcon('NeuralNetwork', {
  outline: () => [
    ['path', { d: paths }],
    ...nodes.map(n => ['circle', { ...n, r: 2 }] as any)
  ],
  filled: (color) => [
    ['path', { d: paths }],
    ...nodes.map(n => ['circle', { ...n, r: 2.5, fill: color, stroke: 'none' }] as any)
  ],
  duotone: (color) => [
    ['path', { d: paths, stroke: color, opacity: 0.2 }],
    ...nodes.map(n => ['circle', { ...n, r: 2, fill: color, opacity: 0.2, stroke: 'none' }] as any),
    ...nodes.map(n => ['circle', { ...n, r: 2, fill: 'none', stroke: color, strokeWidth: 1.5 }] as any)
  ]
});
