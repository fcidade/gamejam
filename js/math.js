Math.clamp = function (min, max, value) {
  return Math.min(Math.max(min, value), max)
}

class Vector {
  constructor(x=0, y=0) {
    this.x = x
    this.y = y
  }

  add(vector) {
    return new Vector(
      this.x + vector.x,
      this.y + vector.y,
    )
  }

  sub(vector) {
    return new Vector(
      this.x - vector.x,
      this.y - vector.y,
    )
  }

  mult(scalar) {
    return new Vector(
      this.x * scalar,
      this.y * scalar
    )
  }

  normalized() {
    const hip = this.hip()
    return new Vector(
      this.x / hip || 0,
      this.y / hip || 0
    )
  }

  hip() {
    return Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
  }

  angle() {
    return Math.atan2(this.y, this.x)
  }

  angleDeg() {
    return 180 * Math.atan2(this.y, this.x) / Math.PI
  }
}