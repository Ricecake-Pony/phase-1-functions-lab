// Code your solution in this file!
//function distanceFromHqInBlocks(remainingBlocks) {
 //   let streetLocation = remainingBlocks - 42;
   // console.log(remainingBlocks);
    //console.log(streetLocation, remainingBlocks);

    //return Math.abs(streetLocation);  
  //}
  
  function distanceFromHqInBlocks(pickUp) {
    if (pickUp > 42){
      return pickUp - 42;
   } else {
      return 42 - pickUp;
    }
  
  }

  function distanceFromHqInFeet(blockNumber) {
    let remainingBlocks = distanceFromHqInBlocks(blockNumber);

    return remainingBlocks * 264;
    
  }

  function distanceTravelledInFeet(start, destination) {
    //let distanceCovered = Math.abs(start - destination) *264;
    if (start > destination){
      return (start - destination) * 264;
    } else {
      return (destination - start) * 264;
    }

   console.log(distanceTravelledInFeet);

   //return distanceCovered;
  }

  function calculatesFarePrice(startBlock, endBlock) {
    //returns the fare for the customer

      let distance = distanceTravelledInFeet(startBlock, endBlock);
      console.log(distance)
      
     if (distance <= 400){
        return 0;
      } else if (distance <= 2000 ){
         return (distance - 400) * .02;
      } else if ( distance <= 2500){
  return 25
      } else { distance > 2500
  
     return "cannot travel that far";
    }
  }