//prototype inheritance

const mamifero = {
    pelos: true
}

const humano = {
    bipede: true
}

function prototypeInheritance() {    
    try {
        humano.__proto__ = mamifero;   
         let objeto = {
			temPelos: humano.pelos,
			ehBipede: humano.bipede
		 }
        return objeto;
      } catch(err) {
        return err;
      }
    
}

export default prototypeInheritance()