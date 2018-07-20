function findEvenIndex(arr)
{
  //Code goes here!
  
  var totalsum = 0;
  var leftsum = 0;
  
  //{3,3,3,3}
  
  //checking and adding the value for the initial sum 
  for (var i = 0; i < arr.length; i++) {
    totalsum += arr[i];
  }
  //checking and substracting the value of the right sum
  for (var i = 0; i < arr.length; i++) {
    totalsum -= arr[i];


//checking if that returns 0 or that equals to 0 since we assigned leftsum = 0
    if (leftsum === totalsum) {
      return i;
    }

    leftsum += arr[i];
  }

  return -1;
}