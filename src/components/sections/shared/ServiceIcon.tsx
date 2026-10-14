export type ServiceIconName =
  | "assessment"
  | "design"
  | "pilot"
  | "installation"
  | "monitoring"
  | "wastewater"
  | "product"
  | "digital";

/** Line icons for the Services cards; stroke colour comes from `currentColor`. */
export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      {name === "assessment" && (
        <>
          <circle cx="11" cy="11" r="7" />
          <path d="m20 20-3.5-3.5M8.5 11h5M11 8.5v5" />
        </>
      )}
      {name === "design" && <path d="M4 20 14 10m0-6 6 6-4 4-6-6zM4 16v4h4" />}
      {name === "pilot" && <path d="M9 3h6m-5 0v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3M7.5 15h9" />}
      {name === "installation" && <path d="M14.7 6.3a4 4 0 0 0-5.4 5.2l-5.8 5.8a1.8 1.8 0 0 0 2.6 2.6l5.8-5.8a4 4 0 0 0 5.2-5.4l-2.6 2.6-2.4-.4-.4-2.4z" />}
      {name === "monitoring" && <path d="M3 12h4l2.5-6 5 12L17 12h4" />}
      {name === "wastewater" && <path d="M12 3s6 6.4 6 11a6 6 0 0 1-12 0c0-4.6 6-11 6-11zm-2.5 12a2.5 2.5 0 0 0 2.5 2.5" />}
      {name === "product" && <path d="M5 19c0-8 5-13 14-14-1 9-6 14-14 14zm0 0 7-7" />}
      {name === "digital" && <path d="M4 20V4m0 16h16M8 15l3-4 3 2 5-6" />}
    </svg>
  );
}
