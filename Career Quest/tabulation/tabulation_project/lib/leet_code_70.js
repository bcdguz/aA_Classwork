// Work through this problem on https://leetcode.com/problems/climbing-stairs/ and use the specs given there.
// Feel free to use this file for scratch work.

function climbStairs(n) {
    let table = new Array(n + 1).fill(0); //stair level
    table[0] = 1; //step 0 has 0 possibilities
    table[1] = 1;

    for (let amnt = 2; amnt < table.length; amnt++) {
        const onePrev = table[amnt - 1];
        const twoPrev = table[amnt - 2] === undefined ? 0: table[amnt - 2];
        table[amnt] = onePrev + twoPrev;
    }

    return table[table.length - 1];
}

console.log(climbStairs(1))
console.log(climbStairs(4))


// 1 1 1 1
// 1 2 1 
// 2 2
// 2 1 1
// 1 1 2