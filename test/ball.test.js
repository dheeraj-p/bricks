describe('Ball', function() {
  const expect = chai.expect;
  const velocity = new Velocity(10, 90);
  const ball = new Ball(30, 430, 10, velocity);
  it('move: should move ball to a given position for a specific velocity', function() {
    ball.move();
    expect(ball)
      .to.have.property('y')
      .to.equal(20);

    expect(ball)
      .to.have.property('x')
      .to.equal(430);
  });
});
