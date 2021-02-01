CREATE DATABASE cat_db;

USE cat_db;

CREATE TABLE cats (
    id INT NOT NULL AUTO_INCREMENT,
    cat_name VARCHAR(50) NOT NULL,
    petted BOOLEAN,
    PRIMARY KEY (id)
)