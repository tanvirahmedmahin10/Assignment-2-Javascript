function isElevatorSafe(weights) {
    if(Array.isArray(weights)===false){
        return "Invalid"
    }
   let sum=0
  for(let weight of weights){
    sum+=weight
  }
 

  if(sum<=400){
    return true
  }
  else{
    return false
  }
}
// isElevatorSafe([60,75,50])
console.log(isElevatorSafe([]))

