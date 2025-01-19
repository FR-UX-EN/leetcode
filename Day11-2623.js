/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const cache = {}
    return function (...args) {
        const key = args.join(',');
        if (cache[key] !== undefined) {
            return cache[key]
        }

        cache[key] = fn(...args);
        return cache[key];
    }
}

// following code is using Map()
function memoize2(fn) {
    const map = new Map();
    return function (...args) {

        const key = args.join(',');
        if (map.has(key)) {
            return map.get(key)
        }

        map.set(key, fn(...args));
        return map.get(key);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */