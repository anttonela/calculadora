function mostrarTela(novoNumero) {
    document.getElementById('visor').value = novoNumero;
}

function pegarNumeros() {
    return document.getElementById('visor').value;
}

function numeros(numero) {
    if (pegarNumeros() == 0) {
        mostrarTela("");
    }

    let valor = pegarNumeros() + numero;
    mostrarTela(valor);
}

function limpar() {
    mostrarTela("0");
}

function operadores(operador) {
    if (pegarNumeros() == 0) {
        mostrarTela("");
    }
    let valor = pegarNumeros() + operador;
    mostrarTela(valor);
}

function calculo() {
    // 👏👏👏👏👏👏👏👏👏
    let calculoFinal = eval(pegarNumeros());
    mostrarTela(calculoFinal);
}