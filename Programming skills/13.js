/**
 * @param {string} s
 * @return {number}
 */

/*
    My initial solution
    From the back to the front
    Implemented as the text cases show.
*/
var romanToInt = function (s) {
    const sym1 = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }
    let result = 0;
    let prev;
    for (let i = s.length - 1; i >= 0; i--) {
        if (!prev) {
            result += sym1[s[i]]
        } else {
            if (prev === "I") {
                result += sym1[s[i]]
            }
            else if (prev === "V" || prev === "X") {
                if (s[i] === "I") {
                    result -= sym1[s[i]]
                } else {
                    result += sym1[s[i]];
                };
            }
            else if (prev === "L" || prev === "C") {
                if (s[i] === "X") {
                    result -= sym1[s[i]]
                } else {
                    result += sym1[s[i]];
                };
            }
            else if (prev === "D" || prev === "M") {
                if (s[i] === "C") {
                    result -= sym1[s[i]]
                } else {
                    result += sym1[s[i]];
                };
            }
        }
        prev = s[i]
    }
    return result;
};


/*
    Another solution.
    I couldn't think of this solution.
    But had better understanding of how Roman numerals work. 
    Fantastic!
*/
var romanToInt = function (s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let total = 0;
    for (let i = 0; i < s.length; i++) {
        let curr = s[i];
        let next = s[i + 1];
        if (symbols[curr] < symbols[next]) {
            total -= symbols[curr];
        } else {
            total += symbols[curr];
        }
    }
    return total;
};