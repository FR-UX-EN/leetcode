/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function (...args) {
    return args.length
};

/**
 * argumentsLength(1, 2, 3); // 3
 */


/* 
    Easy peasy 
    If you know what ...args is, it was a piece of cake.
    args is an array.
*/