var JavaBuzz = function(){}

JavaBuzz.prototype._isDivisableBy = function(number, divisor) {
  return (number % divisor === 0)
};

JavaBuzz.prototype.isDivisableByFifteen = function(number) {
  return this._isDivisableBy(number, 15)
};
