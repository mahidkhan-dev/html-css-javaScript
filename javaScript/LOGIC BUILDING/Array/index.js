
// //..ARRAYSSSS

// //.1) Find maximum.

// let arr = [1,3,56,78,90]
// let newArr = Math.max(...arr)
// console.log(newArr);


// //..2)Find minimum.
// let array = [23,45,67,76,100]
// let newArr2 = Math.min(...array)
// console.log(newArr2);

// //..3)Second largest.
//  let arr3 = [1,34,56,65,78,94,100]
//  let max = -Infinity;
//  let secondLargest = -Infinity;
//  for (let n of arr3) {                          // for each loop 
//   if (n > max){
//     secondLargest = max;
//     max = n;
//   }else if(n > secondLargest && n != max){
//     secondLargest = n; 
//   }

// //  }
//  console.log("Largest", max);
//  console.log("Second Largest",secondLargest);

// //..3) Third largest.


// let arr4 = [12,45,67,89,100,110];

// let firstLargest = -Infinity;
// let secondLargest = -Infinity;
// let thirdLargest = -Infinity;

// for (let n of arr4) {

//     if (n > firstLargest) {
//         thirdLargest = secondLargest;
//         secondLargest = firstLargest;
//         firstLargest = n;
//     }

//     else if (n > secondLargest && n !== firstLargest) {
//         thirdLargest = secondLargest;
//         secondLargest = n;
//     }

//     else if (n > thirdLargest && n !== secondLargest && n !== firstLargest) {
//         thirdLargest = n;
//     }
// }

// console.log("Third Largest:", thirdLargest);


// //..4)Remove duplicates.

// let arr5 = [1,4,1,3,6,7]
// let newArr3 = [... new Set(arr5)]
// console.log(newArr3);

// ///..5)Rotate array.

// let arr6 = [0,2,5,6,3,10]
// let newArr4 = (arr6.reverse());
// console.log(newArr4);


// //..6) Merge arrays.

// let arr1 = [34,67,90]
// let arr2 = [76,89,100]
// let newArr4 = arr1.concat(arr2);
// console.log(newArr4);

// //..7)Find missing number.

// let arr7 = [1,2,4,5,6]
// let n = 6;
// let expectedSum = (n*(n + 1)) /2;
// let actualSum = 0;

// for(let s of arr7){
//   actualSum += s;
// }

// let missingNumber = expectedSum - actualSum

// console.log("Missing NUmber Is",missingNumber);



// //..8)Move zeroes to end.

// let arr = [0, 1, 0, 3, 12];

// let zeroes = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] !== 0) {
//         arr[zeroes] = arr[i];
//         zeroes++;
//     }
// }while (zeroes < arr.length) {
//     arr[zeroes] = 0;
//     zeroes++;
// }

// console.log(arr);

// //..9)Sort without using sort(). ----------------------------(yai samgh nahi araha hai kahi sai bhi)


// //..10) Bubble sort.

// let arr9 = [1,4,3,6,8,10,9]

// for(let i = arr9.length;i > 0; i--){
//     for (let j = 0; j < i - 1;j++) {
//        if (arr9[j] > arr9[j+1]) {
//         [arr9[j], arr9[j + 1]] = [arr9[j+ 1] , arr9[j]];
//        }

//     }
// }
// console.log(arr9);

// //..11) Selection sort.

// let arr10 = [12, 34, 65, 78, 100, 1, 2, 4]
// for (let i = 0; i < arr10.length; i++) {
//     let selection = i;

//     for (let j = i; j < arr10.length; j++) {
//         if (arr10[j] < arr10[selection]) {
//             selection = j;
//         }
//     }
//  [arr10[selection], arr10[i]] = [arr10[i] , arr10[selection]];
// }
// console.log(arr10);






let arr3 = [1, 3, 45, 67, 98]

let firstLargest = -Infinity
let secondLargest = -Infinity

for (let n of arr3) {
    if (n > firstLargest) {
        secondLargest = firstLargest;
        firstLargest = n;
    }
    else if (n > secondLargest && n != firstLargest) {

        secondLargest = n
    }

    }
console.log(firstLargest);

console.log(secondLargest);
















