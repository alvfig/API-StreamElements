export function getCurrentTimeInKorea(): string {
  const formatter = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "Asia/Seoul",
    weekday: "long",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formatted = formatter.format(new Date());

  return `🕒 Agora na Coreia do Sul: ${formatted}`;
}
