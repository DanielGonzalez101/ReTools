CREATE TABLE estudiantes (
    idEstudiante INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    correo VARCHAR2(20) NOT NULL,
    contraseña VARCHAR2(20) NOT NULL,
    codigo INT NOT NULL
);

CREATE TABLE profesores (
    idProfesor INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    correo VARCHAR2(20) NOT NULL,
    nombre VARCHAR2(20) NOT NULL,
    contrasena VARCHAR2(20) NOT NULL,
    codigo INT NOT NULL,
    cedula VARCHAR2(20) NOT NULL
);

CREATE TABLE materias (
    idMateria INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    nombre VARCHAR2(30) NOT NULL,
    codigo INT UNIQUE,
    idProfesor INT NOT NULL,
    CONSTRAINT fk_idProfesor FOREIGN KEY (idProfesor) REFERENCES profesores(idProfesor)
);

CREATE TABLE secciones (
    idSeccion INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    idMateria INT NOT NULL,
    nombre VARCHAR2(20) NOT NULL,
    CONSTRAINT fk_idMateria FOREIGN KEY (idMateria) REFERENCES materias(idMateria)
);

CREATE TABLE contenidos (
    idContenido INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
    idSeccion INT NOT NULL,
    visual VARCHAR2(1000),
    tipoRecurso INT,
    titulo VARCHAR2(30) NOT NULL,
    descripcion VARCHAR2(2000),
    CONSTRAINT fk_idSeccion FOREIGN KEY (idSeccion) REFERENCES secciones(idSeccion)
);