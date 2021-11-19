function convertToRoman(num) {
  let res = [];
  while(num != 0){
    let out = num%10;
    res.push(out);
    num = Math.floor(num/10);
  }
  let work = [];
  for(let i = 0; i < res.length; i++){
    if(res[i] != 0 && i == 0){
      work.push(res[i])
    }else if(res[i] != 0 && i == 1){
      work.push(res[i] * 10);
    }
    else if(res[i] != 0 && i == 2){
      work.push(res[i] * 100);
    }
    else if(res[i] != 0 && i == 3){
      work.push(res[i] * 1000);
    }
  }
  const obj = {
    1 : "I",
    2 : "II",
    3 : "III",
    4 : "IV",
    5 : "V",
    6 : "VI",
    7 : "VII",
    8 : "VIII",
    9 : "IX",
    10 : "X",
    20 : "XX",
    30 : "XXX",
    40 : "XL",
    50 : "L",
    60 : "LX",
    70 : "LXX",
    80 : "LXXX",
    90 : "XC",
    100 : "C",
    200 : "CC",
    300 : "CCC",
    400 : "CD",
    500 : "D",
    600 : "DC",
    700 : "DCC",
    800 : "DCCC",
    900 : "CM",
    1000 : "M",
    2000 : "MM",
    3000 : "MMM"
  }
  let result = work.reverse();
  //console.log(result);
  let out = [];
  for(let i in result){
    out.push(obj[result[i]])
  }
  //console.log(out.join(""));
 return out.join("");
}

convertToRoman(3999);
