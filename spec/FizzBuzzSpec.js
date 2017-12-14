describe('fizzbuzz', function(){
  var javabuzz;

  beforeEach(function() {
    javabuzz = new FizzBuzz();
  });

  describe('knows when a number is divisable', function() {
    it('by three', function() {
      expect(isDivisableByThree(3)).toBe(true);
    });
  });

});
