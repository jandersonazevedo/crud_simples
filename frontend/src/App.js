import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormAddFuncionario from "./pages/form-add-funcionario";
import ListFuncionarios from "./pages/list-funcionarios";
import EditFuncionario from "./pages/edit-funcionario";
import logo from "./issets/favicon.ico";

function App() {
  return (
    <Router>
      <div className="App">
        <div id="NavBar">
          <Link to="/" className="logo">
            <img src={logo} width="35" height="35" />
            <span>Funcionários</span>
          </Link>
          <div className="links-nav">
            <Link to="/" className="nav-link">
              Listar
            </Link>
            <Link to="/funcionario/cadastrar" className="nav-link">
              Cadastrar
            </Link>
          </div>
        </div>
        <Routes>
          <Route path="/" exact element={<ListFuncionarios />} />
          <Route
            path="/funcionario/cadastrar"
            element={<FormAddFuncionario />}
          />
          <Route path="/funcionario/editar/:id" element={<EditFuncionario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
