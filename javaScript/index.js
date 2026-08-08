let x = 12;
let y = 20;
if (x < 5 && x > 15) {
    console.log("True");
}
else {
    console.log("False")
}

console.log("Hello World!");
alert("JavaScript is working!");

let temp = 40;
if (!(temp < 30)) {
    console.log("Hot");
} else {
    console.log("Pleasent")
}

let score = 80;
let grade = score >= 90 ? "A" : score >= 60 ? "B" : score >= 50 ? "C" : "Fail";
console.log(grade);


// while Loop
let i = 1;
while (i < 50) {
    console.log(i);
    i++;

}


////// for ---quewstion Solvingg

let val = prompt('give a number');
for (let i = 1; i <= val; i++) {
    if (i % 2 === 0) {
        console.log(`${i} is even`);

    } else {
        console.log(`${i} is odd`)

    }

}

///// Functions 
function dance(v1) {
    console.log(`${v1} naach raha hai`);
}


dance("ghora");
dance("heeran");
dance("billi");
dance("chuwa");
dance("bandar");


// First class function
function abcd(val) {
    val();
}
abcd(function () {
    console.log("Hello User");

});

// High Order Function
function abcd() {
    return function () {
        console.log("Hello Developer");
    }
}

abcd()()

/// BMI Calculator...

function bmi(weight, height) {
    return weight / (height * height);

}
console.log(bmi(29, 2.7).toFixed(2));


/// Discount Calculator......

function DiscountCalculator(Discount) {
    return function (price) {
        return price - price * (20 / 100);
    };
}

let ten = DiscountCalculator(10);
let forty = DiscountCalculator(40);

console.log(ten(2000));
console.log(forty(15000));

// Pure and Impure cslculator....

function tripple(val) {
    return val * val * val;

}
console.log(tripple(20));

// IIFe Isolate varaibles

////// ARRAYSS.....

let arr = [1, 30, 50, 44, 100];
let newarr = arr.slice(1, 3);

// Sort Array
let sortArr = [3, 20, 45, 55, 25];
let sortNewArr = arr.sort(function (a, b) {
    return a - b;
})

/// Map

let mArr = [11, 23, 45, 50, 30];

let mNewArr = mArr.map(function (val) {
    return 12;
});

console.log(mNewArr);

// Filter Array

let fArr = [30, 45, 60, 13, 35];
let filterNewArr = fArr.filter(function (val) {
    return (val > 40) 

});

//////// NESTED LOOP

for(let a = 1; a<=5; a++){
    for(let b= 1; b<= a; b++)
        console.log(`${a}x${b} = ${a * b}`);
        
}