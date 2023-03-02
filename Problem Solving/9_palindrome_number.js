var isPalindrome = function (x) {
    const rev_num = parseInt(x.toString().split("").reverse().join(""));

    if (x === rev_num) {
        return true;
    } else {
        return false;
    }
};