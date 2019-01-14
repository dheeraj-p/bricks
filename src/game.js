class Game {
  constructor(height, width, paddle, ball) {
    this.height = height;
    this.width = width;
    this.paddle = paddle;
    this.ball = ball;
  }

  movePaddleRight() {
    this.paddle.moveRight();
  }

  movePaddleLeft() {
    this.paddle.moveLeft();
  }

  isCollidingWithVerticalBoundary(position) {
    return position.getX() <= 0 || position.getX() >= this.width;
  }

  isCollidingWithHorizontalBoundary(position) {
    return position.getY() <= 0 || position.getY() >= this.height;
  }

  moveBall() {
    const ballPosition = this.ball.getPosition();
    if (this.isCollidingWithVerticalBoundary(ballPosition)) {
      this.ball.negateVelocityComponentX();
    }

    if (this.isCollidingWithHorizontalBoundary(ballPosition)) {
      this.ball.negateVelocityComponentY();
    }
    this.ball.move();
  }

  getBall() {
    return this.ball;
  }

  getPaddle() {
    return this.paddle;
  }
}
