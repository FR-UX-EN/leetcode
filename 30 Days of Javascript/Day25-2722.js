/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */

/*
    This problem was quite challenging for me.
    In both arrays, elements were not sorted by id, so I had to sort them first.
    and then I used two pointers to merge the two arrays.
    spread operator was used when each pointer had the same id.

    Turned out that using sort() was not the best solution.
*/
const fn = (a, b) => a.id - b.id;

var join = function (arr1, arr2) {
    const result = []
    let i = 0;
    let j = 0;

    arr1.sort(fn);
    arr2.sort(fn);

    while (true) {
        if (i >= arr1.length) {
            for (; j < arr2.length; j++) {
                result.push(arr2[j])
            }
            break;
        }
        if (j >= arr2.length) {
            for (; i < arr1.length; i++) {
                result.push(arr1[i])
            }
            break;
        }
        if (arr1[i].id < arr2[j].id) {
            result.push(arr1[i++]);
        } else if (arr1[i].id > arr2[j].id) {
            result.push(arr2[j++]);
        } else {
            const temp = { ...arr1[i], ...arr2[j] };
            result.push(temp);
            i++;
            j++;
        }
    }
    console.log(result);
    return result;
};



/*
    This solution is more optimal.
    It uses objects' key-value pairs to store the result.
    Thus, it does not need to sort the arrays.
    The art is at the last using Object.values() to return the result.
*/

var join = function (arr1, arr2) {
    const result = {}

    for (let i = 0; i < arr1.length; i++) {
        result[arr1[i].id] = arr1[i];
    }

    for (let i = 0; i < arr2.length; i++) {
        if (result[arr2[i].id]) {
            result[arr2[i].id] = { ...result[arr2[i].id], ...arr2[i] }
        } else {
            result[arr2[i].id] = arr2[i]
        }
    }

    return Object.values(result)
};