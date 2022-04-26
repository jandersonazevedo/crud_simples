import { useCallback, useEffect, useState } from "react";
import api from "../services/api";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const ListFuncionarios = () => {
  const navigate = useNavigate();
  const [funcionarios, setFuncionarios] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchFuncionario = useCallback(() => {
    setLoading(true);
    api
      .get("/funcionarios")
      .then(({ data }) => {
        setFuncionarios(data);
      })
      .catch((err) => console.log(err))
      .finally(() => {
        setLoading(false);
      });

    console.log("teste");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [funcionarios]);

  const deletarFuncionario = (id_funcionario, nome) => {
    if (
      window.confirm(`Tem certeza que deseja deletar o funcionário ${nome} ?`)
    ) {
      setLoading(true);
      api
        .delete(`/funcionario/deletar/${id_funcionario}`)
        .then(setFuncionarios)
        .catch((err) => console.log(err))
        .finaly(() => {
          setLoading(false);
          navigate("/");
        });
    }
  };

  useEffect(() => {
    fetchFuncionario();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [loading]);

  return (
    <div className="table-container">
      <table>
        <tr>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Telefone</th>
          <th>CPF</th>
          <th>Data de nascimento</th>
          <th>Endereço</th>
          <th>Cargo</th>
          <th>Salário (R$) </th>
          <th>Ações</th>
        </tr>

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
            <td>
              <Link
                className="btn-editar"
                to={`funcionario/editar/${funcionario.id_funcionario}`}
              >
                Editar
              </Link>
              <button
                className="btn-deletar"
                onClick={() => {
                  deletarFuncionario(
                    funcionario.id_funcionario,
                    funcionario.nome
                  );
                }}
              >
                Deletar
              </button>
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default ListFuncionarios;
