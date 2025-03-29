"use client";

interface PatternProps {
  className?: string;
}

export function DiagonalLines({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="diagonalLines"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="currentColor"
              strokeWidth="1"
            />
            <line
              x1="20"
              y1="0"
              x2="20"
              y2="40"
              stroke="#ef4444"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonalLines)" />
      </svg>
    </div>
  );
}

export function Dots({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="dots"
            width="20"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="10" cy="10" r="1.5" fill="currentColor" />
            <circle cx="0" cy="0" r="1" fill="#ef4444" />
            <circle cx="20" cy="0" r="1" fill="#ef4444" />
            <circle cx="0" cy="20" r="1" fill="#ef4444" />
            <circle cx="20" cy="20" r="1" fill="#ef4444" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>
    </div>
  );
}

export function Triangles({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="triangles"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 0L20 0L10 17.3L0 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M20 0L40 0L30 17.3L20 0Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
            />
            <path
              d="M10 17.3L30 17.3L20 34.6L10 17.3Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#triangles)" />
      </svg>
    </div>
  );
}

export function Hexagons({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="hexagons"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0L56 14V42L28 56L0 42V14L28 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M28 56L56 70V98L28 112L0 98V70L28 56Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons)" />
      </svg>
    </div>
  );
}

export function CircuitBoard({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="circuit"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M10 10H50V50H10V10Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <circle cx="10" cy="10" r="2" fill="#ef4444" />
            <circle cx="50" cy="10" r="2" fill="currentColor" />
            <circle cx="10" cy="50" r="2" fill="currentColor" />
            <circle cx="50" cy="50" r="2" fill="#ef4444" />
            <path
              d="M10 30H30M30 10V30M30 30H50M30 30V50"
              stroke="currentColor"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#circuit)" />
      </svg>
    </div>
  );
}

export function RedAccentWaves({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 opacity-[0.03] ${className}`}>
      <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern
            id="waves"
            width="100"
            height="20"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M0 10C5 5, 10 5, 15 10C20 15, 25 15, 30 10C35 5, 40 5, 45 10C50 15, 55 15, 60 10C65 5, 70 5, 75 10C80 15, 85 15, 90 10C95 5, 100 5, 105 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M0 20C5 15, 10 15, 15 20C20 25, 25 25, 30 20C35 15, 40 15, 45 20C50 25, 55 25, 60 20C65 15, 70 15, 75 20C80 25, 85 25, 90 20C95 15, 100 15, 105 20"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#waves)" />
      </svg>
    </div>
  );
}

export function SoftRedGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-br from-white via-rose-50 to-gray-100 opacity-80 dark:from-gray-950 dark:via-rose-950/20 dark:to-gray-900"></div>
    </div>
  );
}

export function DiagonalRedGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-red-50 to-orange-50 opacity-80 dark:from-gray-950 dark:via-red-950/10 dark:to-orange-950/10"></div>
    </div>
  );
}

export function RadialRedGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-white opacity-80 dark:bg-gray-950"></div>
      <div className="radial-gradient absolute inset-0"></div>
      <style jsx>{`
        .radial-gradient {
          background:
            radial-gradient(
              circle at top right,
              rgba(239, 68, 68, 0.05),
              transparent 60%
            ),
            radial-gradient(
              circle at bottom left,
              rgba(239, 68, 68, 0.05),
              transparent 60%
            );
        }
        @media (prefers-color-scheme: dark) {
          .radial-gradient {
            background:
              radial-gradient(
                circle at top right,
                rgba(239, 68, 68, 0.08),
                transparent 60%
              ),
              radial-gradient(
                circle at bottom left,
                rgba(239, 68, 68, 0.08),
                transparent 60%
              );
          }
        }
      `}</style>
    </div>
  );
}

export function MeshGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-white opacity-90 dark:bg-gray-950"></div>
      <div className="mesh-gradient absolute inset-0"></div>
      <style jsx>{`
        .mesh-gradient {
          background-color: hsla(0, 0%, 100%, 1);
          background-image:
            radial-gradient(
              at 80% 0%,
              hsla(0, 100%, 96%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 0% 50%,
              hsla(0, 0%, 96%, 1) 0px,
              transparent 50%
            ),
            radial-gradient(
              at 80% 100%,
              hsla(0, 100%, 96%, 1) 0px,
              transparent 50%
            );
        }
        @media (prefers-color-scheme: dark) {
          .mesh-gradient {
            background-color: hsla(0, 0%, 10%, 1);
            background-image:
              radial-gradient(
                at 80% 0%,
                hsla(0, 100%, 15%, 0.3) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 0% 50%,
                hsla(0, 0%, 15%, 0.3) 0px,
                transparent 50%
              ),
              radial-gradient(
                at 80% 100%,
                hsla(0, 100%, 15%, 0.3) 0px,
                transparent 50%
              );
          }
        }
      `}</style>
    </div>
  );
}

export function GradientWithNoise({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 opacity-90 dark:from-gray-950 dark:to-gray-900"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj48ZmlsdGVyIGlkPSJhIiB4PSIwIiB5PSIwIj48ZmVUdXJidWxlbmNlIGJhc2VGcmVxdWVuY3k9Ii43NSIgc3RpdGNoVGlsZXM9InN0aXRjaCIgdHlwZT0iZnJhY3RhbE5vaXNlIi8+PGZlQ29sb3JNYXRyaXggdHlwZT0ic2F0dXJhdGUiIHZhbHVlcz0iMCIvPjwvZmlsdGVyPjxwYXRoIGQ9Ik0wIDBoMzAwdjMwMEgweiIgZmlsdGVyPSJ1cmwoI2EpIiBvcGFjaXR5PSIuMDUiLz48L3N2Zz4=')]"></div>
    </div>
  );
}

export function HexagonsWithGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 ${className}`}>
      <div className="absolute inset-0 bg-gradient-to-tr from-white via-rose-50 to-gray-50 opacity-90 dark:from-gray-950 dark:via-rose-950/10 dark:to-gray-900"></div>
      <svg
        className="h-full w-full opacity-[0.03]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="hexagons-gradient"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M28 0L56 14V42L28 56L0 42V14L28 0Z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
            />
            <path
              d="M28 56L56 70V98L28 112L0 98V70L28 56Z"
              fill="none"
              stroke="#ef4444"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#hexagons-gradient)" />
      </svg>
    </div>
  );
}

export function RedGlowGradient({ className }: PatternProps) {
  return (
    <div className={`absolute inset-0 -z-10 overflow-hidden ${className}`}>
      <div className="absolute inset-0 bg-white dark:bg-gray-950"></div>
      <div className="absolute -right-[10%] -top-[40%] h-[80%] w-[50%] rounded-full bg-red-500/5 blur-[100px]"></div>
      <div className="absolute -bottom-[30%] -left-[10%] h-[80%] w-[50%] rounded-full bg-red-500/5 blur-[100px]"></div>
    </div>
  );
}
