var botoesIncrementa = document.querySelectorAll(".btn-incrementa");

for (let botao of botoesIncrementa) {
    botao.addEventListener("click", incrementa)
    function incrementa() {
        let item = botao.closest(".item");

        let input = item.querySelector(".quantidade");
        if (input.value < 9) {
            input.value++;
            let preco = pegaPrecoItem(item);
            adicionaAoTotal(preco)
        }
    }
}

let botoesDescrementa = document.querySelectorAll(".btn-decrementa");


for (let botao of botoesDescrementa) {
    botao.addEventListener("click", decrementa)
    function decrementa() {
        let item = botao.closest(".item");

        let input = item.querySelector(".quantidade");

        if (input.value > 0) {
            input.value--;
            let preco = pegaPrecoItem(item);
            adicionaAoTotal(-preco)
        }
    }

}

var formPedido = document.forms.pedido;
formPedido.addEventListener("submit", function (event){
    let contador = 0;

    var inputs = form.pedido.querySelectorAll("input.quantidade");

    for (let input of inputs) 
    {
        if (input.value > 0) {
            contador++;
        }
    }
    if(contador == 0){
        alert("Deve ter pelo uma pizza");
        event.preventDefault();
    }
});

function pegaPrecoItem(item) {
    let precoItem = item.querySelector(".preco-item");
    return Number(precoItem.textContent);
}
function adicionaAoTotal(valor) {
    var elementoTotal = document.querySelector("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}