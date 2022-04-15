import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FormAddFuncionario from "./pages/form-add-funcionario";
import ListFuncionarios from "./pages/list-funcionarios";

function App() {
  return (
    <Router>
      <div className="App">
        <Link to="/">Funcionário cadastrados</Link>
        <Link to="/cadastrar">Cadastrar funcionário</Link>
        <Routes>
          <Route path="/" element={<ListFuncionarios />} />
          <Route path="/cadastrar" element={<FormAddFuncionario />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
