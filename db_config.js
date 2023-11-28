import mysql2 from "mysql2/promise";

const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  database: "ecommerce_gamer",
};

async function connectToDatabase() {
  try {
    const connection = await mysql2.createConnection(dbConfig);  
    console.log("Connected to database");
    return connection;
  } catch (error) {
    console.error("Error connecting to database:", error);
    throw error;
  }
}

export { connectToDatabase };
