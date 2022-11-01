// For Each

const numberForEach = [45,5,10,11,50,65];

function myFunction(value,index,array){
    console.log(value);
    console.log(index);
    console.log(array);
    console.log("********");

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



