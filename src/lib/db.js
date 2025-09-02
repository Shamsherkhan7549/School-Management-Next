import mysql from "mysql2/promise";

export const pool = mysql.createPool({
  host: process.env.MYSQL_ADDON_HOST,
  port: process.env.MYSQL_ADDON_PORT,   // 🔹 Important
  user: process.env.MYSQL_ADDON_USER,
  password: process.env.MYSQL_ADDON_PASSWORD,
  database: process.env.MYSQL_ADDON_DB
});

