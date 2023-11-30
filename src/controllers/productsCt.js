import {
  getAllProducts,
  addNewProduct,
  updateProduct,
  deleteProduct,
  searchProducts,
} from "../models/productsMd.js";

async function getAll(req, res) {
  try {
    const products = await getAllProducts();
    res.json(products);
  } catch (error) {
    console.error("Error al obtener productos:", error);
    res.status(500).json({ error: "Error al obtener productos" });
  }
}

async function addNewProductController(req, res) {
  const productData = req.body;
  try {
    const productId = await addNewProduct(productData);
    res.json({ message: "Producto creado con éxito", productId });
  } catch (error) {
    console.error("Error al agregar un nuevo producto:", error);
    res.status(500).json({ error: "Error al agregar un nuevo producto" });
  }
}

async function updateProductController(req, res) {
  const productId = req.params.id;
  const productData = req.body;
  try {
    const success = await updateProduct(productId, productData);
    if (success) {
      res.json({
        message: `Producto con ID ${productId} actualizado con éxito`,
      });
    } else {
      res
        .status(404)
        .json({ error: `Producto con ID ${productId} no encontrado` });
    }
  } catch (error) {
    console.error("Error al actualizar el producto:", error);
    res.status(500).json({ error: "Error al actualizar el producto" });
  }
}

async function deleteProductController(req, res) {
  const productId = req.params.id;
  try {
    const success = await deleteProduct(productId);
    if (success) {
      res.json({ message: `Producto con ID ${productId} eliminado con éxito` });
    } else {
      res
        .status(404)
        .json({ error: `Producto con ID ${productId} no encontrado` });
    }
  } catch (error) {
    console.error("Error al eliminar el producto:", error);
    res.status(500).json({ error: "Error al eliminar el producto" });
  }
}

async function searchProductsController(req, res) {
  const { name, category_id } = req.query;

  try {
    if (!name) {
      return res.status(400).json({ error: 'Se requiere un nombre para la búsqueda' });
    }

    const products = await searchProducts(name, category_id);
    res.json(products);
  } catch (error) {
    console.error("Error searching products:", error);
    res.status(500).json({ error: "Error al buscar productos" });
  }
}


export { searchProductsController };

export {
  getAll,
  addNewProductController as addNewProduct,
  updateProductController as updateProduct,
  deleteProductController as deleteProduct,
};
