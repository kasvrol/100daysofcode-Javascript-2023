//PILHA COM MÉTODOS

function testandoEstruturaPilha() {
    const Stack = {
        inserir: function (array, elemento) {
            return array.push(elemento);
        },
        retirar: function (array) {
            return array.pop();
        },
        verUltimoElemento: function (array) {
            return array.at(-1);
        },
        verificarSeEstaVazia: function (array) {
            return array.length === 0;
        },
        verTamanhoDaPilha: function (array) {
            return array.length;
        },
        limpar: function (array) {
            return (array.length = []);
        },
    };

    let arrayDeFrutas = [
        "banana",
        "uva",
        "maçã",
        "pêra",
        "laranja",
        "limão",
        "romã",
        "lichia",
        "goiaba",
        "jaca",
        "araticum",
        "cacau",
        "caqui",
    ];

    console.log(arrayDeFrutas);
    Stack.inserir(arrayDeFrutas, "abacate");
    console.log(arrayDeFrutas);
    Stack.retirar(arrayDeFrutas);
    console.log(arrayDeFrutas);
    console.log(Stack.verUltimoElemento(arrayDeFrutas));
    console.log(Stack.verTamanhoDaPilha(arrayDeFrutas));
    Stack.limpar(arrayDeFrutas);
    console.log(arrayDeFrutas);
    console.log(Stack.verificarSeEstaVazia(arrayDeFrutas));
}

export default testandoEstruturaPilha;
