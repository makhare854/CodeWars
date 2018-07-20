function rgb(r, g, b){
  // complete this function  
  
  


  function returnHex(num) {
  console.log(rhex);
  console.log(ghex);
  console.log(bhex);
  // Hex can store 16 different values in 1 character
  if (num == null) return "00";
  num = num.length < 2 ? "0" + num : num
  return num.toString(16);
  console.log();
         }     
         
         
  var rhex = returnHex(r).toUpperCase(); 
  var ghex = returnHex(g).toUpperCase();
  var bhex = returnHex(b).toUpperCase();
         
         var hex = rhex+ghex+bhex;
         
         return hex;
    
  
}