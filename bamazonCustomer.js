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
});

purchaseItem();

function purchaseItem() {
    connection.query('SELECT * FROM products', function(err, res){
        // display products and price to user
        for (var i = 0; i < res.length; i++) {
            console.log('Item: ' + res[i].product_name + ' | Price: ' + res[i].price + ' | Available: ' + res[i].stock_quantity);
        }
        
        // Inquirer prompts 
        inquirer.prompt([{
            // Choose Product
            name: "choice",
            type: "rawlist",
            message: "What would you like to purchase today from Bamazon Pantry?",
            choices: function(value) {
                var itemsArray = [];
                for (var i = 0; i < res.length; i++) {
                    itemsArray.push(res[i].product_name);
                }
                return itemsArray;
            }
        }, 