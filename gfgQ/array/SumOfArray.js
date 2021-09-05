// Python Program to find sum of array

// Input : arr[] = {1, 2, 3}
// Output : 6
// 1 + 2 + 3 = 6

// Input : arr[] = {15, 12, 13, 10}
// Output : 50

const getSum = (arr) =>{
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
       sum += arr[i]
   }return sum
}

arr = [15, 12, 13, 10];
console.log(getSum(arr));


