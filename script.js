// Dados simulados
let eventos = [
  { id: 1, titulo: "Culto de Jovens", data: "2025-08-25", pregador: "Pastor João" },
  { id: 2, titulo: "Ensaio do Louvor", data: "2025-08-27", pregador: "Pastor Maria" }
];

let membros = [
  { id: 1, nome: "João", tipo: "membro" },
  { id: 2, nome: "Maria", tipo: "lider" }
];

let escalas = [];

let currentUserRole = "membro";

// ===== Login =====
function login() {
  currentUserRole = document.getElementById("user-role").value;
  document.getElementById("login-screen").style.display = "none";
  document.getElementById("dashboard").style.display = "block";

  if(currentUserRole === "lider"){
    document.getElementById("admin-panel").style.display = "block";
  }

  renderEventos();
  renderMembros();
  renderEscalas();
}

// ===== Eventos =====
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

function addEvento() {
  const titulo = document.getElementById("evento-titulo").value;
  const data = document.getElementById("evento-data").value;
  const pregador = document.getElementById("evento-pregador").value;

  if(titulo && data && pregador){
    const novoEvento = { id: eventos.length + 1, titulo, data, pregador };
    eventos.push(novoEvento);
    renderEventos();
    document.getElementById("evento-titulo").value = "";
    document.getElementById("evento-data").value = "";
    document.getElementById("evento-pregador").value = "";
    alert("Evento adicionado!");
  } else {
    alert("Preencha título, data e pregador!");
  }
}

// ===== Membros =====
function renderMembros() {
  const membroList = document.getElementById("membro-list");
  const selectMembro = document.getElementById("ministro-membro");
  membroList.innerHTML = "";
  selectMembro.innerHTML = '<option value="">Selecione um membro</option>';

  membros.forEach(m => {
    // Para líder: mostrar botão de excluir
    let div = document.createElement("div");
    div.className = "membro-card";
    if(currentUserRole === "lider"){
      div.innerHTML = `${m.nome} - ${m.tipo} <button onclick="removeMembro(${m.id})" style="float:right; background-color:#ff7f7f;">Excluir</button>`;
    } else {
      div.innerHTML = `${m.nome} - ${m.tipo}`;
    }
    membroList.appendChild(div);

    // Adicionar ao select de escalas
    const option = document.createElement("option");
    option.value = m.id;
    option.text = m.nome;
    selectMembro.appendChild(option);
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

function removeMembro(id) {
  membros = membros.filter(m => m.id !== id);
  escalas = escalas.filter(e => e.membroId !== id);
  renderMembros();
  renderEscalas();
}

// ===== Escalas =====
function renderEscalas() {
  const escalaList = document.getElementById("escala-list");
  escalaList.innerHTML = "";
  escalas.forEach(e => {
    const membro = membros.find(m => m.id === e.membroId);
    if(membro){
      const div = document.createElement("div");
      div.className = "escala-card";
      if(currentUserRole === "lider"){
        div.innerHTML = `${membro.nome} - ${e.tarefa} <button onclick="removeEscala(${e.id})" style="float:right; background-color:#ffb37f;">Remover</button>`;
      } else {
        div.innerHTML = `${membro.nome} - ${e.tarefa}`;
      }
      escalaList.appendChild(div);
    }
  });
}

function addEscala() {
  const membroId = parseInt(document.getElementById("ministro-membro").value);
  const tarefa = document.getElementById("ministro-tarefa").value;

  if(membroId && tarefa){
    const novo = { id: escalas.length + 1, membroId, tarefa };
    escalas.push(novo);
    renderEscalas();
    document.getElementById("ministro-tarefa").value = "";
    alert("Escala adicionada!");
  } else {
    alert("Selecione membro e insira a tarefa.");
  }
}

function removeEscala(id) {
  escalas = escalas.filter(e => e.id !== id);
  renderEscalas();
}
