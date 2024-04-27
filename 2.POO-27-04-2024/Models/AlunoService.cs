using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.MetodosPOO
{
    public class AlunoService
    {
        private static List<Aluno> Alunos = new List<Aluno>();
        public static void CriarAluno(Aluno aluno)
        {
            var erros = new List<ValidationResult>();
            var valido = Validator.TryValidateObject(aluno, new ValidationContext(aluno), erros);
            if (valido)
            {
                Alunos.Add(aluno);
            } else
            {
                foreach (var erro in erros)
                {
                    Console.WriteLine("{0}: {1}", erro.MemberNames.First(), erro.ErrorMessage);
                }
            }
        }
        public static List<Aluno> Listar(string BuscaAluno)
        {
            return Alunos
                   .Where(a => a.RA.ToString() == BuscaAluno ||
                    a.NomeAluno.Contains(BuscaAluno, StringComparison.OrdinalIgnoreCase) ||
                    a.EmailAluno.Contains(BuscaAluno)
                    )
                    .OrderBy(x => x.DataNascimento)
                    .ToList();
        }

        public static Aluno Remover(int codigo)
        {
            var aluno = Alunos.Where(x => x.RA == codigo).First;
            Alunos.Remove(aluno);
            return aluno;
        }
    }
}