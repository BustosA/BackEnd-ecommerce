import express from "express";
import { createPool } from 'mysql2/promise';
import cors from 'cors';
import { router as productsRT } from "./src/routes/productsRt.js";
import { connectToDatabase } from "./db_config.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

const connection = await connectToDatabase();

app.use("/products", productsRT);

app.listen(PORT, (err) => {
  console.log(
    err
      ? `Ocurrió un error: ${err}`
      : `Servidor corre en http://localhost:${PORT}`
  );
});
