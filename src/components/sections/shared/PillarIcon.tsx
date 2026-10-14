export type PillarIconName = "planet" | "water" | "biomass" | "women";

/** Line icons for the hero pillars (from the company poster); colour comes from `currentColor`. */
export function PillarIcon({ name }: { name: PillarIconName }) {
  return (
    <svg
      viewBox="0 0 32 32"
      width="28"
      height="28"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "planet" && (
        <>
          <circle cx="14" cy="16" r="10" />
          <path d="M4 16h20M14 6c3 3 4.5 6.5 4.5 10S17 23 14 26M14 6c-3 3-4.5 6.5-4.5 10S11 23 14 26" />
          <path d="M20 24c0-6 4-10 9-10-.5 6-4 10-9 10zm0 0 5-5" />
        </>
      )}
      {name === "water" && (
        <>
          <path d="M16 4s8 8.5 8 14.5a8 8 0 0 1-16 0C8 12.5 16 4 16 4z" />
          <path d="M4 26c3-2 5-2 8 0s5 2 8 0 5-2 8 0" />
        </>
      )}
      {name === "biomass" && (
        <>
          <circle cx="16" cy="16" r="11" />
          <circle cx="12" cy="13" r="3.5" />
          <circle cx="20" cy="14" r="3" />
          <circle cx="15" cy="21" r="3" />
          <circle cx="21.5" cy="21" r="1.6" />
        </>
      )}
      {name === "women" && (
        <>
          <path d="M13 27c-4-1-6-4-6-8 0-6 4-12 9-12 4 0 6 3 6 6 0 2-1 3-1 4 1 1 2 2 1 3l-2 1c0 2 0 3-2 3h-1" />
          <path d="M21 27c0-5 3-8 7-8-.5 5-3 8-7 8zm0 0 4-4" />
        </>
      )}
    </svg>
  );
}
