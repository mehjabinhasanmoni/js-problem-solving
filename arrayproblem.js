// Problem 1 : 
// [{
//     marks:49,
//     name:"Rahim"
// },
// {
//     marks:99,
//     name:"Karim"
// },
// {
//     marks:36,
//     name:"Alisha"
// }]
// Short Ascending

const result = [{
                    marks:49,
                    name:"Rahim"
                },
                {
                    marks:99,
                    name:"Karim"
                },
                {
                    marks:36,
                    name:"Alisha"
                }];



result.sort(function(a, b){return a.marks - b.marks});

for( i =0;i<result.length;i++){
    console.log(result[i].name + " : " + result[i].marks);
}



// [14,16,19,9,1] Show them as   1/9/14/16/19

let accNumber = [14,16,19,9,1];

accNumber.sort(function(a, b){return a -b});

console.log("Accsending number are :" , accNumber.join('/'));
// console.log(accNumber.join(','));