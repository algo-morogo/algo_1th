/**
 * @param {number} numRows
 * @return {number[][]}
 */
const generate = function (numRows) {
    let result = [[1]]

    for (let j = 2; j <= numRows; j++) {
        let newRow = [1]  // 새 행은 1로 시작

        for (let i = 1; i < j - 1; i++) {
            // 이전 행(result[j-2])의 인접한 두 값을 더함
            newRow.push(result[j - 2][i - 1] + result[j - 2][i])
        }

        newRow.push(1)  // 새 행은 1로 끝
        result.push(newRow)

    }
    return result
};