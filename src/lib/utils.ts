import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(phone: string) {
  return phone.replace(
    /(\d{2})(\d{5})(\d{5})/,
    "$1 $2 $3"
  );
}

export function truncate(
  text: string,
  length = 120
) {
  if (text.length <= length) return text;

  return text.slice(0, length) + "...";
}
