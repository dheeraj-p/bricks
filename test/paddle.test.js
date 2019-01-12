describe('Paddle', function() {
  const expect = chai.expect;
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(20, 100, 10, 430);
  });

  it('moveLeft: should return height of the paddle', function() {
    paddle.moveLeft();
    expect(paddle)
      .to.have.property('left')
      .equal(420);
  });

  it('moveRight: should return width of the paddle', function() {
    paddle.moveRight();
    expect(paddle)
      .to.have.property('left')
      .equal(440);
  });
});
