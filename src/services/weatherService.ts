import axios from "axios";
import dotenv from "dotenv";
import { Agent } from "https";
dotenv.config();

interface WeatherResponse {
  main: {
    temp: number;
  };
  weather: {
    description: string;
  }[];
  name: string;
}

export async function getWeather(cityName: string = "Seoul"): Promise<string> {
  const apiKey = process.env.WEATHER_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(
    cityName
  )}&appid=${apiKey}&units=metric&lang=pt`;

  const agent = new Agent({ family: 4 });

  try {
    const { data } = await axios.get<WeatherResponse>(url, {
      httpsAgent: agent,
      timeout: 5000,
    });

    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;
    const city = data.name;

    return `🌤️ Agora em ${city}: ${temp}°C, tempo: ${weather}.`;
  } catch (err) {
    if (axios.isAxiosError(err) && err.response?.status === 404) {
      return `❌ Cidade "${cityName}" não encontrada. Verifique o nome.`;
    }

    console.error("Erro inesperado na API de clima:", err);
    return `❌ Erro ao consultar o clima para "${cityName}".`;
  }
}
