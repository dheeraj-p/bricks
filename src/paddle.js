class Paddle {
  constructor(height, width, position) {
    this.height = height;
    this.width = width;
    this.position = position;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  getPosition() {
    return this.position;
  }

  moveLeft() {
    this.position.x = this.position.getX() - 10;
  }

  moveRight() {
    this.position.x = this.position.getX() + 10;
  }
}
