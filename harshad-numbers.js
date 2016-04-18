//Code wars
//http://www.codewars.com/kata/54a0689443ab7271a90000c6/train/javascript

'use strict';

/**
 * Utility class for Harshad numbers (also called Niven numbers).
 *
 * @namespace Harshad
 */
var Harshad = ( function() {
  return {
    /**
     * Returns true when the given number is a valid Harshad number.
     *
     * @param {Number} number The given number
     * @returns {Boolean}
     * @function Harshad.isValid
     */
    isValid: function( number ) {
      // Your implementation goes here
      //get the sum of digits in number

      var numString = number.toString();
        if(numString <= 1) {
          return true;
      } else {
        var numSum =0;
        // console.log(numString.length);
       for(var i = 0; i < numString.length; i++) {
        // console.log(numString[i]);
        numSum = numSum + parseInt(numString[i]);
      }
      if(number % numSum === 0){
        return true;
      } else return false;
      // return numSum;
      }

    },
    /**
     * Gets the next Harshad number after the given number.
     *
     * @param {Number} number The given number
     * @returns {Number}
     * @function Harshad.getNext
     */
    getNext: function( number ) {
      // Your implementation goes here
    },
    /**
     * Returns the suite of Harshad numbers, starting after a given number.
     *
     * @param {Number} count The number of elements to return
     * @param {Number} start The number after which the serie should start;
     *  defaults to 0
     * @returns {Array}
     * @function Harshad.getSerie
     */
    getSerie: function( count, start ) {
      // Your implementation goes here
    }
  };

} () );

console.log(Harshad.isValid(1));
console.log(Harshad.isValid(18));
console.log(Harshad.isValid(19));
