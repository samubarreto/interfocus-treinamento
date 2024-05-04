﻿using InterfocusConsole;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Escola_Api.Controllers
{
    // /api/aluno
    [Route("api/[controller]")]
    public class AlunoController : ControllerBase
    {
        [HttpGet]
        public IActionResult Listar(string pesquisa, int skip = 0, int pageSize = 0)
        {
            var alunos = string.IsNullOrEmpty(pesquisa) ? AlunoService.Listar() : AlunoService.Listar(pesquisa, skip, pageSize);
            return Ok(alunos);
        }
        [HttpPost]
        public IActionResult Criar([FromBody]Aluno aluno)
        {
            if (aluno == null)
            {
                return BadRequest(ModelState);
            }
            var sucesso = AlunoService.CriarAluno(aluno, out List<ValidationResult> erros);
            if (sucesso)
            {
                return Ok(aluno);
            } else
            {
                return UnprocessableEntity(erros);
            }
            
        }
        [HttpPut]
        public IActionResult Editar([FromBody]Aluno aluno)
        {
            if (aluno == null)
            {
                return BadRequest(ModelState);
            }
            var sucesso = AlunoService.EditarAluno(aluno, out List<ValidationResult> erros);
            if (sucesso)
            {
                return Ok(aluno);
            } else if(erros.Count == 0)
            {
                return NotFound();
            } else
            {
                return UnprocessableEntity(erros);
            }
        }
        // DELETE /api/aluno/123
        [HttpDelete("{codigo}")] // concatena com o Route lá de cima
        public IActionResult Remover(int codigo)
        {
            var aluno = AlunoService.Remover(codigo);
            if (aluno == null)
            {
                return NotFound();
            } else
            {
                return Ok(aluno);
            }
        }
    }
}