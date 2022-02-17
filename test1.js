// Mini-Max Sum

// Given five positive integers, find the minimum and maximum values that can be calculated by summing
// exactly four of the five integers. Then print the respective minimum and maximum values as a single line
// of two space-separated long integers.
// For example arr = [1, 3, 5, 7, 9], . Our minimum sum is 1 + 3 + 5 + 7 = 16 and our maximum sum is 3 + 5 + 7 + 9 = 24

// We would print
// 16 24
function Test1(array){
    array.sort();
    var miniArr = [... array];
    var maxArr = [... array];
    miniArr.pop();
    maxArr.shift();
    var minValue = miniArr.reduce(( initial,value )=>{
        return initial + value;
    },0)
    var maxValue = maxArr.reduce(( initial, value)=>{
        return initial + value;
    },0)
    console.log(minValue,maxValue);
}

//Test1([1,3,5,7,9])