const prices = [8, 8, 5, 3, 2, 1];


const maxProfit = function (prices) {
    let max = 0;
    let minBuyPrice = prices[0];
    let length1 = prices.length;


    for (let i = 0; i < length1; i++) {

        const sellPrice = prices[i];
        const profit = sellPrice - minBuyPrice;

        max = Math.max(max, profit);

        minBuyPrice = Math.min(minBuyPrice, prices[i]);

    }
    console.log(max)


};

maxProfit(prices);