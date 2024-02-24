-- Crear la base de datos ToolConDB 
 CREATE DATABASE ToolConDB;
 GO

USE ToolConDB;
GO

-- Eliminar tablas si existen para evitar errores al crearlas
DROP TABLE IF EXISTS Prestamos;
DROP TABLE IF EXISTS Herramientas;
DROP TABLE IF EXISTS Usuarios;
DROP TABLE IF EXISTS Roles;
DROP TABLE IF EXISTS Estados;
GO

-- Crear tabla de Roles
CREATE TABLE Roles (
    RolID INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(50)
);
GO

-- Crear tabla de Estados
CREATE TABLE Estados (
    EstadoID INT PRIMARY KEY IDENTITY(1,1),
    Descripcion NVARCHAR(50)
);
GO

-- Crear tabla de Usuarios
CREATE TABLE Usuarios (
    UsuarioID INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100),
    Apellido NVARCHAR(100),
    RolID INT FOREIGN KEY REFERENCES Roles(RolID),
    Email NVARCHAR(100),
    Contraseña NVARCHAR(100)
);
GO

-- Crear tabla de Herramientas
CREATE TABLE Herramientas (
    HerramientaID INT PRIMARY KEY IDENTITY(1,1),
    Nombre NVARCHAR(100),
    Marca NVARCHAR(100),
    FechaCompra DATE,
    TiempoUsoEstimado INT, -- En horas
    Costo DECIMAL(10, 2),
    EstadoID INT FOREIGN KEY REFERENCES Estados(EstadoID)
);
GO

-- Crear tabla de Préstamos
CREATE TABLE Prestamos (
    PrestamoID INT PRIMARY KEY IDENTITY(1,1),
    HerramientaID INT FOREIGN KEY REFERENCES Herramientas(HerramientaID),
    UsuarioID INT FOREIGN KEY REFERENCES Usuarios(UsuarioID),
    FechaPrestamo DATE,
    FechaDevolucion DATE,
);
GO

-- Insertar datos de prueba en Roles
INSERT INTO Roles (Nombre) VALUES ('Operario'), ('Almacenista'), ('Jefe de Almacén');
GO

-- Insertar datos de prueba en Estados
INSERT INTO Estados (Descripcion) VALUES ('Disponible'), ('En Uso');
GO

-- Insertar datos de prueba en Usuarios
INSERT INTO Usuarios (Nombre, Apellido, RolID, Email, Contraseña) VALUES
('Juan', 'Pérez', 1, 'juan.perez@example.com', 'password123'),
('Ana', 'Gomez', 2, 'ana.gomez@example.com', 'password123'),
('Carlos', 'Martinez', 3, 'carlos.martinez@example.com', 'password123');
GO

-- Insertar datos de prueba en Herramientas
INSERT INTO Herramientas (Nombre, Marca, FechaCompra, TiempoUsoEstimado, Costo, EstadoID) VALUES
('Taladro', 'Bosch', '2020-03-15', 120, 89.99, 1),
('Sierra Circular', 'Makita', '2021-07-22', 60, 159.49, 2),
('Llave Ajustable', 'Stanley', '2019-11-30', 240, 29.99, 1);
GO
