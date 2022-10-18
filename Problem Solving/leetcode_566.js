let mat = [[1, 2], [3, 4]], r = 2, c = 2;



var matrixReshape = function (mat, r, c) {

    let row = mat.length;
    let column = mat[0].length;

    if (row * column != r * c) return mat;

    const outPutArr1 = [];

    const outPutArr3 = [[]];

    let row_num = 0;
    let colmun_num = 0;

    for (let i = 0; i < row; i++) {

        for (let j = 0; j < column; j++) {

            outPutArr3[row_num][colmun_num] = mat[i][j];
            colmun_num++;
            if (colmun_num == c) {
                colmun_num = 0;

                if (row_num != r - 1) {
                    outPutArr3.push([]);
                }
                row_num++;

            }

        }

    }
    return outPutArr3;



};
console.log(matrixReshape(mat, r, c))