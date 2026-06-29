import type { SVGAttributes } from 'vue';

export type IconStyle = 'outline' | 'filled' | 'duotone';

export interface IconProps extends SVGAttributes {
  size?: number | string;
  iconStyle?: IconStyle;
  color?: string;
}
