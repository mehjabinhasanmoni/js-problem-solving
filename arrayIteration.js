// For Each

const numberForEach = [45,5,10,11,50,65];

function myFunction(value,index,array){
    return value;

}
numberForEach.forEach(myFunction);
console.log(numberForEach);


// Map

const numberForMap = [45,5,10,11,50,65];
function myMap(value){
     return value * 3;
}

const forMapValue = numberForMap.map(myMap);
console.log("Previous Array is : ", numberForMap);
console.log("New Array is : ", forMapValue);


// Filter

const numberForFilter = [45,5,10,11,50,65];
function myFilter(value ,index,array){
    return value > 10 ;
    }

const forFilterValue = numberForFilter.filter(myFilter);
console.log("Previous Array is : ", numberForFilter);
console.log("New Array is : ", forFilterValue);

// Reduce

const rNumbers = [45, 4, 9, 16, 25];
function myReduce(total, value, index, array) {
    return total + value;
  }
let reduceSum = rNumbers.reduce(myReduce);
console.log("Reduce Sun is: ", reduceSum);
