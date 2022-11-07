// লুডু খেলায় আমরা কিভাবে ১ থেকে ৬ সংখ্যা রেন্ডমলি প্রিন্ট করতে পারি?

function  getRandomNumber(min,max){
    return Math.floor(Math.random()* (max-min+1)) + min;
}
let findRandomValue = getRandomNumber(1,6);
console.log(findRandomValue);

// How can you order names of students in your class sequentially?

 let studentName = ["Rahim","Moni","Rajib","Tulin"];

 console.log(studentName.sort());

//  How can you order roll numbers of students in your class sequentially?

let studentRollNumber = [5,10,2,7,8,1];

console.log(studentRollNumber.sort(function(a,b){return a-b}));


// 