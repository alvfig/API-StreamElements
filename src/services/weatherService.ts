import axios from "axios";
import dotenv from "dotenv";
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

export async function getWeatherInSeoul(): Promise<string> {
  const apiKey = process.env.WEATHER_API_KEY;

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Seoul&appid=${apiKey}&units=metric&lang=pt`;

  try {
    const { data } = await axios.get<WeatherResponse>(url);

    const temp = Math.round(data.main.temp);
    const weather = data.weather[0].description;
    const city = data.name;

    return `🌤️ Agora em ${city}: ${temp}°C com ${weather}.`;
  } catch (err) {
    console.error("Erro na API de clima:", err);
    return "❌ Erro ao consultar o clima.";
  }
}
