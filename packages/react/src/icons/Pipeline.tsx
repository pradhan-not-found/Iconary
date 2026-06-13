import React from 'react';
import { IconProps } from './Agent';

export const Pipeline = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <path d="M4 6h16M4 12h10M4 18h13"/>
        )}
        {iconStyle === 'filled' && (
          <><rect x="4" y="5" width="16" height="2" fill={color} stroke="none"/><rect x="4" y="11" width="10" height="2" fill={color} stroke="none"/><rect x="4" y="17" width="13" height="2" fill={color} stroke="none"/></>
        )}
        {iconStyle === 'duotone' && (
          <><rect x="4" y="5" width="16" height="14" fill={color} opacity="0.2" stroke="none"/><path d="M4 6h16M4 12h10M4 18h13" fill="none" stroke={color} strokeWidth="1.5"/></>
        )}
      </svg>
    );
  }
);
Pipeline.displayName = 'Pipeline';
