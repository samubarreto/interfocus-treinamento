export default function ListaAlunos() {
  return (
    <>

      <section>
        <h1 className="section-title">Tabela de Alunos 🧑‍🎓</h1>
        <table id="table-alunos">
          <thead>
            <tr>
              <th className="special-column">Id</th>
              <th>Nome</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
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