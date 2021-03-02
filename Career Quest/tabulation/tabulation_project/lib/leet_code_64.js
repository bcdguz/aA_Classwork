// Work through this problem on https://leetcode.com/problems/minimum-path-sum/ and use the specs given there.
// Feel free to use this file for scratch work.

function minPathSum(grid) {
    let positions = new Array(grid.length);
    for (let i = 0; i < positions.length; i ++) {
        positions[i] = new Array(grid[0].length).fill(0)
    }
    positions[0][0] = grid[0][0];

    
    for (let outer = 0; outer < grid.length; outer++) {
        for (let inner = 0; inner < grid[0].length; inner++) {
            if (outer === 0 && inner === 0) continue;
            //iterating pos by pos;
            const currValue = grid[outer][inner];
            const above = (outer - 1) < 0 ? Infinity : positions[outer - 1][inner];
            const left = (inner - 1) < 0 ? Infinity : positions[outer][inner - 1];
            const abovePath = above + currValue;
            const leftPath = left + currValue;
            positions[outer][inner] = Math.min(abovePath, leftPath);
        }
    }
    
    return positions[positions.length - 1][positions[0].length - 1];
}


let grid = [[1, 2, 3], [4, 5, 6]]
console.log(minPathSum(grid));
//table = arr of positions
// 0 1 2  0,0 0,1 0,2
// 3 4 5  1,0 1,1 1,2
// 6 7 8  2,0 2,1 2,2


//[[1,3,1],
// [1,5,1],
// [4,2,1]]
//1 -> 3 -> 1 -> 1 = 7


// [[1,2,3],
// [4,5,6]]
//1 -> 2 -> 3 -> 6 = 12