import React from 'react';
import { IconProps } from './Agent';

export const Model = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <><rect x="4" y="4" width="16" height="16" rx="2"/><circle cx="9" cy="10" r="1.5"/><circle cx="15" cy="10" r="1.5"/><path d="M8 16c1.5 1.5 6.5 1.5 8 0"/></>
        )}
        {iconStyle === 'filled' && (
          <rect x="4" y="4" width="16" height="16" rx="2" fill={color} stroke="none"/>
        )}
        {iconStyle === 'duotone' && (
          <><rect x="4" y="4" width="16" height="16" rx="2" fill={color} opacity="0.2" stroke="none"/><rect x="4" y="4" width="16" height="16" rx="2" fill="none" stroke={color} strokeWidth="1.5"/><circle cx="9" cy="10" r="1.5" fill="var(--iconary-bg, #1a1a1a)" stroke={color} strokeWidth="1.5"/><circle cx="15" cy="10" r="1.5" fill="var(--iconary-bg, #1a1a1a)" stroke={color} strokeWidth="1.5"/><path d="M8 16c1.5 1.5 6.5 1.5 8 0" fill="none" stroke={color} strokeWidth="1.5"/></>
        )}
      </svg>
    );
  }
);
Model.displayName = 'Model';
