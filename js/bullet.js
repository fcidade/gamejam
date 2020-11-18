class Bullet extends Entity {
  constructor(startPos, direction) {
    super()
    this.pos = startPos
    this.dir = direction
  }

  update(input) {
    this.pos = this.pos.add(this.dir)
  }

  draw(g) {
    const {x, y} = this.pos
    g.color('blue')
    g.circle(x, y, 1)
  }

}