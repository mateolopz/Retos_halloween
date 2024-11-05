function createMagicPotion(potions, target) {
    let indexSolution = 100
    let currentMinSecondIndex = 100
    for(let i = 0;i < potions.length; i++){
      if (i != potions.length-1){
        for(let j = i+1; j<potions.length; j++){
  
        let suma = potions[i]+potions[j];
        if(suma == target){
          if (j<currentMinSecondIndex){
            currentMinSecondIndex = j;
            indexSolution = i;
          }
        }
      }
      }
    }
    if(indexSolution != 100 && currentMinSecondIndex != 100){
      return [indexSolution,currentMinSecondIndex]
    }
    return undefined
  }