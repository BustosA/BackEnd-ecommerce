import express from "express";
import { createPool } from 'mysql2/promise';
import cors from 'cors';
import { router as productsRT } from "./src/routes/productsRt.js";
import { connectToDatabase } from "./db_config.js";
import { getAllCategories } from "./src/models/productsMd.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json({ message: "Hola mundo" });
});

const connection = await connectToDatabase();

app.get('/products/categories', async (req, res) => {
  try {
    // Realiza la consulta SQL para obtener categorías únicas
    const query = 'SELECT DISTINCT category FROM products';
    const [results] = await connection.query(query);

    // Formatea los resultados en un array
    const categories = results.map((result) => result.category);

    // Envía el array de categorías al frontend
    res.json(categories);
  } catch (error) {
    console.error('Error al obtener categorías:', error);
    res.status(500).json({ error: 'Error al obtener categorías' });
  }
});

app.use('/categories', getAllCategories);

app.use("/products", productsRT);

app.listen(PORT, (err) => {
  console.log(
    err
      ? `Ocurrió un error: ${err}`
      : `Servidor corre en http://localhost:${PORT}`
  );
});
