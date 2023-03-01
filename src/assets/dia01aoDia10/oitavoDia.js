//ARRAYS MULTIMENSIONAIS

function MULTIMENSIONAIS() {
    let y = [1, 2, 3, 4];
    let x = [5, 6, 7, 8];
    let z = [9, 10, 11, 12];

    for (let i = 0; i < x.length; i++) {
        console.log("valor x: ", x[i]);
        for (let j = 0; j < y.length; j++) {
            console.log("valor y ", y[j]);
            let area = x[i] * y[j];
            console.log("valor x*y (área): ", area);
            for (let k = 0; k < z.length; k++) {
                console.log("valor z", z[k]);
                let volume = x[i] * y[j] * z[k];
                console.log("valor x*y*z (volume): ", volume);
            }
        }
    }
}

// cada array passado pelo for é uma dimensão adicionada

//export default MULTIMENSIONAIS;

//Concat
function arrayComConcat() {
    let y = [1, 2, 3, 4];
    let x = [5, 6, 7, 8];
    let z = [9, 10, 11, 12];

    let somaDeArrays = y.concat(x, z);
    console.log("somaDeArrays", somaDeArrays);
    //somaDeArrays [1,  2, 3, 4,  5, 6,  7, 8, 9, 10, 11, 12]

    //concatenou o array y ao x e após a concatenação resultante com z
}

//export default arrayComConcat;

//every
function arrayComEvery() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const numeroPar = (numero) => {
        console.log(numero);
        return numero % 2 === 0;
    };

    console.log(numeros.every(numeroPar));

    //devolverá o primero valor falso de um array conforme a função que o absorve
    //numeros => array
    //every => método que procura pelo primeiro valor falso
    //numeroPar => função que devolverá se tal número é par ou não
}

//export default arrayComEvery;

//some
function arrayComSome() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    const numeroPar = (numero) => {
        console.log(numero);
        return numero % 2 === 0;
    };

    console.log(numeros.some(numeroPar));

    //devolverá o primero valor true de um array conforme a função que o absorve
    //numeros => array
    //some=> método que procura pelo primeiro valor verdadeiro
    //numeroPar => função que devolverá se tal número é par ou não
}

//export default arrayComSome;

//forEach
function arrayComforEach() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    numeros.forEach((numero) => console.log(numero % 2 === 0));

    //devolverá os resultados de cada elemento de um array de acordo com a função iterada ao método
    //seria como filtrar cada elemento por um for e procurar o resultado de cada um
}

//export default arrayComforEach;

//map
function arrayComMap() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numerosPares = numeros.map((numero) => numero % 2 === 0);

    console.log(numerosPares);

    //devolverá os resultados do array de acordo com a função iterada ao método
}

//export default arrayComMap;

//filter
function arrayComFilter() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let numerosPares = numeros.filter((numero) => numero % 2 === 0);

    console.log(numerosPares);

    //devolverá os resultados filtrados do array de acordo com a função iterada ao método
}

//export default arrayComFilter;

//reduce
function arrayComReduce() {
    let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let acumulador = numeros.reduce(
        (numeroAnterior, numeroPresente) => numeroAnterior + numeroPresente
    );
    console.log(acumulador);
    //45

    let palavras = ["rato ", "roeu ", "a roupa ", "do rei."];
    let frase = palavras.reduce(
        (palavraAnterior, palavraPresente) => palavraAnterior + palavraPresente
    );
    console.log(frase);
    //rato roeu a roupa do rei.

    //devolverá a soma de todos os elementos dentro de um array
}

export default arrayComReduce;
