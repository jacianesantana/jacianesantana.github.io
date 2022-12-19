const url = "https://brapi.dev";
const tickerEndpoint = "/api/quote/";
const cryptoEndpoint = "/api/v2/crypto";

async function valorDasAcoes() {
    const vale = "VALE3";
    const itau = "ITUB4";
    const petro = "PETR4";

    await fetch(url + tickerEndpoint + vale)
        .then((response) => response.json())
        .then((data) => document.getElementById("vale").innerHTML = "R$ " + data.results[0].regularMarketPrice);

    await fetch(url + tickerEndpoint + itau)
        .then((response) => response.json())
        .then((data) => document.getElementById("itau").innerHTML = "R$ " + data.results[0].regularMarketPrice);

    await fetch(url + tickerEndpoint + petro)
        .then((response) => response.json())
        .then((data) => document.getElementById("petro").innerHTML = "R$ " + data.results[0].regularMarketPrice);
}

async function valorDasCrypto() {
    const btcQuery = "?coin=BTC";
    const ethQuery = "?coin=ETH";

    await fetch(url + cryptoEndpoint + btcQuery)
        .then((response) => response.json())
        .then((data) => {
            const btcValue = parseFloat(data.coins[0].regularMarketPrice).toFixed(2);
            document.getElementById("btc").innerHTML = "R$ " + btcValue;
        });

    await fetch(url + cryptoEndpoint + ethQuery)
        .then((response) => response.json())
        .then((data) => {
            const ethValue = parseFloat(data.coins[0].regularMarketPrice).toFixed(2);
            document.getElementById("eth").innerHTML = "R$ " + ethValue;
        });
}

valorDasAcoes();
valorDasCrypto();
