import type { Patch, PatchShape } from "./data";

const SHAPE_PATHS: Record<Exclude<PatchShape, "circle" | "rect">, string> = {
  shield:
    "M100 36 L166 62 V104 C166 146 136 168 100 174 C64 168 34 146 34 104 V62 Z",
  badge: "M100 34 L148 54 V112 L124 166 H76 L52 112 V54 Z",
};

function Geo({
  shape,
  fill,
  stroke,
  strokeWidth,
  strokeDasharray,
  strokeLinejoin,
  strokeLinecap,
  opacity,
}: {
  shape: PatchShape;
  fill?: string;
  stroke?: string;
  strokeWidth?: number;
  strokeDasharray?: string;
  strokeLinejoin?: "miter" | "round";
  strokeLinecap?: "butt" | "round";
  opacity?: number;
}) {
  const common = {
    fill: fill ?? "none",
    stroke,
    strokeWidth,
    strokeDasharray,
    strokeLinejoin,
    strokeLinecap,
    opacity,
  };
  if (shape === "circle") {
    return <circle cx={100} cy={100} r={80} {...common} />;
  }
  if (shape === "rect") {
    return <rect x={30} y={72} width={140} height={56} rx={10} {...common} />;
  }
  return <path d={SHAPE_PATHS[shape]} {...common} />;
}

function Border({
  shape,
  colors,
  border,
}: {
  shape: PatchShape;
  colors: string[];
  border: string;
}) {
  const rim = colors[1] ?? colors[0];
  const stitch = colors[2] ?? "#0d1b2a";
  const common = { shape, strokeLinejoin: "round" as const };

  switch (border) {
    case "Merrowed":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={12} />
          <Geo
            {...common}
            stroke={stitch}
            strokeWidth={4}
            strokeDasharray="4 4"
            opacity={0.75}
          />
        </>
      );
    case "Satin":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={16} strokeLinecap="round" />
          <Geo {...common} stroke="#ffffff" strokeWidth={2} opacity={0.35} />
        </>
      );
    case "Heat-cut":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={9} />
          <Geo {...common} stroke="#ffffff" strokeWidth={1.5} opacity={0.3} />
        </>
      );
    case "Skived":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={13} />
          <Geo {...common} stroke={stitch} strokeWidth={2.5} />
        </>
      );
    case "Lasered":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={7} />
          <Geo {...common} stroke={stitch} strokeWidth={1.5} strokeDasharray="3 4" />
        </>
      );
    case "Chenille":
      return (
        <>
          <Geo {...common} stroke={rim} strokeWidth={16} strokeDasharray="8 4" strokeLinecap="round" />
          <Geo {...common} stroke={stitch} strokeWidth={1.5} opacity={0.5} />
        </>
      );
    default:
      return <Geo {...common} stroke={rim} strokeWidth={8} />;
  }
}

function Motif({
  motif,
  colors,
}: {
  motif: string;
  colors: string[];
}) {
  const white = "#ffffff";

  switch (motif) {
    case "rings": {
      const ring = (cx: number, cy: number, color: string) => (
        <circle
          key={`${cx}-${cy}`}
          cx={cx}
          cy={cy}
          r={13}
          fill="none"
          stroke={color}
          strokeWidth={4}
        />
      );
      return (
        <>
          {ring(82, 90, colors[0])}
          {ring(100, 102, colors[1])}
          {ring(118, 90, colors[2])}
          {ring(91, 110, colors[3])}
          {ring(109, 110, colors[4] ?? colors[0])}
        </>
      );
    }
    case "compass":
      return (
        <g stroke={white} fill="none">
          <circle cx={100} cy={100} r={44} strokeWidth={3} />
          <path
            d="M100 62l7 17 17 7-17 7-7 17-7-17-17-7 17-7z"
            fill={white}
            stroke="none"
          />
          <path d="M100 66v12m0 44v12M56 100h12m64 0h12" strokeWidth={3} />
        </g>
      );
    case "wheel":
      return (
        <g stroke={white} strokeWidth={4} fill="none" strokeLinecap="round">
          <circle cx={100} cy={100} r={34} />
          <path d="M100 60v12M100 128v12M60 100h12M128 100h12M72 72l8 8M120 120l8 8M128 72l-8 8M80 120l-8 8" />
          <circle cx={100} cy={100} r={7} fill={white} stroke="none" />
        </g>
      );
    case "houndstooth":
      return (
        <>
          <rect x={32} y={74} width={136} height={52} rx={8} fill={`url(#ht-${colors[0].replace("#", "")})`} />
          <rect x={32} y={74} width={136} height={52} rx={8} fill="none" stroke={white} strokeWidth={2} opacity={0.7} />
        </>
      );
    case "monogram":
      return (
        <text
          x={100}
          y={112}
          textAnchor="middle"
          fontSize={42}
          fontWeight={800}
          letterSpacing={1}
          fill={white}
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          PC
        </text>
      );
    case "wave":
      return (
        <g stroke={white} strokeWidth={3.5} fill="none" strokeLinecap="round">
          <path d="M40 96q9-8 18 0t18 0t18 0t18 0t18 0t18 0" />
          <path d="M40 108q9-8 18 0t18 0t18 0t18 0t18 0t18 0" opacity={0.75} />
        </g>
      );
    case "bolt":
      return (
        <path d="M118 64L86 106h13l-6 26 28-42h-13z" fill={white} />
      );
    case "chevron":
      return (
        <g stroke={white} strokeWidth={6} fill="none" strokeLinecap="round" strokeLinejoin="round">
          <path d="M68 88l28 12-28 12" />
          <path d="M92 88l28 12-28 12" />
          <path d="M116 88l28 12-28 12" />
        </g>
      );
    case "brand":
      return (
        <g fill={white}>
          <circle cx={92} cy={94} r={11} />
          <path d="M130 92l-16 26h32z" />
          <rect x={70} y={126} width={60} height={6} rx={3} />
        </g>
      );
    case "crest":
      return (
        <>
          <path d="M72 94l-7-22 18 13 17-17 17 17 18-13-7 22z" fill={white} />
          <rect x={74} y={108} width={52} height={22} rx={5} fill="#0d1b2a" />
          <text
            x={100}
            y={124}
            textAnchor="middle"
            fontSize={12}
            fontWeight={700}
            letterSpacing={2}
            fill={white}
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            EST
          </text>
        </>
      );
    case "letter":
      return (
        <text
          x={100}
          y={132}
          textAnchor="middle"
          fontSize={66}
          fontWeight={800}
          fill={white}
          style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
        >
          P
        </text>
      );
    case "star":
      return (
        <path
          d="M100 62l7.5 16 16.5 2.4-12 11.7 2.8 16.5-14.8-7.8-14.8 7.8 2.8-16.5-12-11.7 16.5-2.4z"
          fill={white}
        />
      );
    case "crossed-arrows":
      return (
        <>
          <g stroke={white} strokeWidth={4} fill="none" strokeLinecap="round">
            <path d="M78 86l46 34M124 104v12h-12" />
            <path d="M122 86L76 120M76 116v-12h12" />
          </g>
          <path
            d="M100 74l4.5 10 11 1-8.5 7.5 2.5 10.5-9.5-5-9.5 5 2.5-10.5-8.5-7.5 11-1z"
            fill={white}
          />
        </>
      );
    case "wings":
      return (
        <>
          <g stroke={white} strokeWidth={4} fill="none" strokeLinecap="round">
            <path d="M56 108c6-22 22-34 44-34s38 12 44 34" />
            <path d="M48 108c4-8 10-15 16-20M152 108c-4-8-10-15-16-20" />
          </g>
          <path
            d="M100 80l5 12 13 1.5-9.5 9 2.5 12.5-11-6-11 6 2.5-12.5-9.5-9 13-1.5z"
            fill={white}
          />
        </>
      );
    case "tab":
      return (
        <>
          <rect x={44} y={88} width={112} height={24} rx={9} fill="#0d1b2a" />
          <text
            x={100}
            y={105}
            textAnchor="middle"
            fontSize={12}
            fontWeight={800}
            letterSpacing={3}
            fill={white}
            style={{ fontFamily: "var(--font-inter), system-ui, sans-serif" }}
          >
            PATCHIFY
          </text>
        </>
      );
    default:
      return null;
  }
}

export default function PatchArt({
  patch,
  className,
}: {
  patch: Patch;
  className?: string;
}) {
  const clipId = `gallery-clip-${patch.id}`;
  const htId = `ht-${patch.colors[0].replace("#", "")}`;

  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <Geo shape={patch.shape} />
        </clipPath>
        <pattern
          id={htId}
          width={14}
          height={14}
          patternUnits="userSpaceOnUse"
        >
          <rect width={14} height={14} fill="#0d1b2a" opacity={0.55} />
          <path d="M0 7l3.5-3.5 3.5 3.5-3.5 3.5z" fill="#e3e9f0" />
          <path d="M7 14l3.5-3.5 3.5 3.5-3.5 3.5z" fill="#ffffff" />
          <path d="M7 0L3.5 3.5 0 0z" fill="#c9d4e3" />
          <path d="M14 7l-3.5 3.5L7 7l3.5-3.5z" fill="#ffffff" />
        </pattern>
      </defs>

      <Geo shape={patch.shape} fill={patch.colors[0]} />
      <Border shape={patch.shape} colors={patch.colors} border={patch.border} />
      <g clipPath={`url(#${clipId})`}>
        <Motif motif={patch.motif} colors={patch.colors} />
      </g>
    </svg>
  );
}
