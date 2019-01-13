class Ball {
  constructor(radius, bottom, left, initialVelocity) {
    this.radius = radius;
    this.bottom = bottom;
    this.left = left;
    this.velocity = initialVelocity;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  move() {
    this.bottom += this.velocity.getVerticalComponent();
    this.left += this.velocity.getHorizontalComponent();
  }

  getRadius() {
    return this.radius;
  }

  getBottom() {
    return this.bottom;
  }

  getLeft() {
    return this.left;
  }
}
