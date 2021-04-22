describe('Message', function() {
  it('Should be a defined function', function() {
    expect(typeof Message).toBe('function');
  })

  it('Should have the value of, "Welcome to the page where we will handle DOM events!" when called.', function() {
    expect(Message()).toEqual('Welcome to the page where we will handle DOM events!');
  })
})