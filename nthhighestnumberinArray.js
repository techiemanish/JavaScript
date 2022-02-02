let arr = [1,13,53,23,5,6,78,8,-1]

function myfunc(arr, n){
let temp = arr.sort(function(a,b){return a-b});
let res = temp.reverse();
console.log(res);
return(arr[n-1]);
}

console.log(myfunc(arr, 4)); //4th highest number in array
