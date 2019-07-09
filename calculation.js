
function getPairsSiglesSum(list = []) {
    // sort list
    list.sort((a, b) => b - a);
    let pairs = [];
    let singles = [];
    let sum = 0;
    for (i = 0; i < list.length; i ++) {
        if (i + 1 === list.length) {
            singles.push(list[i]);
            sum += list[i];
        } else {
            if (list[i] * list[i + 1] > list[i] + list[i + 1]) {
                pairs.push([list[i], list[i + 1]]);
                sum += list[i] * list[i + 1]
                i ++;
            } else {
                singles.push(list[i]);
                sum += list[i]
            }
        }
    }
    return { pairs, singles, sum }
}