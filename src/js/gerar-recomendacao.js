function gerarRecomendacao() {
    var receitas = window.localStorage.getItem("receitas");
    var despesas = window.localStorage.getItem("despesas");
    var recomendacao = document.getElementById("textoRecomendacao");

    if (receitas - despesas > 2000) {
        recomendacao.innerHTML = "Muito bom! Seu primeiro passo é fazer uma reserva de emergência para no mínimo 6 meses, se já tiver feito isso pode partir para a aba de Investir"
    } else if (receitas - despesas > 500) {
        recomendacao.innerHTML = "Legal! Já é um ótimo começo! Recomendamos buscar mais fontes de renda ou uma redução nas despesas."
    } else if (receitas - despesas > -500) {
        recomendacao.innerHTML = "Está bastante apertado! Recomendamos dar uma lida na página Economizar para te ajudar a sair dessa!"
    } else {
        recomendacao.innerHTML = "É uma fase passageira, se você está aqui já deu um primeiro passo importante para sair dessa!"
    }
}