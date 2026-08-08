
// OLD WAY OF CREATING OBJECT

function student(name, rollNo, gmail) {
    this.name = name;
    this.rollNo = rollNo;
    this.gmail = gmail;

}
let std1 = new student("Mahid", 200, "abcd@gmail.com")
console.log(std1.name);


// NEW WAY OF CREATING OBJECT

class vehicle {
    constructor(brand, color) {
        this.brand = brand;
        this.color = color;

    }

}
let vehicle1 = new vehicle("Nisssan", "Black")
console.log(vehicle1);


// OBJECT CLASS , METHODS AND Methods Types:

class kid{
    // Constructor Method

    constructor(name, age, height, dateOfBirth){
        this.studentname = name;
        this.studentage = age;
        this.studentheight = height;
        this.studentdateOfBirth = dateOfBirth;        
    }
        // Prototype Method

     hello(){
        console.log(`Hello ${this.studentname} "Your Age is ${this.studentage} "Your Height is" ${this.studentheight} 
            "And your DATE OF BIRTH" ${this.studentdateOfBirth}`);
        
     }
            // Static Method

     static staticMethod(){
        console.log("Static Function");
        
     }

}
let kid1 = new kid("Mahid", 20, 5 , 2/4/2007);
let kid2 = new kid("Bilal", 19, 4 , 10/6/2007);
let kid3 = new kid("Mahid", 19, 6 , 12/5/2007);
console.log(kid1);
console.log(kid2);
console.log(kid3);


kid1.hello();
kid.staticMethod(); // to call static we have to write class name and then static name.....


//-------------------------------------------------------------------------------------------------------------



