import { connection } from "../db/db.js";

import bcrypt from "bcrypt";
import { v4 } from "uuid";

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ msg: "Os campos de email e senha são obrigatórios" });
  }

  const query = "SELECT * FROM users WHERE email = ?";

  connection.query(query, [email], async (error, results) => {
    if (error) {
      return res.status(500).send("Erro no servidor");
    }

    const user = await results[0];

    if (!user) {
      return res.status(404).send("Usuário não encontrado");
    }

    const match = await bcrypt.compare(password, user.password);

    if (match) {
      return res.status(200).send("Usuário logado com sucesso");
    } else {
      return res.status(401).send("Senha incorreta");
    }
  });
};

export const RegisterUser = (req, res) => {
  const { email, password, confirmPassword } = req.body;

  if (!email || !password || !confirmPassword) {
    return res.status(400).send("Todos os campos precisam ser preenchidos");
  }

  if (password !== confirmPassword) {
    return res.status(400).send("Senhas não são iguais");
  }

  const checkEmailQuery = "SELECT * FROM users WHERE email = ?";

  connection.query(checkEmailQuery, [email], async (error, results) => {
    if (error) {
      return res.status(500).send("Erro no servidor");
    }

    if (results.length > 0) {
      return res.status(409).json({ msg: "Esse email já está em uso" });
    } else {
      const hashPassword = await bcrypt.hash(password, 10);

      const id = v4();

      const insertUserToDBQuery =
        "INSERT INTO users (id, email, password) VALUES (?, ?, ?)";

      connection.query(
        insertUserToDBQuery,
        [id, email, hashPassword],
        async (error, results) => {
          if (error) {
            return res
              .status(500)
              .json({ msg: "Erro ao registrar o usuário.", error });
          }
          res.status(201).json({ msg: "Usuário registrado com sucesso." });
        }
      );
    }
  });
};
