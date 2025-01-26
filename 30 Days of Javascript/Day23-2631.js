/**
 * @param {Function} fn
 * @return {Object}
 */
Array.prototype.groupBy = function (fn) {
    const result = {}
    this.forEach((value, _) => {
        const key = fn(value);
        if (result[key]) {
            result[key].push(value)
        } else {
            result[key] = [value];
        }
    })
    return result;
};

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */