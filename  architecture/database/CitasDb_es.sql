-- ***************************************************************************************
-- * Base de Datos para Control de Citas de Tu negocio
-- * Diseñada por:
-- * Version: 4.5.0
-- * Ultima modificación: 8/04/2021
-- * servidores de Bases de datos disponibles
-- * - PostgreSQL
-- ***************************************************************************************
-- * Creando Base de Datos
-- ***************************************************************************************
-- DROP DATABASE 
-- IF
--  EXISTS "CitasDB";
-- CREATE DATABASE "CitasDB" 
-- ***************************************************************************************
-- * Tablas Usuario
-- ***************************************************************************************
CREATE TABLE Usuarios (
	Id_Usuario bigserial NOT NULL,
	PRIMARY KEY ( Id_Usuario ),
	Uid_Usuario VARCHAR ( 255 ) NOT NULL UNIQUE,
	Nombre VARCHAR ( 255 ) NOT NULL,
	Apellido VARCHAR ( 255 ) NOT NULL,
	Telefono VARCHAR ( 255 ) NOT NULL,
	Correo VARCHAR ( 255 ) NOT NULL UNIQUE,
	Uuid_Facebook VARCHAR ( 255 ) NULL UNIQUE,
	Uuid_Google VARCHAR ( 255 ) NULL UNIQUE,
	Estado VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Accesos
-- ***************************************************************************************
CREATE TABLE Accesos (
	Id_Usuario BIGINT NOT NULL,
	PRIMARY KEY ( Id_Usuario ),
	FOREIGN KEY ( Id_Usuario ) REFERENCES Usuarios ( Id_Usuario ),
	Usuario VARCHAR ( 255 ) NOT NULL,
	clave VARCHAR ( 255 ) NOT NULL,
	Tipo CHAR ( 1 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Negocios
-- ***************************************************************************************
CREATE TABLE Negocios (
	Id_Negocio bigserial NOT NULL,
	PRIMARY KEY ( Id_Negocio ),
	Uuid_Negocio VARCHAR ( 255 ) NOT NULL,
	Nombre VARCHAR ( 255 ) NOT NULL,
	Descripcion VARCHAR ( 255 ) NOT NULL,
	Id_Usuario BIGINT NOT NULL unique,
	FOREIGN KEY ( Id_Usuario ) REFERENCES Usuarios ( Id_Usuario ),
	Estado VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Negocios Contacto
-- ***************************************************************************************
CREATE TABLE Inf_contato (
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	PRIMARY KEY ( Id_Negocio ),
	Telefono VARCHAR ( 255 ) NOT NULL,
	Email VARCHAR ( 255 ) NOT NULL UNIQUE,
	Fabook_Url VARCHAR ( 555 ) NULL,
	Whatsapp_Url VARCHAR ( 555 ) NULL,
	Twitter_Url VARCHAR ( 555 ) NULL 
);
-- ***************************************************************************************
-- * Tablas Negocios Direcciones
-- ***************************************************************************************
CREATE TABLE Direcciones (
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	PRIMARY KEY ( Id_Negocio ),
	Departamento VARCHAR ( 255 ) NOT NULL,
	Direccion VARCHAR ( 255 ) NOT NULL,
	Url_Direccion VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Negocios Configuracion
-- ***************************************************************************************
-- CSC: cantida de sevicios por cita
-- TEC: tiempo estimado por cita
-- ITC: intevalo de tiempo entre citas
-- CCD: Cantidad de Citas por Dia
CREATE TABLE Configuracion (
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	PRIMARY KEY ( Id_Negocio ),
	Hora_inicio VARCHAR ( 255 ) NOT NULL,
	Hora_fin VARCHAR ( 255 ) NOT NULL,
	Csc VARCHAR ( 255 ) NOT NULL,
	Tec VARCHAR ( 255 ) NOT NULL,
	Itc VARCHAR ( 255 ) NOT NULL,
	Ccd VARCHAR ( 255 ) NOT NULL,
	Dias_laborales VARCHAR ( 255 ) NOT NULL,
	Tiempo_Almuerzo INT NOT NULL,
	Hora_Almuerzo VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Negocios Servicios
-- ***************************************************************************************
CREATE TABLE Servicios (
	Id_servicio bigserial NOT NULL,
	PRIMARY KEY ( Id_servicio ),
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	Nombre_servicio VARCHAR ( 255 ) NOT NULL,
	Descipcion VARCHAR ( 255 ) NOT NULL,
	Url_imagen VARCHAR ( 255 ) NOT NULL,
	Precio DECIMAL NOT NULL,
	Estado VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Dias Bloqueados o Libres
-- ***************************************************************************************
CREATE TABLE DLibres (
	Id_Dlibre bigserial NOT NULL,
	PRIMARY KEY ( Id_Dlibre ),
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	Dia_inicio DATE NOT NULL,
	Dia_final DATE NOT NULL,
	Estado VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Citas
-- ***************************************************************************************
CREATE TABLE Citas (
	Id_cita BIGINT NOT NULL,
	PRIMARY KEY ( Id_cita ),
	Uuid_Cita VARCHAR ( 255 ) NOT NULL,
	Id_Usuario BIGINT NOT NULL,
	FOREIGN KEY ( Id_Usuario ) REFERENCES Usuarios ( Id_Usuario ),
	Id_Negocio BIGINT NOT NULL,
	FOREIGN KEY ( Id_Negocio ) REFERENCES Negocios ( Id_Negocio ),
	Fecha JSONB NOT NULL,
	total DECIMAL NOT NULL,
	Estado VARCHAR ( 255 ) NOT NULL 
);
-- ***************************************************************************************
-- * Tablas Citas Detalle
-- ***************************************************************************************
CREATE TABLE Detalle (
	Id_Detalle bigserial NOT NULL,
	PRIMARY KEY ( Id_Detalle ),
	Id_cita BIGINT NOT NULL,
	FOREIGN KEY ( Id_cita ) REFERENCES Citas ( Id_cita ),
	Id_servicio BIGINT NOT NULL,
	FOREIGN KEY ( Id_servicio ) REFERENCES Servicios ( Id_servicio ),
	Precio DECIMAL NOT NULL
);