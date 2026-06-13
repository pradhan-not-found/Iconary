import React from 'react';

export type IconStyle = 'outline' | 'filled' | 'duotone';

export interface IconProps extends React.SVGProps<SVGSVGElement> {
  size?: number | string;
  iconStyle?: IconStyle; // renamed from 'style' to avoid conflict with React.CSSProperties
  color?: string;
}

export const Agent = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg ref={ref} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
        {iconStyle === 'outline' && (
          <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7"/></>
        )}
        {iconStyle === 'filled' && (
          <><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7z" fill={color} stroke="none"/></>
        )}
        {iconStyle === 'duotone' && (
          <><circle cx="12" cy="8" r="4" fill={color} opacity="0.2" stroke="none"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7z" fill={color} opacity="0.2" stroke="none"/><circle cx="12" cy="8" r="4" fill="none" stroke={color} strokeWidth="1.5"/><path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" fill="none" stroke={color} strokeWidth="1.5"/></>
        )}
      </svg>
    );
  }
);
Agent.displayName = 'Agent';
