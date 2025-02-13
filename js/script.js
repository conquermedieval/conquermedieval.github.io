document.addEventListener('DOMContentLoaded', function () {
    // Data de início do projeto (no formato AAAA-MM-DD)
    var startDate = new Date('2023-11-30');

    // Função para calcular a diferença em dias
    function calculateDays() {
        var currentDate = new Date();
        var timeDiff = currentDate - startDate;
        var daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
        return daysDiff;
    }

    // Atualizar o contador
    function updateCounter() {
        var counterElement = document.getElementById('counter');
        counterElement.textContent = 'Online há: ' + calculateDays();
    }

    // Atualizar o contador ao carregar a página
    updateCounter();

    // Atualizar o contador a cada segundo
    setInterval(updateCounter, 1000);
});
