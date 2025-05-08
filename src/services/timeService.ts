export function getCurrentTimeInKorea(): string {
  const now = new Date();
  const koreaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  const days = ["domingo", "segunda-feira", "terça-feira", "quarta-feira", "quinta-feira", "sexta-feira", "sábado"];
  const dayOfWeek = days[koreaTime.getDay()];

  const day = koreaTime.getDate().toString().padStart(2, "0");
  const month = (koreaTime.getMonth() + 1).toString().padStart(2, "0");
  const year = koreaTime.getFullYear();

  let hours = koreaTime.getHours();
  const minutes = koreaTime.getMinutes().toString().padStart(2, "0");
  const isPM = hours >= 12;

  hours = hours % 12;
  if (hours === 0) hours = 12;

  const suffix = isPM ? "PM" : "AM";

  return `🕒 Agora na Coreia do Sul: ${dayOfWeek}, ${day}/${month}/${year}, ${hours}:${minutes} ${suffix}`;
}
