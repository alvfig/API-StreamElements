import { Router } from "express";
import { getWeatherInSeoul } from "../services/weatherService";

const router = Router();

router.get("/", async (_req, res) => {
  try {
    const result = await getWeatherInSeoul();
    res.send(result);
  } catch (err) {
    console.error("Erro:", err);
    res.status(500).send("❌ Erro ao consultar o clima.");
  }
});

export default router;
