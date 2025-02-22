/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function (coordinates) {
    const [dx, dy] = [coordinates[1][0] - coordinates[0][0], coordinates[1][1] - coordinates[0][1]];

    if (dx === 0) {
        const x = coordinates[0][0]
        for (let coord of coordinates) {
            if (coord[0] !== x) {
                return false;
            }
        }
    } else if (dy === 0) {
        const y = coordinates[0][1]
        for (let coord of coordinates) {
            if (coord[1] !== y) {
                return false;
            }
        }
    } else {
        for (let i = 0; i < coordinates.length - 1; i++) {
            const nx = coordinates[i + 1][0] - coordinates[i][0];
            const ny = coordinates[i + 1][1] - coordinates[i][1];
            if (dy / dx !== ny / nx) {
                return false;
            }
        }
    }

    return true;
};