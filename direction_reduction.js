function dirReduc(arr){
  //aalet us create a function of the array to determine the two sets of opposites are coming together

  var i = 0;    
  while(i < arr.length) {
  //here we are checking wheter the conditions are not what we don't want them to be
    if((arr[i] === "NORTH" && arr[i+1] === "SOUTH") ||
    (arr[i] === "SOUTH" && arr[i+1] === "NORTH") ||
    (arr[i] === "EAST" && arr[i+1] === "WEST") ||
    (arr[i] === "WEST" && arr[i+1] === "EAST")) {
    //all the conditions are writeen int the  || operator 
    //we will use splice function to make sutre we are not writing same elements again and remove them if we do
        arr.splice(i, 2);
        i--;
    }
    else {
    //if it does not run for the first loop we will go for the next element
        i++;
    }
  }
  //finally we will display the data
  return arr;

}