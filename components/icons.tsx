import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

function base(props: IconProps): IconProps {
  return {
    width: 24,
    height: 24,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": true,
    ...props,
  };
}

export function MenuIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

export function CloseIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}

export function ArrowRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 12h14m-6-6 6 6-6 6" />
    </svg>
  );
}

export function ArrowUpRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M7 17 17 7M8 7h9v9" />
    </svg>
  );
}

export function PatchIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l1.9 4.6 4.9.4-3.7 3.3 1.1 4.8L12 13.9 7.8 16.1l1.1-4.8L5.2 8l4.9-.4z" />
    </svg>
  );
}

export function EmbroideredIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function WovenIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M3.5 8.5h17M3.5 15.5h17M8.5 3.5v17M15.5 3.5v17" />
    </svg>
  );
}

export function ShieldIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}

export function TruckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M2.5 6h11v10h-11zM13.5 10h4l3 3v3h-7z" />
      <circle cx="6.5" cy="18" r="1.6" />
      <circle cx="17.5" cy="18" r="1.6" />
    </svg>
  );
}

export function BrushIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M9.5 14.5 18 6l2-2-2-2-8 8.5M9.5 14.5 6 18c-1.5.5-3 2.5-2.5 2.5S7 18.5 7 18l2-2z" />
    </svg>
  );
}

export function ScissorsIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <circle cx="6" cy="6" r="2.5" />
      <circle cx="6" cy="18" r="2.5" />
      <path d="M8 7.5 20 19M8 16.5 20 5" />
    </svg>
  );
}

export function LayersIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 3 3 8l9 5 9-5z" />
      <path d="M3 13l9 5 9-5" />
    </svg>
  );
}

export function StarIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 3.2l2.6 5.4 5.9.8-4.3 4.1 1 5.8L12 16.8 6.8 19.3l1-5.8L3.5 9.4l5.9-.8z" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4.5 12.5l5 5 10-11" />
    </svg>
  );
}

export function MailIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="5.5" width="18" height="13" rx="2.5" />
      <path d="m3.5 7 8.5 6 8.5-6" />
    </svg>
  );
}

export function PhoneIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M5 4h4l1.5 4.5L8 10a12 12 0 0 0 6 6l1.5-2.5L20 15v4a2 2 0 0 1-2 2A15 15 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  );
}

export function MapPinIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M12 21s-7-5.5-7-11a7 7 0 0 1 14 0c0 5.5-7 11-7 11z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  );
}

export function InstagramIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3.5" y="3.5" width="17" height="17" rx="4.5" />
      <circle cx="12" cy="12" r="3.5" />
      <circle cx="17" cy="7" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function FacebookIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M14.5 8.5h3V5h-3a4 4 0 0 0-4 4v2.5H8V15h2.5v6h3.5v-6H17l.5-3.5h-3V9a.5.5 0 0 1 .5-.5z" />
    </svg>
  );
}

export function TwitterIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="M4 4l7 9.5L4.5 20h2.5l5-5.5L16 20h4l-7.2-10.3L19 4h-2.5l-4.6 5L8 4z" />
    </svg>
  );
}

export function ChevronDownIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

export function ChevronLeftIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m14.5 6-6 6 6 6" />
    </svg>
  );
}

export function ChevronRightIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <path d="m9.5 6 6 6-6 6" />
    </svg>
  );
}

export function RulerIcon(props: IconProps) {
  return (
    <svg {...base(props)}>
      <rect x="3" y="9" width="18" height="6" rx="1" transform="rotate(-45 12 12)" />
      <path d="m9.5 9.5 5 5m-3-4 2 2" />
    </svg>
  );
}

export function SparkIcon(props: IconProps) {
  return (
    <svg {...base(props)} fill="currentColor" stroke="none">
      <path d="M12 2l1.8 5.7L19.5 9.5l-5.7 1.8L12 17l-1.8-5.7L4.5 9.5l5.7-1.8z" />
      <path d="M19 14l.9 2.6 2.6.9-2.6.9L19 21l-.9-2.6-2.6-.9 2.6-.9z" />
    </svg>
  );
}
