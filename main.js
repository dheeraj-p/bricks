const createPaddle = function(document) {
  const gameWindow = document.getElementById('game-window');
  const paddleView = document.createElement('div');
  paddleView.className = 'paddle';
  paddleView.id = 'paddle_1';
  gameWindow.appendChild(paddleView);
};

const intializeGame = function() {
  createPaddle(document);
};

window.onload = intializeGame;
