document.addEventListener('DOMContentLoaded', function() { 
    console.log("JavaScript carregado corretamente."); 
    const investmentSystem = document.getElementById('investment-system'); 
    if (investmentSystem) { 
        console.log("Elemento encontrado."); 
        investmentSystem.innerHTML = 'Sistema de investimentos carregado com sucesso!'; 
    } else { 
        console.log("Elemento não encontrado."); 
    } 
});

