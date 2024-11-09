let numeroAleatorio;
let tentativasRestantes = 3;

function iniciarJogo() {
    // Gera um número aleatório entre 1 e 10
    numeroAleatorio = Math.floor(Math.random() * 10) + 1;
    tentativasRestantes = 3;

    // Atualiza a interface
    document.querySelector("h1").textContent = "Adivinhe o número de 1 a 10";
    document.querySelector(".texto__paragrafo").textContent = `Você tem ${tentativasRestantes} tentativas restantes.`;
    document.querySelector(".container__input").value = '';
    document.querySelector("#reiniciar").disabled = true;
    document.querySelector(".container__botao").disabled = false;
}

function verificarChute() {
    const chute = parseInt(document.querySelector(".container__input").value);

    if (isNaN(chute) || chute < 1 || chute > 10) {
        document.querySelector(".texto__paragrafo").textContent = "Por favor, insira um número entre 1 e 10.";
        return;
    }

    tentativasRestantes--;

    if (chute === numeroAleatorio) {
        document.querySelector("h1").textContent = "Parabéns! Você acertou!";
        document.querySelector(".texto__paragrafo").textContent = "Clique em 'Novo jogo' para jogar novamente.";
        document.querySelector("#reiniciar").disabled = false;
        document.querySelector(".container__botao").disabled = true;
    } else if (tentativasRestantes > 0) {
        document.querySelector(".texto__paragrafo").textContent = `Errado! Você tem ${tentativasRestantes} tentativa(s) restante(s).`;
    } else {
        document.querySelector("h1").textContent = "Que pena, você perdeu!";
        document.querySelector(".texto__paragrafo").textContent = `O número era ${numeroAleatorio}. Clique em 'Novo jogo' para tentar novamente.`;
        document.querySelector("#reiniciar").disabled = false;
        document.querySelector(".container__botao").disabled = true;
    }
}

function reiniciarJogo() {
    iniciarJogo();
}

// Inicia o jogo ao carregar a página
window.onload = iniciarJogo;
