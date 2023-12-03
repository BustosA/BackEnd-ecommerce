import { Router } from "express";
import {
  getAll,
  getProductByIdController,
  getAllCategories,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProductsController,
} from "../controllers/productsCt.js";

export const router = Router();

router.get("/", getAll);
router.get('/:id', getProductByIdController);
router.post("/", addNewProduct);
router.put("/:id", updateProduct);
router.delete("/:id", deleteProduct);
router.get("/search", searchProductsController);
router.get("/categories", getAllCategories);

