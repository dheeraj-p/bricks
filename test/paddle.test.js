describe('Paddle', function() {
  const expect = chai.expect;
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(20, 100, 10, 430);
  });

  it('moveLeft: should move paddle to left with speed 10', function() {
    paddle.moveLeft();
    expect(paddle)
      .to.have.property('left')
      .equal(420);
  });

  it('moveRight: should move paddle to right with speed 10', function() {
    paddle.moveRight();
    expect(paddle)
      .to.have.property('left')
      .equal(440);
  });
});
