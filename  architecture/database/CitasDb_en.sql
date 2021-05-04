-- ***************************************************************************************
-- * Database to Control Your Business Appointments
-- * Designed by: Juan Hernandez
-- * Version: 4.5.3_en
-- * Last Modification: 8/04/2021
-- * Database Servers Available
-- * - PostgreSQL
-- ***************************************************************************************
-- * Create Database
-- ***************************************************************************************
-- DROP DATABASE
-- IF
-- 	EXISTS "AppointmentDB";
-- CREATE DATABASE "AppointmentDB";
-- ***************************************************************************************
-- * Users
-- ***************************************************************************************
CREATE TABLE Users (
	idUser bigserial NOT NULL,
	PRIMARY KEY ( idUser ),
	uuidUser VARCHAR ( 555 ) NOT NULL UNIQUE,
	NAME VARCHAR ( 555 ) NOT NULL,
	lastName VARCHAR ( 555 ) NOT NULL,
	phone VARCHAR ( 555 ) NULL,
	email VARCHAR ( 555 ) NULL UNIQUE,
	uuidFacebook VARCHAR ( 555 ) NULL UNIQUE,
	uuidGoogle VARCHAR (555) NULL UNIQUE,
	STATE VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * Access
-- ***************************************************************************************
CREATE TABLE ACCESS (
	idUser BIGINT NOT NULL,
	FOREIGN KEY ( idUser ) REFERENCES Users ( idUser ),
	PRIMARY KEY ( idUser ),
	username VARCHAR ( 555 ) NOT NULL,
	PASSWORD VARCHAR ( 555 ) NOT NULL,
	TYPE CHAR ( 1 ) NOT NULL 
);
-- ***************************************************************************************
-- * Business
-- ***************************************************************************************
CREATE TABLE Business (
	idBusiness bigserial NOT NULL,
	PRIMARY KEY ( idBusiness ),
	uuidBusiness VARCHAR ( 555 ) NOT NULL UNIQUE,
	businessName VARCHAR ( 555 ) NOT NULL,
	Description VARCHAR ( 555 ) NOT NULL,
	imageUrlBusiness  VARCHAR ( 555 ) NOT NULL,
	idUser BIGINT NOT NULL UNIQUE,
	FOREIGN KEY ( idUser ) REFERENCES Users ( idUser ),
	STATE VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * contact business
-- ***************************************************************************************
CREATE TABLE ContactBusiness (
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	PRIMARY KEY ( idBusiness ),
	phone VARCHAR ( 555 ) NOT NULL,
	email VARCHAR ( 555 ) NOT NULL UNIQUE,
	fabookUrl VARCHAR ( 555 ) NULL,
	whatsappUrl VARCHAR ( 555 ) NULL,
	twitterUrl VARCHAR ( 555 ) NULL 
);
-- ***************************************************************************************
-- * Addresses
-- ***************************************************************************************
CREATE TABLE Addresses (
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	PRIMARY KEY ( idBusiness ),
	Department VARCHAR ( 555 ) NOT NULL,
	address VARCHAR ( 555 ) NOT NULL,
	addressUrl VARCHAR ( 555 ) NULL 
);
-- ***************************************************************************************
-- * Settings for appointments
-- ***************************************************************************************
-- Nsa: number of services per appointment
-- Ta: time by appointment
-- Tba: time between appointments
-- Ad: Appointments per Day
CREATE TABLE settings (
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	PRIMARY KEY ( idBusiness ),
	startTime VARCHAR ( 555 ) NOT NULL,
	timeEnds VARCHAR ( 555 ) NOT NULL,
	nsa VARCHAR ( 555 ) NOT NULL,
	ta VARCHAR ( 555 ) NOT NULL,
	tba VARCHAR ( 555 ) NOT NULL,
	ad VARCHAR ( 555 ) NOT NULL,
	workingDays VARCHAR ( 555 ) NOT NULL,
	lunchTime INT NOT NULL,
	starTimelunch VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * services
-- ***************************************************************************************
CREATE TABLE Services (
	idServices bigserial NOT NULL,
	PRIMARY KEY ( idServices ),
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	serviceName VARCHAR ( 555 ) NOT NULL,
	description VARCHAR ( 555 ) NOT NULL,
	imageUrl VARCHAR ( 555 ) NOT NULL,
	Price DECIMAL NOT NULL,
	STATE VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * free days
-- ***************************************************************************************
CREATE TABLE FreeDays (
	idfreeDay bigserial NOT NULL,
	PRIMARY KEY ( idfreeDay ),
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	startDays DATE NOT NULL,
	endsDays DATE NOT NULL,
	STATE VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * appointment
-- ***************************************************************************************
CREATE TABLE Appointment (
	idAppointment bigserial NOT NULL,
	PRIMARY KEY ( idAppointment ),
	UuidAppointment VARCHAR (555) NOT NULL,
	idUser BIGINT NOT NULL,
	FOREIGN KEY ( idUser ) REFERENCES Users ( idUser ),
	idBusiness BIGINT NOT NULL,
	FOREIGN KEY ( idBusiness ) REFERENCES Business ( idBusiness ),
	dateAppointment JSONB NOT NULL,
	total DECIMAL NOT NULL,
	STATE VARCHAR ( 555 ) NOT NULL 
);
-- ***************************************************************************************
-- * Details
-- ***************************************************************************************
CREATE TABLE Details (
	idDetails bigserial NOT NULL,
	PRIMARY KEY ( idDetails ),
	idAppointment BIGINT NOT NULL,
	FOREIGN KEY ( idAppointment ) REFERENCES Appointment ( idAppointment ),
	idServices BIGINT NOT NULL,
	FOREIGN KEY ( idServices ) REFERENCES Services ( idServices ),
	Price DECIMAL NOT NULL
);
