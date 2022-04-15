import { useEffect, useState } from "react";
import api from "../services/api";
import React from "react";

const ListFuncionarios = () => {

    const [funcionarios, setFuncionarios] = useState([]);
    useEffect(() => {
        api.get("/getF")
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
          </tr>
        ))}
        </table>
    </div>
  );
};

export default ListFuncionarios;
