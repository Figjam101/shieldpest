interface IconProps {
  className?: string;
  size?: number;
}

export function TermiteIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="4" y="8" width="24" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="8" x2="16" y2="24" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
      <circle cx="10" cy="16" r="2" fill="currentColor" opacity="0.3" />
      <circle cx="22" cy="16" r="2" fill="currentColor" opacity="0.3" />
    </svg>
  );
}

export function CockroachIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="16" rx="8" ry="10" stroke="currentColor" strokeWidth="2" />
      <line x1="8" y1="12" x2="4" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="12" x2="28" y2="8" stroke="currentColor" strokeWidth="1.5" />
      <line x1="8" y1="20" x2="4" y2="24" stroke="currentColor" strokeWidth="1.5" />
      <line x1="24" y1="20" x2="28" y2="24" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function AntIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="10" r="4" stroke="currentColor" strokeWidth="2" />
      <circle cx="16" cy="22" r="5" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="14" x2="16" y2="17" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function SpiderIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2" />
      <line x1="12" y1="12" x2="6" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="12" x2="26" y2="6" stroke="currentColor" strokeWidth="1.5" />
      <line x1="11" y1="16" x2="4" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="21" y1="16" x2="28" y2="16" stroke="currentColor" strokeWidth="1.5" />
      <line x1="12" y1="20" x2="6" y2="26" stroke="currentColor" strokeWidth="1.5" />
      <line x1="20" y1="20" x2="26" y2="26" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function RodentIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="18" rx="10" ry="7" stroke="currentColor" strokeWidth="2" />
      <path d="M8 14 Q6 8 10 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M24 14 Q26 8 22 10" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="16" r="1" fill="currentColor" />
      <circle cx="19" cy="16" r="1" fill="currentColor" />
    </svg>
  );
}

export function BedbugIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="16" rx="7" ry="9" stroke="currentColor" strokeWidth="2" />
      <line x1="9" y1="13" x2="23" y2="13" stroke="currentColor" strokeWidth="1" opacity="0.4" />
      <line x1="9" y1="19" x2="23" y2="19" stroke="currentColor" strokeWidth="1" opacity="0.4" />
    </svg>
  );
}

export function FleaIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="14" rx="5" ry="6" stroke="currentColor" strokeWidth="2" />
      <path d="M13 20 Q10 28 16 26 Q22 28 19 20" stroke="currentColor" strokeWidth="1.5" fill="none" />
    </svg>
  );
}

export function WaspIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <ellipse cx="16" cy="10" rx="5" ry="4" stroke="currentColor" strokeWidth="2" />
      <ellipse cx="16" cy="22" rx="4" ry="5" stroke="currentColor" strokeWidth="2" />
      <line x1="16" y1="14" x2="16" y2="17" stroke="currentColor" strokeWidth="2" />
      <line x1="11" y1="8" x2="7" y2="4" stroke="currentColor" strokeWidth="1.5" />
      <line x1="21" y1="8" x2="25" y2="4" stroke="currentColor" strokeWidth="1.5" />
    </svg>
  );
}

export function PossumIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <circle cx="16" cy="15" r="8" stroke="currentColor" strokeWidth="2" />
      <path d="M10 9 Q8 4 12 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <path d="M22 9 Q24 4 20 7" stroke="currentColor" strokeWidth="1.5" fill="none" />
      <circle cx="13" cy="14" r="1.5" fill="currentColor" />
      <circle cx="19" cy="14" r="1.5" fill="currentColor" />
    </svg>
  );
}

export function InspectionIcon({ className, size = 32 }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 32 32" fill="none" className={className}>
      <rect x="6" y="4" width="16" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="10" x2="18" y2="10" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="14" x2="18" y2="14" stroke="currentColor" strokeWidth="1.5" />
      <line x1="10" y1="18" x2="15" y2="18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="23" cy="23" r="5" stroke="currentColor" strokeWidth="2" />
      <line x1="26.5" y1="26.5" x2="30" y2="30" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

// Icon lookup map
export const pestIconMap: Record<string, React.FC<IconProps>> = {
  termite: TermiteIcon,
  cockroach: CockroachIcon,
  ant: AntIcon,
  spider: SpiderIcon,
  rodent: RodentIcon,
  bedbug: BedbugIcon,
  flea: FleaIcon,
  wasp: WaspIcon,
  possum: PossumIcon,
  inspection: InspectionIcon,
};
