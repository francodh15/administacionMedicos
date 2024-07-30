use BaseDateClientes;

create table Clientes (
id int primary key identity,
Nombre varchar(50),
Email varchar(50),
Telefono int,
Dni int,
Observaciones varchar(240)
);

insert into Clientes(Nombre,Email,Telefono,Dni,Observaciones) values('franco','franco@franco.com',1231245,43266543,'kjadjanjnjasnjnasa')

select * from Clientes;

go

create procedure listadoClientes
as
begin
select id,
Nombre,
Email,
Telefono,
Dni,
Observaciones

from Clientes

end;

go

create procedure obtenerCliente
(@id int)
as
begin
select id,
Nombre,
Email,
Telefono,
Dni,
Observaciones

from Clientes where id = @id
end;

go
create procedure crearCliente
(@Nombre varchar(50),
@Email varchar(50),
@Telefono int,
@dni int,
@observaciones varchar(240))
as
begin insert into Clientes(
Nombre,
Email,
Telefono,
Dni,
Observaciones) values
(@Nombre,
@Email,
@Telefono,
@dni,
@observaciones)
end;

go
create procedure editarCliente
(@id int,
@Nombre varchar(50),
@Email varchar(50),
@Telefono int,
@dni int,
@observaciones varchar(240))
as
begin update Clientes set
Nombre = @Nombre,
Email = @Email,
Telefono= @Telefono,
Dni = @dni,
Observaciones = @observaciones
where id = @id;
end;

go

create procedure eliminarCliente
(@id int)
as
begin delete
from Clientes where id = @id
end;

