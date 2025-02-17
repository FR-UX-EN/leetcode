/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const rowLength = matrix.length;
    const colLength = matrix[0].length;
    const total = rowLength * colLength;

    let [x, y] = [0, 0];
    const arrow = [[0, 1], [1, 0], [0, -1], [-1, 0]];
    let dir = 0;
    const result = [];
    while (result.length <= total) {
        result.push(matrix[x][y]);
        matrix[x][y] = 101;
        const nx = x + arrow[dir][0];
        const ny = y + arrow[dir][1];
        if (nx < 0 || nx >= rowLength || ny < 0 || ny >= colLength || matrix[nx][ny] === 101) {
            if (result.length === total) {
                break;
            } else {
                dir = (dir + 1) % 4;
                x = x + arrow[dir][0];
                y = y + arrow[dir][1];
            }

        } else {
            x = nx;
            y = ny;
        }
    }
    return result;
};