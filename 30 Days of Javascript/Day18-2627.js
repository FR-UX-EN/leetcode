/**
 * @param {Function} fn
 * @param {number} t milliseconds
 * @return {Function}
 */
// At first, I thought storing delayed time 't' would be of help
// but I didn't ever used it
// so I just deleted it.
var debounce = function (fn, t) {
    const cache = { timer: null, delayed: t }
    return function (...args) {
        if (cache.timer) {
            clearTimeout(cache.timer)
            cache.timer = null;
        }
        const timer = setTimeout(() => {
            return fn(...args);
        }, t)
        cache.timer = timer;
    }
};

var debounce2 = function (fn, t) {
    let timer;
    return function (...args) {
        if (timer) {
            clearTimeout(timer)
        }
        const timerId = setTimeout(() => {
            return fn(...args);
        }, t)
        timer = timerId;
    }
};

/**
 * const log = debounce(console.log, 100);
 * log('Hello'); // cancelled
 * log('Hello'); // cancelled
 * log('Hello'); // Logged at t=100ms
 */