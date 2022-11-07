// problem : Here is a shopping cart, 
	// [
    //     {
    //         id:1,
    //         title:"tshirt",
    //         price:350
    //     },
    //     {
    //         id:2,
    //         title:"Pant",
    //         price:599
    //     }
    // ]
    // Show the total price 949


    let cart = 
                [
                {
                    id:1,
                    title:"tshirt",
                    price:350
                },
                {
                    id:2,
                    title:"Pant",
                    price:599
                }
            ];

let totalPrice = cart.reduce((total,value)=>{
    return total + value.price;
},0);


console.log("Total Price : ", totalPrice);


// problem : You have an array [10,20,30], Console the output array of objects
        // [
        //     {
        //         id:1,
        //         value:10
        //     },
        //     {
        //         id:2,
        //         value:20
        //     },
        //     {
        //         id:3,
        //         value:30
        //     }
        // ]

    
        let arr = [10,20,30];
        let arr1 = arr.map(myArrFunction);

        function myArrFunction(value, index){
            return {id: index +1, value :   value};
        }

        console.log(arr1);


// Problem : Frome “web-Developer” make it “Developer-web”

        let sSentence = "web-Developer";
        let sSentenceArray = sSentence.split("-").reverse().join("-");
        console.log(sSentenceArray);

      
// ["10","20","30"] show total:60 in console

let arrNumber = ["10","20","30"];
function functionTotalPrice(total,value){
     return total + Number(value);
}

let arrTotalPrice = arrNumber.reduce(functionTotalPrice,0);
console.log(arrTotalPrice);  