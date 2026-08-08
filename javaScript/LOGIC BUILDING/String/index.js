///

//.. Stringss

//.. 1) Reverse string.

// function reverseString(inputString) {

//     let string = inputString.split('').reverse().join('');

//     console.log(string);

// }
// reverseString("Hello");

// console.log("--------------------------------");


//.. 2) Count vowels.

// function countVowels(val) {
//     let count = 0;
//     for (let i = 0; i < val.length; i++) {

//         if (val[i] === "a" || val[i] === "e" || val[i] === "i" || val[i] === "o" || val[i] === "u") {
//             count++;
//         }



//     }

//     console.log(count);
// }


// countVowels("Mahid");

// console.log("--------------------------------");

//.. 3) Count COnsonants..

//  function countConsonants(val) {
//     let count = 0;

//     for (let i = 0; i < val.length; i++) {
//         if (val[i] !== "a" && val[i] !== "e" && val[i] !== "i" && val[i] !== "o" && val[i] !== "u") {
//             count++;

//         }
//     }
//     console.log(count);

// }
// countConsonants("hamza");

// console.log("--------------------------------");


// //..4) Remove duplicate characters.

// let arr = [1,33,44,33,1,55,50,55,44,2,2,60,60,1,2,4,5,6,7,6,7,9]

// let newArr = [... new Set(arr)];
// console.log(newArr);

// console.log("--------------------------------");

//.. 5)Check anagram.

// function checkAnagrram(str1 , str2) {
//     if (str1.length !== str2.length) {
//         return false;
//     }
//     let newStr1 = str1.split('').sort().join('');
//     let newStr2 = str2.split('').sort().join('');
//     return newStr1 === newStr2;
// }
// console.log(checkAnagrram("listen" , "silent"));

// console.log("--------------------------------");

//..6) Check palindrome.

// function checkPalindrome(str) {
//     const splittedstr = str.split('');
//     console.log(str, splittedstr);

//     const reversestr = splittedstr.reverse();
//     console.log(str, reversestr);

//     const joinstr = reversestr.join('');
//     console.log(str, joinstr, reversestr);

//     if (str === joinstr) {
//         return true;

//     } else {
//         return false
//     }

// }
// checkPalindrome("madam")

// console.log("--------------------------------");


//..7)Longest Word.

// function longestWord(str) {
//     let word = str.split(' ');
//     let longestWord = "";

//    for (let i= 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length) {
//         longestWord = word[i];
//     }
    
// }
//     return longestWord
// }
// console.log(longestWord("I am Muhammad"));

// console.log("--------------------------------");


//..8)Capitalize each word.
 
// function capitalizeEachWord(str) {
//     let word = str.split(' ');
//     let result = "";

//     for(let i = 0; i < word.length; i++){
        
//     result += word[i].toUpperCase() + " "
    
//     }
//     return result;
// }
// console.log(capitalizeEachWord("tom and jerry"));

// console.log("--------------------------------");

//..9) Compress repeated characters.

// function compressString(str) {
//     let result = "";
//     let count = 1;

//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === str[i + 1]) {
//             count++;
//         } else {
//             result += str[i] + count;
//             count = 1;
//         }
//     }

//     return result;
// }
// console.log(compressString("ssddffrrjjwsaa"));


// console.log("----------------------);