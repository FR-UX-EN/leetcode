/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
    let [x, y] = [0, 0];
    moves.split('').forEach((val) => {
        if (val === 'U') {
            y++;
        } else if (val === 'D') {
            y--;
        } else if (val === 'L') {
            x--;
        } else if (val === 'R') {
            x++;
        }
    })

    return x === 0 && y === 0 ? true : false;
};