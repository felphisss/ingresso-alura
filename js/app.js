function comprar() {
    // Identificar tipo de assento desejado
    let ingresso = document.getElementById("tipo-ingresso").value;
    let quantidadeDisponivel = parseInt(document.getElementById(`qtd-${ingresso}`).textContent);
    // Identificar quantidade selecionada
    let quantidadeSelecionada = parseInt(document.getElementById("qtd").value);
    // Verificar se há disponibilidade de assentos
    if(isNaN(quantidadeSelecionada) || quantidadeSelecionada <= 0){
        alert("Quantidade selecionada inválida.")
        document.getElementById("qtd").value = ""
        return;
    }

    if (quantidadeDisponivel < quantidadeSelecionada) {
        alert("Quantidade selecionada indisponível para compra.")
        document.getElementById("qtd").value = ""
        return;
    }
    // Reduzir da quantidade disponível a quantidade comprada
    quantidadeDisponivel -= quantidadeSelecionada;
    document.getElementById(`qtd-${ingresso}`).textContent = `${quantidadeDisponivel}`;
    document.getElementById("qtd").value = "";

    let palavraIngresso = "ingressos";
    palavraIngresso = quantidadeSelecionada > 1 ? palavraIngresso : "ingresso";
    let mensagemCompraSucesso = `Compra de ${quantidadeSelecionada} ${palavraIngresso} tipo ${ingresso} efetuada com sucesso.`;
    alert(mensagemCompraSucesso);
}
