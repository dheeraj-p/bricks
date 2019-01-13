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

  moveBall() {
    this.ball.move();
  }

  getBall() {
    return this.ball;
  }

  getPaddle() {
    return this.paddle;
  }
}
