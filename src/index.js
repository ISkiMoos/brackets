module.exports = function check(str, bracketsConfig) {

  let bracketArr = [];
  for (let i = 0; i < bracketsConfig.length; i++) {
      let b = {
        openBracket: bracketsConfig[i][0],
        closeBracket: bracketsConfig[i][1]
      }
      bracketArr.push(b);
  }

  for (let i = 0; i < 151; i++){
      for(let j = 0; j < bracketArr.length; j++) {
        str = str.replace(bracketArr[j].openBracket + '' + bracketArr[j].closeBracket, '');
      }
  }

  if(str.length == 0) {
    return true;
  } else {
      return false;
    }

}
