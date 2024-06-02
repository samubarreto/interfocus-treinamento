function checkRoute() {
  var tela = "/views/home.html"

  switch (window.location.pathname) {

    case "/tabela/cursos":
      tela = '/views/tables/tableCursos.html';
      break;

    case "/tabela/alunos":
      tela = '/views/tables/tableAlunos.html';
      break;

    case "/cadastro/aluno":
      tela = '/views/forms/formAlunos.html';
      break;

    case "/cadastro/curso":
      tela = '/views/forms/formCursos.html';
      break;

    default:
      break;
  }
  fetch(tela)
    .then(
      (r) => r.text()
    )
    .then((html) => {
      var conteudo = document.getElementById('conteudo');
      conteudo.innerHTML = html;
    })
}