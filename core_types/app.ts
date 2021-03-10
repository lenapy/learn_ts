function combine(
    input1: number | string, 
    input2: number | string, 
    resultType: 'as-number' | 'as-text'
    ) {
    let result;
    if (typeof input1 === 'number' && typeof input2 === 'number' || resultType === 'as-number') {
        result = +input1 + +input2;
    } else {
        result = input1.toString() + input2.toString();
    }
    // if (resultType === 'as-number') {
    //     return +result;
    // } else {
    //     return result.toString();
    // }
	return result;
}  

const combinedAges = combine(20, 26, 'as-number');
console.log(combinedAges);

const combinedStringAges = combine('20', '26', 'as-number'); 
console.log(combinedStringAges);

const combineNames = combine('Max', 'Anna', 'as-text');
console.log(combineNames);