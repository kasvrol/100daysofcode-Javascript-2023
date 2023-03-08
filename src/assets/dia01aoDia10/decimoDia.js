//PILHA COM MÉTODOS EXPLICADOS

function Stack() {
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
    console.log("array antes dos métodos de pilha:", arrayDeFrutas);

    //metodo push = inserir elemento na pilha
    arrayDeFrutas.push("abacate", "abacaxi", "açaí", "acerola", "amora");
    console.log("array após o métodos de empilhar:", arrayDeFrutas);

    //metodo pop = retirar um elemento na pilha
    arrayDeFrutas.pop();
    console.log("array após o métodos de retirar um elemento:", arrayDeFrutas);

    //metodo peek (at)= mostrar último elemento da pilha
    console.log("mostrar último elemento da pilha:", arrayDeFrutas.at(-1));

    //metodo isEmpty = verificar se a pilha está vazia
    console.log("a pilha está vazia?", arrayDeFrutas.length === 0);

    //metodo size = verificar o tamanho da pilha
    console.log("quantos elementos a pilha possuí?", arrayDeFrutas.length);

    //metodo clear = esvazia a pilha
    arrayDeFrutas = [];
    console.log(
        "array após o métodos desempilhar toda a pilha:",
        arrayDeFrutas
    );
    console.log("a pilha foi desfeita?", arrayDeFrutas.length === 0);
}

export default Stack;
