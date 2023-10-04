//Caesars Cipher freecodecamp certification Question
function rot13(str) {
  let arr = str.split("");
  const alphabet = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
  let res = [];
  for(let i in arr){
    if(alphabet.includes(arr[i])){
      let index = alphabet.indexOf(arr[i]);
      let newIndex = index+13;
      if(newIndex > 25){
        newIndex = newIndex-26;
      }
      res.push(alphabet[newIndex]);
    }
    else{
      res.push(arr[i]);
    }
  }
  return res.join("");
}

rot13("SERR YBIR?"); //FREE LOVE?
rot13("SERR PBQR PNZC"); //FREE CODE CAMP
rot13("SERR CVMMN!"); //FREE PIZZA!
