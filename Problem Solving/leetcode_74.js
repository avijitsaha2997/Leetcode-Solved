
// let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]], target = 3;

var searchMatrix = function (matrix, target) {

    let row = matrix.length;
    let col = matrix[0].length;

    for (let i = 0; i < row; i++) {
        for (let j = 0; j < col; j++) {
            if (target == matrix[i][j]) {
                return true;
            }
        }
    }
    return false;

};