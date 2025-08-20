// Simulação de banco de dados
let eventos = [
  { id: 1, titulo: "Culto de Jovens", data: "2025-08-25" },
  { id: 2, titulo: "Ensaio do Louvor", data: "2025-08-27" }
];

// Função de login simples
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username && password){
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    renderEventos();
  } else {
    alert("Preencha usuário e senha!");
  }
}

// Renderizar eventos no dashboard
function renderEventos() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";
  eventos.forEach(evento => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `<strong>${evento.titulo}</strong><br>${evento.data}`;
    eventList.appendChild(div);
  });
}

// Adicionar evento
function addEvento() {
  const titulo = document.getElementById("evento-titulo").value;
  const data = document.getElementById("evento-data").value;

  if(titulo && data){
    const novoEvento = { id: eventos.length + 1, titulo, data };
    eventos.push(novoEvento);
    renderEventos();
    document.getElementById("evento-titulo").value = "";
    document.getElementById("evento-data").value = "";
  } else {
    alert("Preencha título e data do evento!");
  }
}

