import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// função com responsabilidade de fazer o merge de classes tailwind-css
export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs))
}