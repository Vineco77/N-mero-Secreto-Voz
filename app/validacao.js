function verificaSeOChuteEhValido(chute) {
    const numero = +chute

    if (chuteForIvalido(numero)) {
        if (chute == 'game over') {
            document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar" >Jogar novamente</button>
            `
            document.body.style.backgroundColor = "black";
        } else {
            elementoChute.innerHTML += '<div>Valor Inválido</div>';
            return
        }
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML +=  `<br> <br> Valor inválido: o número secreto precisa estar entre ${menorValor} e ${maiorValor}`;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
        <h1>Parabéns você acertou<h1>
        <h2>O número secreto era <br> ${numeroSecreto} </span> <br> <br>
        <button id='jogar-novamente' class='btn-jogar'>Jogar Novamente</button>
        `
    } else if (numero > numeroSecreto) {
       elementoChute.innerHTML += `<div>O número secreto é menor <i class="fa-solid fa-circle-down"></i></div>`
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-circle-up"></i></div>`
    }
}

function chuteForIvalido(numero) {
    return Number.isNaN(numero);
}

function numeroForMaiorOuMenorQueOValorPermitido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
     if (e.target.id == 'jogar-novamente') {
        window.location.reload()
     }
})

