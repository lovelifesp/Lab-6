
function convertTemp(a,b){
  if(b == "f"){
    var fToC = (a -32) * 5/9;
    console.log(a + "degrees F is" + fToC + " degrees celsius");
} else if (b=="c"){
  var cToF= (b *9) /5 +32;
  console.log(a + "degrees c is" + ctoF + " degrees fahrenheit");
}
