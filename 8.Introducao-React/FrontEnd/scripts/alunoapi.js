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
            erroMessage = '';
            erroMessage.innerHTML = errorMessage;
          })
        })
      }
    })
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
function preencherTabelaAlunos() {
  var tabela = document.getElementById("table-alunos");
  listarAlunos().then((resultado) => {
    if (resultado.status == 200) {
      resultado.json().then(alunos => {
        var tbody = tabela.querySelector("tbody");
        alunos.forEach(aluno => {
          var data = new Date(aluno.dataNascimento);
          console.log(data);
          console.log(`${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`);
          tbody.innerHTML += `
            <tr>
              <td class="special-column">${aluno.codigo}</td>
              <td>${aluno.nome}</td>
              <td>${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}</td>
              <td>${aluno.email}</td>
              <td class="special-column item" onclick="editarAluno()">
                <svg xmlns="http://www.w3.org/2000/svg" class="table-icon" viewBox="0 0 16 16">
                  <path d="m13.498.795.149-.149a1.207 1.207 0 1 1 1.707 1.708l-.149.148a1.5.5 0 0 1-.059 2.059L4.854 14.854a.5.5 0 0 1-.233.131l-4 1a.5.5 0 0 1-.606-.606l1-4a.5.5 0 0 1 .131-.232l9.642-9.642a.5.5 0 0 0-.642.056L6.854 4.854a.5.5 0 1 1-.708-.708L9.44.854A1.5 1.5 0 0 1 11.5.796a1.5 1.5 0 0 1 1.998-.001" />
                </svg>
              </td>
              <td class="special-column item" onclick="apagarAluno()">
                <svg xmlns="http://www.w3.org/2000/svg" class="table-icon" viewBox="0 0 16 16">
                  <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5M8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5m3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0" />
                </svg>
              </td>
            </tr>
          `;
        });
      });
    }
  });
}

