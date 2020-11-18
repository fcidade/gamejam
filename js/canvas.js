class Canvas {
  constructor(canvasId) {
    this.canvas = document.getElementById(canvasId)
  }

  getDimensions() {
    return {
      width: this.canvas.width,
      height: this.canvas.height,
    }
  }
  
  getClientDimensions() {
    return {
      clientWidth: this.canvas.clientWidth,
      clientHeight: this.canvas.clientHeight,
    }
  }

  getContext() {
    return this.canvas.getContext('2d')
  }

  addEventListener(eventName, callback) {
    console.log(arguments)
    this.canvas.addEventListener(eventName, callback)
  }
}