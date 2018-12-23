/*check if an object has a specific property and returns corresponding value*/

var myObj = {
  gift: "pony",
  pet: "kitten",
  bed: "sleigh"
};

function checkObj(checkProp) {
 var result ;
 if (myObj.hasOwnProperty(checkProp) == true ) {
   result = myObj[checkProp];
 }
   else {
   result = "Not Found";
 }
  return result;
}
console.log(checkObj("gift")); //returns pony

