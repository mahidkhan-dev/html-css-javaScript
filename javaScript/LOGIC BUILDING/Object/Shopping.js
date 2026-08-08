//

//..6) Shopping Cart.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})
class Cart {
    constructor(name, id, price, product) {
        this.name = name;
        this.id = id;
        this.price = price;
        this.product = [];
    }

    addproduct(product) {
        this.product = product.push()
        console.log("Product Added To Cart");

    }

    removeProduct(product) {
        let index = this.product.indexOf(product);
        this.product.slice()
        console.log("`${} Your Product Has Been Removed");
    }

    checkCart() {

        console.log(this.product);
    }

}

let Shopping = ""


rl.question("Enter ur Name; ", (name) => {
    rl.question("What is your ID: ", (id) => {
        rl.question("Price of The Product: ", (price) => {
            rl.question("Product Name: ", (product) => {

                rl.question("Choose Product: 1.Mobile, 2.Laptop, 3.Tablet",
                    (option) => {
                        switch (option.trim()) {
                            case "1":
                                Shopping = "Mobile"
                                break;

                            case "2":
                                Shopping = "Laptop"
                                break;

                            case "3":
                                Shopping = "Tablet"
                                break;

                            default:
                                console.log("Product u have Search is Invalid :( ");
                                break;

                            }
                            let cart1 = new Cart(name, id, price, product, Shopping)
                            console.log(cart1);
                            cart1.checkCart();
                            cart1.addproduct(Chips);
                            cart1.removeProduct(Mobile);
                            cart1.checkCart()
                            
                            
                        }
                    )
                        
                        
                    })
                })
            })
        })



