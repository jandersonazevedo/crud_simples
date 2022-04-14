export default function AdicionarFuncionario() {
  return (
    <div>
      <h1>Cadastrar funcionário</h1>
      <label>
        Nome completo:
        <input type="text" placeholder="Digite o nome completo" name="nome" />
      </label>
      <br />

      <label>
        E-mail:
        <input type="email" placeholder="Digite o e-mail" name="email" />
      </label>
      <br />

      <label>
        Telefone:
        <input type="tel" placeholder="Digite o telefone" name="telefone" />
      </label>
      <br />

      <label>
        CPF:
        <input type="text" placeholder="Digite o CPF" name="cpf" />
      </label>
      <br />

      <label>
        Data de nascimento:
        <input
          type="date"
          placeholder="Digite a data de nascimento"
          name="data_nascimento"
        />
      </label>
      <br />

      <label>
        Endereço:
        <input type="text" placeholder="Digite o endereço" name="enedereco" />
      </label>
      <br />

      <label>
        Cargo:
        <input type="text" placeholder="Digite o cargo" name="cargo" />
      </label>
      <br />

      <label>
        Salário:
        <input
          type="number"
          placeholder="Digite o salário (R$)"
          name="salario"
        />
      </label>
      <br />

      <button>Cadastrar</button>
    </div>
  );
}
