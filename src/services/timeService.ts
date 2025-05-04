export function getCurrentTimeInKorea(): string {
  const koreaTime = new Date(
    new Date().toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  const horas = koreaTime.getHours().toString().padStart(2, "0");
  const minutos = koreaTime.getMinutes().toString().padStart(2, "0");

  return `🕒 Agora na Coreia do Sul: ${horas}:${minutos}`;
}