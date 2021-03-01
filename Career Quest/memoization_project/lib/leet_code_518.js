// Work through this problem on https://leetcode.com/problems/coin-change-2/ and use the specs given there.
// Feel free to use this file for scratch work.

var change = function (amount, coins) {
    //count
    //how many times does each coin go into amount
    // times = math.floor(amount/coin)

    let count = 0;
    let sorted = coins.sort().reverse();
    for (let i = 0; i < sorted.length; i++) {
        const coin = sorted[i];
        const times = Math.floor(amount / coin);

        for (let j = 1; j <= times; j++) {
            const unit = coin * j;
            const remainder = amount % unit;
            if (remainder === 0) {
                console.log(coin)
                count++;
            } else {
                for (let k = i; k < sorted.length - 1; k++) {
                    if (remainder % sorted[k] === 0) {
                        console.log('sorted[k]')
                        count++;
                    }
                }
            }
        }
    }
    return count
};

console.log(change(5, [1,2,5]));