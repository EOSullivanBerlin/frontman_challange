describe('fizzbuzz', function(){
  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when a number is divisable', function() {
    it('by three', function() {
      expect(javabuzz.isDivisableByThree(3)).toBe(true);
    });


  });

  describe('knows when its not divisable', function() {
    it('by three', function() {
      expect(javabuzz.isDivisableByThree(1)).toBe(false);
    });
  });

});
