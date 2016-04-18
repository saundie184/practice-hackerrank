// Given a square matrix of size N×NN×N, calculate the absolute difference between the sums of its diagonals.
//
// Input Format
//
// The first line contains a single integer, NN.
// The next NN lines denote the matrix's rows, with each line containing NN space-separated integers describing the columns.
//
// Output Format
//
// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.

// Sample Input
// 3
// 11 2 4
// 4 5 6
// 10 8 -12

// Sample Output
// 15

'use strict';

function diagonals(num, string) {
    //split the string by every number that is after a space
    for(var i = 0; i < string.length; i++){
      // console.log(string[i]);
      if(string[i] === ' '){
        console.log(string[i+1]);
      }
    }
    // return string;
    //split that string by ' '

    //create a sum of the diagonals

    //return the largest sum
}

console.log(diagonals(3, '11 2 4 4 5 6 10 8 -12'));
