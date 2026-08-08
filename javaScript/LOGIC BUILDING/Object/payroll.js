//
//..Employee Payroll...

const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
})

class Employee {
    constructor(name, leave, overtime, feild) {
        this.name = name;

        this.leave = Number(leave);
        this.overtime = Number(overtime);
        this.feild = feild;

    }
}

let add = 0;
let minus = 0;
let salary = 0;

rl.question("What is your Name :", (name) => {
    rl.question("Employee Leave :", (leave) => {

        rl.question("Overtime Of Employe :", (overtime) => {
            rl.question("What is your feild :", (feild) => {




                rl.question("Choose options: 1.IT Feild, 2.Developers Feild, 3.Cybersecurity: ",
                    option => {



                        switch (option.trim()) {
                            case "1":
                                salary = 100000;

                                break;
                            case "2":
                                salary = 70000;

                                break;
                            case "3":
                                salary = 100000;
                                break;
                            default:
                                console.log("there is no such feild");
                                rl.close();
                                break;
                        }

                        if (Number(overtime) > 0) {
                            let hour_pay = salary / 176;
                            let extra = hour_pay * 1.5
                            add = Math.round(extra * overtime)
                        }

                        if (Number(leave) > 2) {
                            let day = salary / 22;
                            let extra_leave = leave - 2;
                            minus = Math.round(extra_leave * day)
                        }
                        netSalary = Math.round(Number(salary) + add - minus);

                        let Employe1 = new Employee(name, leave, overtime, feild)
                        console.log(Employe1);
                        
        
                        console.log("Overtime Bonus", add);
                        console.log("Leave Deduction", minus);
                        console.log("Your Total Salary", netSalary);
                        
                        
        
        
        
                        rl.close();
                    })


            })
        })
    })
})

