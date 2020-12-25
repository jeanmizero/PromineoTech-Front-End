//1. Create an array
let ages = [3,9,23,64,2,8,28,93];
// a) Subtract first element
let subtractElement = ages.splice(0,1);
console.log(ages);
// b) add new age in array
ages.push(100);
console.log(ages);
let subtractElementAgain = ages.splice(0,1);
console.log(ages);
// c)calculate average
let total = 0;
for(let i = 0; i < ages.length; i++){
    total += ages[i];
}
let average = total/ages.length;
console.log(average);
// 2. Create array called names
let names =["Sam","Tommy","Tim","Sally","Buck","Bob"];
let lengths = names.map(function(element){
    return element.length;
});
//console.log(lengths);
let sum = lengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
console.log(sum);
let median= sum/names.length;
console.log(median);
// b) use loop and concatenate
let nameList = "";
for(let i = 0; i < names.length; i++){
    nameList += names[i] + " ";
}
console.log(nameList);
// 3. How do you access the last element of any array?
let list = [2,3,4,5,6,7,8,9];
//let lastElement = list[list.length-1];
let lastElement = list.slice(-1)[0];
console.log(lastElement);
// 4.How do you access the first element of any array?
let firstElement = list.shift();
console.log(firstElement);
// 5. create an array called nameLength
let nameLengths = names.map(function(element){
    return element.length;
})
console.log(nameLengths);
// 6. Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console
let sums = nameLengths.reduce(function(accumulator,currentValue){
    return accumulator + currentValue;
})
console.log(sums);
// 7. Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello')
function repeatString(word,n){
    if(n > 0){
        return word.repeat(n);
    }else{
        return "";
    }
}
console.log(repeatString("Hello", 3));
// 8. Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space)
function createFullName (firstName, lastName){
    console.log(firstName + " " + lastName);
}
createFullName("John", "Doe");

//9.Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100
let numbers = [20,40,10,15,50];
function compareSumOfArray(array){
    let sumOfArray = numbers.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    console.log(sumOfArray >100);
}
compareSumOfArray(numbers);

// 10. Write a function that takes an array of numbers and returns the average of all the elements in the the array
function findAverage(array){
    let average = 0;
    for(let i = 0; i < array.length; i++){
        let currentValue = array[i]
        average += currentValue;
    }
    average = average / array.length
    return average;
}
console.log(findAverage([2,4,6,8,10]));
//11. Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array
let arraysOfNumber = [1,2,3,4];
function compareAverages(array1,array2){
    let sumOfArray1 = numbers.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    let averageArray1 = sumOfArray1 / numbers.length;

    let sumOfArray2 = arraysOfNumber.reduce(function(sum, value) {
        return sum + value;
    }, 0);
    let averageArray2 = sumOfArray2 / numbers.length;
    console.log(averageArray1 > averageArray2);   
}
compareAverages(numbers, arraysOfNumber);
// 12. Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50
function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside && moneyInPocket > 10.50){
        return true;
    }else{
        return false;
    }
}
console.log(willBuyDrink("Summer Time!", 12));
// 13. Create a function to check if certain age in array allowed to vote
let VoteAges = [20,12,19,34,43,50,62,18,15,27,71,13];
// use filter method to check values in array
let canVote = VoteAges.filter(function(age){
    if(age >= 18){
        return true;
    }
});
console.log(canVote);
