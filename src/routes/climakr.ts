import { Router } from "express";
import { getWeather } from "../services/weatherService";

const router = Router();

router.get("/", async (req, res) => {
  let city = req.query.city?.toString().trim();
  console.log("📥 Cidade recebida:", city);

  if (!city || city.toLowerCase() === "$(querystring)") {
    city = "Seoul";
  }

  try {
    const result = await getWeather(city);
    res.send(result);
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).send("❌ Erro ao consultar o clima.");
  }
});

export default router;
