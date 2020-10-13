// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    let newMatrix = [];


    for (let i = 0; i < matrix.length; i++) {
        (i % 2 === 0) ? newMatrix = newMatrix.concat(matrix[i]):
            newMatrix = newMatrix.concat(matrix[i].reduce((a, b) => [b].concat(a), []));
    }
    return newMatrix;
}
