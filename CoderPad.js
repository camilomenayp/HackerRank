/* 
Your previous Plain Text content is preserved below:
Given an array of unique integers, return all pair of integers that sum up to a target sum?
[ 2, 5, 7, 3, 4, 8 ], 10 => [[2,8], [3,7]]
[ 2, 5, 7, 3, 4, 8 ], 14 => []
*/

let a = [2, 5, 7, 3, 4, 8];
let target = 10;
let res = [];
let mapa = {};

for (let i=0;i<a.length;i++)
    if( target-a[i]!=a[i])mapa[target-a[i]]=true;

for (let i = 0;i <a.length; i++) {
        if(mapa[a[i]]===true){
            mapa[target-a[i]]=false
            mapa[a[i]]=false
            res.push([a[i],target-a[i]])
        };
}
console.log(res)
