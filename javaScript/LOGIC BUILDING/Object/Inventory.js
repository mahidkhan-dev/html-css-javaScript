//


//..4)Product Inventory.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Inventory {
    constructor(name, id, stock, category, price) {
        this.name = name;
        this.id = id;
        this.stock = stock;
        this.category = category;
        this.price = price;
    }
}

let product = ""

rl.question("What is your Product Name: ", (name) => {
    rl.question("Product ID Here: ", (id) => {
        rl.question("Enter Stock: ", (stock) => {
            rl.question("Product Category: ", (category) => {
                rl.question("Price Of Product: ", (price) => {


                    rl.question("Choose the Category of Product: 1.Food, 2.Electronics, 3.Garments, 4.Grocery ",
                        (option) => {
                            switch (option.trim()) {
                                case "1":
                                    product = "Food";

                                    break;

                                case "2":
                                    product = "Electronics";
                                    break;

                                case "3":
                                    product = "Garments";
                                    break;

                                case "4":
                                    product = "Grocery";
                                    break;


                                default:
                                    console.log("There Is no Such Product :( ");
                                    break;
                            }
                            let product1 = new Inventory(name, id, stock, category, price, product)
                            console.log(product1);
                            rl.close();

                        })

                })
            })
        })
    })
})