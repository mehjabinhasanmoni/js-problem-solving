// You bought three products. 
// [
// 	{
// 		name:”Jam”,
// 		price:950
// },
// {
// 		name:”Soya Souce”,
// 		price:150
// },
// 	{
// 		name:”Chocolate”,
// 		price:223
// }
// ]
// The online store has 2 discount coupon codes . 
// a) 15% discount for coupon “NOV15” and 
// b) 22%  discount for “DEC16”
// If you use one coupon code then what will be the discount amount and discount price?


const boughtProducts = [
                            {
                                name:"Jam",
                                price:950
                            },
                            {
                                name:"Soya Souce",
                                price:150
                            },
                            {
                                name:"Chocolate",
                                price:223
                            }
                    ];


let totalProductPrice = boughtProducts.reduce(funTotalprice,0);

function funTotalprice(total,value){
    console.log(value,"value");
    return total + value.price;
};
console.log("Total Price: ",totalProductPrice);
const coupon="NOV15";  //prompt("What is your coupon code?");
console.log(coupon,"COUPON");

function funDiscountHandler(totalProductPrice,coupon){
    let discountAmount = 0;
    let discountPrice = 0;


    if (coupon == "NOV15"){
        discountAmount = (totalProductPrice * 15) / 100;
         discountPrice = totalProductPrice - discountAmount;
        console.log(" Discount Amount is : ", discountAmount);
        console.log(" Discount Price is : ", discountPrice);

        }
        else if (coupon == "DEC16"){
            discountAmount  = (totalProductPrice * 22) / 100;
            discountPrice = totalProductPrice - discountAmount;
            console.log(" Discount Amount is : ", discountAmount);
            console.log(" Discount Price is : ", discountPrice);
         }
         else {
            console.log("Please type given value.Otherwise we dont give any discount");
            };
        };
        

funDiscountHandler(totalProductPrice,coupon);


// Show the even numbers From 1-200

let evenArray = [];
function funEvenNumber(){
   
    for(let i = 1; i<=200; i++){
            if(i%2 == 0){
               evenArray.push(i);
            }

        }
       
     };
funEvenNumber();
console.log("Even Array are : ", evenArray.join());


// 1400 GM chicken price is 300tk , what will be the price of 950gm chicken?


function funTotalQuantityPrice(cQuantity,cPrice){
   
     return parseInt((300 * 950) / 1400);
     
}
console.log(" Total Price : ",funTotalQuantityPrice(1400,300) );


//  Those persones bought lottery tickets [“Sara”,“Rahim”,”Arman”,”Korim”,”Ayat”,”Saira”]. Among them, one person will WIN the lottery on every page refresh. Log the winner name

let people = ["Sara","Rahim","Arman","Korim","Ayat","Saira"];


function funRandomPeople(rPeople) {
    const randomIndex =  Math.floor(Math.random() * rPeople.length);
    const randomPeople = rPeople[randomIndex];
    return randomPeople;
  }


  console.log("The Winner Is : ", funRandomPeople(people));


//   You have subjective marks dynamic object
// {
// 	bangla:78,
// 	english:63,
// 	math:32
// }
// 33 is the pass mark.
// Based on pass marks, show the output in log. Note: If I increase the object size it should log actual output.
// passed
// passed
// FAILED

let stdResult = 
                    {
                    bangla:78,
                    english:63,
                    math:32
                     };
              
for(let x in stdResult){
        let marks = stdResult[x];

        if(marks >=33){
            console.log("Passed");
        }
        else{
            console.log("Failled");
        }
}


