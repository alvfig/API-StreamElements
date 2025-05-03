import express from "express";
import dotenv from "dotenv";
import climakrRoute from "./routes/climakr";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/climakr", climakrRoute);

app.listen(PORT, () =>
  console.log(`🌐 Servidor rodando em http://localhost:${PORT}`)
);
