export default function Home() {
    return (<>
        <h1>Hello, World!</h1>
        <h1>Hello, World 2!</h1>
        <h2>Cabeçalho secundário</h2>
        <h3>blas,vlajsdlkasdkj</h3>

        <form method="get" action="cursos.html">
            <input required name="texto" placeholder="Digite o nome" type="text" /><br />
            <input required min="1" name="numero" placeholder="Digite o número" type="number" /><br />
            <button type="submit">CLIQUE AQUI</button>
            <button type="reset">Botão 2</button>
            <button type="button">Botão 3</button>
        </form>

        <ul>
            <li>ITEM 1 </li>
            <li>ITEM 2 </li>
            <li>ITEM 3 </li>
            <li>ITEM 4 </li>
        </ul>
        <ol>
            <li>ITEM A </li>
            <li>ITEM B </li>
            <li>ITEM C </li>
            <li>ITEM D </li>
        </ol>

        <input type="text" /><br />
        <input type="number" /><br />
        <input type="date" /><br />
        <input type="email" /><br />
        <input type="color" /><br />
        <input type="file" /><br />
        <input type="password" /><br />

        <table border="1">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>TESTE</td>
                    <td>teste@email.com</td>
                </tr>
                <tr>
                    <td>2</td>
                    <td>RODRIGO</td>
                    <td>rodrigo@email.com</td>
                </tr>
            </tbody>
        </table>
        <br />
        <a className="crud" href="https://www.google.com" target="_blank">
            Clique aqui</a>

        <a className="crud" href="./cursos.html">
            CURSOS</a>
    </>)
}
