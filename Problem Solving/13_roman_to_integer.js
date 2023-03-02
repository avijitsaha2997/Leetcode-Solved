var romanToInt = function (roman) {

    const romanNumerals = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };

    let result = 0;
    for (let i = 0; i < roman.length; i++) {
        if (romanNumerals[roman[i]] < romanNumerals[roman[i + 1]]) {
            result -= romanNumerals[roman[i]];
        } else {
            result += romanNumerals[roman[i]];
        }
    }

    return result;

};

console.log(romanToInt("MCMXCIV"))