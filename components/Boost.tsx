export type BoostMode =
  | "hello"
  | "performance"
  | "learning"
  | "success"
  | "ouch"
  | "thinking"
  | "data"
  | "pointing";

const INK = "#0E1112";
const PAPER = "#F4F2ED";
const LIME = "#C8FF4D";

function Body() {
  return (
    <>
      <path
        d="M40 24h84l36 36v96a20 20 0 0 1-20 20H40a20 20 0 0 1-20-20V44a20 20 0 0 1 20-20z"
        fill={PAPER}
        stroke={INK}
        strokeWidth={6}
      />
      <path d="M124 24l36 36h-36V24z" fill={LIME} />
    </>
  );
}

function Face({ mode }: { mode: BoostMode }) {
  switch (mode) {
    case "performance":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={58} y={96} width={16} height={26} rx={8} fill={INK} />
            <rect x={102} y={96} width={16} height={26} rx={8} fill={INK} />
          </g>
          <path d="M74 146c10 8 30 8 40 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
          <path d="M44 76l16 14 14-20 18 16" stroke={LIME} strokeWidth={7} strokeLinecap="round" fill="none" />
        </>
      );
    case "learning":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={60} y={100} width={16} height={22} rx={8} fill={INK} />
            <rect x={104} y={100} width={16} height={22} rx={8} fill={INK} />
          </g>
          <path d="M76 148c8 6 24 6 32 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
          <path d="M46 70h60v10H46z" fill={LIME} />
        </>
      );
    case "success":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <path d="M58 108c6-8 14-8 20 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
            <path d="M102 108c6-8 14-8 20 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
          </g>
          <path d="M72 142c12 14 32 14 44 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
        </>
      );
    case "ouch":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <path d="M56 100l22 18M78 100l-22 18" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
            <path d="M102 100l22 18M124 100l-22 18" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
          </g>
          <ellipse cx={94} cy={150} rx={15} ry={11} fill={INK} />
          <path
            d="M156 62l16-14M162 84h22M150 44l6-20"
            stroke={LIME}
            strokeWidth={7}
            strokeLinecap="round"
            fill="none"
          />
        </>
      );
    case "thinking":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={60} y={102} width={16} height={16} rx={8} fill={INK} />
            <rect x={104} y={96} width={16} height={26} rx={8} fill={INK} />
          </g>
          <path d="M76 148h30" stroke={INK} strokeWidth={7} strokeLinecap="round" />
          <circle cx={150} cy={74} r={7} fill={LIME} />
          <circle cx={166} cy={56} r={11} fill={LIME} className="origin-[166px_56px] animate-bspark" />
        </>
      );
    case "data":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={60} y={98} width={16} height={22} rx={4} fill={INK} />
            <rect x={104} y={98} width={16} height={22} rx={4} fill={INK} />
          </g>
          <path d="M74 148h44" stroke={INK} strokeWidth={7} strokeLinecap="round" />
          <rect x={48} y={64} width={11} height={20} rx={3} fill={LIME} />
          <rect x={65} y={54} width={11} height={30} rx={3} fill={LIME} />
          <rect x={82} y={44} width={11} height={40} rx={3} fill={LIME} />
        </>
      );
    case "pointing":
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={68} y={96} width={16} height={26} rx={8} fill={INK} />
            <rect x={112} y={96} width={16} height={26} rx={8} fill={INK} />
          </g>
          <path d="M82 148h28" stroke={INK} strokeWidth={7} strokeLinecap="round" />
          <path d="M34 122l22-14v28z" fill={LIME} />
        </>
      );
    default:
      return (
        <>
          <g className="origin-[100px_110px] animate-bblink">
            <rect x={60} y={96} width={16} height={26} rx={8} fill={INK} />
            <rect x={104} y={96} width={16} height={26} rx={8} fill={INK} />
          </g>
          <path d="M74 146c10 8 30 8 40 0" stroke={INK} strokeWidth={7} strokeLinecap="round" fill="none" />
          <path
            d="M148 108l-16 26h12l-6 22 22-32h-13l7-16z"
            fill={LIME}
            className="origin-[145px_128px] animate-bspark"
          />
        </>
      );
  }
}

export default function Boost({
  mode = "hello",
  size,
  className,
}: {
  mode?: BoostMode;
  size?: number | string;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 200 200"
      {...(size ? { width: size, height: size } : {})}
      role="img"
      aria-label="Boost"
      className={className}
      style={{ display: "block", width: size ? undefined : "100%", height: size ? undefined : "100%" }}
    >
      <Body />
      <Face mode={mode} />
    </svg>
  );
}
