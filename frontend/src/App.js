import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormAddFuncionario from "./pages/form-add-funcionario";
import ListFuncionarios from "./pages/list-funcionarios";
import EditFuncionario from "./pages/edit-funcionario";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Funcionário cadastrados</Link>
        <Link to="/funcionario/cadastrar">Cadastrar funcionário</Link>
        <Routes>
          <Route path="/" exact element={<ListFuncionarios />} />
          <Route path="/funcionario/cadastrar" element={<FormAddFuncionario />} />
          <Route path="/funcionario/editar/:id" element={<EditFuncionario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
