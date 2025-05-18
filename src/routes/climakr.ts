import { Router } from "express";
import { getWeather } from "../services/weatherService";

const router = Router();

router.get("/", async (req, res) => {
  const city = req.query.city?.toString() || "Seoul";

  try {
    const result = await getWeather(city);
    res.send(result);
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).send("❌ Erro ao consultar o clima.");
  }
});

export default router;