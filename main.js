const toPixels = function(value) {
  return `${value}px`;
};

const getPaddleView = function(document) {
  return document.getElementById('paddle_1');
};

const getGameWindow = function(document) {
  return document.getElementById('game-window');
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
};

const intializeGame = function() {
  createPaddle(document);
};

window.onload = intializeGame;
