import mysql2 from "mysql2/promise";
const dbConfig = {
  host: "localhost",
  user: "root",
  port: 3306,
  database: "ecommerce_gamer",
};
export const connection = await mysql2.createConnection(dbConfig);

const [products, _info] = await connection.query("SELECT * FROM products");
console.log(products);

connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("Connected to database");
  }
});
