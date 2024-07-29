using System.Data;
using System.Data.SqlClient;
using BaseDatosMedicos.Dto;

namespace BaseDatosMedicos.BaseDeDatos
{
    public class BaseDatosClientes
    {
        private readonly string conexionClientes;

        public BaseDatosClientes(IConfiguration configuration)
        {
            conexionClientes = configuration.GetConnectionString("CadenaSQLClientes")!;
        }

        public async Task<List<DtoClientes>> ListaClientes()
        {
            List<DtoClientes> lista = new List<DtoClientes>();

            using (var con = new SqlConnection(conexionClientes))
            {
                await con.OpenAsync();
                SqlCommand cmd = new SqlCommand("listadoClientes", con);
                cmd.CommandType = CommandType.StoredProcedure;
                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        lista.Add(new DtoClientes
                        {
                            id = Convert.ToInt32(reader["id"]),
                            Nombre = reader["Nombre"].ToString(),
                            Email = reader["Email"].ToString(),
                            Dni = Convert.ToInt32(reader["Dni"]),
                            Telefono = Convert.ToInt32(reader["Telefono"]),
                            Observaciones = reader["Observaciones"].ToString()
                        });
                    }
                }
            }
            return lista;
        }

        public async Task<DtoClientes> ObtenerCliente(int id)
        {
            DtoClientes objeto = new DtoClientes();

            using (var con = new SqlConnection(conexionClientes))
            {
                await con.OpenAsync();
                SqlCommand cmd = new SqlCommand("obtenerCliente", con);
                cmd.Parameters.AddWithValue("@id", id);
                cmd.CommandType = CommandType.StoredProcedure;

                using (var reader = await cmd.ExecuteReaderAsync())
                {
                    while (await reader.ReadAsync())
                    {
                        objeto = new DtoClientes
                        {
                            id = Convert.ToInt32(reader["id"]),
                            Nombre = reader["Nombre"].ToString(),
                            Email = reader["Email"].ToString(),
                            Dni = Convert.ToInt32(reader["Dni"]),
                            Telefono = Convert.ToInt32(reader["id"]),
                            Observaciones = reader["Observaciones"].ToString()
                        };
                    }

                }
            }return objeto;
        }

        public async Task<bool> nuevoCliente(DtoClientes objeto)
        {
            bool respuesta = true;

            using (var con =new SqlConnection(conexionClientes))
            {
                SqlCommand cmd = new SqlCommand("crearCliente", con);
                cmd.Parameters.AddWithValue("@Nombre", objeto.Nombre);
                cmd.Parameters.AddWithValue("@Email", objeto.Email);
                cmd.Parameters.AddWithValue("@Telefono", objeto.Telefono);
                cmd.Parameters.AddWithValue("@dni", objeto.Dni);
                cmd.Parameters.AddWithValue("@observaciones", objeto.Observaciones);
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

        public async Task<bool> editarCliente(DtoClientes objeto)
        {
            bool respuesta = true;

            using(var con = new SqlConnection(conexionClientes))
            {
                SqlCommand cmd = new SqlCommand("editarCliente", con);
                cmd.Parameters.AddWithValue("@id", objeto.id);
                cmd.Parameters.AddWithValue("@Nombre", objeto.Nombre);
                cmd.Parameters.AddWithValue("@Email", objeto.Email);
                cmd.Parameters.AddWithValue("@Telefono", objeto.Telefono);
                cmd.Parameters.AddWithValue("@Dni", objeto.Dni);
                cmd.Parameters.AddWithValue("@Observaciones", objeto.Observaciones);
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
        public async Task<bool> eliminarCliente(int id)
        {
            bool respuesta = true;

            using (var con = new SqlConnection(conexionClientes))
            {
                SqlCommand cmd = new SqlCommand("eliminarCliente", con);
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
            }
            return respuesta;
        }
    }
}
