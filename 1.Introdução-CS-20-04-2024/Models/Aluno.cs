using System;
using System.Collections.Generic;
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
        public string NomeAluno { get; set; }
        public DateTime DataNascimento { get; set; }
        public int RA { get; set; }

        private string _EmailAluno;

        public string EmailAluno
        {
            get { return _EmailAluno; }
            set { _EmailAluno = value?.ToLower(); }
        }
    }

    public class Bolsista: Aluno // bolsista extends de aluno, herda tudo
    {
        public double Desconto { get; set; }
    }
}