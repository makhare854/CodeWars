class SmallestIntegerFinder {
  findSmallestInt(args) {
  
  //simply assign the value of args[0] to the variable smallest

  var smallest = args[0];
  
  //check in loop whether the i'th element is smallest or not for all the elements in array 
  	for(var i=1; i< args.length; i++)
    
    
		{
		  //if it is.. assign it to the "smallest"	
			 if (args[i] < smallest)
				smallest = args[i];
			
		}
   
   //finally return smallest
   //happpy coding cheers!
   return smallest;
   
  }
}