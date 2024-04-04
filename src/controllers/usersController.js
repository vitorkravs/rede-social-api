import { connection } from "../db/db.js";

import bcrypt from "bcrypt";

export const LoginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(404)
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
  return res.status(200).json({ msg: "funcionando" });
};
