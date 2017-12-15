var JavaBuzz = function(){}

JavaBuzz.prototype._isDivisableBy = function(number, divisor) {
  return (number % divisor === 0)
};

JavaBuzz.prototype.isDivisableByFifteen = function(number) {
  return this._isDivisableBy(number, 15)
};

JavaBuzz.prototype.says = function (number) {
  if( this._isDivisableBy(number, 15)) {
    return 'JavaBuzz'
  } else if( this._isDivisableBy(number, 5)) {
    return 'Buzz';
  } else if( this._isDivisableBy(number, 3)) {
    return 'Java';
  }
  return number
};
