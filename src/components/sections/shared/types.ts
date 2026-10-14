import type { ServiceIconName } from "./ServiceIcon";

export interface SectionHeadingProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  /** Imported image URL; replace the placeholder with the person's photo. */
  photo: string;
}

export interface ContentCardProps {
  title: string;
  text: string;
  label?: string;
  index?: string;
}

export interface ServiceItem {
  icon: ServiceIconName;
  title: string;
  text: string;
}
