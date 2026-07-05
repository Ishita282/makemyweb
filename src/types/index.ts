import { LucideIcon } from "lucide-react";

/* ---------------- NAV ---------------- */
export interface NavItem {
  label: string;
  href: string;
}

/* ---------------- SERVICES ---------------- */
export interface Service {
  title: string;
  description?: string;
  icon: LucideIcon;
}

/* ---------------- PROJECTS ---------------- */
export interface Project {
  title: string;
  image: string;
  category: string;
  technologies: string[];
}

/* ---------------- TESTIMONIALS ---------------- */
export interface Testimonial {
  name: string;
  role: string;
  image: string;
  review: string;
}

/* ---------------- SOCIAL ---------------- */
export interface Social {
  name: string;
  url: string;
}

/* ---------------- STATS ---------------- */
export interface Stat {
  value: string;
  label: string;
}

/* ---------------- PROJECT FORM ---------------- */
export interface ProjectForm {
  name: string;
  email: string;
  phone: string;
  company: string;

  service: string;
  budget: string;
  timeline: string;
  website: string;

  details: string;
  goals: string;
  contact: string;

  country: string;
  city: string;
  reference: string;
  notes: string;
}

/* ---------------- UI HELPERS (IMPORTANT FIX) ---------------- */

/**
 * Use this for components like Section, Container, Card, etc.
 */
export type HTMLProps<T extends HTMLElement> =
  React.HTMLAttributes<T>;
