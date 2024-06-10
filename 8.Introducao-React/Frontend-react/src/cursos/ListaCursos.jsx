export default function ListaCursos() {
  return (
    <>

      <section>
        <h1 className="section-title">Tabela de Cursos 🎓</h1>
        <table id="table-cursos">
          <thead>
            <tr>
              <th className="special-column">Id</th>
              <th>Nome</th>
              <th>Descrição</th>
              <th>Duração</th>
              <th>Nível</th>
              <th className="special-column">Editar</th>
              <th className="special-column">Apagar</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </section>

    </>
  )
}