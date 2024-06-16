import { useState, useEffect } from "react"
import { getByID, listarCursos } from "../services/cursoApi";
import FormCurso from "./FormCurso";

export default function CursosList () {

  const NIVEIS = {
    "0":"Iniciante",
    "1":"Intemediário",
    "2":"Avançado",
    "3":"Expert"
  }

  const [cursos, setLista] = useState([]);
  const [curso, setCurso] = useState();
  const [busca, setBusca] = useState("");

    useEffect(() => {
        listarCursos(busca)
            .then(resposta => {
                if (resposta.status == 200) {
                    resposta.json()
                        .then(cursos => {
                            setLista(cursos);
                        })
                }
            });
    }, [busca]);

    const getCurso = async (id) => {
      var result = await getByID(id);
      if (result.status == 200) {
        var dados = await result.json();
        setCurso(dados);
      }
    }

  return(<>

  <h1>Cursos</h1>

  <input type="search" value={busca} onChange={(e) => setBusca(e.target.value)}></input>
  <button type="button" onClick={() => setCurso({})}>Novo Curso</button>

  <table id="table-cursos">
        <thead>
            <tr>
                <th>ID</th>
                <th>Nome</th>
                <th>Descrição</th>
                <th>Nível</th>
                <th>Duração</th>
            </tr>
        </thead>
        <tbody>
          {cursos.map(curso => 
              <tr onClick={() => {getCurso(curso.id)}} key={curso.id}>
                <td>{curso.id}</td>
                <td>{curso.nome}</td>
                <td>{curso.descricao}</td>
                <td>{NIVEIS[curso.nivel]}</td>
                <td>{curso.duracao}</td>
              </tr>
          )}
        </tbody>
    </table>
    {curso && <FormCurso curso={curso} onClose={() => setCurso(undefined)}></FormCurso>}
  </>)
}