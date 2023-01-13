//ARRAYS
//Inserindo elemento na primeira posição

function elementoNaPrimeiraPosicao() {
	let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros);
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        */

	Array.prototype.insertPrimeiraPosicao = function (value) {
		for (let index = this.length; index >= 0; index--) {
			this[index] = this[index - 1];
		}
		this[0] = value;
	};

	numeros.insertPrimeiraPosicao(-1);

	console.log(numeros);
	/*log:
        [  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        */
}

function elementoNaPrimeiraPosicaoComUnshift() {
	let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros, "oi");
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  oi
        */

	numeros.unshift(-1);

	console.log(numeros);
	/*log:
        [  -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        */
}

//Removendo elemento da ultima posição com pop

function RemovendoElementoComPop() {
	let numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros, "opa");
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  opa
        */

	numeros.pop();

	console.log(numeros);
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8]
        */
}

//Removendo elemento da primeira posição

function RemovendoElementoDaPrimeiraPosicao() {
	let numeros = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros, "RemovendoElementoDaPrimeiraPosicao");
	/*log:
        [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  RemovendoElementoDaPrimeiraPosicao
        */

	for (let index = 0; index < numeros.length; index++) {
		numeros[index] = numeros[index + 1];
	}

	console.log(numeros);
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, undefined ]
        */
}

function RemovendoElementoDaPrimeiraPosicaoComShift() {
	let numeros = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros, "RemovendoElementoDaPrimeiraPosicaoComShift");
	/*log:
        [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  RemovendoElementoDaPrimeiraPosicao
        */

	numeros.shift();

	console.log(numeros);
	/*log:
        [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
        */
}

//Adicionando e removendo elementos de uma posição específica

function AdicionandoERemovendoElementos() {
	let numeros = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
	console.log(numeros, "AdicionandoERemovendoElementos");
	/*log:
        [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]  AdicionandoERemovendoElementos
        */

	numeros.splice(
		3,
		5
	); /**splice(indice, quantidade de elementos a remover) */

	console.log(numeros);
	/*log:
        [ -1, 0, 1, 7, 8, 9 ]
        */

	numeros.splice(
		3,
		0,
		"a",
		"b",
		"c"
	); /**splice(indice, quantidade de elementos a remover, ...elementos para acrescentar a partir do indice) */

	console.log(numeros);
	/*log:
        [ -1, 0, 1, 'a', 'b', 'c', 7, 8, 9 ]
        */
}

export default AdicionandoERemovendoElementos;
