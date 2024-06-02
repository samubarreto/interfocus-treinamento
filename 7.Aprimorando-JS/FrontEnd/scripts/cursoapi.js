const URL_API = "https://localhost:7236/";

function listarCursos() {
  // promise
  var response = fetch(URL_API + "api/curso");
  return response;
};

function postCurso(curso) {
  // promise
  var request = {
    method: curso.id ? 'PUT' : 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(curso)
  }
  // console.log(request)
  var response = fetch(URL_API + "api/curso", request)
  return response;
}

// await aqui, espera a promise ser resolvida
function preencherTabela() {
  var tabela = document.getElementById("table-cursos");
  listarCursos().then((resultado) => {
    if (resultado.status == 200) {
      resultado.json().then(
        cursos => { 
          var tbody = tabela.querySelector("tbody");
          tbody.style = "text-wrap: wrap;";
          cursos.forEach(curso => {
            tbody.innerHTML += `<tr>
              <td>${curso.nome}</td>
              <td>${curso.descricao}</td>
					    <td>${curso.duracao}</td>
					    <td>${curso.nivel}</td>
            </tr>
            `;
          })
        }
      )
    }
  })
}

function criarCurso(event) {
  event.preventDefault();
  var dados = new FormData(event.target);
  var objCurso = {
    Nome: dados.get("nome"),
    Nivel: Number(dados.get("nivel")),
    Duracao: Number(dados.get("duracao")),
    Descricao: dados.get("descricao")
  }

  // console.log(objCurso)

  postCurso(objCurso)
  .then(resultado => {
    if (resultado.status == 200) {
      var tabela = document.getElementById("table-cursos").querySelector("tbody");
      tabela.innerHTML = "";
      preencherTabela();
    } else if (resultado.status == 422) {
      var form = document.querySelector("form");
      resultado.json().then(erros => {
        erros.forEach(erro => {
          const { memberNames, errorMessage } = erro;
          const [campo] = memberNames;
          console.log(campo)
          const input = form.querySelector(`[name=${campo.toLowerCase()}]`);
          console.log(input)
          const erroMessage = input.parentNode.querySelector(".error");
          erroMessage.innerHTML = errorMessage;
        })
      })
    }
  })
}