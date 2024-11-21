// Função para buscar dados da rede Bitcoin utilizando a API do Blockchair
async function getBitcoinStats() {
    try {
        const response = await fetch('https://api.blockchair.com/bitcoin/stats');
        
        // Verifica se a requisição foi bem-sucedida
        if (!response.ok) {
            throw new Error('Network response was not ok: ' + response.statusText);
        }
        
        const data = await response.json(); // Converte a resposta em JSON
        
        // Acessando as informações desejadas
        const blocks = data.data.blocks; // Número de blocos
        const transactions = data.data.transactions; // Número de transações
        const hashrate = data.data.hashrate_24h; // Hashrate em 24 horas
        const fees = data.data.suggested_transaction_fee_per_byte_sat; // Taxas onchain
        const dominancia = data.data.market_dominance_percentage //dominancia btc 24 horas

        //Formatação Hashrate
        function convertHashrateToEHs(hashrate) {
            return (hashrate / 1e18).toFixed(2) + ' EH/s';
        }
        const formattedHashrate = convertHashrateToEHs(hashrate);   
        //fim

        // Mandando para o HTML
        document.getElementById('last-block').textContent = blocks; //ultimo bloco
        document.getElementById('hashrate_24h').textContent = formattedHashrate; //ultimo bloco
        document.getElementById('dominancia_24').textContent = dominancia + ('%');

    } catch (error) {
        console.error('Erro ao obter dados:', error);
    }
}

// Chamando a função
getBitcoinStats();
