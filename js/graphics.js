class Graphics {
  constructor(canvas) {
    this.ctx = canvas.getContext()
  }

  clear(x, y, w, h) {
    const aux = this.color
    this.color('white')
    this.ctx.fillRect(x, y, w, h)
    this.color(aux)
  }

  circle(x, y, r) {
    this.ctx.beginPath()
    this.ctx.arc(x, y, r, 0, 2 * Math.PI)
    this.ctx.fill()
  }

  rect(x, y, w, h) {
    this.ctx.fillRect(x, y, w, h)
  }

  color(newColor) {
    this.ctx.fillStyle = newColor
  }
}