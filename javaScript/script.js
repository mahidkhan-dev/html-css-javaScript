// EXERCISE

// VARIABLES

// 1. Swap two numbers

let a = "umer"
let b = "mahid"

let c = a
a=b
b=c
console.log(a);
console.log(b);
console.log("-----------------------");


let a = "umer"
let b = "mahad"

b = a
a = b
console.log(a);
console.log(b);



// ----------------------------------


// 2. Find largest of three numbers.

const number1 = 30
const number2 = 50
const number3 = 100 

if(number1 > number2 && number1 > number3){
    console.log("number1 is greatest");
}else if(number2 > number1 && number2 > number3){
    console.log("number2 is greatest");
}else {
    console.log("number3 is greatest");
}
console.log("-----------------------");

// --------------------------------------


// 3. Check if a number is even or odd.

 function check(number){
    if (number % 2 === 0){
        console.log(`${number} is even`);

 } else {
    console.log(`${number} is odd`);
 }}

check(97)
console.log("-----------------------");

// -----------------------------------


// 4. Check if a number is positive, negative or zero.

function check2(num) {
    if (num > 0) {
        console.log("number is positive");

    } else if (num < 0) {
        console.log("number is negative");
    } else {
        console.log("number is zero");

    }
}
check2(-20);
console.log("-----------------------");

// -----------------------------------


// 5. Celsius to Fahrenheit converter.

function fahrenheit (Celsius){
    let Fahrenheit = (Celsius *9/5)+32
    console.log(`${Fahrenheit} F`);

}
fahrenheit(75);
console.log("-----------------------");

// ----------------------------------------------------


// 6. Calculate simple interest.

// To calculate the simple interest you have to multiply principal value with interest rate and loan and investment term in year , I = P*R*T


function simpleInterest(initail,annualRate,time){
    let interstRate = initail*annualRate*time
    console.log(interstRate);

}
simpleInterest(200000,0.06,2);


// -------------------------------------------------


// 7. Calculate compound interest.

function compoundInterest(amount , rate , time ) {

    let interest = amount*(1+rate/100)**time

    console.log(Math.round(interest));

}

compoundInterest(480000 , 2 , 5)
console.log("-----------------------");

// ---------------------------------


// 8. Area of circle.

function areaOfCircle(radius) {

    let area = Math.PI * radius ** 2

    console.log(Math.round(area));

}

areaOfCircle(20)
console.log("-----------------------");

// --------------------------------


// 9. BMI Calculator.

// Height is in meter

function bmi(weight,height){
    console.log(Math.round(weight / height**2));

}
bmi(85,1.88976)
console.log("-----------------------");


// -------------------------


// 10. Grade calculator.

const score = 80

if (score >= 90) {
    console.log("Grade A+");
} else if (score >= 80) {
    console.log("Grade A");
} else if (score >= 70) {
    console.log("Grade B");
} else if (score >= 60 ) {
    console.log("Grade C");
} else if (score >= 50) {
    console.log("Grade D");
} else {
    console.log("Grade F");
}
console.log("-----------------------");


// --------------------------------------


// LOOPS


// 11. print 1-100

for(let i = 1 ; i<101 ; i++){
    console.log(i);
}
console.log("-----------------------");


// -------------------------------


// 12. print even numbers

for(let i = 1 ; i <= 10 ; i++){
    if (i % 2 === 0) {
        console.log(i)
    }
}
console.log("-----------------------");


// -------------------------


// 13. Print odd numbers.

for (let i = 1; i <= 20 ; i++){
    if (i % 2 !== 0 ) {
        console.log(i);   
    }
}  
console.log("-----------------------");


// -------------------------------------


// 14. Multiplication table.

for(let i = 1 ; i <= 10 ; i++){
    for(let j = 1 ; j <=10 ; j++ ){
        console.log(`${i}x${j} = ${i * j}`);    
    }
    console.log("------------------------------");
}
 console.log("-----------------------");

// 15. Sum of first N numbers.

function printFirst (n){
    let sum = 0;
    for(let i = 1; i <= n; i++){
      sum += n; 
}
    return sum;
}

console.log(printFirst(5));

console.log("-----------------------");


// ------------------------------


// 16. fabionacci series

function fabionacci(num){
    let  num1 = 0;
    let  num2 = 1;

    for(let i = 1 ; i <= num ; i++){

        console.log(num1);

        let temp = num1 + num2
        num1 = num2
        num2 = temp

    }

}
fabionacci(20)
console.log("-----------------------");


// -------------------------------


// 17. 18. Reverse a number.

function reverse(num){
    if (typeof num === "number"){
        let number = num.toString().split("").reverse().join("")
        console.log(Number(number));

    }
}
reverse(432)

console.log("-----------------------");
//-----------------------------------------


function reverseNumber(num){
    if (typeof num === "number") {
        let str =num.toString()
        let i = str.length-1
        while (i >= 0) {
            console.log(str[i]);
            i--
        }   
    }
}

reverseNumber(123456789)

console.log("-----------------------");


// ------------------------------


// 19. Count digits.

function Count(val){
    if (typeof val === "number"){
        console.log("give a word");

    }
    let counter = val.length
    console.log(counter);


}
Count("Hello")

console.log("-----------------------");


// ----------------------------


function count(val){
   let i = 1
   while (i <= val.length) {
    console.log(i);
    i++

   }
}

count("umer")

console.log("-----------------------");


// ---------------------------

// ... fACTORIAL 

function factorial(num){
    let number= 1;
    for(i= 1; i<= num; i++){
        number *= i;

    }
        console.log(number);
        
}

factorial(4)

console.log("-----------------------");


// ------------------------------------------------


// PATTERN


// 21. Right triangle

for ( let i = 0; i<=5; i++ ){
    let star=""
    for(let j = 0; j <=i; j++){
          star += "* " 
    }
      console.log(star);


}

console.log("-----------------------");


// ----------------------------------------- 


//23. Pyramid

let row = 5
for (let i = 0; i <= 5; i++) {
    let star = ""

    for (let j = 0; j < row - 1 - i; j++) {
        star += " "
    } for (let j = 0; j <= i; j++) {
        star += "* "
    }
    console.log(star);

}

console.log("-----------------------");


// ----------------------------


// ...inverted pyramid

for (let i = 0; i <= 5; i++) {
    let star = ""

    for (let j = 0; j < i; j++) { // for spacing
            star += " "

    } for (let j = 0; j < 11 - (2 * i); j++) {
        star += "*"
    }
    console.log(star);
}
console.log("-----------------------");


// -------------------------------------------------------

// . Hollow square.............................

let n = 5;
for (i = 1; i <= 5; i++) {

    let star = ""

    for (j = 1; j <= 5; j++) {

        if (i === 1 || i === n || j === 1 || j === n) {
            star += "* ";
        } else {
            star += "  ";
        }


    } 
    console.log(star);

 }


console.log("-----------------------");

// ----------------------------------------------------

// / ... DAIMOND 

for (let i = 1; i <= 5; i++) {
    let star = ""

    for (let j = 5; j >= i; j--) {
        star += " "

    } for (let k = 1; k <= (2 * i - 1); k++) {
        star += "*"
    }
    console.log(star);


}

for (let i = 1; i <= 5; i++) {
    let star = ""
    for (let j = 0; j < i; j++) {
        star += " "
    }
    for (let k = 0; k < 11 - (2 * i); k++) {
        star += "*"
    }
    console.log(star);

}

console.log("-----------------------------");



