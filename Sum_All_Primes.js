//Sum All Primes
function sumPrimes(num) {
  let arr = [];
  for(let i = 2; i <= num; i++){
    let count = 0;
    for(let j = 2; j <= i/2; j++){
      if(i % j == 0){
        count++;
        break;
      }
    }
    if(count == 0){
      arr.push(i);
    }
  }
  let sum = (prev, curr) => prev + curr;
  let res = arr.reduce(sum);
  //console.log(arr);
  //console.log(res);
  return res;
}

sumPrimes(10);