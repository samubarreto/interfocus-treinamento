using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfocusConsole.Entidades
{
    internal class Curso
    {
        public int Id { get; set; }
        public string? Nome { get; set; }
        public string? Descricao { get; set; }
        public NivelCurso Nivel { get; set; }
        // 0 - Iniciante, 1 - Intermediário, 2 - Avançado, 3 - Expert
        public int Duracao { get; set; }

        void Metodo()
        {
            if (Nivel == NivelCurso.Iniciante) { } // bom usar o enum
            else if (Nivel == NivelCurso.Intermediario) { }
        }
    }
    public enum NivelCurso // é um tipo (muito foda)
    {
        Iniciante = 0,
        Intermediario = 1,
        Avançado = 2,
        Expert = 3
    }
}
