import React from 'react';
import { IconProps } from './Agent';

export const Embedding = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <><circle cx="6" cy="6" r="2"/><circle cx="18" cy="6" r="2"/><circle cx="12" cy="18" r="2"/><path d="M6 8v3a3 3 0 003 3h0a3 3 0 003-3V8M18 8v3a3 3 0 01-3 3"/></>
        )}
        {iconStyle === 'filled' && (
          <><circle cx="6" cy="6" r="2.5" fill={color} stroke="none"/><circle cx="18" cy="6" r="2.5" fill={color} stroke="none"/><circle cx="12" cy="18" r="2.5" fill={color} stroke="none"/></>
        )}
        {iconStyle === 'duotone' && (
          <><circle cx="12" cy="10" r="8" fill={color} opacity="0.2" stroke="none"/><circle cx="6" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5"/><circle cx="18" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5"/><circle cx="12" cy="18" r="2" fill="none" stroke={color} strokeWidth="1.5"/><path d="M6 8v3a3 3 0 003 3h0a3 3 0 003-3V8M18 8v3a3 3 0 01-3 3" fill="none" stroke={color} strokeWidth="1.5"/></>
        )}
      </svg>
    );
  }
);
Embedding.displayName = 'Embedding';
