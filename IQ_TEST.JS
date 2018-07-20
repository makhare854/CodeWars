function iqTest(numbers) {
  
  
 //Since the input give is not in the array format use .split function on number and initialize itr to the numbers array
  var numbersArray = numbers.split(' ');
  
  //Initialize an array for oddpostion and the even Position
  var oddPositionArray = [];
  var evenPositionArray = [];
  
  //Implement a loop which will traverse through every element in the NumbersArray
  for(var i = 0; i < numbersArray.length; i++) {
  //if loop to check if the number at i position is even or odd if it's odd it'll be added to the odd array and vice versa
    if(numbersArray[i] % 2) {
    
    //dont forget to add i+1 because it's mmentioned in the challenge that "Bob solve a real IQ test, which means indexes of the elements start from 1 (not 0)"
      oddPositionArray.push(i + 1);
    } else {
      evenPositionArray.push(i + 1);
    }
  }
  
  //Now comes the interesting part! since odd member which will be detected will have only one element in the respective arrays we will check for that array and display the value stored in it
  if(oddPositionArray.length === 1) {
    return oddPositionArray[0];
  } else {
    return evenPositionArray[0];
  }
}