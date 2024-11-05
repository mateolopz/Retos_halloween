function battleHorde(zombies, humans) {
    let zombiePoints = 0;
    let humanPoints = 0;
    for (let i =0; i< zombies.length; i++){
      zombiePoints = zombiePoints + parseInt(zombies[i]);
      humanPoints = humanPoints + parseInt(humans[i]);
    }
      let result = Math.abs(zombiePoints-humanPoints)
      if(zombiePoints>humanPoints){
        return result.toString()+"z"
      } else if (humanPoints>zombiePoints){
        return result.toString()+"h"
      }
    return 'x'
  }