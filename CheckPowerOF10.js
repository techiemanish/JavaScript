let a = 10000;
let flag = false;
function check(a){
  let b = a.toString();
  let c = b.split("").map(a=>+a);
  for(let i = 0; i < c.length; i++){
    if(c[0] != 1){
      flag = false;
    }
    else if(c[i] == 0){
      flag = true;
    }
  }
  return flag;
}

console.log(check(1000));
