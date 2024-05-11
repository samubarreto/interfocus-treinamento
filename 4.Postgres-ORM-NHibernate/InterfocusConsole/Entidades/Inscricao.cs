using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfocusConsole.Entidades
{
    internal class Inscricao
    {
        public int Id { get; set; }
        public Curso Curso { get; set; }
        public Aluno Aluno { get; set; }
        public DateTime Data { get; set; } = DateTime.Now;
        // orm -> object relational mapping
        // 
    }
}
