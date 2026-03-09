import React from 'react';
import { cn } from '@/lib/utils'; // Assuming cn exists, else we can just template literal

interface SpinningTextProps {
    text: string;
    className?: string;
    duration?: string;
}

export function SpinningText({ text, className, duration = '20s' }: SpinningTextProps) {
    // Add some spacing to the end of the text if it doesn't have it so the circle connects nicely
    const displayText = text.endsWith(' ') ? text : `${text} • `;

    return (
        <div className={`relative flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 100 100"
                className="w-full h-full animate-spin"
                style={{ animationDuration: duration, transformOrigin: 'center' }}
            >
                <defs>
                    <path
                        id="circlePath"
                        d="M 50, 50 m -35, 0 a 35,35 0 1,1 70,0 a 35,35 0 1,1 -70,0"
                    />
                </defs>
                <text
                    className="font-display font-bold uppercase tracking-[0.14em] text-white/80 fill-current"
                    fontSize="8.5"
                >
                    <textPath href="#circlePath" startOffset="0%" textLength="218" lengthAdjust="spacingAndGlyphs">
                        {displayText}
                    </textPath>
                </text>
            </svg>
        </div>
    );
}
