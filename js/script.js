const container = document.getElementById('jogo');
const colunas = 13;
const linhas = 13;
const totalCelulas = linhas * colunas;
let posicaoAtual = 162;
let pontos = 0;
let vidas = 3;

function criarGrid() {
  for (let i = 0; i < totalCelulas; i++) {
    const celula = document.createElement('div');
    celula.classList.add('celula');
    container.appendChild(celula);
  }

  const celulas = container.querySelectorAll('.celula');
  for (let i = 0; i <= colunas; i += 3) {
    celulas[i].classList.add('toca');
  }

  for (let linha = 6; linha <= 6; linha++) {
    const inicio = linha * colunas;
    const fim = inicio + colunas;
    for (let i = inicio; i < fim; i++) {
      celulas[i].classList.add('chao');
    }
  }

  for (let linha = 12; linha <= 12; linha++) {
    const inicio = linha * colunas;
    const fim = inicio + colunas;
    for (let i = inicio; i < fim; i++) {
      celulas[i].classList.add('chao');
    }
  }
  console.log(celulas)
}