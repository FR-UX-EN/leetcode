/**
 * @param {Array<Function>} functions
 * @return {Promise<any>}
 */
var promiseAll = function (functions) {
    return new Promise((resolve, reject) => {
        const arr = [];
        let completed = 0;
        for (let i = 0; i < functions.length; i++) {
            const func = functions[i];

            func()
                .then(value => {
                    arr[i] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(arr)
                    }
                })
                .catch(err => {
                    reject(err);
                });
        }
        if (functions.length === 0) {
            resolve(arr);
        }
    });
}
/**
 * const promise = promiseAll([() => new Promise(res => res(42))])
 * promise.then(console.log); // [42]
 */

// Using forEach
var promiseAll2 = function (functions) {
    return new Promise((resolve, reject) => {
        const results = [];
        let completed = 0;

        functions.forEach((fn, index) => {
            fn()
                .then(value => {
                    results[index] = value;
                    completed++;

                    if (completed === functions.length) {
                        resolve(results);
                    }
                })
                .catch(err => {
                    reject(err);
                })
        })
    })
};