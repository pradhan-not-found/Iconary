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
    >
      {icon.map(([tag, attrs]: any, i: number) => {
        const Tag = tag;
        const elAttrs = { ...attrs };
        if ('key' in elAttrs) delete elAttrs.key;
        
        if (variant === 'solid') {
          if (elAttrs.stroke === 'currentColor') {
            elAttrs.stroke = 'var(--iconary-bg, #1a1a1a)';
          }
          elAttrs.fill = 'currentColor';
        } else if (variant === 'duotone') {
          elAttrs.fill = 'currentColor';
          elAttrs.fillOpacity = 0.2;
        } else {
          elAttrs.fill = 'none';
        }

        if (elAttrs.strokeWidth) elAttrs.strokeWidth = strokeWidth;

        return <Tag key={i} {...elAttrs} />;
      })}
    </svg>
  );
}
