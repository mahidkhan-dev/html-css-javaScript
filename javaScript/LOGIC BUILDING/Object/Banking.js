//

//.6)Banking Account.

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

class Account {
    #balance;
    constructor(name, id, bank, balance) {
        this.name = name;
        this.id = id;
        this.bank = bank;
        this.#balance = Number(balance);
    }

    Deposit(amount) {
        if (amount > 0) {
            this.#balance += amount
            console.log(`You Deposit Amount ${amount} Rs`);
        }


    }
    Withdraw(amount) {
        if (amount < this.#balance) {
            this.#balance -= amount;
            console.log(`You Withdraw  ${amount} Rs `);
        } else {
            console.log("Amount is insufficient");

        }
    } checkBalance() {
        console.log(this.#balance);
    }
}

let bankName =""

rl.question("What is your Name: ", (name) => {
    rl.question("Enter ur Bank ID: ", (id) => {
        rl.question("Your Bank Name: ", (bank) => {
            rl.question("Bank Balnce: ", (balance) => {

                rl.question("Choose Your Bank: 1.Habib Bank, 2.Meezan Bank, 3.Soneri Bank, 4.Faisal Bank: ",
                    (option) => {
                        switch (option.trim()) {
                            case "1":
                                bankName = "Habib Bank"
                                break;

                            case "2":
                                bankName = "Meezan Bank"
                                break;

                            case "3":
                                bankName = "Soneri Bank"
                                break;

                            case "4":
                                bankName = "Faisal Bank"
                                break;
                            default:
                                console.log("There Is no Such Bank --Invalid-- :( ");
                                break;

                        }
                        let user1 = new Account (name, id, bank , balance, bankName)
                        console.log(user1);
                        user1.checkBalance();
                        user1.Deposit(50000);
                        user1.Withdraw(25000);
                        user1.checkBalance();
                        rl.close();
                        
                        
                    }
                )
            })
        })
    })
})