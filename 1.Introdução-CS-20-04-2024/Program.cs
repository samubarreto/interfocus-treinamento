using InterfocusConsole;
using System.ComponentModel;

var obj = new Metodos();
List<string> lista = new List<string>
{
    "item1",
    "item2",
    "item3"
}; // muito manero

while (true)
{
    Console.Clear();
    Console.WriteLine("Escolha uma das opções abaixo:");
    Console.WriteLine("0 - Sair");
    Console.WriteLine("1 - Verificar número par");
    Console.WriteLine("2 - Adicionar na lista");
    Console.WriteLine("3 - Remover da lista");
    Console.WriteLine("4 - Buscar na lista");
    Console.WriteLine("5 - Printar lista");

    var opção = int.TryParse(Console.ReadLine(), out int opçãoValida);
    if (opçãoValida == 0)
    {
        break;
    }

    switch (opçãoValida)
    {
        case 1:
            Console.Clear();
            Console.WriteLine(">Insira o valor para verificar sua paridade: ");
            int num = int.Parse(Console.ReadLine());
            Console.WriteLine(">{0} é {1}", num, Metodos.IsPar(num));
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 2:
            Console.Clear();
            Metodos.AdicionarNaLista(lista);
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 3:
            Console.Clear();
            Metodos.RemoverDaLista(lista);
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 4:
            Console.Clear();
            obj.BuscaLista(lista);
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        case 5:
            Console.Clear();
            obj.PrintaLista(lista);
            Console.WriteLine("\nPressione uma tecla para continuar...");
            Console.ReadKey();
            break;

        default:
            Console.WriteLine("\nOpção Inválida. Aperte uma tecla para continuar...");
            Console.ReadKey();
            break;
    }
}

//int x = 10;
//int y = 11;
//int z = 10;

//int soma = x + y;
//bool maiorQ10 = soma > 10;
//bool impar = soma % 2 != 0;
//bool combinacao = maiorQ10 && impar;

//if (combinacao)
//{
//    Console.WriteLine(">10 e ímpar");
//} else
//{
//    Console.WriteLine("<=10 ou par");
//}

//while (z < 15)
//{
//    Console.WriteLine("Z1: {0}", z);
//    z++;
//}

//var v = 0;
//do
//{
//    var texto = Console.ReadLine();
//    v = int.Parse(texto);
//} while (v % 2 == 0);

//Console.WriteLine("\nV: {0}", v);

//for (int i = 0; i <= 10; i++)
//{
//    Console.WriteLine("Iteração[{0:D03}] = {1:C}", i+1, i);
//}

//DateTime data = new DateTime(2024, 4, 20);
//Console.WriteLine(data);
//Console.WriteLine("\ndata.ToString(\"dd/MM/yyyy\"): {0}", data.ToString("dd/MM/yyyy"));
//Console.WriteLine("data.Day: {0}", data.Day);
//Console.WriteLine("data.DayOfYear: {0}", data.DayOfYear);
//Console.WriteLine("data.DayOfWeek: {0}", data.DayOfWeek);
//Console.WriteLine("data.Year: {0}", data.Year);

//Console.WriteLine("DateTime.Now: {0}", DateTime.Now);
//Console.WriteLine("DateTime.Today: {0}", DateTime.Today);

//List<string> lista2 = new List<string>
//{
//    "Item 1",
//    "Item 2"
//}; // muito manero

//Console.WriteLine(Metodos.IsPar(3));

//obj.PrintaLista(lista2);