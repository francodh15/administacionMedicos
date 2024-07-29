using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BaseDatosMedicos.Dto;
using BaseDatosMedicos.BaseDeDatos;

namespace BaseDatosMedicos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientesController : ControllerBase
    {
        private readonly BaseDatosClientes _baseDeDatosCliente;

        public ClientesController(BaseDatosClientes baseDatosClientes)
        {
            _baseDeDatosCliente = baseDatosClientes;
        }

        [HttpGet]

        public async Task<IActionResult> lista()
        {
            List<DtoClientes> Lista = await _baseDeDatosCliente.ListaClientes();
            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> obtener(int id)
        {
            DtoClientes objeto = await _baseDeDatosCliente.ObtenerCliente(id);
            return StatusCode(StatusCodes.Status200OK, objeto);
        }

        [HttpPost]

        public async Task<IActionResult> crear([FromBody]DtoClientes objeto)
        {
            bool respuesta = await _baseDeDatosCliente.nuevoCliente(objeto);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }

        [HttpPut]

        public async Task<IActionResult> editar([FromBody] DtoClientes objeto)
        {
            bool respuesta = await _baseDeDatosCliente.editarCliente(objeto);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }
        [HttpDelete("{id}")]

        public async Task<IActionResult> eliminar (int id)
        {
            bool respuesta = await _baseDeDatosCliente.eliminarCliente(id);
            return StatusCode(StatusCodes.Status200OK,new { isSuccess = respuesta });
        }
    }
}
