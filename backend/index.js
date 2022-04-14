const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "db_supermercado",
})

app.use(cors());
app.use(express.json())

app.post("/cadastrar", (req, res) => {
    const { nome } = req.body;
    const { email } = req.body;
    const { telefone } = req.body;
    const { cpf } = req.body;
    const { data_nascimento } = req.body;
    const { endereco } = req.body;
    const { cargo } = req.body;
    const { salario } = req.body;

    let SQL = "INSERT INTO funcionarios (nome, email, telefone, cpf,data_nascimento, endereco, cargo, salario) VALUES (?, ?, ?, ?, ?, ?, ?, ?)"
    db.query(SQL, [nome, email, telefone, cpf, data_nascimento, endereco, cargo, salario] , (err, res) => {
        if (err) console.log(err);
    })
})


app.listen(3001, () => {
    console.log("rodando servidor...");
})