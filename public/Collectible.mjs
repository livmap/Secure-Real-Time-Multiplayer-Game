class Collectible {
  constructor({x, y, value, id}) {
    this.x = x
    this.y = y
    this.value = value
    this.id = id
    this.image = '/Users/princemaphupha/Desktop/Visual Studio Code/multiplayer-game/public/images/coin.png'
  }

}

/*
  Note: Attempt to export this for use
  in server.js
*/
try {
  module.exports = Collectible;
} catch(e) {}

export default Collectible;
