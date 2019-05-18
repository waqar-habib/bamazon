CREATE DATABASE IF NOT EXISTS bamazon_DB;
USE bamazon_DB;

DROP TABLE products;

CREATE TABLE IF NOT EXISTS products (
	id INT(10) AUTO_INCREMENT,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (id)
);

INSERT INTO products VALUES ('1', 'Apple iPhone X 64 GB', 'Electronics', '849.99', '2');
INSERT INTO products VALUES ('2', 'Becoming', 'Books', '16.63', '9');
INSERT INTO products VALUES ('3', 'The Moment of Lift', 'Books', '15.89', '31');
INSERT INTO products VALUES ('4', 'Apple 15-inch MacBook Pro', 'Electronics', '2799.99', '1');
INSERT INTO products VALUES ('5', 'Monopoly Empire Game', 'Games', '32.22', '4');
INSERT INTO products VALUES ('6', 'TaoTronics LED Desk Lamp', 'Electronics', '29.99', '6');
INSERT INTO products VALUES ('7', 'CocoMagic Hand Cream', 'Beauty', '9.99', '7');
INSERT INTO products VALUES ('8', 'Essential Oil 3-pack', 'Beauty', '16.99', '10');
INSERT INTO products VALUES ('9', 'Melatonin 10 mg', 'Health', '9.79', '0');
INSERT INTO products VALUES ('10', 'Optimum Nutrition Whey 5 LB', 'Health', '54.99', '50');