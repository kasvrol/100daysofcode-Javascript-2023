//Escopo de variáveis com let e const

let movie = "Lord of the Rings";

function starWarsFan() {
	const movie = "Star Wars"; //{2}
	return movie;
}

function mavelFan() {
	movie = "vingadores"; //{3}
	return movie;
}

function blizzardFan() {
	const isFan = true; //{4}
	let frase = "oie";
	console.log("antes do if " + frase);
	if (isFan) {
		let frase = "texto inicial"; //{5}
		frase = "opa"; //{6}
		console.log("dentro do if " + frase);
	}
	frase = "olá"; //{6}
	console.log("depois do if " + frase);
}

function retorneFuncoes() {
	// console.log(movie);
	// console.log(starWarsFan());
	// console.log(mavelFan());
	// console.log(movie);
	// blizzardFan();
	/**Lord of the Rings
	 *Star Wars
	 *vingadores
	 *vingadores
	 *antes do if oie
	 *dentro do if opa
	 *depois do if olá
	 */
}

export default retorneFuncoes();
