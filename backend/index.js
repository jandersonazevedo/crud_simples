const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "db_supermercado",
});

app.use(cors());
app.use(express.json());

app.post("/cadastrar", (req, res) => {
  const { nome } = req.body;
  const { email } = req.body;
  const { telefone } = req.body;
  const { cpf } = req.body;
  const { data_nascimento } = req.body;
  const { endereco } = req.body;
  const { cargo } = req.body;
  const { salario } = req.body;

  const SQL =
    "INSERT INTO funcionarios (nome, email, telefone, cpf,data_nascimento, endereco, cargo, salario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)";
  const binds = [
    nome,
    email,
    telefone,
    cpf,
    data_nascimento,
    endereco,
    cargo,
    salario,
  ];
  db.query(SQL, binds, (err, res) => {
    if (err) console.log(err);
  });
});

app.get("/funcionarios", (req, res) => {
  const SQL = "SELECT * FROM funcionarios";
  db.query(SQL, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.get("/funcionario/:id", (req, res) => {
  const SQL = "SELECT * FROM funcionarios WHERE id_funcionario = ?";
  const { id } = req.params;


  db.query(SQL, id, (err, result) => {
    if (err) console.log(err);
    else res.send(result);
  });
});

app.put("/funcionario/editar", (req, res) => {
    const { id_funcionario } = req.body;
    const { nome } = req.body;
    const { email } = req.body;
    const { telefone } = req.body;
    const { cpf } = req.body;
    const { data_nascimento } = req.body;
    const { endereco } = req.body;
    const { cargo } = req.body;
    const { salario } = req.body;
  
    const SQL =
      "UPDATE funcionarios SET nome = ?, email = ?, telefone = ?, cpf = ?,data_nascimento = ?, endereco = ?, cargo = ?, salario = ? WHERE id_funcionario = ?";
    const binds = [
      nome,
      email,
      telefone,
      cpf,
      data_nascimento,
      endereco,
      cargo,
      salario,
      id_funcionario,
    ];
    db.query(SQL, binds, (err, res) => {
      if (err) console.log(err);
    });
  });

app.listen(3001, () => {
  console.log("rodando servidor...");
});
