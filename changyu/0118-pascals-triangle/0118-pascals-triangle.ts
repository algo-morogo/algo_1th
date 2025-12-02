function generate(numRows: number): number[][] {
    const result = [];

    for (let i = 0; i < numRows; i++) {
        const row = new Array(i + 1).fill(0);
        row[0] = row[i] = 1; // 양 끝은 1

        for (let j = 1; j < i; j++) {
            row[j] = result[i - 1][j - 1] + result[i - 1][j];
        }

        result.push(row);
    }

    return result;
};