/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */

// using function keyword to define functions
var createCounter1 = function (init) {
    let currentValue = init;
    return {
        increment: function () {
            return ++currentValue;
        },

        decrement: function () {
            return --currentValue;
        },

        reset: function () {
            return currentValue = init;
        },
    }
};

// using arrow function
var createCounter2 = function (init) {
    let currentValue = init;
    return {
        increment: () => ++currentValue,
        decrement: () => --currentValue,
        reset: () => currentValue = init,
    }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */