let bitcoinInBrl = 0;
let bitcoinInUsd = 0;

// Função para buscar o preço do Bitcoin
async function getBitcoinPrice() {
    try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=brl,usd');
        const data = await response.json();
        bitcoinInBrl = data.bitcoin.brl;
        bitcoinInUsd = data.bitcoin.usd;

        // Atualiza os campos com os valores digitados, se houver
        convertBrlToBtc();
        convertUsdToBtc();
    } catch (error) {
        console.error('Erro ao obter o preço do Bitcoin:', error);
    }
}

// Função para converter BRL para BTC ou Satoshi
function convertBrlToBtc() {
    const brlAmount = document.getElementById('brl-input').value;
    if (brlAmount > 0 && bitcoinInBrl > 0) {
        const btcValue = brlAmount / bitcoinInBrl;
        if (btcValue >= 1) {
            document.getElementById('btc-brl').textContent = `${btcValue.toFixed(8)} BTC`;
        } else {
            const satoshiValue = btcValue * 100000000;
            document.getElementById('btc-brl').textContent = `${satoshiValue.toFixed(0)} Satoshi`;
        }
    } else {
        document.getElementById('btc-brl').textContent = '0';
    }
}

// Função para converter USD para BTC ou Satoshi
function convertUsdToBtc() {
    const usdAmount = document.getElementById('usd-input').value;
    if (usdAmount > 0 && bitcoinInUsd > 0) {
        const btcValue = usdAmount / bitcoinInUsd;
        if (btcValue >= 1) {
            document.getElementById('btc-usd').textContent = `${btcValue.toFixed(8)} BTC`;
        } else {
            const satoshiValue = btcValue * 100000000;
            document.getElementById('btc-usd').textContent = `${satoshiValue.toFixed(0)} Satoshi`;
        }
    } else {
        document.getElementById('btc-usd').textContent = '0';
    }
}

getBitcoinPrice();
setInterval(getBitcoinPrice, 60000); // Atualiza a cada 60 segundos
