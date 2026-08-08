class mahidAcc {
        #balance;
    constructor(name, bank, balance) {
        
        this.username = name;
        this.userbank = bank;
        this.#balance = balance;
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
let user1 = new mahidAcc("Mahid", "Habib Bank", 10000);
console.log(user1);

user1.checkBalance();
user1.Deposit(15000);
user1.Withdraw(10000);
user1.checkBalance();

