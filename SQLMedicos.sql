use BaseDateMedicos;

create table Medicos (
id int primary key identity,
Nombre varchar(50),
Email varchar(50),
Matricula varchar(50),
Especialidad varchar(50),
Telefono int,
Estado varchar(50)
)

insert into Medicos (Nombre,Email,Matricula,Especialidad,Telefono,Estado) values('franco','franco@franco.com','1212das','medico','1242412','activo')

select * from Medicos;

go

create procedure listadoMedicos
as
begin
select id,
Nombre,
Email,
Matricula,
Especialidad,
Telefono,
Estado
from Medicos

end;

go

create procedure obtenerMedico
(@id int)
as
begin
select id,
Nombre,
Email,
Matricula,
Especialidad,
Telefono,
Estado
from Medicos where id = @id
end;

go
create procedure crearMedico
(@Nombre varchar(50),
@Email varchar(50),
@Matricula varchar(50),
@Especialidad varchar(50),
@Telefono int,
@Estado varchar(50))
as
begin insert into Medicos (
Nombre,
Email,
Matricula,
Especialidad,
Telefono,
Estado) values
(@Nombre,
@Email,
@Matricula,
@Especialidad,
@Telefono,
@Estado)
end;

go
create procedure editarMedico
(@id int,
@Nombre varchar(50),
@Email varchar(50),
@Matricula varchar(50),
@Especialidad varchar(50),
@Telefono int,
@Estado varchar(50))
as
begin update Medicos set
Nombre = @Nombre,
Email = @Email,
Matricula= @Matricula,
Especialidad= @Especialidad,
Telefono= @Telefono,
Estado= @Estado
where id = @id

end;

go

create procedure eliminarMedico
(@id int)
as
begin delete
from Medicos where id = @id
end;

