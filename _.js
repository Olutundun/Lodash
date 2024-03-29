const _ = {
    //NUMBER METHODS
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
        const isInRange = start <= number && number < end
        return isInRange;
    },
    //STRING METHODS 
    //words splits the string into an array of words
    words(string) {
        const words = string.split(' ');
        return words;
    },
    //adds spaces evenly to both sides of the string to make it reach the desired length
    pad(string, length) {
        if (length <= string.length) {
            return string;
        }
        const startPaddingLength = Math.floor((length - string.length) / 2);
        const endPaddingLength = length - string.length - startPaddingLength;
        const paddedString = ' '.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;
    },
    //OBJECT METHODS
    //.has checks to see if the provided object contains a value at the specified key
    has(object, key) {
        let hasValue = object[key];
        (hasValue != undefined) ? hasValue = true: hasValue = false;
        return hasValue;
    },
    //invert iterates through each key / value pair in the provided object and swaps the key and value
    invert(object) {
        let invertedObject = {};
        for (let key in object) {
            const originalValue = object[key];
            invertedObject = {
                originalValue: key
            };
        }
        return invertedObject;
    },
    findKey(object, predicate) {
        for (key in object) {
            let value = object[key];
            const predicateReturnValue = predicate(value);
            if (predicateReturnValue == true) {
                return key;
            }
        }
        return undefined;
    },
    drop(array, n) {
        if (n === undefined) {
            n = 1;
        }
        let droppedArray = array.slice(n, array.length);
        return droppedArray;
    },
    //ARRAY METHODS
    dropWhile(array, predicate) {

        const cb = (element, index) => {
            return !predicate(element, index, array)
        }
        let dropNumber = array.findIndex(cb);
        let droppedArray = this.drop(array, dropNumber);
        return droppedArray;
    },
    //Creates an array of elements split into groups the length of size. If array can't be split evenly, the final chunk will be the remaining elements.
    chunk(array, size = 1) {
        let arrayChunks = [];
        for (let i = 0; i < array.length; i += size) {
            let arrayChunk = array.slice(i, i + size);
            arrayChunks.push(arrayChunk);
        }
        return arrayChunks;
    }
};

module.exports = _;