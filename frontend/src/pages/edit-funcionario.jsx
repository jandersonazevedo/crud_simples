import api from "../services/api";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const EditFuncionario = () => {
  const navigate = useNavigate();
  const params = useParams();
  const [values, setValues] = useState(Object);

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    api.put("/funcionario/editar", values).then((res) => {
      console.log(res);
    });
    navigate("/");
  };

  useEffect(() => {
    api.get(`/funcionario/${params.id}`).then(({ data }) => {
      setValues(data[0]);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="form-container">
    <div className="formulario">
      <h3>Editar funcionário</h3>
      <hr className="linha-separadora"/>
      <label>
        Nome completo:
        <input
          type="text"
          placeholder="Digite o nome completo"
          name="nome"
          value={values.nome}
          onChange={handleChangeValues}
        />
      </label>
      <br />

      <label>
        E-mail:
        <input
          type="email"
          placeholder="Digite o e-mail"
          name="email"
          onChange={handleChangeValues}
          value={values.email}
        />
      </label>
      <br />

      <label>
        Telefone:
        <input
          type="tel"
          placeholder="Digite o telefone"
          name="telefone"
          onChange={handleChangeValues}
          value={values.telefone}
        />
      </label>
      <br />

      <label>
        CPF:
        <input
          type="text"
          placeholder="Digite o CPF"
          name="cpf"
          onChange={handleChangeValues}
          value={values.cpf}
        />
      </label>
      <br />

      <label>
        Data de nascimento:
        <input
          type="date"
          placeholder="Digite a data de nascimento"
          name="data_nascimento"
          onChange={handleChangeValues}
          value={values.data_nascimento}
        />
      </label>
      <br />

      <label>
        Endereço:
        <input
          type="text"
          placeholder="Digite o endereço"
          name="endereco"
          onChange={handleChangeValues}
          value={values.endereco}
        />
      </label>
      <br />

      <label>
        Cargo:
        <input
          type="text"
          placeholder="Digite o cargo"
          name="cargo"
          onChange={handleChangeValues}
          value={values.cargo}
        />
      </label>
      <br />

      <label>
        Salário:
        <input
          type="number"
          placeholder="Digite o salário (R$)"
          name="salario"
          onChange={handleChangeValues}
          value={values.salario}
        />
      </label>
      <br />

      <button onClick={() => handleClickButton()}>Salvar alterações</button>
    </div>
    </div>
  );
};

export default EditFuncionario;
