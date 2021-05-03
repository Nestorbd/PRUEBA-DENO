Drop database if exists pruebaDeno;
Create database pruebaDeno;

use pruebaDeno;

Drop table if exists pruebaDeno; 
Create table prueba (
    id int primary key auto_increment,
    nombre varchar(40)
);

INSERT INTO prueba (nombre) values ("prueba1"), ("prueba2"), ("prueba3");

