using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using static System.Runtime.InteropServices.JavaScript.JSType;

namespace InterfocusConsole
{
    public class AlunoService
    {
        private static int Contador = 1000;
        private static List<Aluno> Alunos = new List<Aluno>()
        {
            new Aluno{ Nome = "Samu 1", Codigo=Contador++, DataNascimento = new DateTime(2004,11,04 ), Email = "email@teste.com"},
            new Aluno{ Nome = "Samu 2", Codigo=Contador++, DataNascimento = new DateTime(2004,11,04 ), Email = "email@teste.com"},
            new Aluno{ Nome = "Samu 3", Codigo=Contador++, DataNascimento = new DateTime(2004,11,04 ), Email = "email@teste.com"},
            new Aluno{ Nome = "Samu 4", Codigo=Contador++, DataNascimento = new DateTime(2004,11,04 ), Email = "email@teste.com"}
        };

        public static bool Validacao(Aluno aluno, out List<ValidationResult> erros)
        {
            erros = new List<ValidationResult>();
            var valido = Validator.TryValidateObject(aluno,
                new ValidationContext(aluno),
                erros,
                true
                );

            var diaMinimo = DateTime.Today.AddYears(-18);
            if (aluno.DataNascimento > diaMinimo)
            {
                erros.Add(new ValidationResult("O Aluno deve ser maior de idade", new[] { "DataNascimento" }));
                valido = false;
            }

            return valido;
        }
        public static bool CriarAluno(Aluno aluno, out List<ValidationResult> erros)
        {
            aluno.Codigo = Contador++;
            var valido = Validacao(aluno, out erros);
            if (valido)
            {
                Alunos.Add(aluno);
            }
            else
            {
                foreach (var erro in erros)
                {
                    Console.WriteLine("{0}: {1}",
                        erro.MemberNames.First(),
                        erro.ErrorMessage
                    );
                }
            }
            return valido;
        }

        public static bool EditarAluno(Aluno novoAluno, out List<ValidationResult> erros)
        {
            var alunoExistente = Alunos.FirstOrDefault(x => x.Codigo == novoAluno.Codigo);
            erros = new List<ValidationResult>();
            if (alunoExistente == null)
            {
                return false;
            }
            var valido = Validacao(novoAluno, out erros);
            if (valido)
            {
                alunoExistente.Nome = novoAluno.Nome;
                alunoExistente.Email = novoAluno.Email;
                alunoExistente.DataNascimento = novoAluno.DataNascimento;
            }
            return valido;
        }

        public static List<Aluno> Listar()
        {
            return Alunos;
        }
        public static List<Aluno> Listar(string buscaAluno, int skip = 0, int pageSize = 0)
        {
            var consulta = Alunos.Where(a =>
                    a.Codigo.ToString() == buscaAluno ||
                    a.Nome.Contains(buscaAluno,
                            StringComparison.OrdinalIgnoreCase) ||
                    a.Email.Contains(buscaAluno)
                )
                .OrderBy(x => x.DataNascimento)
                .AsEnumerable();
            if (skip > 0)
            {
                consulta = consulta.Skip(skip);
            }
            if (pageSize > 0)
            {
                consulta = consulta.Take(pageSize);
            }
            return consulta.ToList();
        }
        public static Aluno Remover(int codigo)
        {
            try
            {
                var aluno = Alunos
                        .Where(x => x.Codigo == codigo)
                        .First();
                Console.WriteLine(aluno);
                Alunos.Remove(aluno);
                return aluno;
            } catch (Exception ex)
            {
                return null;
            }
        }
    }
}
