import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateRandomId() {
  const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
  const idLength = 10;
  let id = '';

  // Generate random part
  for (let i = 0; i < idLength - 4; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    id += characters[randomIndex];
  }

  // Add a timestamp part to ensure uniqueness
  const timestampPart = Date.now().toString(36).slice(-4);

  id += timestampPart;

  return id;
}
