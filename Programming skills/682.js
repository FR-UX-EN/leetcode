/**
 * @param {string[]} operations
 * @return {number}
 */
var calPoints = function (operations) {
    const record = []
    operations.forEach((element, index) => {
        if (element === "+") {
            record.push(record[record.length - 2] + record[record.length - 1])
        } else if (element === "C") {
            record.pop();
        } else if (element === "D") {
            record.push(record[record.length - 1] * 2);
        } else {
            record.push(+element)
        }
    })

    return record.reduce((acc, val) => acc + val, 0);
};