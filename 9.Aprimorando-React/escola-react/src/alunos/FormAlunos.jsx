import { useNavigation, useRouter } from "simple-react-routing"
import { getByCodigo, postAluno } from "../services/alunoApi";
import { useEffect, useState, useReducer } from "react";

export default function FormAluno() {
    const { pathParams } = useRouter();

    const codigo = pathParams["codigo"];

    const { navigateTo } = useNavigation();

    const [errorMessage, setErrorMessage] = useState("");

    const [email, setEmail] = useReducer((old, value) => {
        return value.toLowerCase().replace(" ", "");
    }, "");

    const salvarAluno = async (evento) => {
        evento.preventDefault();
        var dados = new FormData(evento.target);

        var aluno = {
            codigo: codigo,
            nome: dados.get("nome"),
            email: dados.get("email"),
            dataNascimento: dados.get("dataNascimento")
        };

        var result = await postAluno(aluno);

        if (result.status == 200) {
            navigateTo(null, "/alunos")
        } else {
            var erro = await result.json();
            setErrorMessage("Erro ao criar aluno: \n" + JSON.stringify(erro, null, '\t'));
        }
    }

    const [aluno, setAluno] = useState();

    useEffect(() => {
        if (codigo) {
            getByCodigo(codigo)
            .then(e => e.json())
            .then(result => setAluno(result))
        } else {
            setAluno({})
        }
    }, []);

    return aluno && (<>
        <h1>{codigo ? "Editar" : "Cadastrar"} aluno</h1>
        <form onSubmit={salvarAluno}>
            <div className="formulario">
                <div className="row">
                    <div className="input">
                        <label>Nome:</label>
                        <input defaultValue={aluno.nome} placeholder="Nome do aluno" type="text" name="nome" />
                        <span className="error"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="input">
                        <label>Data nascimento:</label>
                        <input defaultValue={aluno.dataNascimento?.substring(0, 10)} placeholder="Data de nascimento" type="date" name="dataNascimento" />
                        <span className="error"></span>
                    </div>
                </div>
                <div className="row">
                    <div className="input">
                        <label>Email:</label>
                        <input onChange={(e) => setEmail(e.target.value)} value={email} placeholder="Email" type="email" name="email" />
                        <span className="error"></span>
                    </div>
                </div>
            </div>
            <button type="submit">Salvar</button>
        </form>
        <p className="error">{errorMessage}</p>
    </>
    )
}