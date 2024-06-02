function checkRoute() {
  var tela = "/home.html"

  switch (window.location.pathname) {

    case "/tabela/cursos":
      tela = '/tables/tableCursos.html';
      break;

    case "/tabela/alunos":
      tela = '/tables/tableAlunos.html';
      break;

    case "/cadastro/aluno":
      tela = '/forms/formAlunos.html';
      break;

    case "/cadastro/curso":
      tela = '/forms/formCursos.html';
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