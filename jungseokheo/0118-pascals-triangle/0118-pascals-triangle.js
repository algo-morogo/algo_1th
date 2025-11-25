/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function(numRows) {
    let array = [[1]];

    for (let i = 1; i < numRows; i++) {
        let newRow = [1];

        for (let j = 1; j < i; j++) {
            let value = array[i-1][j-1] + array[i-1][j]
            newRow.push(value);
        }

        newRow.push(1);
        array.push(newRow);
    }

    return array;
};