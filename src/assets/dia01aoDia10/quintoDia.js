//Templates literais

function TemplatesLiterais() {
	const saudacao = "opa";
	console.log(`${saudacao}!`);
	/*log:
    opa! 
    */
}

/*export default TemplatesLiterais;
envio para o arquivo index*/

//Funções de seta (arrow functions)
const funcoesDeSeta = () => {
	console.log(`opa`);
	/*log:
    opa! 
    */
};

/*export default funcoesDeSeta;
envio para o arquivo index*/

//Valores default para parâmetros de funções
const valoresDefault = (x = 2, y = 3, z = 5) => {
	console.log(x + y + z);
	/*log:
    sem parâmetro: 10 
    com parâmetro: 30 
    */
};

/*export default valoresDefault;
envio para o arquivo index*/

const valoresDefaultComIF = (x, y, z) => {
	if (x === undefined) x = 2;
	if (y === undefined) y = 2;
	if (z === undefined) z = 2;
	console.log(x + y + z);
	/*log:
    6 
    */
};

/*export default valoresDefaultComIF;
envio para o arquivo index*/

function valoresDefaultComTernario(x, y, z) {
	//não pode usar arrow function aqui
	var x =
		arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
	var y =
		arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
	var z =
		arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1;
	console.log(x + y + z);
	/*log:
    3 
    */
}

/*export default valoresDefaultComTernario;
envio para o arquivo index*/

//Declarando os operadores de espalhamento e rest

function espalhamento() {
	let parametro = [3, 4, 5];
	function soma(x, y, z) {
		console.log(x + y + z);
		/*log:
        12
        */
	}
	//soma(...parametro);
	soma.apply(undefined, parametro);
}

/*export default espalhamento;
envio para o arquivo index*/

function rest() {
	let parametro = [3, 4, 5];
	function childRest(x, y, ...z) {
		console.log(x); //1
		console.log(y); //2
		console.log(z.length); //3, ou seja, z são todos os argumentos que não foram atribuidos aos primeiros parâmetros
		console.log(z); //[ 'hello', true, 7 ]
		console.log((x + y) * z.length);
		/*log:
        12
        */
	}
	childRest(1, 2, "hello", true, 7);
}

export default rest;
