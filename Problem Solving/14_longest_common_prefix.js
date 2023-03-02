["dog", "racecar", "car"]

function longestCommonPrefix(strs) {
    if (!strs.length) {
        return '';
    }


    let minStr = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < minStr.length) {
            minStr = strs[i];
        }
    }


    for (let i = 0; i < minStr.length; i++) {
        for (let j = 0; j < strs.length; j++) {
            if (strs[j][i] !== minStr[i]) {
                return minStr.slice(0, i);  //["flower", "flow", "flexis"]
            }
        }
    }


    return minStr;
}

console.log(longestCommonPrefix(["car", "racecar", "dogcar"]))