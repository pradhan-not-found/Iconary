import React from 'react';
import { type IconProps } from './Agent';

export const LoRA = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <>
            <rect x="3" y="4" width="6" height="16" rx="1" />
            <path d="M11 12h2M12 11v2" />
            <rect x="15" y="4" width="3" height="8" rx="1" />
            <rect x="15" y="14" width="6" height="3" rx="1" />
          </>
        )}
        {iconStyle === 'filled' && (
          <>
            <rect x="3" y="4" width="6" height="16" rx="1" fill={color} stroke="none" />
            <path d="M11 12h2M12 11v2" />
            <rect x="15" y="4" width="3" height="8" rx="1" fill={color} stroke="none" />
            <rect x="15" y="14" width="6" height="3" rx="1" fill={color} stroke="none" />
          </>
        )}
        {iconStyle === 'duotone' && (
          <>
            <rect x="3" y="4" width="6" height="16" rx="1" fill={color} opacity="0.2" stroke="none" />
            <path d="M11 12h2M12 11v2" stroke={color} opacity="0.2" />
            <rect x="15" y="4" width="3" height="8" rx="1" fill={color} opacity="0.2" stroke="none" />
            <rect x="15" y="14" width="6" height="3" rx="1" fill={color} opacity="0.2" stroke="none" />
            
            <rect x="3" y="4" width="6" height="16" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
            <path d="M11 12h2M12 11v2" fill="none" stroke={color} strokeWidth="1.5" />
            <rect x="15" y="4" width="3" height="8" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
            <rect x="15" y="14" width="6" height="3" rx="1" fill="none" stroke={color} strokeWidth="1.5" />
          </>
        )}
      </svg>
    );
  }
);
LoRA.displayName = 'LoRA';
