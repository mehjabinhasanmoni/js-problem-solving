// ["g","o","o","d"] show them GOOD without join() method 

const senArray = ["g","o","o","d"];
let senval = "" ;
function mySenArray(value){
    senval = senval + value;
}
senArray.forEach(mySenArray);
console.log(senval.toUpperCase());

//  You have a string "RONALDO", show the letter L in console

let gString = "RONALDO";
let gStringAns = gString.charAt(4);

console.log(gStringAns);

// You have a phone number "+8801727843493,017100776615" remove +88 from that number and show 01727843493,01700776615

let mNumber = "+8801727843493,01700776615";
let mNumberArray = mNumber.split(",");
console.log(mNumberArray);

function myMNumber(value){
    
   let initialReverse = value.split("").reverse().join("");
   let reverseValue = initialReverse.substr(0,11);
   let finalValue = reverseValue.split("").reverse().join("");
   console.log(finalValue);
   return value;

}
mNumberArray.map(myMNumber);