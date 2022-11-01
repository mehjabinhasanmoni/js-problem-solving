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

