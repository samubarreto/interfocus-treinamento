using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Models.MetodosPOO
{
    public class Aluno
    {
        public Aluno()
        {
            NomeAluno = "NomeInicializado";
        }
        [Required(ErrorMessage = "O nome é obrigatório")]
        public string NomeAluno { get; set; }
        public DateTime DataNascimento { get; set; }
        public int RA { get; set; }
        private string _EmailAluno;

        public string EmailAluno
        {
            get { return _EmailAluno; }
            set { _EmailAluno = value?.ToLower(); }
        }

        public virtual void PrintaDados()
        {
            Console.WriteLine("{0} {1} {2} {3:dd/MM/yyyy}", RA, NomeAluno, EmailAluno, DataNascimento);
        }
    }

    public class Bolsista: Aluno // bolsista extends de aluno, herda tudo
    {
        public double Desconto { get; set; }
        public override void PrintaDados()
        {
            Console.WriteLine("{0} {1} {2} {3:dd/MM/yyyy} ({4}%)", RA, NomeAluno, EmailAluno, Desconto);
        }
    }
}