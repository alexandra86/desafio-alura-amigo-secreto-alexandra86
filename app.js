let amigos = [];
let listaAmigos = document.querySelector("#resultado");

function adicionarAmigo() {
  let amigo = document.querySelector("#amigo").value;
  if (amigo.trim() == "") {
    alert("Por favor, insira um nome válido.");
  } else if (amigo.length < 3 || typeof amigo === "number") {
    alert("Por favor, insira um nome válido.");
  } else {
    amigos.push(amigo);
    document.querySelector("#amigo").value = "";
  }

  listaAmigos.innerHTML = "";

  for (let i = 0; i < amigos.length; i++) {
    listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    console.log(amigos[i]);
  }
}

function sortearAmigo() {
  if (amigos.length <= 0) {
    listaAmigos.innerHTML = `<span>Não existem nomes para serem sorteados!</span>`;
  }
  let amigoSecreto = Math.floor(Math.random() * amigos.length);
  listaAmigos.innerHTML = `<li>${amigos[amigoSecreto]}</li>`;
}
