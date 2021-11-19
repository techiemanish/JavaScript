//Caesars Cipher freecodecamp certification Question
function rot13(str) {
  const rot13 = {
    "A" : "N", "N" : "A",
    "B" : "O", "O" : "B",
    "C" : "P", "P" : "C",
    "D" : "Q", "Q" : "D",
    "E" : "R", "R" : "E",
    "F" : "S", "S" : "F",
    "G" : "T", "T" : "G",
    "H" : "U", "U" : "H",
    "I" : "V", "V" : "I",
    "J" : "W", "W" : "J",
    "K" : "X", "X" : "K",
    "L" : "Y", "Y" : "L",
    "M" : "Z", "Z" : "M",
    "?" : "?", "." : ".",
    "!" : "!"
  }
  //console.log(Object.keys(rot13).length);
  let temp = str.split("");
  //console.log(temp);
  let res = [];
  for(let i in temp){
    if(temp[i] != " "){
      res.push(rot13[temp[i]]);
    }
    else{
      res.push(temp[i]);
    }
  }
  return res.join("");
}
rot13("SERR YBIR?"); //FREE LOVE?
rot13("SERR PBQR PNZC"); //FREE CODE CAMP
rot13("SERR CVMMN!"); //FREE PIZZA!
