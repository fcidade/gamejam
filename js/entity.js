class Entity {

  constructor() {
    this.game = null
  }

  attachGame(game) {
    this.game = game
  }

  instantiate(entity) {
    this.game.instantiate(entity)
  }

  update(input) {
    console.log('update not implemented')
  }

  draw(graphcis) {
    console.log('draw not implemented')
  }
}