/* 

Your previous Plain Text content is preserved below:

Given an array of unique integers, return all pair of integers that sum up to a target sum?
[ 2, 5, 7, 3, 4, 8 ], 10 => [[2,8], [3,7]]
[ 2, 5, 7, 3, 4, 8 ], 14 => []

*/

let a = [2, 5, 7, 3, 4, 8];
let target = 10;
let res = [];

for (let i = 0; i < a.length; i++) {
  for (let x = i + 1; x < a.length; x++) {
    if (a[i] + a[x] == target) {
      res.push([a[i], a[x]]);
    }
  }
}

console.log(res);
