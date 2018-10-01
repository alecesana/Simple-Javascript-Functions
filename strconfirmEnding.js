//Check a string ends with a specific value


function confirmEnding(str, target) {

  if ( target ==  str.substring(str.length - target.length)){
  return true;
  }
  else {
    return false;
  }
}

console.log(confirmEnding("Bastian", "n"));