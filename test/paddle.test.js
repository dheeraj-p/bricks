describe('Paddle', function() {
  const expect = chai.expect;
  let paddle;
  beforeEach(function() {
    paddle = new Paddle(20, 100, 430, 10);
  });

  it('moveLeft: should move paddle to left with speed 10', function() {
    paddle.moveLeft();
    expect(paddle)
      .to.have.property('x')
      .equal(420);
  });

  it('moveRight: should move paddle to right with speed 10', function() {
    paddle.moveRight();
    expect(paddle)
      .to.have.property('x')
      .equal(440);
  });
});
