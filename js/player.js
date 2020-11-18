class Player extends Entity {
  constructor(x, y) {
    super()
    this.pos = new Vector(x, y)
    this.speed = 1
    this.timeToShoot = 300
    this.canShoot = true
  }

  update(input) {
    this.targetDistance = input.mouse.sub(this.pos)
    
    if (this.targetDistance.hip() > 5)
      this.pos = this.pos.add(this.targetDistance.normalized().mult(this.speed))

    if (input.isMouseDown() && this.canShoot) {
      this.shoot()
    }
  }

  shoot() {
    const dir = this.targetDistance.normalized()
    //console.log(dir)
    this.instantiate(new Bullet(this.pos, dir))

    this.canShoot = false
    setTimeout(() => {
      this.canShoot = true
    }, this.timeToShoot)
  }

  draw(g) {
    const {x, y} = this.pos
    const {x: targetX, y: targetY} = this.targetDistance
    const {x: eyeX, y: eyeY} = this.targetDistance.normalized()

    g.color('black')
    g.circle(x, y, 2)

    g.color('red')
    g.rect(x + targetX, y + targetY, 1, 1)
    g.rect(x + eyeX, y + eyeY, 1, 1)
  }

}