/*
Instructions: 
 - You should solve all these questions using .map() function 
*/


/*
 * Exercise 1: 
 * 
 * Make an array of numbers that are doubles of the first array
 *
 * Test Case: 
 *
 * console.log(doubleNumbers([2, 5, 100]));
 * 
 * Result:
 * [4, 10, 200]
*/
let array1=[2, 5, 100];
function double(arr){
  double_array= arr.map((array) => array*2 );
  console.log(double_array);
}
double(array1);
document.getElementById("q1").innerHTML= "Q1:doubleNumbers([2, 5, 100])";
document.getElementById("ans1").innerHTML= double_array ;
////////////////////////////////////////////////////////////////////
/*
 * Exercise 2 : 
 * 
 * Take an array of numbers and make them strings
 *
 * Test Case: 
 *
 * console.log(stringItUp([2, 5, 100]));
 * 
 * Result:
 * ["2", "5", "100"]
*/
  let array2=[2, 5, 100];
  function numToString (arr){
    numToString_array= arr.map((array)  => array.toString());
    console.log(numToString_array);
  }
  numToString (array2);
  document.getElementById("q2").innerHTML= "Q2:stringItUp([2, 5, 100])";
  document.getElementById("ans2").innerHTML= numToString_array ;
///////////////////////////////////////////////////////////////////////
/*
 * Exercise 3:  
 * 
 * Capitalize each of an array of names
 *
 * Test Case: 
 *
 * console.log(capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"])); 
 * 
 * Result:
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
*/

let array3=["john", "JACOB", "jinGleHeimer", "schmidt"]
function capitalize(arr){
  capitalize_array = arr.map((array) => array.charAt(0).toUpperCase() + array.slice(1));
  console.log(capitalize_array);
}
capitalize(array3);
document.getElementById("q3").innerHTML= "Q3:capitalizeNames([john, JACOB, jinGleHeimer, schmidt])";
document.getElementById("ans3").innerHTML= capitalize_array ;
////////////////////////////////////////////////////////////////////////////////
/*
 * Exercise 4:  
 * 
 * Make an array of strings of the names
 *
 * Test Case: 
 *
 * console.log(namesOnly([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 *   ])); 
 * 
 * Result:
 *  ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]
*/
let array4=[
  {
     name: "Angelina Jolie",
     age: 80
  },
 {
     name: "Eric Jones",
     age: 2
},
 {
     name: "Paris Hilton",
     age: 5
},
 {
      name: "Kayne West",
      age: 16
  },
  {
      name: "Bob Ziroll",
      age: 100
  }
  ];

function namesOnly(arr){
  nameesOnly_array=arr.map((array) => array.name);
  console.log(nameesOnly_array);
}
namesOnly(array4);
document.getElementById("q4").innerHTML= "Q4:Make an array of strings of the names";
document.getElementById("ans4").innerHTML= nameesOnly_array ;
/////////////////////////////////////////////////////////////////////////////
/*
 * Exercise 5:  
 * 
 * Make an array of strings of the names saying whether or not they can go to The Matrix
 *
 * Test Case: 
 *
 * console.log(makeStrings([
 *    {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ]));  
 * 
 * Result:
 * 
 * ["Angelina Jolie can go to The Matrix", 
 * "Eric Jones is under age!!", 
 * "Paris Hilton is under age!!", 
 * "Kayne West is under age!!", 
 * "Bob Ziroll can go to The Matrix"]
 *  ["John", "Jacob", "Jingleheimer", "Schmidt"]
 */
let array5=[
    {
      name: "Angelina Jolie",
      age: 80
    },
    {
      name: "Eric Jones",
      age: 2
   },
    {
      name: "Paris Hilton",
      age: 5
    },
    {
      name: "Kayne West",
      age: 16
     },
     {
      name: "Bob Ziroll",
      age: 100
     }]; 

function makeStrings(arr){
  makeStrings_array=arr.map((array) =>{
    if ( array.age > 25 ){
      console.log( `${array.name} can go to The Matrix`);
    }else{
      console.log(`${array.name} is under age!!`);
    }
  });
}
makeStrings(array5);
document.getElementById("q5").innerHTML= "Q5:Make an array of strings of the names saying whether or not they can go to The Matrix";
document.getElementById("ans5").innerHTML= makeStrings_array ;
/////////////////////////////////////////////////////////////////////////
/*
 * Exercise 6:  
 * 
 * Make an array of the names in h1s, and the ages in h2s
 *
 * Test Case: 
 *
 * console.log(readyToPutInTheDOM([
 *   {
 *       name: "Angelina Jolie",
 *       age: 80
 *   },
 *   {
 *       name: "Eric Jones",
 *       age: 2
 *   },
 *   {
 *       name: "Paris Hilton",
 *       age: 5
 *   },
 *   {
 *       name: "Kayne West",
 *       age: 16
 *   },
 *   {
 *       name: "Bob Ziroll",
 *       age: 100
 *   }
 * ])); 
 * 
 * Result:
 * 
 * ["<h1>Angelina Jolie</h1><h2>80</h2>", 
 * "<h1>Eric Jones</h1><h2>2</h2>", 
 * "<h1>Paris Hilton</h1><h2>5</h2>", 
 * "<h1>Kayne West</h1><h2>16</h2>", 
 * "<h1>Bob Ziroll</h1><h2>100</h2>"]
 */

function readyToPutInTheDOM(arr){
  readyToPutInTheDOM_array=arr.map((array) =>`<h1>${array.name}</h1><h2>${array.age}</h2>,`);
  console.log(readyToPutInTheDOM_array);
}
readyToPutInTheDOM(array5);
document.getElementById("q6").innerHTML= "Q6:Make an array of the names in h1s, and the ages in h2s";
document.getElementById("ans6").innerHTML=readyToPutInTheDOM_array ;
////////////////////////////////////////////////////////////////////////////////
/*
* Exercise 7:
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Cases:
*   Test Case 1:  doubleValues([1,2,3]) 
*   Test Case 2:  doubleValues([1,-2,-3])  
*
* Result:
* Test Case 1: [2,4,6] 
* Test Case 2: [2,-4,-6]
*/
function doubleValues(arr){
  doubleArray=arr.map((array) => array*2);
  console.log(doubleArray);
}
  doubleValues([1,2,3]);
  doubleValues([1,-2,-3]);
  document.getElementById("q7").innerHTML= "Q7:doubleValues([1,-2,-3])";
  document.getElementById("ans7").innerHTML= doubleArray ;
/////////////////////////////////////////////////////////////////
  /*
  * Exercise 8:
  * Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.
  *
  *
  * Test Cases :
  *   Test Case 1:  valTimesIndex([1,2,3])  
  *   Test Case 2:  valTimesIndex([1,-2,-3]) 
  * 
  * Result
  * Test Case 1: [0,2,6]
  * Test Case 2: [0,-2,-6]
  */
//  let array8=[1,2,3];
//  let valTimesIndex=array8.map(function (arr, index){
//    return (arr*index);
//  }
//  );
// console.log(valTimesIndex);


  function valTimesIndex(arr){
    valTimesIndex_array = arr.map((array , index) =>array * index);
    console.log(valTimesIndex_array);
    }
  valTimesIndex([1,2,3]);
  valTimesIndex([1,-2,-3]);
  document.getElementById("q8").innerHTML= "Q8:valTimesIndex([1,-2,-3])";
document.getElementById("ans8").innerHTML= valTimesIndex_array ;
  ////////////////////////////////////////////////////////////////////
  /*
  * Exercise 9:
  * Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value
  * of that key in each object.
  * 
  * Test Case:
  * extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') 
  * 
  * Result:
  * ['Elie', 'Tim', 'Matt', 'Colt']
  */

 let array9=[{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'},
 {name: 'Colt'}];

  function extractKey(arr, key){
      extractKey_array=arr.map((array) => array[key])
        console.log(extractKey_array);
}
extractKey(array9,"name");
document.getElementById("q9").innerHTML= "extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name')";
document.getElementById("ans9").innerHTML= extractKey_array ;
  /////////////////////////////////////////////////////////////////////////
  /*
  * Exercise 10:
  * Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 
  * 
  * Examples:
  * extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
  */
//   extractFullName=[{first: 'Elie', last:"Schoppik"}, 
//                      {first: 'Tim', last:"Garcia"},
//                      {first: 'Matt', last:"Lane"},
//                      {first: 'Colt', last:"Steele"}];

  let array10=[{first:'Elie', last:"Schoppik"}, 
              {first: 'Tim', last:"Garcia"},
              {first: 'Matt', last:"Lane"},
              {first: 'Colt', last:"Steele"}];
 function extractFullName(arr){
  extractFullName_array= arr.map((array) => array.first + " " + array.last );
  console.log(extractFullName_array);
 }
 extractFullName(array10);
 document.getElementById("q10").innerHTML= "Q10:extractFullName([{first: 'Elie', last:Schoppik}, {first: 'Tim', last:Garcia}, {first: 'Matt', last:Lane}, {first: 'Colt', last:Steele}])";
document.getElementById("ans10").innerHTML= extractFullName_array ;
