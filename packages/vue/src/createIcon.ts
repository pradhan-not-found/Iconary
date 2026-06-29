import { defineComponent, h, type PropType } from 'vue';
import type { IconStyle } from './types';

type IconNodeAttrs = Record<string, string | number | boolean | undefined>;

export type IconNode = [
  tag: string,
  attrs?: IconNodeAttrs,
  children?: IconNode[]
];

export type IconDefinition = (color: string) => IconNode[];

const iconStyles: IconStyle[] = ['outline', 'filled', 'duotone'];

function renderNode([tag, attrs, children]: IconNode) {
  return h(tag, attrs, children?.map(renderNode));
}

export function createIcon(
  name: string,
  paths: Record<IconStyle, IconDefinition>
) {
  return defineComponent({
    name,
    props: {
      size: {
        type: [Number, String],
        default: 24
      },
      iconStyle: {
        type: String as PropType<IconStyle>,
        default: 'outline',
        validator: (value: string) => iconStyles.includes(value as IconStyle)
      },
      color: {
        type: String,
        default: 'currentColor'
      }
    },
    setup(props, { attrs }) {
      return () => {
        const color = props.color ?? 'currentColor';
        const nodes = paths[props.iconStyle]?.(color) ?? paths.outline(color);

        return h(
          'svg',
          {
            width: props.size,
            height: props.size,
            viewBox: '0 0 24 24',
            fill: 'none',
            stroke: color,
            strokeWidth: 1.5,
            strokeLinecap: 'round',
            strokeLinejoin: 'round',
            xmlns: 'http://www.w3.org/2000/svg',
            ...attrs
          },
          nodes.map(renderNode)
        );
      };
    }
  });
}
