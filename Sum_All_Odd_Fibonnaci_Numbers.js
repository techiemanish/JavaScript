//Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  let a = 0;
  let b = 1;
  let arr = [];
  arr.push(b);
  let c = b + a;;
  while(c <= num){
    a = b;
    b = c;
    arr.push(c);
    c = b + a;
  }
  let odd = arr.filter((item) => item % 2 != 0);
  let sum = (curr, prev) => prev + curr;
  let res = odd.reduce(sum);
  return res;
}

sumFibs(10);