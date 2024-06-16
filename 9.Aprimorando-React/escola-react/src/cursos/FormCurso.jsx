import { useState } from "react";
import { postCurso } from "../services/cursoApi";

export default function FormCurso ({
  curso,
  onClose
}) {

  const [errorMessage, setErrorMessage] = useState("");

  const salvarCurso = async(evento) => {
    evento.preventDefault();
    var dados = new FormData(evento.target);
    var cursoDados = {
      nome: dados.get("nome"),
      descricao: dados.get("descricao"),
      duracao: Number(dados.get("duracao")),
      nivel: Number(dados.get("nivel")),
      id: curso.id,
    }
    var result = await postCurso(cursoDados);
    if (result.status == 200) {
      onClose();
    } else {
      setErrorMessage("Houve um erro ao salvar o curso\n");
    }
  };

  return(
    <>
    <div className="modal">
      <form onSubmit={salvarCurso}>
          <div className="formulario">
              <div className="row">
                  <div className="input">
                      <label>Nome do curso:</label>
                      <input defaultValue={curso.nome} placeholder="Nome do curso" type="text" name="nome"/>
                      <span className="error"></span>
                  </div>
                  <div className="input">
                      <label>Duração do curso:</label>
                      <input defaultValue={curso.duracao} type="number" min="1" placeholder="Duração" name="duracao"/>
                      <span className="error"></span>
                  </div>
              </div>

              <label>Nível do curso:</label>
              <select name="nivel" defaultValue={curso.nivel}>
                  <option value="0">Iniciante</option>
                  <option value="1">Intermediário</option>
                  <option value="2">Avançado</option>
                  <option value="3">Expert</option>
              </select>
              <div className="input">
                  <label>Descrição do curso:</label>
                  <textarea defaultValue={curso.descricao} placeholder="Descrição do curso" name="descricao"></textarea>
                  <span className="error"></span>
              </div>
              <input name="index" type="hidden" value="-1"/>
              <p className="error">{errorMessage}</p>
          </div>
          <p>{errorMessage}</p>
          <button type="reset" onClick={onClose}>Fechar</button>
          <button type="submit">Novo Curso</button>
      </form>
    </div>
    </>
  )
}