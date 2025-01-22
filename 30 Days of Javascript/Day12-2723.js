/**
 * @param {Promise} promise1
 * @param {Promise} promise2
 * @return {Promise}
 */

// async/await
var addTwoPromises = async function (promise1, promise2) {
    return await promise1 + await promise2
};

// Promise.all([array]), Array.reduce((accumulator, currentValue) => fn, initialValue)
var addTwoPromises2 = async function (promise1, promise2) {
    return Promise.all([promise1, promise2]).then((values) => values.reduce((acc, val) => acc + val, 0))
};

// Promise.all([array]), async/await
var addTwoPromises = async function (promise1, promise2) {
    const [val1, val2] = await Promise.all([promise1, promise2])
    return val1 + val2;
};

/**
 * addTwoPromises(Promise.resolve(2), Promise.resolve(2))
 *   .then(console.log); // 4
 */

