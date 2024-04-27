using Models.MetodosPOO;

var ListaAlunos = new List<Aluno>();

/*
 * Objeto: Instâscia de um tipo por referência
 * Abstração: Ideia de abstrair algo do mundo real numa classe: (CRIAR CLASSES)
 * * Aluno: Nome, DataNascimento, RA;
 * 
 * Encapsulamento: (DEFINIR PROPRIEDADES DAS CLASSES DE FORMA CONTROLADA)
 * * Gets e sets, não sei o que fazem, mas posso usar. Set é chamado sempre que atribuído um valor a uma propriedade e get é chamado sempre que lido um valor de uma propriedade
 * * chama encapsulamento pois você não vê oq o get set fazem, mas fazem
 * 
 * Herança: ()
 * * Capacidade de usar as propriedades e métodos de uma classe dentro de outra classe
 * * EX: public class Gerente: Funcionario
 * * EX: /\ Gerente herda de Funcionário.. Gerente também é do tipo funcionário
 * 
 * Polimorfismo: ()
 * * 
 * 
 * Decorator = Atributo
 */

var Aluno1 = new Aluno // new chama o construtor
{
    NomeAluno = "Samu",
    DataNascimento = new DateTime(2004, 04, 11),
    RA = 638217
    //Aluno1.NomeAluno = "Samu";
    //Aluno1.DataNascimento = new DateTime(2004, 04, 11);
    //Aluno1.RA = 638217;
};

// usando setsssss
Aluno1.EmailAluno = "samu.barreto2004@gmail.com";

var Aluno2 = new Aluno();

Aluno Aluno3 = null;
Aluno3 = new Bolsista();

var Bolsista1 = new Bolsista
{
    NomeAluno = "SamuBolsa",
    DataNascimento = new DateTime(2004, 04, 11),
    RA = 638217,
    Desconto = 1
};

// usando getsssss
Console.WriteLine("Aluno 1: {0}, {1}, {2}, {3}", Aluno1.NomeAluno, Aluno1.DataNascimento.ToString("dd/MM/yyyy"), Aluno1.RA, Aluno1.EmailAluno);
Console.WriteLine("Aluno 2: {0}, {1}, {2}, {3}", Aluno2.NomeAluno, Aluno2.DataNascimento.ToString("dd/MM/yyyy"), Aluno2.RA, Aluno2.EmailAluno);
Console.WriteLine("Aluno 3: {0}, {1}, {2}, {3}", Aluno3?.NomeAluno, Aluno3?.DataNascimento.ToString("dd/MM/yyyy"), Aluno3?.RA, Aluno3?.EmailAluno);
Console.WriteLine("Aluno 4 (Bolsista): {0}, {1}, {2}, {3}, {4}", Bolsista1.NomeAluno, Bolsista1.DataNascimento.ToString("dd/MM/yyyy"), Bolsista1.RA, Bolsista1.EmailAluno, Bolsista1.Desconto);

string Input(string message)
{
    Console.WriteLine(message);
    return Console.ReadLine();
}

//ListaAlunos.Add(Aluno1);
//ListaAlunos.Add(Aluno2);
//ListaAlunos.Add(Aluno3);

while (true)
{
    Console.Clear();
    Console.WriteLine(">Escolha uma das opções abaixo:");
    Console.WriteLine("1 - Cadastrar Aluno");
    Console.WriteLine("2 - Listar Alunos");
    Console.WriteLine("3 - Buscar Alunos");
    Console.WriteLine("4 - Apagar Aluno");

    var opção = int.TryParse(Console.ReadLine(), out int opçãoValida);
    if (opçãoValida == 0)
    {
        break;
    }

    int codigo = 1000;

    switch (opçãoValida)
    {
        case 1:
            Console.Clear();
            var res = Input("\n>Aluno Bolsista? (S/N)").ToUpper();

            if (res == "S")
            {
                var NovoAluno = new Bolsista
                {
                    NomeAluno = Input(">Nome do novo aluno: "),
                    EmailAluno = Input(">Email do novo aluno: "),
                    DataNascimento = DateTime.Parse(Input(">Nascimento do novo aluno: ")),
                    RA = codigo++,
                    Desconto = double.Parse(Input(">Desconto (0 à 100): "))
                };
                ListaAlunos.Add(NovoAluno);
                Console.WriteLine("\nAluno adicionado com sucesso. Aperte uma tecla para continuar...");
                Console.ReadKey();
                break;
            } else
            {
                var NovoAluno = new Aluno
                {
                    NomeAluno = Input(">Nome do novo aluno: "),
                    EmailAluno = Input(">Email do novo aluno: "),
                    DataNascimento = DateTime.Parse(Input(">Nascimento do novo aluno: ")),
                    RA = codigo++
                };
                ListaAlunos.Add(NovoAluno);
                Console.WriteLine("\nAluno adicionado com sucesso. Aperte uma tecla para continuar...");
                Console.ReadKey();
                break;
            }

        case 2:
            Console.Clear();
            foreach (var aluno in ListaAlunos)
            {
                aluno.PrintaDados();
            }
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 3:
            Console.Clear();
            var BuscaAluno = Input("Digite a busca: ");
            var resultAlunos = AlunoService.Listar(BuscaAluno);
            Console.WriteLine("\n>Alunos encontrados: ");
            foreach (var aluno in resultAlunos)
            {
                aluno.PrintaDados();
            }
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 4:
            Console.Clear();
            var CodigoAluno = int.Parse(Input("Digite o RA para ser removido: "));
            var removido = AlunoService.Remover(CodigoAluno);
            if (removido != null)
            {
                removido.PrintaDados();
            }
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        default:
            Console.WriteLine("\nOpção Inválida. Aperte uma tecla para continuar...");
            Console.ReadKey();
            break;
    }
}