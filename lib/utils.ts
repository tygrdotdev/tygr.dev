import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs))
}

export const truncate = (str: string, n: number) =>
	str.length > n ? str.substr(0, n - 1) + "..." : str;
