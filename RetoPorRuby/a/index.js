
function modificar() {
	//noticia = titulo.value;
	var noticia = document.getElementById("noticia").value;
	var titulo = document.getElementById("titulo");
	var modificado;
	modificado = noticia.replace(/a/gi,'&#9670');
	modificado = modificado.replace(/e/gi,'&#9824');
	modificado = modificado.replace(/i/gi,'&#9829');
	modificado = modificado.replace(/o/gi,'&#128513');
	modificado = modificado.replace(/u/gi,'&#128577');

	titulo.innerHTML = modificado;
}