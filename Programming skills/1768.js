/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
    let i = 0, j = 0
    let str = '';
    while (true) {
        if (i >= word1.length && j >= word2.length) {
            break;
        }
        if (i < word1.length) {
            str += word1[i++];
        }
        if (j < word2.length) {
            str += word2[j++];
        }
    }
    return str;
};