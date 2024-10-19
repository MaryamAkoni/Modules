import { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';

console.log('Add: ', add(5, 3));  // Test your add function
console.log('Uppercase: ', toUpperCase('hello'));  // Test string manipulation

import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
 
console.log('Multiply: ', multiply(4, 5));  // Test the default export

import multiply, { add, subtract } from './mathModule.js';
import { toUpperCase, toLowerCase } from './stringModule.js';
import { findMax, reverseArray } from './arrayModule.js';
 
console.log('Max: ', findMax([1, 2, 3, 4, 5]));  // Test findMax
console.log('Reversed: ', reverseArray([1, 2, 3]));  // Test reverseArray

import { addAndLogUpper } from './mathModule.js';
 
addAndLogUpper(10, 20); 