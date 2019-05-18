const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'bootcamp',
    database: 'bamazon_DB'
});

connection.connect(function(err) {
    if(err) throw err;
    //console.log(`MySQL connected on ${connection.threadId}`);

    displayInventory();
});

function displayInventory() {
    connection.query("SELECT id, product_name, department_name, price, stock_quantity FROM products", function(err, res) {
        if (err) throw err;
        console.log("Welcome to Bamazon Store! Here's everything that we have in stock...");
        res.forEach(element => {
            var id = element.id;
            var product_name = element.product_name;
            var department_name = element.department_name;
            var price = element.price;
            var stock_quantity = element.stock_quantity;
          console.log(`ID: #${id} - Product: ${product_name} from ${department_name} for $${price} ~~ Available: ${stock_quantity}`);
          });
    })
}
/*
function purchaseProducts() {
    inquirer
        .prompt({
            name: "id",
            type: "input",
            message: "What would you like to buy today? Please type in the ID number to continue with your purchase.",
            validate: function(value){
                if(isNaN(value)===false){
                    return true;
                } else {
                    return false;
                }
            }
        },
        {
            name: "units",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value){
                if(isNaN(value)===false){
                    return true;
                } else {
                    return false;
                }
            }
        })
        .then(function(input){
            id = input.id;
            units = Number(input.units);
        //checkInventory();
        });
}
*/