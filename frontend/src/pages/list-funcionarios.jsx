import { useEffect, useState } from "react";
import api from "../services/api";
import React from "react";
import { Link } from "react-router-dom";

const ListFuncionarios = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    useEffect(() => {
        api.get("/funcionarios")
        .then(({data}) => {setFuncionarios(data)})
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div>
        <table border="1">
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>CPF</th>
          <th>Data de nascimento</th>
          <th>Endereço</th>
          <th>Cargo</th>
          <th>Salário (R$) </th>
          <th>Ações</th>
      
        {funcionarios?.map((funcionario) => (
          <tr>
            <td>{funcionario.nome}</td>
            <td>{funcionario.email}</td>
            <td>{funcionario.telefone}</td>
            <td>{funcionario.cpf}</td>
            <td>{funcionario.data_nascimento}</td>
            <td>{funcionario.endereco}</td>
            <td>{funcionario.cargo}</td>
            <td>{funcionario.salario}</td>
            <td><Link to={`funcionario/editar/${funcionario.id_funcionario}`} key={funcionario.id_funcionario} >Editar</Link></td>
          </tr>
        ))}
        </table>
    </div>
  );
};

export default ListFuncionarios;
