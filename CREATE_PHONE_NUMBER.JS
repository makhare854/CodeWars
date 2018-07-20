function createPhoneNumber(numbers){
  //Since the given input is the array of numbers we will first join it in the string called numbers by using join method
 var  joinedNumbers = numbers.join('');
  //now simply return the desired pattern using the substring method
  return '(' + joinedNumbers.substring(0, 3) + ') '
      + joinedNumbers.substring(3, 6)
      + '-'
      + joinedNumbers.substring(6);
  
  
}