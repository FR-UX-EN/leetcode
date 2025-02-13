/**
 * @param {number[][]} moves
 * @return {string}
 */

/*
    My first solution.
    listed all possible cases as constant values and iterated it.
    This is simulation. Solve it as you take.
    But requires too many code.
*/
function checkBoard(player, arr) {
    const rows = [[[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]]];
    const cols = [[[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]]];
    const diag = [[[0, 2], [1, 1], [2, 0]], [[0, 0], [1, 1], [2, 2]]];

    // 'X'
    let ch;
    if (player === 'A') {
        ch = 'X'
    } else {
        ch = 'O'
    }
    for (let i = 0; i < 3; i++) {
        let countR = 0;
        let countC = 0;
        for (let j = 0; j < 3; j++) {
            let rx = rows[i][j][0];
            let ry = rows[i][j][1];
            let cx = cols[i][j][0];
            let cy = cols[i][j][1];
            if (arr[rx][ry] === ch) {
                countR++;
            }
            if (arr[cx][cy] === ch) {
                countC++;
            }
        }
        if (countR === 3 || countC === 3) {
            return player;
        }
    }

    for (let i = 0; i < 2; i++) {
        let count = 0;
        for (let j = 0; j < 3; j++) {
            let x = diag[i][j][0];
            let y = diag[i][j][1];
            if (arr[x][y] === ch) {
                count++;
            }
        }
        if (count === 3) {
            return player;
        }
    }

    return undefined;
}


var tictactoe = function (moves) {
    const board = [["", "", ""], ["", "", ""], ["", "", ""]]
    for (let i = 0; i < moves.length; i++) {
        if (i % 2 === 0) {
            board[moves[i][0]][moves[i][1]] = 'X';
        } else {
            board[moves[i][0]][moves[i][1]] = 'O';
        }
    }

    let checkA, checkB;
    checkA = checkBoard('A', board);
    if (checkA) {
        return checkA;
    }

    checkB = checkBoard('B', board);
    if (checkB) {
        return checkB;
    }

    if (moves.length === 9) {
        return (checkA || checkB) || 'Draw';
    } else {
        return (checkA || checkB) || 'Pending';
    }

};


/*
    Next one is smarter one.
    It approaches rows, cols, diagonal, anti-diagonal with the sum of numbers.
    For example, player A is 1 and player B is -1
    If a row is filled with three 1s then the sum of the row is 3.
    If a column is filled with three -1s then the sum of the row is -3.
    From this 3 and -3, we can identify the row, col, diag, anti-diag is filled with either player A or B.
*/

/**
 * @param {number[][]} moves
 * @return {string}
 */
var tictactoe = function (moves) {
    const n = 3;
    let player = 1; // 1= player1, -1 = player2
    let rows = new Array(3).fill(0);
    let cols = new Array(3).fill(0);
    let diag = 0, anti_diag = 0;
    for (let i = 0; i < moves.length; i++) {
        let [row, col] = moves[i];
        rows[row] += player;
        cols[col] += player;
        if (row == col) {
            diag += player;
        }
        if (row + col == n - 1) {
            anti_diag += player;
        }

        if (Math.abs(rows[row]) == n || Math.abs(cols[col]) == n || Math.abs(diag) == n || Math.abs(anti_diag) == n) {
            return (player == 1 ? 'A' : 'B');
        }
        player = player * -1;
    }

    return (moves.length == n * n ? 'Draw' : 'Pending');
};