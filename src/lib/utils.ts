import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const colors = {
  primary: "#EDE1D6",
  primaryDark: "#D4C4B0", 
  accent: "#8B7355",
  text: {
    primary: "#2D2D2D",
    secondary: "#6B7280",
    muted: "#9CA3AF"
  }
} as const
