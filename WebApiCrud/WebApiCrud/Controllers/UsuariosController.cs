using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using WebApiCrud.Entitys;
using WebApiCrud.Models;

namespace WebApiCrud.Controllers
{
    [ApiController]
    [Route("api/Poc")]
    public class UsuariosController : Controller
    {
        [HttpPost("GuardarUsuario")]
        public ActionResult<ResultModel> GuardarUsuario([FromBody] Usuarios Usuario)
        {
            ResultModel ResultModel = new ResultModel();

            try
            {
                PocCrudContext BD = new PocCrudContext();
                BD.Usuarios.Add(Usuario);
                if (BD.SaveChanges() >= 0)
                {
                    ResultModel.HasError = false;
                    ResultModel.Message = "Usuario Registrado Con Exito";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
                else
                {
                    ResultModel.HasError = true;
                    ResultModel.Message = "Usuario No Registrado";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
            }
            catch (Exception Error)
            {
                ResultModel.HasError = true;
                ResultModel.Message = "Error No Controlado: ";
                ResultModel.Data = Error;
                return ResultModel;
            }
        }

        [HttpGet("")]
        public ActionResult<ResultModel> ListarUsuarios()
        {
            ResultModel ResultModel = new ResultModel();

            try
            {
                PocCrudContext BD = new PocCrudContext();

                ResultModel.HasError = false;
                ResultModel.Message = "Usuarios Listados Con Exito";
                ResultModel.Data = BD.Usuarios.ToList();
                return ResultModel;
            }
            catch (Exception Error)
            {
                ResultModel.HasError = true;
                ResultModel.Message = "Error No Controlado: ";
                ResultModel.Data = Error;
                return ResultModel;
            }
        }

        [HttpPost("ListarUsuariosById")]
        public ActionResult<ResultModel> ListarUsuariosById([FromBody] int UsuarioId)
        {
            ResultModel ResultModel = new ResultModel();

            try
            {
                PocCrudContext BD = new PocCrudContext();
                var User = BD.Usuarios.Where(x => x.UsuarioId == UsuarioId).FirstOrDefault();

                if (User != null)
                {
                    ResultModel.HasError = false;
                    ResultModel.Message = "Usuario Encontrado";
                    ResultModel.Data = User;
                }
                else
                {
                    ResultModel.HasError = false;
                    ResultModel.Message = "Usuario NO Encontrado";
                    ResultModel.Data = string.Empty;
                }

                return ResultModel;
            }
            catch (Exception Error)
            {
                ResultModel.HasError = true;
                ResultModel.Message = "Error No Controlado: ";
                ResultModel.Data = Error;
                return ResultModel;
            }
        }

        [HttpPut("ModificarUsuario")]
        public ActionResult<ResultModel> ModificarUsuario([FromBody] Usuarios Usuario)
        {
            ResultModel ResultModel = new ResultModel();

            try
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
                    ResultModel.HasError = false;
                    ResultModel.Message = "Usuario Modificado Con Exito";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
                else
                {
                    ResultModel.HasError = true;
                    ResultModel.Message = "Usuario No Modificado";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
            }
            catch (Exception Error)
            {
                ResultModel.HasError = true;
                ResultModel.Message = "Error No Controlado: ";
                ResultModel.Data = Error;
                return ResultModel;
            }
        }

        [HttpPost("EliminarUsuario")]
        public ActionResult<ResultModel> EliminarUsuario([FromBody] int UsuarioId)
        {
            ResultModel ResultModel = new ResultModel();

            try
            {
                PocCrudContext BD = new PocCrudContext();
                Usuarios usu = BD.Usuarios.Where(x => x.UsuarioId == UsuarioId).FirstOrDefault();
                BD.Usuarios.Remove(usu);
                if (BD.SaveChanges() >= 0)
                {
                    ResultModel.HasError = false;
                    ResultModel.Message = "Usuario Eliminado Con Exito";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
                else
                {
                    ResultModel.HasError = true;
                    ResultModel.Message = "Usuario No Eliminado";
                    ResultModel.Data = string.Empty;
                    return ResultModel;
                }
            }
            catch (Exception Error)
            {
                ResultModel.HasError = true;
                ResultModel.Message = "Error No Controlado: ";
                ResultModel.Data = Error;
                return ResultModel;
            }
             
        }
    }
}
