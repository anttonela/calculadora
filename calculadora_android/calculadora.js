let resultado = 0;

function numeros(numero) {
    if (resultado == 0) {
        resultado = "";
    }
    resultado = resultado + numero;
    renderizar(resultado);
}

function renderizar(valor) {
    document.getElementById('resultado').value = valor;
}

function limpar() {
    renderizar("0");
    resultado = 0;
}

function operadores(operador) {
    if (resultado == 0) {
        resultado = "";
    }
    resultado = resultado + operador;
    renderizar(resultado);
}

function calculo(){
    let calculoFinal = eval(resultado);
    renderizar(calculoFinal);
    resultado = calculoFinal;
}
