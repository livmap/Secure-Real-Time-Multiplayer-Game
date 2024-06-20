class Player {
  constructor({x, y, score, id}) {
    this.x = x
    this.y = y
    this.score = score
    this.id = id

  }

  getDistance(x1, y1, x2, y2){
    let dist = 0
    dist = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
    return dist
  }

  sortDescending(arr) {
    // Use the sort method with a compare function
    return arr.sort((a, b) => b - a);
  }

  movePlayer(dir, speed) {

    if(dir == 'UP'){
      this.y -= speed
    } else if(dir == 'DOWN'){
      this.y += speed
    } else if(dir == 'LEFT'){
      this.x -= speed
    } else if(dir == 'RIGHT'){
      this.x += speed
    }

  }

  collision(item) {
    if(dist(this.x, this.y, item.x, item.y)  < 20){
      return true
    }
  }

  calculateRank(arr) {
    const rankedArray = this.sortDescending(arr)
    const rank = 0
    for (let i = 0; i < rankedArray.length; i++){
      if(rankedArray[i].id == this.id ){
        rank = i + 1
      }
    }

    return rank
    
  }

  
}

export default Player;
