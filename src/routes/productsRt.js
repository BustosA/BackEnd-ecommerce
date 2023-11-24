import { Router } from "express";
export const router = Router();

router.get("/", (req, res) => {
  res.send("obteniendo productos");
});
router.get("/:id", (req, res) => {
  res.send("obteniendo 1 producto");
});
router.post("/", (req, res) => {
  res.send("creando productos");
});
router.put("/", (req, res) => {
  res.send("actualizando productos");
});
router.delete("/", (req, res) => {
  res.send("eliminando productos");
});
