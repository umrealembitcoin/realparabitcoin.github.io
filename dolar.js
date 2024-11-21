async function fetchDollarToReal() {
    const url = 'https://api.coingecko.com/api/v3/simple/price?ids=usd&vs_currencies=brl';

    try {
        const response = await fetch(url);
        const data = await response.json();
        
        const dollarToReal = data.usd.brl;
        document.getElementById('dollar-to-real').textContent = `R$ ${dollarToReal}`;
    } catch (error) {
        console.error('Erro ao buscar a cotação do dólar:', error);
        document.getElementById('dollar-to-real').textContent = 'Erro ao carregar a cotação.';
    }
}

// Chame a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', fetchDollarToReal);
