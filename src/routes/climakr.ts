import { Router } from "express";
import { getWeather } from "../services/weatherService";

const router = Router();

router.get("/", async (req, res) => {
  let city = (req.query.city || "").toString().trim();

  const isInvalid =
    !city || city.toLowerCase() === "$(querystring)" || /[^\w\s\-]/.test(city);

  if (isInvalid) {
    city = "Seoul";
  }

  const normalized = city.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  const aliases: Record<string, string> = {
    seul: "Seoul",
    "myeong dong": "Myeongdong",
    gangnam: "Seoul",
    suwon: "Suwon",
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
