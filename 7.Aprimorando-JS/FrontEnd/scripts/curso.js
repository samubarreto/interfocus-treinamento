function addCurso(evento) {
	evento.preventDefault();

	var dados = new FormData(evento.target);
	var tabela = document.querySelector("tbody");
	var index = Number(dados.get("index"));

	if (index > -1) {
		var nodeTr = tabela.children[index];
		var [nome, duracao, nivel] = nodeTr.children;
		nome.innerHTML = dados.get("nome");
		duracao.innerHTML = dados.get("duracao");
		nivel.innerHTML = dados.get("nivel");
	} else {
		var linha = document.createElement("tr");
		linha.innerHTML = `
					<td>${dados.get("nome")}</td>
					<td>${dados.get("descricao")}</td>
					<td>${dados.get("duracao")}</td>
					<td>${dados.get("nivel")}</td>
			`;
		tabela.appendChild(linha);
	}

	evento.target.reset();
	evento.target.index.value = -1;
}

function selecionar(evento) {
	var target = evento.target; // nao entendi

	var selected = target.closest("tbody").querySelector("tr.selecionado");
	selected?.classList.remove("selecionado"); // remove a classe selecionado de outro tr caso tenha

	var nodeTR = target.closest("tr"); // pega o tr mais próximo da td clicada
	nodeTR.classList.add("selecionado"); // adiciona classe selecionado a tr clicada, bizarro

	var index = [...target.closest("tbody").querySelectorAll("tr")].indexOf(nodeTR); // pega o index do tr selecionado sei lá como, bizarro

	var [nome, descricao, duracao, nivel] = nodeTR.querySelectorAll("td");

	var form = document.querySelector("form");
	var campoNome = form.querySelector("input[name=nome]");
	var campoDescricao = form.querySelector("input[name=descricao]");
	var campoDuracao = form.querySelector("input[name=duracao]");
	var campoNivel = form.querySelector("select[name=nivel]");
	var campoIndice = form.querySelector("input[name=index]");

	campoNome.value = nome.innerText;
	campoDescricao.value = descricao.innerText;
	campoDuracao.value = duracao.innerText;
	campoNivel.value = nivel.innerText;
	campoIndice.value = index;

	console.log(index, nodeTR, selected); // insano
}
