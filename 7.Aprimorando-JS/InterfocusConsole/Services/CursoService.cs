using InterfocusConsole.Entidades;
using NHibernate;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Drawing.Printing;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace InterfocusConsole.Services
{
    public class CursoService
    {
        private readonly ISessionFactory session;

        public CursoService(ISessionFactory session)
        {
            this.session = session;
        }

        public static bool Validacao(Curso curso,
            out List<ValidationResult> erros)
        {
            erros = new List<ValidationResult>();
            var valido = Validator.TryValidateObject(curso,
                new ValidationContext(curso),
                erros,
                true
            );

            return valido;
        }

        public virtual List<Curso> Listar()
        {
            using var sessao = session.OpenSession();
            var cursos = sessao.Query<Curso>()
                               .OrderBy(curso => curso.Id)
                               .ToList();
            return cursos;
        }

        public virtual List<Curso> Listar(string busca)
        {
            using var sessao = session.OpenSession();
            var cursos = sessao.Query<Curso>()
                               .Where(c => c.Nome.Contains(busca) || c.Descricao.Contains(busca))
                               .OrderBy(curso => curso.Id)
                               .ToList();
            return cursos;
        }

        public virtual bool Criar(Curso curso, out List<ValidationResult> erros)
        {
            if (Validacao(curso, out erros))
            {
                using var sessao = session.OpenSession();
                using var transaction = sessao.BeginTransaction();

                sessao.Save(curso);
                transaction.Commit();
                return true;
            }
            return false;
        }

        public virtual bool Editar(Curso curso, out List<ValidationResult> erros)
        {
            if (Validacao(curso, out erros))
            {
                using var sessao = session.OpenSession();
                using var transaction = sessao.BeginTransaction();

                sessao.Merge(curso);
                transaction.Commit();
                return true;
            }
            return false;
        }

        public virtual bool Excluir(int id, out List<ValidationResult> erros)
        {
            erros = new List<ValidationResult>();
            using var sessao = session.OpenSession();
            using var transaction = sessao.BeginTransaction();
            var curso = sessao.Query<Curso>()
                .Where(c => c.Id == id)
                .FirstOrDefault();
            if (curso == null)
            {
                erros.Add(new ValidationResult($"Registro {id} não encontrado :(", new[] { "id" }));
                return false;
            }

            sessao.Delete(curso);
            try
            {
                transaction.Commit();
            } catch (Exception ex)
            {
                erros.Add(new ValidationResult($"N vai da, por causa das constraints fk :("));
                return false;
            }
            
            return true;
        }
    }
}