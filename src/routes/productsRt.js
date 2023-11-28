import { Router } from "express";
export const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "Obteniendo todos los productos" });
});

router.get("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Obteniendo el producto con ID ${productId}` });
});

router.post("/", (req, res) => {
  res.json({ message: "Creando un nuevo producto" });
});

router.put("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Actualizando el producto con ID ${productId}` });
});

router.delete("/:id", (req, res) => {
  const productId = req.params.id;
  res.json({ message: `Eliminando el producto con ID ${productId}` });
});
