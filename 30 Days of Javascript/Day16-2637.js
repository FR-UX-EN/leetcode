/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */

// I didn't know Promise.race() function
// Of course there must be a way to solve this without using .race()
// but I couldn't figure it out

var timeLimit = function(fn, t) {
    return async function(...args) {
        const fnPromise = new Promise(resolve => 
            resolve(fn(...args))
        );
        const timeoutPromise = new Promise((_, reject) => {
            setTimeout(() => reject("Time Limit Exceeded"), t);
        });

        return Promise.race([fnPromise, timeoutPromise]);
    };
};

/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */