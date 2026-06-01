function CadastroForm() {
  return (
    <form className="formulario">
      <h2>Cadastro de Usuário</h2>

      <label>Nome</label>
      <input type="text" placeholder="Digite seu nome" />

      <label>Email</label>
      <input type="email" placeholder="Digite seu email" />

      <label>Senha</label>
      <input type="password" placeholder="Digite sua senha" />

      <label>Confirmar Senha</label>
      <input
        type="password"
        placeholder="Confirme sua senha"
      />

      <button type="submit">
        Cadastrar
      </button>
    </form>
  );
}

export default CadastroForm;