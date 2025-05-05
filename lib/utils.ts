import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const truncate = (str: string, n: number) =>
  str.length > n ? str.substring(0, n - 1) + "..." : str;