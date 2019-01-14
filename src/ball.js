class Ball {
  constructor(radius, position, initialVelocity) {
    this.radius = radius;
    this.position = position;
    this.velocity = initialVelocity;
  }

  setVelocity(velocity) {
    this.velocity = velocity;
  }

  getVelocity() {
    return this.velocity;
  }

  negateVelocityComponentX() {
    this.velocity.negateHorizontalComponent();
  }

  negateVelocityComponentY() {
    this.velocity.negateHorizontalComponent();
  }

  move() {
    this.position.x += this.velocity.getHorizontalComponent();
    this.position.y += this.velocity.getVerticalComponent();
  }

  getRadius() {
    return this.radius;
  }

  getPosition() {
    return this.position;
  }
}
