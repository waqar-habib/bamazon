CREATE DATABASE IF NOT EXISTS bamazon_DB;
USE bamazon_DB;

DROP TABLE products;

CREATE TABLE IF NOT EXISTS products (
	id INT(10) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    department_name VARCHAR(50) NOT NULL,
    price DECIMAL(6,2) NOT NULL,
    stock_quantity INT DEFAULT 0
    
);

INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Cape Cod Original Kettle Chips', 'Snacks', 2.88, 25);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bamazing Whole Milk, 1 Gallon', 'Dairy', 2.28, 35);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bamazing Bake Shop 100% Whole Wheat Bread', 'Bakery', 1.07, 12);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('New York Garlic Texas Toast, 8 ct.', 'Frozen Food', 2.22, 2);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Coca-Cola Classic Coke 12 oz Cans', 'Drinks', 5.27, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Bamazing Guac, 7 oz', 'Snacks', 4.98, 3);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Galbani Presliced Mozzarella Fresca Log, 16 oz', 'Dairy', 4.97, 13);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Babybel Mini Lights, 7.5oz', 'Dairy', 4.55, 21);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Fresh Organic Strawberries, 1 lb', 'Produce', 2.56, 40);
INSERT INTO products (product_name, department_name, price, stock_quantity) VALUES ('Tyson Fully Cooked Chicken Nuggets, 32 oz', 'Frozen Food', 4.48, 41);