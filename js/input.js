class Input {
  constructor(canvas) {
    canvas.addEventListener('mousemove', this.mouseMove.bind(this))
    canvas.addEventListener('mousedown', this.mouseDown.bind(this))
    canvas.addEventListener('mouseup', this.mouseUp.bind(this))

    this.canvasDimensions = {
      ...canvas.getDimensions(),
      ...canvas.getClientDimensions()
    }
    this.mouseClick = false
    this.mouse = new Vector()
  }

  isMouseDown() {
    return this.mouseClick || false
  }

  mouseMove(e) {
    this.mouse = new Vector(
      e.offsetX * this.canvasDimensions.width / this.canvasDimensions.clientWidth,
      e.offsetY * this.canvasDimensions.height / this.canvasDimensions.clientHeight
    )
  }

  mouseDown(e) {
    this.mouseClick = true
  }

  mouseUp(e) {
    this.mouseClick = false
  }
}