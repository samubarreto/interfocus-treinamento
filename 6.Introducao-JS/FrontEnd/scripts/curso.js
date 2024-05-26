function addCurso(evento) {
	var dados = new FormData(evento.target);

	var linha = `
	<tr>
		<td>${dados.get("nome")}</td>
		<td>${dados.get("duracao")}</td>
		<td>${dados.get("nivel")}</td>
	</tr>
	`;

	var tabela = document.getElementsByTagName("table")[0];
	tabela.innerHTML += linha;

	var indice = Number(dados.get("index"));
	if (indice > -1) {
		var nodeTr = document.querySelector("tbody").children.item(indice);

		var [nome, duracao, nivel] = nodeTr.children;
		nome.innerHTML = dados.get("nome");
		duracao.innerHTML = dados.get("duracao");
		nivel.innerHTML = dados.get("nivel");
		evento.target.reset();
	}

	evento.preventDefault();

}

function selecionar(evento) {
	// var { target, source } = evento;

	var { target } = evento;
	var nodeTR = target.closest("tr");

	var index = [...target.closest("tbody").querySelectorAll("tr")].indexOf(nodeTR); // <- zica
	console.log(index);

	var [nome, duracao, nivel] = nodeTR.querySelectorAll("td");

	var form = document.querySelector("form");

	var campoNome = form.querySelector("input[name=nome]");
	var campoDuracao = form.querySelector("input[name=duracao]");
	var campoNivel = form.querySelector("input[name=nivel]");
	var campoIndice = form.querySelector("input[name=index]");

	campoNome.value = nome.innerText;
	campoDuracao.value = duracao.innerText;
	campoNivel.value = nivel.innerText;
}

// FAZER: pegar registro selecionado, alterar indice dele e limpar campos de input