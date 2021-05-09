
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
}

function allowDrop(ev) {
    ev.preventDefault();
}

function leave(ev) {
    ev.preventDefault();
}

/* função para soltar e que chama a função atualizarSacola sempre que for solto um produto */
function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    ev.target.appendChild(document.getElementById(data));
    atualizarSacola();
}

/* busca a função atualizarSacola quando alterar a quantidade dos produtos, se tiver algum produto na sacola */
$('article').change(function() {
    if ($('#dropzoneCart').find('article').length > 0 ){
        atualizarSacola();  
    }
});

function atualizarSacola(){
    var totalQtd = 0;
    var valTotal = 0;    
    $('#dropzoneCart').find('article').each(function() {  
        var qtdProduto = Number($(this).find("input[name='qtde']").val());
        var valUnitarioProduto = Number($(this).find("input[name='valor']").val());
        valTotal = (qtdProduto * valUnitarioProduto) + valTotal;
        totalQtd = qtdProduto + totalQtd;
    })
    exibeTotais(totalQtd,valTotal);
}

function exibeTotais(qtdProdutos, valTotal){
    $('#total-itens').text(qtdProdutos + " Und")
    $('#valor-total').text("R$" + valTotal);
}
