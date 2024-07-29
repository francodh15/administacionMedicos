using System.Data;
using System.Data.SqlClient;
using BaseDatosMedicos.Dto;

namespace BaseDatosMedicos.BaseDeDatos
{
    public class BaseDatosMedico
    {
        private readonly string conexionMedicos;

        public BaseDatosMedico(IConfiguration configuration)
        {
            conexionMedicos = configuration.GetConnectionString("CadenaSQLMedicos")!;
        }

        public async Task<List<DtoMedicos>> ListaMedicos()
        {
            List<DtoMedicos> lista = new List<DtoMedicos>();

            using (var con = new SqlConnection(conexionMedicos))
            {
                await con.OpenAsync();

                SqlCommand cmd = new SqlCommand("listadoMedicos", con);
                cmd.CommandType = CommandType.StoredProcedure;
                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        lista.Add(new DtoMedicos
                        {
                            id = Convert.ToInt32(reader["id"]),
                            Nombre = reader["Nombre"].ToString(),
                            Email = reader["Email"].ToString(),
                            Matricula = Convert.ToInt32(reader["Matricula"]),
                            Especialidad = reader["Especialidad"].ToString(),
                            Telefono = Convert.ToInt32(reader["Telefono"]),
                            Estado = reader["Estado"].ToString()
                        });
                    }
                }
            }return lista;
        }

        public async Task<DtoMedicos> obtenerMedico(int id)
        {
            DtoMedicos objeto = new DtoMedicos();

            using (var con = new SqlConnection(conexionMedicos))
            {
                await con.OpenAsync();
                SqlCommand cmd = new SqlCommand("obtenerMedico", con);
                cmd.Parameters.AddWithValue("@id", id);
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync()) {
                        objeto = new DtoMedicos
                        {
                            id = Convert.ToInt32(reader["id"]),
                            Nombre = reader["Nombre"].ToString(),
                            Email = reader["Email"].ToString(),
                            Matricula = Convert.ToInt32(reader["Matricula"]),
                            Especialidad = reader["Especialidad"].ToString(),
                            Telefono = Convert.ToInt32(reader["Telefono"]),
                            Estado = reader["Estado"].ToString()
                        };
                    }
                }
            }return objeto;
        }

        public async Task<bool> nuevoMedico(DtoMedicos objeto)
        {
            bool respuesta = true;

            using (var con = new SqlConnection(conexionMedicos))
            {
                SqlCommand cmd = new SqlCommand("crearMedico", con);
                cmd.Parameters.AddWithValue("@Nombre", objeto.Nombre);
                cmd.Parameters.AddWithValue("@Email", objeto.Email);
                cmd.Parameters.AddWithValue("@Matricula", objeto.Matricula);
                cmd.Parameters.AddWithValue("@Especialidad", objeto.Especialidad);
                cmd.Parameters.AddWithValue("@Telefono", objeto.Telefono);
                cmd.Parameters.AddWithValue("@Estado", objeto.Estado);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    await con.OpenAsync();
                    respuesta = await cmd.ExecuteNonQueryAsync() > 0 ? true : false;
                }
                catch 
                {

                    respuesta = false;
                }
            }return respuesta;

        }

        public async Task<bool> editarMedico(DtoMedicos objeto)
        {
            bool respuesta = true;

            using (var con = new SqlConnection(conexionMedicos))
            {
                SqlCommand cmd = new SqlCommand("editarMedico", con);
                cmd.Parameters.AddWithValue("@id", objeto.id);
                cmd.Parameters.AddWithValue("@Nombre", objeto.Nombre);
                cmd.Parameters.AddWithValue("@Email", objeto.Email);
                cmd.Parameters.AddWithValue("@Matricula", objeto.Matricula);
                cmd.Parameters.AddWithValue("@Especialidad", objeto.Especialidad);
                cmd.Parameters.AddWithValue("@Telefono", objeto.Telefono);
                cmd.Parameters.AddWithValue("@Estado", objeto.Estado);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    await con.OpenAsync();
                    respuesta = await cmd.ExecuteNonQueryAsync() > 0 ? true : false;
                }
                catch 
                {
                    respuesta = false;
                }
            }return respuesta;
        }

        public async Task<bool> eliminarMedico(int id)
        {
            bool respuesta = true;

            using (var con = new SqlConnection(conexionMedicos))
            {
                SqlCommand cmd = new SqlCommand("eliminarMedico", con);
                cmd.Parameters.AddWithValue("@id", id);
                cmd.CommandType = CommandType.StoredProcedure;
                try
                {
                    await con.OpenAsync();
                    respuesta = await cmd.ExecuteNonQueryAsync() > 0 ? true : false;
                }
                catch 
                {
                    respuesta = false;
                }
            }return respuesta;
        }
    }
}
