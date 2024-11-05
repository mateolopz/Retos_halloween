function findSafestPath(dream) {
    let m = dream.length;
    let n = m!== 0 ? dream[0].length : 0;
    let copy = dream.slice();
    if (m === 1 && n === 1){
      return dream[0][0]
    } else if (m===0 || n===0)
    {
      return 10000
      }
      else{
      copy.pop()
      let noLastCol = dream.map(lista => lista.slice(0,-1));
      let value = Math.min(findSafestPath(copy), findSafestPath(noLastCol))+dream[m-1][n-1]
      return value
    } 
  }