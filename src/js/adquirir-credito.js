function simular() {
    const selecao = document.getElementById('inputGroupSelect');
    const escolha = selecao.options[selecao.selectedIndex].value;
    const valor = parseFloat(document.getElementById('valorSimulacao').value);

    if (isNaN(valor) || isNaN(escolha)) {
        alert("O campo valor não pode estar nulo e você precisa escolher a modalidade de empréstimo válida")
    } else if (escolha == 1) {
        const valorTotal = (valor + (valor * (318.7/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 2) {
        const valorTotal = (valor + (valor * (300.3/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 3) {
        const valorTotal = (valor + (valor * (175.2/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 4) {
        const valorTotal = (valor + (valor * (119.5/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 5) {
        const valorTotal = (valor + (valor * (22.5/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 6) {
        const valorTotal = (valor + (valor * (19.42/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    } else if (escolha == 7) {
        const valorTotal = (valor + (valor * (12.55/100))).toFixed(2);
        exibirResultado(valorTotal, valor);
    }
}

function exibirResultado(valorTotal, valor) {
    const resultado = document.getElementById('resultado');
    const juros = document.getElementById('juros');

    resultado.innerHTML = 'R$ ' + valorTotal;
    juros.innerHTML = 'R$ ' + (valorTotal - valor).toFixed(2);
}

function reset() {
    document.getElementById('valorSimulacao').value = "";
    document.getElementById('resultado').innerHTML = 'R$ ' + 0;
    document.getElementById('juros').innerHTML = 'R$ ' + 0;
}