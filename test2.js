// Complete the miniMaxSum function in the editor below. It should print two space-separated integers on
// one line: the minimum sum and the maximum sum of 4 of 5 elements.

// miniMaxSum has the following parameter(s): arr: an array of 5 intergers

// Input format
// A single line of five space-separated intergrs

// Output format
// Print two space-separated long integers denoting the respective minimum and maximum values that can
// be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit
// integer.)
// Simple input
// 1 2 3 4 5
// Simple input
// 10 14

function Test1(array){
    array.sort();
    var miniArr = [... array];
    var maxArr = [... array];
    miniArr.pop();
    maxArr.shift();
    var minValue = miniArr.reduce(( initial,value )=>{
        return initial + Number(value);
    },0)
    var maxValue = maxArr.reduce(( initial, value)=>{
        return initial + Number(value);
    },0)
    console.log(minValue,maxValue);
}
function Test2(valueString) {
    var array = valueString.split(' ');
    Test1(array);
}

// Test2("1 2 3 4 5")