/**
 * @param {number[]} citations
 * @return {number}
 */

// Initial solution
// not bad, but I found a more optimal solution
var hIndex = function (citations) {
    citations.sort((a, b) => b - a);
    let count = 0;
    for (let i = 0; i < citations.length; i++) {
        if (i + 1 <= citations[i]) {
            count++;
        }
    }
    return count;
};

/*
    This solution doesn't require sort!
    But needs an extra space to keep the records of each paper.
*/
var hIndex2 = function (citations) {
    let n = citations.length;
    const count = new Array(n + 1).fill(0);

    for (let citation of citations) {
        let idx = Math.min(citation, n);
        count[idx]++;
    }

    let h = count.length;
    let paper = 0;

    while (h > paper) {
        h--;
        paper += count[h];
    }

    return h;
};