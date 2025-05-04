import axios from "axios";

type FrankfurterResponse = {
  rates: {
    [key: string]: number;
  };
};

export async function convertCurrency(from: string, to: string, amount: number): Promise<string> {
  const url = `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`;

  try {
    const response = await axios.get<FrankfurterResponse>(url);
    const converted = response.data.rates[to];

    if (typeof converted !== "number") {
      throw new Error("Resposta inválida da API de câmbio");
    }

    const symbols: Record<string, string> = {
      KRW: "₩",
      BRL: "R$",
      USD: "$",
      EUR: "€",
    };

    const fromSymbol = symbols[from] || from;
    const toSymbol = symbols[to] || to;

    return `💱 ${fromSymbol}${amount} equivalem a ${toSymbol}${converted.toFixed(2)}.`;
  } catch (error: any) {
    console.error("Erro ao converter moeda:", error);
    return "❌ Erro ao converter moeda.";
  }
}