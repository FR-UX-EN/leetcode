/**
 * @param {Function[]} functions
 * @return {Function}
 */

/* 
    PASS. but slow
    I thought this problem has something to do with using "recursive" concept.
    However, this actually required more computing power due to repetitively calling reverse() function.
*/
var compose = function (functions) {
    return function (x) {
        // Base case: if no functions are left, return the input (identity function)
        if (functions.length === 0) {
            return x;
        }

        // Recursive case: apply the last function first and compose the rest
        const [last, ...rest] = functions.reverse();
        return compose(rest.reverse())(last(x));
    };
};

/**
 * const fn = compose([x => x + 1, x => x * x, x => 3 * x])
 * console.log(fn(2)) // 145
 */



/*
    For this solution, I used reduceRight(). As opposed to reduce(), it reduces from right to left.
*/
var compose2 = function (functions) {
    const fn = (x, f) => f(x);
    return function (x) {
        return functions.reduceRight(fn, x)
    }
};

/*
    For this solution, I called reverse() without recursive concept.
    Learned the difference between for...of and for...in
*/
var compose3 = function (functions) {
    const fn = functions.reverse();
    return function (x) {
        for (const f of fn) {
            x = f(x)
        }
        return x
    }
}