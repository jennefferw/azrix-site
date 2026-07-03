interface AzrixLogoProps {
  className?: string;
  showWordmark?: boolean;
}

export function AzrixLogo({ className = "", showWordmark = false }: AzrixLogoProps) {
  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-8 w-8"
        aria-label="Azrix logo"
      >
        <defs>
          <linearGradient id="azrix-metal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e6e6ef" />
            <stop offset="0.5" stopColor="#8a8a99" />
            <stop offset="1" stopColor="#3a3a44" />
          </linearGradient>
          <linearGradient id="azrix-crystal" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c084fc" />
            <stop offset="1" stopColor="#7c3aed" />
          </linearGradient>
        </defs>
        {/* Outer A triangle */}
        <path
          d="M32 4 L60 58 L48 58 L32 24 L16 58 L4 58 Z"
          fill="url(#azrix-metal)"
        />
        {/* Purple diamond crystal */}
        <path
          d="M32 30 L40 42 L32 58 L24 42 Z"
          fill="url(#azrix-crystal)"
        />
        {/* Glow accent */}
        <path
          d="M32 30 L40 42 L32 58 L24 42 Z"
          fill="none"
          stroke="#a855f7"
          strokeWidth="0.5"
          opacity="0.8"
        />
      </svg>
      {showWordmark && (
        <span className="font-display text-2xl tracking-[0.2em] text-foreground">
          AZRIX
        </span>
      )}
    </div>
  );
}
