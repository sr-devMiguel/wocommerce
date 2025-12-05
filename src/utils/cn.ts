// Utilitário simples para combinar classes CSS do Tailwind
export function cn(...classes: (string | boolean | undefined | null)[]) {
  return classes.filter(Boolean).join(' ')
}