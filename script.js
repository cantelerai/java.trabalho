document.getElementById("loginForm").addEventListener("submit", function(e) {
  e.preventDefault();

  let usuario = document.getElementById("usuario").value;
  let senha = document.getElementById("senha").value;
  let mensagem = document.getElementById("mensagem");

  // exemplo de credenciais
  let usuarioCorreto = "Raiany";
  let senhaCorreta = "12/08/2008";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    mensagem.style.color = "green";
    mensagem.textContent = "🎉 Bem-vindo(a), " + usuario + "!";
  } else {
    mensagem.style.color = "red";
    mensagem.textContent = "❌ Usuário ou senha incorretos!";
  }
});
