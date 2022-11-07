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


// Write a function that can tell us whether an year is a leap year or not.

function isLeapYear(year){
    if((year % 400 === 0 ) && ((year % 4 === 0) && (year % 100 != 0))){
        console.log(`${year} is a leap year !!`);

    }else {
        console.log(`${year} is not a leap year !!`);

    }


}
isLeapYear(2014);

// . How would you determine the number of vowels in a sentence?

const vowel =["A","E","I","O","U","a","e","i","o","u"];

function countVowels(sentence){
    let count = 0;
    const letters = Array.from(sentence);

    letters.forEach(calculateVowels);

    function calculateVowels(value){
        if(vowel.includes(value)){
            count++;
        
        }

    };
    return count;
        

};

console.log(countVowels("I Love Bangladesh"));