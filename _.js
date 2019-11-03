const _ = {
    //clamp modifies the provided number to be within the two provided bounds
    clamp(number, lower, upper) {
      const lowerClampedValue = Math.max(number, lower);
      const clampedValue = Math.min(lowerClampedValue, upper);
       return clampedValue;
    },
    //inRange checks if n is between start and up to, but not including, end. 
    //If end is not specified, it's set to start with start then set to 0. 
    //If start is greater than end the params are swapped to support negative ranges.
    inRange(number, start, end) {
      if (end === undefined) {
        end = start;
        start = 0;
      } else if (start > end) {
        const temp = end;
        end = start;
        start = temp;
      }
      const isInRange = start <= number && number < end;
      return isInRange;
    }
  };

module.exports = _;