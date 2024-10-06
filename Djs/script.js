emailjs.send('service_ltzh3pv', 'template_myb6qeo', {
    from_whatsapp: this.from_whatsapp.value,
    from_email: this.from_email.value
})



// Ativa ou desativa o campo de texto com base na seleção
document.querySelectorAll('input[name="participacao"]').forEach((elem) => {
    elem.addEventListener("change", function(event) {
        const raveInput = document.getElementById("rave");
        const raveContainer = document.getElementById("raveContainer");
        if (event.target.value === "sim") {
            raveContainer.style.display = "block"; // Mostra o campo quando "Sim" é selecionado
            raveInput.disabled = false; // Habilita o campo de entrada
        } else {
            raveContainer.style.display = "none"; // Oculta o campo quando "Não" é selecionado
            raveInput.disabled = true; // Desabilita o campo de entrada
            raveInput.value = ""; // Limpa o valor se "Não" for selecionado
        }
    });
});

// Função para alternar o menu
function toggleMenu() {
    var nav = document.getElementById("navMenu");
    nav.classList.toggle("active");
}

// Adiciona o evento de envio do formulário
document.querySelector("form").addEventListener("submit", enviarEmail);
