class Ball {
  constructor(radius, x, y, initialVelocity) {
    this.radius = radius;
    this.x = x;
    this.y = y;
    this.velocity = initialVelocity;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  move() {
    this.x += this.velocity.getHorizontalComponent();
    this.y += this.velocity.getVerticalComponent();
  }

  getRadius() {
    return this.radius;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }
}
