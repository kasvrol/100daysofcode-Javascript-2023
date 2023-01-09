//Programação orientada a objetos em javascript

/*formas de declarar objetos*/
var obj = new Object();
var obj2 = {};

obj2 = {
	name: /*chave do objeto */ {
		first: /*chave do objeto */ "Gandalf" /**valor do objeto*/,
		last: /*chave do objeto */ "the Gray" /**valor do objeto*/,
		/**valor do objeto*/
	},
	adress: /*chave do objeto */ "Middle Earth" /**valor do objeto*/,
};

/*envio para o arquivo index*/
function objetos() {
	return {
		obj: obj,
		obj2: obj2,
	};
}

/*export default objetos();
envio para o arquivo index*/

/**
 *objeto é instância de uma classe
 *uma classe define as características do objeto
 */

/*modos de declarar classes: */
function Book(titulo, paginas, isbn) {
	this.titulo = titulo;
	this.paginas = paginas;
	this.isbn = isbn;
}

var book = new Book("contos extraordinários", "300", "00000");

/*export default book;
envio para o arquivo index

log:
Book {
  titulo: 'contos extraordinários',
  paginas: '300',
  isbn: '00000'
} */

/**atualizar propriedades:*/
book.titulo = "alice no país das maravilhas";
/*export default book;
envio para o arquivo index

log:
Book {
    titulo: 'alice no país das maravilhas',
    paginas: '300',
    isbn: '00000'
  } */

/**funções/métodos:*/
Book.prototype.printTitle = function () {
	//console.log(this.titulo);
};

/*export default book.printTitle(); 
envio para o arquivo index

log:
alice no país das maravilhas
 */
export default book.printTitle();
