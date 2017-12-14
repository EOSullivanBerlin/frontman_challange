describe('fizzbuzz', function(){
  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when a number is divisable', function() {
    it('by three', function() {
      expect(javabuzz.isDivisableByThreeOrFive(3, 3)).toBe(true);
    });

    it('by five', function() {
      expect(javabuzz.isDivisableByThreeOrFive(5, 5)).toBe(true);
    });

  });

  describe('knows when its not divisable', function() {
    it('by three', function() {
      expect(javabuzz.isDivisableByThreeOrFive(1, 3)).toBe(false);
    });
    
  });



});
