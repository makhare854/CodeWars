function fakeBin(x){
 
 //create new string placeholder to hold result of our 
 var temporary = '';
  for(var i = 0; i < x.length; i++){
    if(x[i] < '5')temporary += '0';
    else if(x[i] >= '5')temporary += '1';
  }
  return temporary;
}