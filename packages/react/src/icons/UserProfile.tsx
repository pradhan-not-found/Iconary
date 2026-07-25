import React from 'react';
import { type IconProps } from './Agent';

/**
 * UserProfile icon — a simple, clean avatar representing a developer profile.
 * Follows the Iconary style guide: 24x24 canvas, 2px stroke, round caps/joins, currentColor.
 *
 * Outline:  strokes only (circle head + rounded shoulders arc)
 * Filled:   solid shapes, same silhouette
 * Duotone:  20% opacity filled bg shapes + full-opacity outline on top
 */
export const UserProfile = React.forwardRef<SVGSVGElement, IconProps>(
  ({ size = 24, iconStyle = 'outline', color = 'currentColor', ...props }, ref) => {
    return (
      <svg
        ref={ref}
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        {iconStyle === 'outline' && (
          <>
            {/* Head */}
            <circle cx="12" cy="8" r="3.5" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            {/* Shoulder arc — represents a profile/card silhouette */}
            <path
              d="M5 20c0-3.866 3.134-7 7-7s7 3.134 7 7"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            {/* Card outline — makes it look like a profile card, not just a person */}
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}

        {iconStyle === 'filled' && (
          <>
            {/* Card background */}
            <rect x="3" y="3" width="18" height="18" rx="3" fill={color} />
            {/* Head cutout (white/transparent circle) — use inverted approach */}
            <circle cx="12" cy="9" r="3.5" fill="none" stroke="white" strokeWidth="0" />
            {/* Head */}
            <circle cx="12" cy="9" r="3.2" fill="white" opacity="0.9" />
            {/* Shoulder area */}
            <path
              d="M5.5 21c0-3.59 2.91-6.5 6.5-6.5s6.5 2.91 6.5 6.5"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
          </>
        )}

        {iconStyle === 'duotone' && (
          <>
            {/* Background card shape at low opacity */}
            <rect x="3" y="3" width="18" height="18" rx="3" fill={color} opacity="0.15" />
            {/* Background head shape at low opacity */}
            <circle cx="12" cy="9" r="3.5" fill={color} opacity="0.25" />
            {/* Background shoulder fill at low opacity */}
            <path
              d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7v1H5z"
              fill={color}
              opacity="0.15"
            />
            {/* Foreground: card outline */}
            <rect
              x="3"
              y="3"
              width="18"
              height="18"
              rx="3"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Foreground: head outline */}
            <circle
              cx="12"
              cy="9"
              r="3.5"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Foreground: shoulder arc */}
            <path
              d="M5 21c0-3.866 3.134-7 7-7s7 3.134 7 7"
              stroke={color}
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </>
        )}
      </svg>
    );
  }
);

UserProfile.displayName = 'UserProfile';
