import { LucideIcon } from "lucide-react";

export interface NavItem {
  label: string;
  href: string;
}

export interface Service {
  title: string;
  description?: string;
  icon: LucideIcon;
}

export interface Project {
  title: string;
  image: string;
  category: string;
  technologies: string[];
}

export interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
}

export interface Social {
  name: string;
  url: string;
}

export interface Stat {
  value: string;
  label: string;
}
