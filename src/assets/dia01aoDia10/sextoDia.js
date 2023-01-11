//Trabalhando com getters e setters

function GettersESetters() {
	class Cachorro {
		/**_ serve para transparecer uma variavel privada, porém não a torna privada, como vê a mudança de valor mais abaixo */
		constructor(nome) {
			this._nome = nome;
		}

		get nome() {
			return this._nome;
		}

		set nome(valor) {
			this._nome = nome;
		}
	}

	let cao = new Cachorro("Pantera");
	console.log(cao.nome);
	/*log:
        Pantera
        */

	//cao.nome = "Pitchula";
	console.log(cao.nome);
	/*log:
        this._nome = nome;
                                     ^
        */

	cao._nome = "Pitchula";
	console.log(cao.nome);
	/*log:
        Pitchula
        */
}
/*export default GettersESetters;
envio para o arquivo index*/

//Operador de expoencial

function OperadorDeExpoencial() {
	const repetindoVariavel = 16 * 16;
	console.log(repetindoVariavel);
	/*log:
        256
        */

	const usandoOperador = 14 ** 2;
	console.log(usandoOperador);
	/*log:
        196
        */

	const usandoOperadorMath = Math.pow(12, 2);
	console.log(usandoOperadorMath);
	/*log:
        144
        */
}

export default OperadorDeExpoencial;

function OperadorDeExpoencial() {
	const repetindoVariavel = 16 * 16;
	console.log(repetindoVariavel);
	/*log:
        256
        */

	const usandoOperador = 14 ** 2;
	console.log(usandoOperador);
	/*log:
        196
        */

	const usandoOperadorMath = Math.pow(12, 2);
	console.log(usandoOperadorMath);
	/*log:
        144
        */
}

export default OperadorDeExpoencial;
