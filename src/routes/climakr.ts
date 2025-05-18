import { Router } from "express";
import { getWeather } from "../services/weatherService";

const router = Router();

router.get("/", async (req, res) => {
  let city = (req.query.city || "").toString().trim();

  if (!city) {
    city = "Seoul";
  }

  const normalized = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const aliases: Record<string, string> = {
    seul: "Seoul",
    suwon: "Suwon",
    gangnam: "Seoul",
    "myeong dong": "Myeongdong",
    myeongdong: "Myeongdong",
    incheon: "Incheon",
  };

  city = aliases[normalized] || city;

  console.log("📥 Cidade final para busca:", city);

  try {
    const result = await getWeather(city);
    res.send(result);
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).send("❌ Erro ao consultar o clima.");
  }
});

export default router;
