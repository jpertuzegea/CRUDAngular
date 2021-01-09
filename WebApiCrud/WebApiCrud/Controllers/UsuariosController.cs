using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiCrud.Entitys;

namespace WebApiCrud.Controllers
{
    [ApiController]
    [Route("api/Poc")]
    public class UsuariosController : Controller
    {
        [HttpPost("")]
        public ActionResult<bool> GuardarUsuario(Usuarios Usuario)
        {
            PocCrudContext BD = new PocCrudContext();
            BD.Usuarios.Add(Usuario);
            if (BD.SaveChanges() >= 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpGet("")]
        public ActionResult<List<Usuarios>> ListarUsuarios()
        {
            PocCrudContext BD = new PocCrudContext();
            return BD.Usuarios.ToList();
        }

        [HttpPost("")]
        public ActionResult<Usuarios> ListarUsuariosById(int UsuarioId)
        {
            PocCrudContext BD = new PocCrudContext();
            return BD.Usuarios.Where(x => x.UsuarioId == UsuarioId).FirstOrDefault();
        }

        [HttpPut("")]
        public ActionResult<bool> ModificarUsuario(Usuarios Usuario)
        {
            PocCrudContext BD = new PocCrudContext();
            Usuarios usu = BD.Usuarios.Where(x => x.UsuarioId == Usuario.UsuarioId).FirstOrDefault();
            usu.Nombre = Usuario.Nombre;
            usu.Apellido = Usuario.Apellido;
            usu.Telefono = Usuario.Telefono;
            usu.Genero = Usuario.Genero;
            usu.Cedula = Usuario.Cedula;

            BD.Entry(usu).State = EntityState.Modified;
           
            if (BD.SaveChanges() >= 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }

        [HttpDelete("")]
        public ActionResult<bool> EliminarUsuario(int UsuarioId)
        {
            PocCrudContext BD = new PocCrudContext();
            Usuarios usu = BD.Usuarios.Where(x => x.UsuarioId == UsuarioId).FirstOrDefault();
            BD.Usuarios.Remove(usu);
            if (BD.SaveChanges() >= 0)
            {
                return true;
            }
            else
            {
                return false;
            } 
        }

    }
}
