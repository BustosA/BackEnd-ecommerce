import express from "express";
import { router as productsRT } from "./src/routes/productsRt.js";
import { connection } from "./db_config.js";
const app = express();
const PORT = process.env.PORT ?? 3000;

app.get("/", (req, res) => {
  res.json({ message: "hola mundo" });
});

const [products, _info] = await connection.query("SELECT * FROM products");
console.log(products);

app.listen(PORT, (err) => {
  console.log(
    err
      ? `Ocurrió un error: ${err}`
      : `Servidor corre en http://localhost:${PORT}`
  );
});
app.use("/products", productsRT);
