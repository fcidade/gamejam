class Game {
  constructor(input, graphics) {
    this.state = {
      window: {
        width: 50,
        height: 50
      },
      entities: []
    }

    this.input = input
    this.graphics = graphics
  }

  instantiate(entity) {
    entity.attachGame(this)
    this.state.entities.push(entity)
  }

  loop() {
    this.update()
    this.draw(this.graphics)
    requestAnimationFrame(this.loop.bind(this))
  }

  update() {
    for (const entity of this.state.entities) {
      entity.update(this.input)
    }
  }

  draw(g) {
    g.clear(0, 0, this.state.window.width, this.state.window.height)

    for (const entity of this.state.entities) {
      entity.draw(g)
    }
  }
}