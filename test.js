// Problem 3: You have a string set “Rahim,Karim,Arman” . Now show them as like 1.Rahim 2.Karim 3. Arman
let nameInfo = "Rahim,Karim,Arman";
const myArray = nameInfo.split(",");
for(i =0;i<=myArray.length-1; i++){
    console.log(i+1,  myArray[i]);
}


// Problem 5: 
//  {
//     name:"Rahim",
//     child:["ali","Muhammad","Sanjana"]
//  }
// Show them as: Rahim has 3 children they are, ali, muhammad, sanjana

let abc={
    name:"rahim", 
    child:["ali","Muhammad","Sanjana"]
}

 let number = [15,25,45];
 let divideNumber= 0;
 let accptedNumber = [];

 for( i =0;i<number.length;i++){
    divideNumber = number[i]/5;
    console.log(divideNumber);

    accptedNumber.push(divideNumber);
 }

 console.log("New Array is : " + accptedNumber);




 
// Problem 1: Get apple from "#!apple?" using string method
let spell = "#!apple?";
console.log(spell.substring(2, 7));


// Problem 2: You have 52.967, show it 52.97
let givenNumber = 52.967;
console.log(givenNumber.toFixed(2));

// let sentence = "Please help me out";
// console.log(sentence.indexOf("me"));


const father = {name : "Rahim",
                child:["ali","Muhammad","Sanjana"]
            }

console.log(father.name + "has "  + father.child.length + "children.They are " + father.child[0],father.child[1],father.child[2]);