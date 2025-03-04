document.addEventListener('DOMContentLoaded', function() {
    console.log("JavaScript carregado corretamente.");
    const investmentSystem = document.getElementById('investment-system');
    if (investmentSystem) {
        console.log("Elemento encontrado.");
        investmentSystem.innerHTML = '<p>Sistema de investimentos carregado com sucesso!</p>';
    } else {
        console.log("Elemento não encontrado.");
    }
});


