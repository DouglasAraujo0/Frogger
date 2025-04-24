//asdasd
const container = document.getElementById('jogo');
const colunas = 13;
const linhas = 13;
const totalCelulas = linhas * colunas;
let posicaoAtual = 162;
let pontos = 0;
let vidas = 3;

function criarGrid() {
  for (let index = 0; index < totalCelulas; index++) {
    const celula = document.createElement('div');
    celula.classList.add('celula');
    container.appendChild(celula);
  }

  const celulas = container.querySelectorAll('.celula');
  for (let index = 0; index <= colunas; index += 3) {
    celulas[index].classList.add('toca');
  }

  for (let linha = 6; linha <= 6; linha++) {
    const inicio = linha * colunas;
    const fim = inicio + colunas;
    for (let index = inicio; index < fim; index++) {
      celulas[index].classList.add('chao');
    }
  }

  for (let linha = 12; linha <= 12; linha++) {
    const inicio = linha * colunas;
    const fim = inicio + colunas;
    for (let index = inicio; index < fim; index++) {
      celulas[index].classList.add('chao');
    }
  }
  console.log(celulas)
}

function atualizarHUD() {
    let hud = document.getElementById('hud');
    if (!hud) {
      hud = document.createElement('div');
      hud.id = 'hud';
      hud.innerHTML = `<span id="pontuacao"></span> <span id="vidas"></span>`;
      document.body.prepend(hud);
    }
    document.getElementById('pontuacao').textContent = `Pontos: ${pontos}`;
    document.getElementById('vidas').textContent = `Vidas: ${vidas}`;
  }