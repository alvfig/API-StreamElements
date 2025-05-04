import express from "express";
import dotenv from "dotenv";
import climakrRoute from "./routes/climakr";
import convertRoute from "./routes/convert";
dotenv.config();

const app = express();
const PORT = Number(process.env.PORT) || 80;

app.use("/climakr", climakrRoute);
app.use("/convert", convertRoute);

app.listen(PORT, "0.0.0.0", () =>
  console.log(`🌐 Servidor rodando na porta ${PORT}`)
);
