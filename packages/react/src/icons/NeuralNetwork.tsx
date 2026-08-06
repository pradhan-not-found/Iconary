import React from 'react';
import { type IconProps } from './Agent';

export const NeuralNetwork = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    const paths = "M5 6L12 3M5 6L12 12M5 6L12 21M5 18L12 3M5 18L12 12M5 18L12 21M12 3L19 6M12 3L19 18M12 12L19 6M12 12L19 18M12 21L19 6M12 21L19 18";
    
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <>
            <path d={paths} />
            <circle cx="5" cy="6" r="2" />
            <circle cx="5" cy="18" r="2" />
            <circle cx="12" cy="3" r="2" />
            <circle cx="12" cy="12" r="2" />
            <circle cx="12" cy="21" r="2" />
            <circle cx="19" cy="6" r="2" />
            <circle cx="19" cy="18" r="2" />
          </>
        )}
        {iconStyle === 'filled' && (
          <>
            <path d={paths} />
            <circle cx="5" cy="6" r="2.5" fill={color} stroke="none" />
            <circle cx="5" cy="18" r="2.5" fill={color} stroke="none" />
            <circle cx="12" cy="3" r="2.5" fill={color} stroke="none" />
            <circle cx="12" cy="12" r="2.5" fill={color} stroke="none" />
            <circle cx="12" cy="21" r="2.5" fill={color} stroke="none" />
            <circle cx="19" cy="6" r="2.5" fill={color} stroke="none" />
            <circle cx="19" cy="18" r="2.5" fill={color} stroke="none" />
          </>
        )}
        {iconStyle === 'duotone' && (
          <>
            <path d={paths} stroke={color} opacity="0.2" />
            <circle cx="5" cy="6" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="5" cy="18" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="12" cy="3" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="12" cy="12" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="12" cy="21" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="19" cy="6" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="19" cy="18" r="2" fill={color} opacity="0.2" stroke="none" />
            <circle cx="5" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="5" cy="18" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="12" cy="3" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="12" cy="12" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="12" cy="21" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="19" cy="6" r="2" fill="none" stroke={color} strokeWidth="1.5" />
            <circle cx="19" cy="18" r="2" fill="none" stroke={color} strokeWidth="1.5" />
          </>
        )}
      </svg>
    );
  }
);
NeuralNetwork.displayName = 'NeuralNetwork';
