const URL_API = "https://localhost:7236/";

function listarAlunos() {
  // promise
  var response = fetch(URL_API + "api/aluno");
  return response;
};

function editarAluno() {
  // abre modal e chama put aluno
}

function putAluno(aluno) {
  // promise e faz o put
}

function apagarAluno() {
  // abre modal e chama delete aluno
}

function deleteAluno(aluno) {
  // chama a api
}

function postAluno(aluno) {
  // promise
  var request = {
    method: aluno.id ? 'PUT' : 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(aluno)
  }
  // console.log(request)
  var response = fetch(URL_API + "api/aluno", request)
  return response;
}

// await aqui, espera a promise ser resolvida
function preencherTabela() {
  var tabela = document.getElementById("table-alunos");
  listarAlunos().then((resultado) => {
    if (resultado.status == 200) {
      resultado.json().then(
        alunos => { 
          var tbody = tabela.querySelector("tbody");
          alunos.forEach(aluno => {
            var data = new Date(aluno.dataNascimento);
            console.log(data)
            console.log(`${data.getDate()}/${data.getMonth()}/${data.getYear()}`);
            tbody.innerHTML += `<tr>
              <td style="min-width: 65px; max-width: 65px;">${aluno.codigo}</td>
              <td>${aluno.nome}</td>
					    <td>${data.getDate()}/${data.getMonth()}/${data.getYear()}</td>
					    <td>${aluno.email}</td>
              <td style="min-width: 65px; max-width: 65px; text-align: center;" onclick="editarAluno()">EDITAR</td>
              <td style="min-width: 65px; max-width: 65px; text-align: center;" onclick="apagarAluno()">APAGAR</td>
            </tr>
            `;
          })
        }
      )
    }
  })
}

function criarAluno(event) {
  event.preventDefault();
  var dados = new FormData(event.target);
  var objAluno = {
    Nome: dados.get("nome"),
    Nivel: Number(dados.get("nivel")),
    Duracao: Number(dados.get("duracao")),
    Descricao: dados.get("descricao")
  }

  // console.log(objAluno)

  postAluno(objAluno)
  .then(resultado => {
    if (resultado.status == 200) {
      var tabela = document.getElementById("table-alunos").querySelector("tbody");
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