/**
 * @param {number[][]} mat
 * @return {number}
 */
var diagonalSum = function (mat) {
    const length = mat.length;
    let result = 0;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < length; j++) {
            if (i === j) {
                result += mat[i][j];
                mat[i][j] = 0;
            }
            if (i + j === length - 1) {
                result += mat[i][j];
                mat[i][j] = 0;
            }
        }
    }
    return result;
};