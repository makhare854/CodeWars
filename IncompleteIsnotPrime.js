function notPrimes(a,b){


var counter;
var list = [];
var list2 = [];//create new array



function isPrime(number) {
  if (typeof number !== 'number' || !Number.isInteger(number)) {
    return false;
  }

  if (number < 2) {
    return false;
  }

  if (number === 2) {
    return true;
  } else if (number % 2 === 0) {
    return false;
  }
 
  for (var i = 3; i*i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;

}


var range1 = a;
var range2 = b;


for(var i = range1 ; i<= range2; i++){


if(isPrime(i)==false){
var number = i;

list.push(i);
}


}




console.log(list);



















//last wala
}
