export function formatDate(date: string): string {
  return new Date(date).toLocaleDateString("pt-BR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
}

export function cn(...classes: string[]): string {
  return classes.filter(Boolean).join(" ");
}
