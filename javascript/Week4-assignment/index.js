//1. Using template literals instead of concatenation, write a function that takes firstName and lastName and returns ‘fistName lastName’
function fullName (firstName, lastName){
    console.log(`${firstName} ${lastName}`);
};
fullName("John", "Doe");

//2. Write the same function as above as an arrow function with a different name.
const fullNameWithArrow =(firstName, lastName)=>
console.log(`${firstName} ${lastName}`);
fullNameWithArrow("Jean", "Mizero");

// 3. Look up the JavaScript functions setTimeout() and setInterval(). 
// a.Using setTimeout, write an inline, anonymous 
setTimeout(() => alert("Time is up!") , 2000);
//1000 ms = 1 second.
// b. Write an arrow function named askAreWeThereYet that alerts 
const askAreWeThereYet = () => alert("Are we there yet?");
setInterval(askAreWeThereYet, 4000 );

//4. In this step you are going to write a function that takes a callback to better understand how callbacks work.
// a.Write a function named processSplicedValue that takes 3 parameters 
let africanCountries = ["Rwanda","Kenya", "Ghana", "Botswana", "Malawi", "Egypt"];
function processSplicedValue(array,index,callBack){
    //b.Inside the function, use the first two parameters to splice an element from the array.
    const spliceCountries = array.splice(index,1);
    //c.Call the callback function and pass the spliced value into it.
    callBack(spliceCountries);
};
//d. Outside of your function, create an array of strings
processSplicedValue(africanCountries, 2,console.log);
// e. Call the processSplicedValue function again but this time pass in the alert method instead of console.log.
processSplicedValue(africanCountries,2, alert);
// f. Call the processSplicedValue function again, but this time pass in an anonymous arrow function that alerts the spliced value
processSplicedValue(africanCountries, 2, (spliceCountries) => alert(spliceCountries));
//g. Call the processSplicedValue function one more time, but this time, pass in a custom function of your choice that you should create and name.
function makeLowerCase(spliceCountries){
    console.log(`${spliceCountries}`.toLowerCase());
};
processSplicedValue(africanCountries, 2,makeLowerCase);
