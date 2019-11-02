const _ = {
    //clamp modifies the provided number to be within the two provided bounds
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
       return clampedValue;
    }
  };
  

module.exports = _;