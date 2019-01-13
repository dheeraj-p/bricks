class Paddle {
  constructor(height, width, x, y) {
    this.height = height;
    this.width = width;
    this.x = x;
    this.y = y;
  }

  getHeight() {
    return this.height;
  }

  getWidth() {
    return this.width;
  }

  getX() {
    return this.x;
  }

  getY() {
    return this.y;
  }

  moveLeft() {
    this.x = this.x - 10;
  }

  moveRight() {
    this.x = this.x + 10;
  }
}
