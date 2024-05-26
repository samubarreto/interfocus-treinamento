let num = 1.5;
let txt = "blablabla";
let bool = true;
let lista = [1, 2, 3];
let obj = {
  id: 1,
  nome: "samu",
  idade: 20,
};

// if (obj.idade >= 18) {
//   console.log("boa");
// } else {
//   console.log("not boa");
// }

// for (let c2 = 0; c2 < obj.nome.length; c2++) {
//   console.log(obj.nome[c2]);
// };

function fazAlgo() {
  console.log("Você clicou no botão que não faz nada");
};

function enviarDados(evento) {
  let dados = new FormData(evento.target);
  let texto = `Nome: ${dados.get("nome")}\nIdade: ${dados.get("idade")}\nEmail: ${dados.get("email")}\nSenha: ${dados.get("senha")}`;
  console.log(texto);

  var resposta = confirm(texto);

  if (!resposta) {
    evento.preventDefault();
  }
}