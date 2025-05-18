import { Router } from "express";
import { getWeather } from "../services/weatherService";

const router = Router();

router.get("/", async (req, res) => {
  let rawCity = (req.query.city || "").toString().trim();

  if (!rawCity || rawCity.startsWith("$(")) {
    rawCity = "Seoul";
  }

  const normalized = rawCity.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  const aliases: Record<string, string> = {
    seul: "Seoul",
    suwon: "Suwon",
    gangnam: "Seoul",
    "myeong dong": "Myeongdong",
    myeongdong: "Myeongdong",
    myongdong: "Myeongdong",
    incheon: "Incheon",
  };

  const city = aliases[normalized] || rawCity;

  try {
    const result = await getWeather(city);
    res.send(result);
  } catch (err) {
    console.error("Erro na API de clima:", err);
    res.status(500).send(`❌ Erro ao consultar o clima para "${city}".`);
  }
});

export default router;
