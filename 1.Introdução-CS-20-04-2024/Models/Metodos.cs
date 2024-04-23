using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfocusConsole
{
    internal class Metodos
    {
        public static void IsPar()
        {
            Console.WriteLine(">Insira o valor para verificar sua paridade: ");
            int num = int.Parse(Console.ReadLine());
            Console.WriteLine(">{0} é {1}", num, num % 2 == 0 ? "Par" : "Ímpar");
        }

        public static void PrintaLista(List<string> lista)
        {
            Console.WriteLine(">Sua lista:");
            int c = 0;
            foreach (string item in lista)
            {
                Console.WriteLine("[{0}]: {1}", c, item);
                c++;
            }
        }

        public void BuscaLista(List<string> lista)
        {
            Console.WriteLine(">Digite para buscar:");
            var busca = Console.ReadLine();

            var resBusca = lista
                .Where(x => x.Contains(busca))
                .ToList();
            PrintaLista(resBusca);
        }

        public static void AdicionarNaLista(List<string> lista)
        {
            Console.WriteLine(">Insira o valor para ser adicionada na lista: ");
            string? txtAdd = Console.ReadLine();
            lista.Add(txtAdd);
            Console.WriteLine("\n>{0} adicionado na lista.", txtAdd);
        }

        public static void RemoverDaLista(List<string> lista)
        {
            Console.WriteLine(">Essa é sua lista: ");
            PrintaLista(lista);
            Console.WriteLine("\n>Insira o índice para ser removido da lista: ");
            var index = int.Parse(Console.ReadLine());
            var removido = lista[index - 1];
            Console.WriteLine("\nRemovendo: [{0}]:[{1}]", index, removido);
            lista.RemoveAt(index - 1);
        }
    }
}
