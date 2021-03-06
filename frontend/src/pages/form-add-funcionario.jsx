import React from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";
import "../issets/style.css";

const FormAddFuncionario = () => {
  const navigate = useNavigate();
  const [values, setValues] = React.useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickButton = () => {
    api.post("/cadastrar", values);
    navigate("/");
  };

  return (
    <div className="form-container">
      <div className="formulario">
        <h3>Cadastrar funcionário</h3>
        <hr className="linha-separadora"/>
        <label>
          Nome completo:
          <input
            type="text"
            placeholder="Digite o nome completo"
            name="nome"
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
          />
        </label>
        <br />

        <label>
          Salário:
          <input
            type="number"
            placeholder="Digite o salário (R$)"
            name="salario"
            min={1200}
            onChange={handleChangeValues}
          />
        </label>
        <br />

        <button onClick={() => handleClickButton()}>Cadastrar</button>
      </div>
    </div>
  );
};

export default FormAddFuncionario;
