'use client';

import { useInView, cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface FadeUpProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

export function FadeUp({ children, delay = 0, className }: FadeUpProps) {
  const { ref, isInView } = useInView();

  return (
    <div
      ref={ref}
      className={cn('transition-all duration-600 ease-out', className)}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView ? 'translateY(0)' : 'translateY(24px)',
        transitionDelay: `${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
