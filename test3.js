// Our initial numbers are 1, 2, 3, 4 and 5. We can calculate the following sums using four of the five
// integers:
// 1: If we sum everything except 1, our sum is: 2 + 3 + 4 + 5 = 14
// 2: If we sum everything except 2, our sum is: 1 + 3 + 4 + 5 = 13
// 3: If we sum everything except 3, our sum is: 1 + 2 + 4 + 5 = 12
// 4: If we sum everything except 4, our sum is: 1 + 2 + 3 + 5 = 11
// 5: If we sum everything except 5, our sum is: 1 + 2 + 3 + 4 = 10

function Test3(array)
{
    array.forEach((value , index)=>{
        var temp =[...array];
        temp.splice(index,1);

        var valueString= "";
        var sum = temp.reduce((ini , value ,index)=>{
            valueString += `${temp[index]} +`;
            return ini+value;
        },0);
        console.log(`${valueString.substring(0,valueString.length-1)} = ${sum}`);
    })
}

// Test3([1,2,3,4,5])