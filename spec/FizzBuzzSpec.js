describe('fizzbuzz', function(){
  var javabuzz;

  beforeEach(function() {
    javabuzz = new JavaBuzz();
  });

  describe('knows when a number is divisable', function() {
    it('by three', function() {
      expect(javabuzz._isDivisableBy(3, 3)).toBe(true);
    });

    it('by five', function() {
      expect(javabuzz._isDivisableBy(5, 5)).toBe(true);
    });

    it('by fifteen', function() {
      expect(javabuzz.isDivisableByFifteen(15)).toBe(true);
    });

  });

  describe('knows when its not divisable', function() {
    it('by three', function() {
      expect(javabuzz._isDivisableBy(1, 3)).toBe(false);
    });

    it('by five', function() {
      expect(javabuzz._isDivisableBy(1, 5)).toBe(false);
    });

    it('by fifteen', function() {
      expect(javabuzz.isDivisableByFifteen(3)).toBe(false);
    });
  });

  describe('says', function() {
    it('when 3, Java', function() {
      expect(javabuzz.says(3)).toEqual("Java")
    });

    it('when 5, Buzz', function() {
      expect(javabuzz.says(5)).toEqual("Buzz")
    });
  });




});
