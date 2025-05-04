import { Router, Request, Response } from "express";
import { getCurrentTimeInKorea } from "../services/timeService";

const router = Router();

router.get("/", (_req: Request, res: Response) => {
  const time = getCurrentTimeInKorea();
  res.send(time);
});

export default router;