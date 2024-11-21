async function getWeather() {
    try {
        const response = await fetch('https://wttr.in/Rolante?format=%C+%t+%h+%w');
        const weatherData = await response.text();
        
        // Exibir os dados em algum elemento HTML
        document.getElementById('weather-info').textContent = weatherData;
    } catch (error) {
        console.error('Erro ao obter dados do clima:', error);
        document.getElementById('weather-info').textContent = 'Erro ao carregar informações do clima.';
    }
}

// Chame a função quando o documento estiver pronto
document.addEventListener('DOMContentLoaded', getWeather);
