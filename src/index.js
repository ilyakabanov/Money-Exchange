// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {

    if (currency <= 0) return {};
    if (currency > 10000) return {error: "You are rich, my friend! We don't have so much coins for exchange"};

    let sum = currency;
    let resutl = {};
    let coins  = {
        'H': 50,
        'Q': 25,
        'D': 10,
        'N': 5,
        'P': 1,
    };

    for (const key in coins) {

        let countCoins = Math.floor( sum / coins[key] );

        if (!countCoins) continue;

        resutl[key] = countCoins;
        sum = sum % coins[key];
    }

    return resutl;
}
