/**
 * @param {string} instructions
 * @return {boolean}
 */
var isRobotBounded = function (instructions) {
    let [px, py] = [0, 0];
    let curDir = 0;
    const movement = [[0, 1], [1, 0], [0, -1], [-1, 0]];

    instructions.split("").forEach((ele) => {
        switch (ele) {
            case "G":
                px += movement[curDir][0];
                py += movement[curDir][1];
                break;
            case "L":
                curDir = (4 + curDir - 1) % 4;

                break;
            case "R":
                curDir = (4 + curDir + 1) % 4;
                break;
        }
    })

    if (px === 0 && py === 0) {
        return true;
    } else {
        if (curDir !== 0) {
            return true;
        }
    }

    return false;
};