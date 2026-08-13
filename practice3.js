function calculateAiCost(tokensUsed) {
   if(typeof tokensUsed!=='number'){
      return "Invalid"

   }
 else if(tokensUsed<=500 && tokensUsed>=0){
    return 0
 }
 else if(tokensUsed>500){
    let tokenDivided=Math.floor((tokensUsed-500)/100)
    return tokenDivided*5
 }
 else if(tokensUsed<0){
   return "Invalid"
 }
}
console.log(calculateAiCost(500))
