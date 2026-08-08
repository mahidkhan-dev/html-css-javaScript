//

//..Book Library.


const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Library {
    constructor(name, libraryId, book, time, phone) {
        this.name = name;
        this.libraryId = libraryId;
        this.book = book;
        this.time = time;
        this.phone = phone;
    }
}

let borrow = "";

rl.question("What is ur Name:", (name) => {
    rl.question("Enter ur libraryId:", (libraryId) => {
        rl.question("Write book Name:", (book) => {
            rl.question("What is the time u have taken Book:", (time) => {
                rl.question("Enter ur Phone Number:", (phone) => {

                    rl.question("Choose Book : 1.The Reluctant Fundamentalist, 2.War and Peace, 3.Harry Potter series, 4.Pride and Prejudice: ",
                        (option) => {
                            switch (option.trim()) {
                                case "1":
                                    borrow = "The Reluctant Fundamentalist"
                                    break;
                                case "2":
                                    borrow = "War and Peace"
                                    break;
                                case "3":
                                    borrow = "Harry Potter series"
                                    break;
                                case "4":
                                    borrow = "Pride and Prejudice"
                                    break;
                                default:
                                    console.log("Invalid Book ");
                                    break;

                                    
                                    
                            }
                            let book1 = new Library(name,libraryId,book,time,phone, borrow)
                                    console.log(book1);
                                    rl.close();
                        })

                })
            })
        })
    })
})