// Dados simulados
let eventos = [
  { id: 1, titulo: "Culto de Jovens", data: "2025-08-25" },
  { id: 2, titulo: "Ensaio do Louvor", data: "2025-08-27" }
];

let membros = [
  { id: 1, nome: "João", tipo: "membro" },
  { id: 2, nome: "Maria", tipo: "lider" }
];

// Login simples
function login() {
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if(username && password){
    document.getElementById("login-screen").style.display = "none";
    document.getElementById("dashboard").style.display = "block";
    renderEventos();
    renderMembros();
    renderGrafico();
  } else {
    alert("Preencha usuário e senha!");
  }
}

// Eventos
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

function addEvento() {
  const titulo = document.getElementById("evento-titulo").value;
  const data = document.getElementById("evento-data").value;

  if(titulo && data){
    const novoEvento = { id: eventos.length + 1, titulo, data };
    eventos.push(novoEvento);
    renderEventos();
    renderGrafico();
    document.getElementById("evento-titulo").value = "";
    document.getElementById("evento-data").value = "";
  } else {
    alert("Preencha título e data do evento!");
  }
}

// Membros/Líderes
function renderMembros() {
  const membroList = document.getElementById("membro-list");
  membroList.innerHTML = "";
  membros.forEach(m => {
    const div = document.createElement("div");
    div.className = "membro-card";
    div.innerHTML = `${m.nome} - ${m.tipo}`;
    membroList.appendChild(div);
  });
}

function addMembro() {
  const nome = document.getElementById("membro-nome").value;
  const tipo = document.getElementById("membro-tipo").value;

  if(nome && tipo){
    const novoMembro = { id: membros.length + 1, nome, tipo };
    membros.push(novoMembro);
    renderMembros();
    document.getElementById("membro-nome").value = "";
  } else {
    alert("Preencha nome e tipo!");
  }
}

// Adicionar evento com pregador
function addEvento() {
  const titulo = document.getElementById("evento-titulo").value;
  const data = document.getElementById("evento-data").value;
  const pregador = document.getElementById("evento-pregador").value;

  if(titulo && data && pregador){
    const novoEvento = { id: eventos.length + 1, titulo, data, pregador };
    eventos.push(novoEvento);
    renderEventos();
    renderGrafico();
    document.getElementById("evento-titulo").value = "";
    document.getElementById("evento-data").value = "";
    document.getElementById("evento-pregador").value = "";
  } else {
    alert("Preencha título, data e pregador!");
  }
}

// Renderizar eventos atualizado
function renderEventos() {
  const eventList = document.getElementById("event-list");
  eventList.innerHTML = "";
  eventos.forEach(evento => {
    const div = document.createElement("div");
    div.className = "event-card";
    div.innerHTML = `<strong>${evento.titulo}</strong><br>Data: ${evento.data}<br>Pregador: ${evento.pregador}`;
    eventList.appendChild(div);
  });
}


// Gráfico de Participação (Chart.js)
function renderGrafico() {
  const ctx = document.getElementById('participacaoChart').getContext('2d');
  const labels = eventos.map(e => e.titulo);
  const data = {
    labels: labels,
    datasets: [{
      label: 'Participação em Eventos',
      data: eventos.map(() => Math.floor(Math.random() * 50) + 10), // números aleatórios simulando presença
      backgroundColor: 'rgba(75, 192, 192, 0.5)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1
    }]
  };
  const config = {
    type: 'bar',
    data: data,
    options: { scales: { y: { beginAtZero: true } } }
  };

  // Destruir gráfico anterior se existir
  if(window.participacaoChart instanceof Chart) window.participacaoChart.destroy();
  window.participacaoChart = new Chart(ctx, config);
}
