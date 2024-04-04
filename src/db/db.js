import mysql from "mysql";
import { config } from "dotenv";

config();

const connection = mysql.createConnection({
  host: `${process.env.DB_HOST}`,
  user: `${process.env.DB_USER}`,
  password: `${process.env.DB_PASSWORD}`,
  database: `${process.env.DB_DATABASE}`,
});

connection.connect((error) => {
  if (error) {
    return console.log("erro ao se conectar com o banco de dados", error);
  }
  console.log("conectado ao banco de dados com sucesso");
});
