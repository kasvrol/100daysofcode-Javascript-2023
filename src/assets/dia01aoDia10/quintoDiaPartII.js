//Propriedades melhoradas de objetos

function propriedadesMelhoradasDeObjetos() {
	/**array destructuring*/
	let [x, y] = [3, 4]; // iniciando de uma só vez
	console.log(x, y);
	/*log:
        3 4
        */

	/**swap */
	[x, y] = [y, x]; // sem necessidade de uma variavel que guardaria o valor temporariamente
	console.log(x, y);
	/*log:
        4 3
        */

	/*property shorthand */

	let [frutaA, frutaB] = ["banana", "maçã"];
	let frutas = { frutaA, frutaB };
	console.log(frutas);
	/*log:
        { frutaA: 'banana', frutaB: 'maçã' }
        */

	/*shorthand method names*/
	const opa = {
		saudacao: "opa!",
		printSaudacao() {
			console.log(this.saudacao);
		},
	};

	return opa.printSaudacao();
	/*log:
        opa!
        */
}

/*export default propriedadesMelhoradasDeObjetos;
envio para o arquivo index*/

//Programação orientada a objetos com classes

function orientacaoAObjetosComClasse() {
	class Cachorro {
		constructor(nome, pelagem, tamanho) {
			this.nome = nome;
			this.pelagem = pelagem;
			this.tamanho = tamanho;
		}
		printNome() {
			console.log(this.nome);
		}
	}

	let cao = new Cachorro("tobias", "cinza", "porte médio");
	console.log(cao);
	/*log:
        Cachorro { nome: 'tobias', pelagem: 'cinza', tamanho: 'porte médio' }
        */
}

/*export default orientacaoAObjetosComClasse;
envio para o arquivo index*/

//Herança

function Heranca() {
	class Bicho {
		constructor(animal, domestico, barulho) {
			this.animal = animal;
			this.domestico = domestico;
			this.barulho = barulho;
		}
		printNome() {
			console.log(this.animal);
		}
	}

	class Cachorro extends Bicho {
		constructor(animal, domestico, barulho, pelagem, tamanho) {
			super(animal, domestico, barulho);
			this.pelagem = pelagem;
			this.tamanho = tamanho;
		}
		printPelagem() {
			console.log(this.pelagem);
		}
	}

	let animal = new Cachorro(
		"cachorro",
		true,
		"au au",
		"cinza",
		"porte médio"
	);
	console.log(animal);
	/*log:
        Cachorro {
  animal: 'cachorro',
  domestico: true,
  barulho: 'au au',
  pelagem: 'cinza',
  tamanho: 'porte médio'
}
        */
}

export default Heranca;
