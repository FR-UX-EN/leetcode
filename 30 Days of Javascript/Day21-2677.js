var chunk = function (arr, size) {
    const result = []

    let start = 0;
    const arrLength = arr.length;
    while (true) {
        if (arrLength - start < size) {
            break;
        }
        const window = []
        for (let i = 0; i < size; i++) {
            window.push(arr[start + i])
        }
        result.push(window);
        start += size;
    }
    if (start === arrLength) {
        return result;
    }
    result.push(arr.slice(start))
    return result;
};

// with slice
var chunk = function(arr, size) {
    const result = []

    for(let i=0; i<arr.length; i+=size){
      result.push(arr.slice(i, i+size))
    }
    return result
};