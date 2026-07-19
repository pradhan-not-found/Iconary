import React from 'react';

export interface IconaryIconProps {
  icon: any; // The icon definition array from iconary core
  size?: number | string;
  className?: string;
  variant?: 'stroke' | 'solid' | 'duotone';
  strokeWidth?: number | string;
}

export function IconaryIcon({ icon, size = 24, className = '', variant = 'stroke', strokeWidth = 1.5 }: IconaryIconProps) {
  if (!icon || !Array.isArray(icon)) return null;

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ overflow: 'visible' }}
    >
      {icon.map(([tag, attrs]: any, i: number) => {
        const Tag = tag;
        const elAttrs = { ...attrs };
        if ('key' in elAttrs) delete elAttrs.key;
        
        // Apply universal stroke width if the element has a stroke
        if (elAttrs.stroke && elAttrs.stroke !== 'none') {
          elAttrs.strokeWidth = strokeWidth;
        }

        if (variant === 'stroke') {
          elAttrs.fill = 'none';
        } else if (variant === 'solid') {
          // Professional Solid Variant
          // We fill the shapes and use the background color for the stroke to create clear cutouts.
          elAttrs.fill = 'currentColor';
          if (elAttrs.stroke && elAttrs.stroke !== 'none') {
             elAttrs.stroke = 'var(--bg-background, #111111)';
             elAttrs.strokeWidth = Number(strokeWidth) + 0.5;
             elAttrs.strokeLinejoin = 'round';
          }
        } else if (variant === 'duotone') {
          // Professional Duotone Variant
          // Keep the crisp stroke, but add a tinted, semi-transparent fill for depth
          elAttrs.fill = 'currentColor';
          elAttrs.fillOpacity = 0.2;
          // the stroke remains currentColor as defined by the original icon
        }

        if (elAttrs.strokeWidth) elAttrs.strokeWidth = strokeWidth;

        return <Tag key={i} {...elAttrs} />;
      })}
    </svg>
  );
}
