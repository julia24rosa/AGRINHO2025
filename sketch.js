let modo = 'campo'; // Variável para controlar se estamos mostrando o campo ou a cidade
let mostrarTexto = false; // Variável para controlar se o texto deve ser exibido
let textoEspecialCidade = false; // Nova variável para controlar o texto final da cidade
let tempoInicioTexto; // Variável para armazenar o tempo em que o texto começou a ser exibido
const DURACAO_TEXTO_PADRAO = 1500; // Duração em milissegundos (1.5 segundos) para o texto "Bem-vindo"
const DURACAO_TEXTO_FINAL = 3000; // Duração em milissegundos (3 segundos) para o texto final da cidade

function setup() {
  createCanvas(800, 600); // Define o tamanho da tela
}

function draw() {
  if (modo === 'campo') {
    desenharCampo();
  } else {
    desenharCidade();
  }

  // Lógica para exibir o texto temporariamente
  if (mostrarTexto) {
    let tempoAtual = millis(); // Obtém o tempo atual em milissegundos
    let duracaoTotal = textoEspecialCidade ? DURACAO_TEXTO_FINAL : DURACAO_TEXTO_PADRAO;

    if (tempoAtual - tempoInicioTexto < duracaoTotal) {
      // Se o tempo de exibição não passou, desenha o texto
      fill(255); // Cor branca para o texto
      textSize(38); // Tamanho grande para o texto
      textAlign(CENTER, CENTER); // Centraliza o texto horizontal e verticalmente
      
      if (textoEspecialCidade) {
        // Mensagem final na cidade
        text("A cidade se alimenta do campo!", width / 2, height / 2 - 30);
        textSize(24);
        text("Um não vive sem o outro.", width / 2, height / 2 + 20);
      } else if (modo === 'campo') {
        text("Bem-vindo ao Campo!", width / 2, height / 2);
      } else { // Modo cidade, mas não é o texto especial (primeiro clique na cidade)
        text("Bem-vindo à Cidade!", width / 2, height / 2);
      }
    } else {
      // Se o tempo de exibição passou, esconde o texto e reseta o texto especial
      mostrarTexto = false;
      textoEspecialCidade = false; // Importante resetar
    }
  }
}

function desenharCampo() {
  // Céu
  background(135, 206, 235); // Azul claro

  // Sol
  fill(255, 255, 0); // Amarelo
  ellipse(width - 100, 100, 80, 80);

  // Grama
  fill(34, 139, 34); // Verde floresta
  rect(0, height / 2, width, height / 2);

  // Árvores (simples)
  fill(139, 69, 19); // Marrom
  rect(150, height / 2 - 80, 30, 80); // Tronco
  fill(0, 100, 0); // Verde escuro
  ellipse(165, height / 2 - 100, 100, 100); // Copa

  rect(600, height / 2 - 120, 40, 120); // Tronco
  fill(0, 128, 0); // Verde médio
  ellipse(620, height / 2 - 150, 120, 120); // Copa

  // Casa de fazenda (bem simples)
  fill(205, 133, 63); // Marrom claro
  rect(350, height / 2 + 50, 100, 80); // Corpo da casa
  triangle(350, height / 2 + 50, 400, height / 2, 450, height / 2 + 50); // Telhado

  // Texto Fixo (opcional, se quiser manter o texto do canto)
  fill(0);
  textSize(24);
  textAlign(LEFT, TOP); // Reseta o alinhamento para o texto fixo
  text("Campo", 50, 50);
}

function desenharCidade() {
  // Céu noturno ou de fim de tarde
  background(25, 25, 112); // Azul meia-noite

  // Ruas
  fill(50); // Cinza escuro
  rect(0, height - 150, width, 150);

  // Prédios
  fill(105, 105, 105); // Cinza
  rect(50, height - 300, 80, 200); // Prédio 1
  rect(150, height - 400, 100, 300); // Prédio 2 (mais alto)
  rect(280, height - 250, 70, 150); // Prédio 3
  rect(400, height - 450, 90, 350); // Prédio 4 (ainda mais alto)
  rect(520, height - 320, 85, 220); // Prédio 5
  rect(650, height - 380, 95, 280); // Prédio 6

  // Janelas (quadrados amarelos para simular luzes)
  fill(255, 255, 0, 150); // Amarelo translúcido
  // Prédio 1
  rect(60, height - 290, 15, 15);
  rect(80, height - 290, 15, 15);
  rect(60, height - 260, 15, 15);
  rect(80, height - 260, 15, 15);
  // Adicione mais janelas para os outros prédios
  rect(160, height - 390, 20, 20);
  rect(190, height - 390, 20, 20);
  rect(160, height - 350, 20, 20);
  rect(190, height - 350, 20, 20);
  rect(290, height - 240, 10, 10);
  rect(310, height - 240, 10, 10);
  rect(330, height - 240, 10, 10);
  rect(290, height - 220, 10, 10);
  rect(310, height - 220, 10, 10);
  rect(330, height - 220, 10, 10);

  // Carro (simples)
  fill(255, 0, 0); // Vermelho
  rect(width / 2 - 50, height - 100, 80, 30); // Corpo do carro
  fill(0);
  ellipse(width / 2 - 30, height - 70, 20, 20); // Roda 1
  ellipse(width / 2 + 10, height - 70, 20, 20); // Roda 2

  // Texto Fixo (opcional, se quiser manter o texto do canto)
  fill(255);
  textSize(24);
  textAlign(LEFT, TOP); // Reseta o alinhamento para o texto fixo
  text("Cidade", 50, 50);
}

function mousePressed() {
  // Alterna entre campo e cidade ao clicar com o mouse
  if (modo === 'campo') {
    modo = 'cidade';
    textoEspecialCidade = true; // Ativa o texto especial para a cidade
  } else {
    modo = 'campo';
    textoEspecialCidade = false; // Desativa o texto especial se voltar para o campo
  }
  // Ativa a exibição do texto e registra o tempo atual
  mostrarTexto = true;
  tempoInicioTexto = millis();
}

// Opcional: Adicionar a função keyPressed para alternar com uma tecla
function keyPressed() {
  if (key === 'c' || key === 'C') { // Pressionar 'c' para cidade
    modo = 'cidade';
    textoEspecialCidade = true;
    mostrarTexto = true;
    tempoInicioTexto = millis();
  } else if (key === 'a' || key === 'A') { // Pressionar 'a' para campo (agrinho, área rural)
    modo = 'campo';
    textoEspecialCidade = false; // Desativa o texto especial se for para o campo
    mostrarTexto = true;
    tempoInicioTexto = millis();
  }
}