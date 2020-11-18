function createGame() {
  const canvas = new Canvas('canvas')
  const input = new Input(canvas)
  const graphics = new Graphics(canvas)
  const game = new Game(input, graphics)
  const player = new Player(game.state.window.width / 2, game.state.window.height / 2)

  game.instantiate(player)
  game.loop()
}

createGame()