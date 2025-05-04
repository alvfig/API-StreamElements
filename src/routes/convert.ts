import { Router, Request, Response } from "express";
import { convertCurrency } from "../services/currencyConverter";

const router = Router();

router.get("/", async (req: Request, res: Response) => {
  const from = (req.query.from as string || "").toUpperCase();
  const to = (req.query.to as string || "").toUpperCase();
  const amount = Number(req.query.valor) || 1;

  const supported = ["BRL", "KRW", "USD", "EUR"];

  if (!from || !to || !supported.includes(from) || !supported.includes(to)) {
    return res.status(400).send("❌ Moeda inválida. Use from=KRW&to=BRL, por exemplo.");
  }

  if (isNaN(amount) || amount <= 0) {
    return res.status(400).send("❌ Valor inválido.");
  }

  const result = await convertCurrency(from, to, amount);
  res.send(result);
});

export default router;