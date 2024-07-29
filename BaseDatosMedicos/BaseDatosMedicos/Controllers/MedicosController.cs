using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using BaseDatosMedicos.BaseDeDatos;
using BaseDatosMedicos.Dto;

namespace BaseDatosMedicos.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MedicosController : ControllerBase
    {
        private readonly BaseDatosMedico _baseDatosMedico;

        public MedicosController(BaseDatosMedico baseDatosMedico)
        {
            _baseDatosMedico = baseDatosMedico;
        }

        [HttpGet]
        public async Task<IActionResult> Lista()
        {
            List<DtoMedicos> Lista = await _baseDatosMedico.ListaMedicos();
            return StatusCode(StatusCodes.Status200OK, Lista);
        }

        [HttpGet("{id}")]

        public async Task<IActionResult> obtenerMedico(int id)
        {
            DtoMedicos objeto = await _baseDatosMedico.obtenerMedico(id);
            return StatusCode(StatusCodes.Status200OK, objeto);
        }

        [HttpPost]

        public async Task<IActionResult> nuevoMedico([FromBody] DtoMedicos objeto)
        {
            bool respuesta = await _baseDatosMedico.nuevoMedico(objeto);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }

        [HttpPut]

        public async Task<IActionResult> editarMedico([FromBody] DtoMedicos objeto)
        {
            bool respuesta = await _baseDatosMedico.editarMedico(objeto);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }

        [HttpDelete("{id}")]

        public async Task<IActionResult> eliminarMedico(int id)
        {
            bool respuesta = await _baseDatosMedico.eliminarMedico(id);
            return StatusCode(StatusCodes.Status200OK, new { isSuccess = respuesta });
        }
    }
}
