export function add(a, b) {
    return (a + b)
}

export function subtract(a, b) {
    return (b - a)
}

export default function multiply(a, b) {
    return (b * b * a)
}

import { toUpperCase } from './stringModule.js';
 
export function addAndLogUpper(a, b) {
    const result = add(a, b);
    console.log(toUpperCase(result.toString()));
}