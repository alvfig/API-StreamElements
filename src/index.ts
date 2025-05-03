import express from "express";
import dotenv from "dotenv";
import climakrRoute from "./routes/climakr";
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use("/climakr", climakrRoute);

app.listen(3000, "0.0.0.0", () => 
  console.log("🌐 Servidor rodando na porta 3000")
);
