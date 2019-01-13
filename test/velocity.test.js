describe('Velocity', function() {
  const expect = chai.expect;
  const velocity = new Velocity(10, 90);
  it('getHorizontalComponent: should return the horizontal component for current velocity', function() {
    const horizontalComponent = velocity.getHorizontalComponent();
    expect(horizontalComponent).to.equal(0);
  });

  it('getVerticalComponent: should return the vertical component for current velocity', function() {
    const horizontalComponent = velocity.getVerticalComponent();
    expect(horizontalComponent).to.equal(10);
  });
});
