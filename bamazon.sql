CREATE DATABASE bamazon_DB;
USE bamazon_DB;

CREATE TABLE IF NOT EXISTS products (
	id INT(10) AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DOUBLE(4,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (id)
);