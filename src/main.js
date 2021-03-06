const KEY_ARROW_RIGHT = 'ArrowRight';
const KEY_ARROW_LEFT = 'ArrowLeft';
const GAME_WINDOW_WIDTH = 960;
const GAME_WINDOW_HEIGHT = 680;

const toPixels = function(value) {
  return `${value}px`;
};

const getPaddleView = function(document) {
  return document.getElementById('paddle_1');
};

const getBallView = function(document) {
  return document.getElementById('ball_1');
};

const getGameWindow = function(document) {
  return document.getElementById('game-window');
};

const keyDownEventListener = function(document, game) {
  if (event.key == KEY_ARROW_RIGHT) {
    game.movePaddleRight();
  }
  if (event.key == KEY_ARROW_LEFT) {
    game.movePaddleLeft();
  }
  drawPaddle(document, game.getPaddle());
};

const setEventListeners = function(document, game) {
  getGameWindow(document).onkeydown = keyDownEventListener.bind(
    null,
    document,
    game
  );
};

const drawPaddle = function(document, paddle) {
  const paddleView = getPaddleView(document);
  const position = paddle.getPosition();
  paddleView.style.width = toPixels(paddle.getWidth());
  paddleView.style.height = toPixels(paddle.getHeight());
  paddleView.style.bottom = toPixels(position.getY());
  paddleView.style.left = toPixels(position.getX());
};

const createPaddle = function(document) {
  const gameWindow = getGameWindow(document);
  const paddleView = document.createElement('div');
  const position = new Position(430, 10);
  const paddle = new Paddle(20, 100, position);
  paddleView.className = 'paddle';
  paddleView.id = 'paddle_1';
  gameWindow.appendChild(paddleView);
  drawPaddle(document, paddle);
  return paddle;
};

const drawBall = function(document, ball) {
  const ballView = getBallView(document);
  const position = ball.getPosition();
  ballView.style.width = toPixels(ball.getRadius());
  ballView.style.height = toPixels(ball.getRadius());
  ballView.style.bottom = toPixels(position.getY());
  ballView.style.left = toPixels(position.getX());
};

const createBall = function(document) {
  const gameWindow = getGameWindow(document);
  const ballView = document.createElement('div');
  const ballVelocity = new Velocity(2, 135);
  const position = new Position(430, 40);
  const ball = new Ball(30, position, ballVelocity);
  ballView.className = 'ball';
  ballView.id = 'ball_1';
  gameWindow.appendChild(ballView);
  drawBall(document, ball);
  return ball;
};

const moveBall = function(game) {
  game.moveBall();
  drawBall(document, game.getBall());
};

const initializeGameWindow = function(document, width, height) {
  const gameWindow = getGameWindow(document);
  gameWindow.style.width = toPixels(width);
  gameWindow.style.height = toPixels(height);
  gameWindow.focus();
};

const createGame = function(height, width) {
  const paddle = createPaddle(document);
  const ball = createBall(document);
  const game = new Game(height, width, paddle, ball);
  initializeGameWindow(document, width, height);
  return game;
};

const intializeGame = function() {
  const game = createGame(GAME_WINDOW_HEIGHT, GAME_WINDOW_WIDTH);
  setEventListeners(document, game);
  setInterval(() => moveBall(game), 5);
};

window.onload = intializeGame;
