// 

//OBJECT

//.1)Student Management System.

const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Student {
    constructor(name, percentage, field, email) {
        this.name = name;
        this.percentage = percentage;
        this.email = email;
        this.field = field;
    }
}

rl.question("what is your name ? :", (name) => {
    rl.question("provide your percentage of intermediate? :", (percentage) => {
        rl.question("provide your email :", (email) => {
            rl.question("Enter your field (Medical, Computer Science, Commerce)", (field) => {

                let s1 = new Student(name, percentage, field, email)

                if (s1.percentage >= 45) {

                    if (s1.field == "Medical") {
                        rl.question("choose your university (1: Sir Syed University, 2: Virtual University, 3: Dow ", (options) => {
                            switch (options) {
                                case "1":
                                    console.log(`you got admission in MBBS field, Sir Syed University`);
                                    rl.close();
                                    break;
                                case "2":
                                    console.log(`you got admission in MBBS field, Virtual University`);
                                    rl.close();
                                    break;
                                case "3":
                                    console.log(`you got admission in MBBS field, Dow University`);
                                    rl.close();
                                    break;
                                default:
                                    console.log("you did not get admission");
                                    rl.close();
                                    break;
                            }
                        })
                    }
                    else if (s1.field == "Computer Science") {
                        rl.question("choose your university (1: Sir Syed University, 2: Virtual University, 3: Karachi university)", (options) => {
                            switch (options) {
                                case "1":
                                    console.log(`you got admission in CS field, Sir Syed University`);
                                    rl.close();
                                    break;
                                case "2":
                                    console.log(`you got admission in CS field, Virtual University`);
                                    rl.close();
                                    break;
                                case "3":
                                    console.log(`you got admission in CS field, Karachi University`);
                                    rl.close();
                                    break;
                                default:
                                    console.log("you did not get admission");
                                    rl.close();
                                    break;
                            }
                        })
                    }

                    else if (s1.field == "Commerce") {
                        rl.question("choose your university (1: Sir Syed University, 2: Virtual University, 3: Karachi university)", (options) => {
                            switch (options) {
                                case "1":
                                    console.log(`you got admission in BBA field Sir Syed University`);
                                    rl.close();
                                    break;
                                case "2":
                                    console.log(`you got admission in BBA field, Virtual University`);
                                    rl.close();
                                    break;
                                case "3":
                                    console.log(`you got admission in BBA field, Karachi University`);
                                    rl.close();
                                    break;
                                default:
                                    console.log("you did not get admission");
                                    rl.close();
                                    break;
                            }
                        })
                    }
                } else {
                    console.log("you are not eligible for admission");
                    rl.close();
                }
            })
        })
    })
})




   