export function getCurrentTimeInKorea(): string {
  const now = new Date();
  const koreaTime = new Date(
    now.toLocaleString("en-US", { timeZone: "Asia/Seoul" })
  );

  const days = ["Domingo", "Segunda-Feira", "Terça-Feira", "Quarta-Feira", "Quinta-Feira", "Sexta-Feira", "Sábado"];
  const dayOfWeek = days[koreaTime.getDay()];

  const day = koreaTime.getDate().toString().padStart(2, "0");
  const month = (koreaTime.getMonth() + 1).toString().padStart(2, "0");
  const year = koreaTime.getFullYear();

  const hourNum = koreaTime.getHours();
  const hours = hourNum.toString().padStart(2, "0");
  const minutes = koreaTime.getMinutes().toString().padStart(2, "0");

  const isDayTime = hourNum >= 6 && hourNum <= 18;
  const emoji = isDayTime ? "☀️" : "🌙";

  return `🕒 Agora na Coreia do Sul: ${dayOfWeek}, ${day}/${month}/${year}, ${hours}h${minutes} ${emoji}`;
}
