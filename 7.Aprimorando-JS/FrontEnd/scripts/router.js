function checkRoute() {
  var tela = "/views/home.html";

  switch (window.location.pathname) {
    case "/tabela/cursos":
      tela = '/views/tables/tableCursos.html';
      selectNav('hi-cursos');
      break;

    case "/tabela/alunos":
      tela = '/views/tables/tableAlunos.html';
      selectNav('hi-alunos');
      break;

    case "/cadastro/aluno":
      tela = '/views/forms/formAlunos.html';
      selectNav('hi-novo-aluno');
      break;

    case "/cadastro/curso":
      tela = '/views/forms/formCursos.html';
      selectNav('hi-novo-curso');
      break;

    default:
      selectNav('hi-home');
      break;
  }

  fetch(tela)
    .then((r) => r.text())
    .then((html) => {
      document.getElementById('conteudo').innerHTML = html;

      if (window.location.pathname == "/tabela/alunos") {
        preencherTabelaAlunos();
      } else if (window.location.pathname == "/tabela/cursos") {
        preencherTabelaCursos();
      }
    });
}

function selectNav(hi) {
  document.querySelectorAll(".header-item.selected").forEach(item => {
    item.classList.remove("selected");
  });
  document.getElementById(`${hi}`).classList.add("selected");
}