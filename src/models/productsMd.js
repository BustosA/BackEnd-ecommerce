import { connection } from "../../db_config";

async function getAllProducts() {
    try {
      const [products, _info] = await connection.query("SELECT * FROM products");
      return products;
    } catch (error) {
      console.error("Error al obtener productos:", error);
      throw error;
    }
  }

async function getProductById(productId) {
  try {
    const [product, _info] = await connection.query("SELECT * FROM products WHERE id = ?", [productId]);
    return product[0];
  } catch (error) {
    console.error(`Error al obtener el producto con ID ${productId}:`, error);
    throw error;
  }
}

async function createProduct(productData) {
  try {
    const [result, _info] = await connection.query("INSERT INTO products SET ?", [productData]);
    return result.insertId; 
  } catch (error) {
    console.error("Error al crear un nuevo producto:", error);
    throw error;
  }
}

async function updateProductById(productId, updatedData) {
  try {
    await connection.query("UPDATE products SET ? WHERE id = ?", [updatedData, productId]);
  } catch (error) {
    console.error(`Error al actualizar el producto con ID ${productId}:`, error);
    throw error;
  }
}

async function deleteProductById(productId) {
  try {
    await connection.query("DELETE FROM products WHERE id = ?", [productId]);
  } catch (error) {
    console.error(`Error al eliminar el producto con ID ${productId}:`, error);
    throw error;
  }
}

export {
  getAllProducts,
  getProductById,
  createProduct,
  updateProductById,
  deleteProductById
};
