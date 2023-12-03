import { connectToDatabase } from "../../db_config.js";

async function getAllProducts() {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [products, _info] = await connection.query("SELECT * FROM products");
    return products;
  } catch (error) {
    console.error("Error getting products:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function getAllCategories() {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [categories, _info] = await connection.query("SELECT * FROM categories");
    return categories;
  } catch (error) {
    console.error("Error al obtener categorías:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function addNewProduct(productData) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "INSERT INTO products SET ?",
      [productData]
    );
    return result.insertId;
  } catch (error) {
    console.error("Error adding new product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function updateProduct(productId, productData) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "UPDATE products SET ? WHERE id = ?",
      [productData, productId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error updating product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function deleteProduct(productId) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [result, _info] = await connection.query(
      "DELETE FROM products WHERE id = ?",
      [productId]
    );
    return result.affectedRows > 0;
  } catch (error) {
    console.error("Error deleting product:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function searchProducts(name) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const query = "SELECT * FROM products WHERE name LIKE ?";
    const queryParams = [`%${name}%`];

    const [products, _info] = await connection.query(query, queryParams);
    return products;
  } catch (error) {
    console.error("Error searching products:", error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

async function getProductById(productId) {
  const pool = await connectToDatabase();
  let connection;

  try {
    connection = await pool.getConnection();
    const [product, _info] = await connection.query('SELECT * FROM products WHERE id = ?', [productId]);

    if (product.length === 0) {
      return null;
    }

    return product[0];
  } catch (error) {
    console.error('Error getting product by ID:', error);
    throw error;
  } finally {
    if (connection) {
      connection.release();
    }
  }
}

export { getAllProducts, getProductById, searchProducts, getAllCategories, addNewProduct, updateProduct, deleteProduct };
