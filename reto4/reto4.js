function findTheKiller(whisper, suspects) {
    let pattern = "^"
    for (let i=0; i < whisper.length; i++){
      if (whisper[i] === "~"){
        pattern += "[a-z]"
      } else{
        pattern += whisper[i];
      }
    }
    let re = new RegExp(pattern, "i");
    let solution = ""
    suspects.map(suspectName => re.test(suspectName) ? solution += suspectName + "," : null)
  
    return solution.slice(0,-1)
  }