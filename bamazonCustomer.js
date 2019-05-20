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
        }, {
            // How many?
            name: "quantity",
            type: "input",
            message: "How many would you like to purchase?",
            validate: function(value) {
                if (isNaN(value) == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }]).then(function(answer) {

            for (var i = 0; i < res.length; i++) {
                if (res[i].product_name == answer.choice) {
                    var chosenItem = res[i];
                }
            }
                             
            // refresh stock numbers
            var refreshStock = parseInt(chosenItem.stock_quantity) - parseInt(answer.quantity);

            // choose another item if there isn't enough
            if (chosenItem.stock_quantity < parseInt(answer.quantity)) {
                console.log("Sorry, We don't have that many in stock today :/");
                buyAgain();
            }
            // update database
            else {
                connection.query("UPDATE products SET ? WHERE ?", [{stock_quantity: refreshStock}, {id: chosenItem.id}], function(err, res) {
                    console.log("Purchase successful!");

                    var Total = (parseInt(answer.quantity)*chosenItem.price).toFixed(2);
                    console.log("Your total is $" + Total);

                    buyAgain();
                });
            }

        });                          
    });     
}

function buyAgain() {
    inquirer.prompt({
        // purchase more?
        name: "buyAgain",
        type: "list",
        choices: ["Yes", "No"],
        message: "Would you like to purchase another item?"
    }).then(function(answer) {
        if (answer.buyAgain == "Yes") {
            purchaseItem();
        }
        else {
            console.log("Thank you for shoppping at Bamazon Pantry! Have a Bamazing day!")
            connection.end();
        }
    });
}