//.. Prime Checker

function primeChecker(num) {
    let val = true;

    if (num <= 1) {
        val = false;
    } else {
        for (let i = 2; i < num; i++) {
            if (num % i === 0) {
                val = false;
                break;
            }
        }
    }

    if (val) {
        console.log(`${num} is Prime Number`);
    } else {
        console.log(`${num} is not Prime Number`);
    }
}

primeChecker(5);


//.. Armstrong Number.

// 1, 153, 370, 371. 407 are Armstring Numbers

let x = 153;
let sum = 0;
let temp = x;

while(temp > 0 ){
    y = temp % 10
        sum += y**3
    temp = parseInt(temp/10)
    console.log(x,sum);
    
}if(x=== sum){
    console.log(`${sum} is Armstrong Number`);
    
}else{
    console.log(`${sum} is not Armstrong Number`);

}


// .. Palindrome Checker
function palinDrome(inputString) {
    const splittedinput= inputString.split('');
    console.log(inputString, splittedinput);

    const reversinput = splittedinput.reverse('');
    console.log(inputString, reversinput);
    
    const joininput = reversinput.join('');
    console.log(inputString, joininput , reversinput);
      

    if(inputString === joininput){
    return true;

}else{
    return false;
}}
console.log(palinDrome("teeth"));

//.Perfect Numbers.
function perfectNumber(num) {
    let sum = 0;
    for(let i = 1; i< num; i++){
        if(num % i=== 0){
            sum += i
        }
    }if (sum === num){
        console.log(`${num} is Perfect Number`);
        
    }else{
        console.log(`${num} is not Perfect number`);
        
    }
    
}

console.log(perfectNumber(30));
 
//.. GCD
function greatestCommondivisor(a,b) {
    while (b !== 0) {
        let temp = b;
        b= a % b;
        a = temp;
    }
    return a;
} 
console.log(greatestCommondivisor(150,400));


//.. LCM
 
    let num1 = 50;
    let num2 = 15;

    let max = num1 > num2 ? num2 : num1;

    while (true) {
        if(max % num1 === 0 && max % num2 === 0){
            console.log("LCM =" ,max);
            break;
        }
            max++;
        }
    
        // -----------------------------------
     
        //.. Recursive Factorial

        function factorial(num) {
            if (num=== 1) {
                return 1;
            }
            return num * factorial(num-1);
        }
        console.log(factorial(5));

        //.. REcursive Fabbionacci

        function recursiveFabbionacci(num) {
            if (num === 0){
                return 0;
            }
            if (num === 1) {
                return 1;
            }
            return  recursiveFabbionacci(num - 1) + recursiveFabbionacci(num -2)
        }
        console.log(recursiveFabbionacci(6));
        
        //.. DECIMAL TO BINARY

        function decimalToBinary(num) {
            let binary = ''
            while (num>0){
                binary = (num % 2) + binary
                num = Math.floor(num/2);
            }
            return binary
        }
        console.log(decimalToBinary(10));
        
