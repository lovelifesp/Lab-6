
function convertTemp(a,b){
  var fToC= (a -32) * 5/9;
  var cToF= ((a * 9) /5) +32;
  var unit= b;
  if (unit === "c"){
    console.log(a + " degrees C is " + fToC + " degrees fahrenheit");
  }
  else{
  console.log(a + " degrees F is" + cToF + " degrees celsius");}
}
convertTemp(65, "c");
convertTemp(100, "f");
