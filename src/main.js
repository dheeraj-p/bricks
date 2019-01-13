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

const getGameWindow = function(document) {
  return document.getElementById('game-window');
};

const keyDownEventListener = function(document, paddle) {
  if (event.key == KEY_ARROW_RIGHT) {
    paddle.moveRight();
  }
  if (event.key == KEY_ARROW_LEFT) {
    paddle.moveLeft();
  }
  drawPaddle(document, paddle);
};

const setEventListeners = function(document, paddle) {
  getGameWindow(document).onkeydown = keyDownEventListener.bind(
    null,
    document,
    paddle
  );
};

const drawPaddle = function(document, paddle) {
  const paddleView = getPaddleView(document);
  paddleView.style.width = toPixels(paddle.getWidth());
  paddleView.style.height = toPixels(paddle.getHeight());
  paddleView.style.bottom = toPixels(paddle.getBottom());
  paddleView.style.left = toPixels(paddle.getLeft());
};

const createPaddle = function(document) {
  const gameWindow = getGameWindow(document);
  const paddleView = document.createElement('div');
  const paddle = new Paddle(20, 100, 10, 430);
  paddleView.className = 'paddle';
  paddleView.id = 'paddle_1';
  gameWindow.appendChild(paddleView);
  drawPaddle(document, paddle);
  return paddle;
};

const createGame = function(height, width) {
  const gameWindow = getGameWindow(document);
  gameWindow.style.width = toPixels(width);
  gameWindow.style.height = toPixels(height);
  gameWindow.focus();
};

const intializeGame = function() {
  createGame(GAME_WINDOW_HEIGHT, GAME_WINDOW_WIDTH);
  const paddle = createPaddle(document);
  setEventListeners(document, paddle);
};

window.onload = intializeGame;
