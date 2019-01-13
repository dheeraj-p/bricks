const toRadian = degree => (degree * Math.PI) / 180;

class Velocity {
  constructor(speed = 0, direction = 90) {
    this.speed = speed;
    this.direction = direction % 360;
  }

  setDirection(direction) {
    this.direction = direction % 360;
  }

  getHorizontalComponent() {
    return this.getSpeed() * Math.cos(toRadian(this.getDirection()));
  }

  getVerticalComponent() {
    return this.getSpeed() * Math.sin(toRadian(this.getDirection()));
  }

  getDirection() {
    return this.direction;
  }

  setSpeed(speed) {
    this.speed = speed;
  }

  getSpeed() {
    return this.speed;
  }
}
