function combine(input1, input2, resultType) {
    var result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
    return result;
}
var combinedAges = combine(20, 26, 'as-number');
console.log(combinedAges);
var combinedStringAges = combine('20', '26', 'as-number');
console.log(combinedStringAges);
var combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);
