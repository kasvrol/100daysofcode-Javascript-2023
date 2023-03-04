// metodo From
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
function metodoFrom() {
    //cria um novo array a partir de um existente
    let numeros = Array.from(numbers);

    for (const i of numbers) {
        console.log(i);
    }
    console.log("------------");
    for (const iterator of numeros) {
        console.log(iterator);
    }

    /*  1
    2
    3
    4
    5
    6
    7
    8
    9
    0
    ------------
    1
    2
    3
    4
    5
    6
    7
    8
    9
    0*/

    /**
     * pode evocar métodos da part I sem necessáriamente evocar eles. Exemplo: even
     */

    let even = Array.from(numbers, (x) => x % 2 === 0);
    console.log(even);
    /*[false, true,  false, true,  false, true, false, true,  false, true] */
}

//export default metodoFrom;

// metodo array.of

function arrayOF() {
    //cria um novo array a partir dos elementos postos como argumentos
    let numeros = Array.of(1, 2, 3, 4, 5, 6, 7, 8, 9, 0);
    console.log(numeros);
    /**[1, 2, 3, 4, 5, 6, 7, 8, 9, 0] */

    //também pode ser criada uma cópia de array passado como argumento
    let frutas = ["banana", "morango", "laranja"];
    let copiaFrutas = Array.of(...frutas);
    console.log(copiaFrutas);
    /**[ 'banana', 'morango', 'laranja' ] */
}

//export default arrayOF;

// metodo fill

function arrayFill() {
    //pode criar um array o preenchendo com um elemento em especifico

    let exemplo01 = Array(8).fill(16);
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:71 ~ arrayFill ~ exemplo01:",
        exemplo01
    );
    /**🚀 ~ file: nonoDiaPartII.js:71 ~ arrayFill ~ exemplo01: [
    16, 16, 16, 16,
    16, 16, 16, 16
    ] */

    //pode modificar os valores de um array pra um valor especifico
    let exemplo02 = exemplo01.fill(20);
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:83 ~ arrayFill ~ exemplo02:",
        exemplo02
    );
    /**🚀 ~ file: nonoDiaPartII.js:83 ~ arrayFill ~ exemplo02: [
    20, 20, 20, 20,
    20, 20, 20, 20
    ] */

    //pode modificar os valores de um array pra um valor especifico em posições especificas
    let exemplo03 = exemplo01.fill("01", 2, 6);
    //primeiro numero o valor a passar, o segundo é o indice inicial, o terceiro é o indice final
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:95 ~ arrayFill ~ exemplo03:",
        exemplo03
    );

    /**🚀 ~ file: nonoDiaPartII.js:95 ~ arrayFill ~ exemplo03: [
    20,   20,   '01',
    '01', '01', '01',
    20,   20
    ] */
}

//export default arrayFill;

// metodo copyWithin

function copyWithin() {
    //copia valores do array a partir de um indice especifico e coloca na posição do indice especificado
    let copy = numbers.copyWithin(5, 8);
    console.log("🚀 ~ file: nonoDiaPartII.js:113 ~ copyWithin ~ copy:", copy);
    /**🚀 ~ file: nonoDiaPartII.js:113 ~ copyWithin ~ copy: [
    1, 2, 3, 4, 5,
    9, 0, 8, 9, 0
    ] */
    //copyWithin(indice A Colocar Elementos Copiados, indice A Copiar Elementos)
    let copy02 = numbers.copyWithin(3, 5, 7);
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:120 ~ copyWithin ~ copy02:",
        copy02
    );
    /**🚀 ~ file: nonoDiaPartII.js:120 ~ copyWithin ~ copy02: [
    1, 2, 3, 9, 0,
    9, 0, 8, 9, 0
    ] */
    //copyWithin(indice A Colocar Elementos Copiados, indice A Começar A Copiar Elementos, indice A Terminar A Copiar Elementos)
}

//export default copyWithin;

// ordenando elementos

function oredenandoElementos() {
    let numbers02 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
    numbers02.reverse();
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:138 ~ oredenandoElementos ~ numbers02:",
        numbers02
    );
    //inverte a ordem do array
    /**🚀 ~ file: nonoDiaPartII.js:138 ~ oredenandoElementos ~ numbers02: [
    15, 14, 13, 12, 11, 10, 9,  8,  7,  6,  5,  4, 3,  2,  1,  0] */
    numbers02.sort();
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:146 ~ oredenandoElementos ~ numbers02:",
        numbers02
    );
    //ordena o array mas considerando todos os elementos como string
    /** ~ file: nonoDiaPartII.js:146 ~ oredenandoElementos ~ numbers02: [0,  1, 10, 11, 12, 13, 14, 15,  2,  3,  4,  5, 6,  7,  8,  9] */
}

//export default oredenandoElementos;

// ordenação personalizada
function oredenacaoPersonalizada() {
    let people = [
        { name: "carlos", age: 25 },
        { name: "gilberto", age: 28 },
        { name: "ana", age: 19 },
        { name: "robson", age: 38 },
    ];

    const compareperson = (person01, person02) => {
        if (person01.age < person02.age) {
            return -1;
        }
        if (person01.age > person02.age) {
            return 1;
        }
        return 0;
    };

    console.log(people.sort(compareperson));

    /**
     * para seguir esse método deve-se usar uma função como argumeto para organizar os elementos do array
     * aqui foi usado a função compareperson, a qual compara duas pessoas pela idade
     */
}

//export default oredenacaoPersonalizada;

// ordenando String
function oredenandoString() {
    let people = [
        "carlos",
        "gilberto",
        "ana",
        "robson",
        "Carlos",
        "Gilberto",
        "Ana",
        "Robson",
    ];
    console.log(
        "🚀 ~ file: nonoDiaPartII.js:197 ~ oredenandoString ~ people:",
        people.sort()
    );

    /**🚀 ~ file: nonoDiaPartII.js:197 ~ oredenandoString ~ people: [
    'Ana',      'Carlos',
    'Gilberto', 'Robson',
    'ana',      'carlos',
    'gilberto', 'robson'
    ] */

    /* usa sort que ordena os elementos como strings comparando-os com a ascII
     */
}

export default oredenandoString;
