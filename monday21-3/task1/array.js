'use strict';
console.log('Here is : ', 'array')
/*
1
Correct the syntax error
 [ 1,7  9  45, ]

 ["Str" "alex","moh"

 'the’, ‘fox' 'over' lazy, 'dog',  ]
*/
// [1, 7 , 9 , 45]

// ["Str", "alex","moh"]

// ['the', 'fox', 'over' ,'lazy', 'dog']

/*
2
What is the index of "Banana”, Tomato"
var fruits=["Tomato","Banana","Watermelon"]
*/
var fruits = ["Tomato", "Banana", "Watermelon"]
console.log("the index of banana is:1");
console.log("the index of tomato is:0");
document.getElementById("q1").innerHTML = "Q1: What is the index of Banana,Tomato,fruits=[Tomato,Banana,Watermelon]";
document.getElementById("ans1").innerHTML = "the index of banana is:1" + '<br>' + "the index of tomato is:0";
/*
3
Create an array represents your:
1- Favorite Food (5)
2- Favorite Sport (3)
3- Favorite Movie (4)
*/
let favourite_food = ["Humburger", "pizza", "figs", "grapes", "cherries"];
console.log(favourite_food);
let favourite_sport = ["volleyball", "golf", "table tennis"];
console.log(favourite_sport);
let favourite_movie = ["the man who know infinity", "the shawshank redemption", "judy abbott", "harry  potter"];
console.log(favourite_movie);

document.getElementById("q2").innerHTML = "Q2: Create an array represents your:Favorite Food,Favorite Sport ,Favorite Movie"
document.getElementById("ans2").innerHTML = `My favourite_food is: ${favourite_food} <br> My favourite_sport is: ${favourite_sport} <br> My favourite_movie is: ${favourite_movie}`;
/*
4
Create a function called firstOfArray
that take an array as a parameter
and return the first element in an array

Ex: firstOfArray([1,4,5]) => 1
Ex: firstOfArray(["t","u","g","x"]) => "t"
*/
function firstOfArray(arr1) {
    return arr1[0];
}
console.log(firstOfArray([5, 2, 4]));
console.log(firstOfArray(["t", "y", "u", "x"]));
document.getElementById("q3").innerHTML = "Q3: Create a function called firstOfArray";
document.getElementById("ans3").innerHTML = `firstOfArray([5,2,4]) is: ${firstOfArray([5, 2, 4])} <br> firstOfArray(["t","y","u","x"] is ${firstOfArray(["t", "y", "u", "x"])} `;
/*
5
Create a function called lastOfArray
that take an array as a parameter
and return the last element in an array

Ex: lastOfArray([1,4,5]) => 5
Ex: lastOfArray(["t","u","g","x"]) => "x"
*/
let array_1 = [5, 2, 4];
let array_2 = ["t", "y", "u", "x"];
function lastOfArray(arr2) {
    return arr2[arr2.length - 1];
}
console.log(lastOfArray(array_1));
console.log(lastOfArray(array_2));
document.getElementById("q4").innerHTML = "Q4: Create a function called lastOfArray";
document.getElementById("ans4").innerHTML = `lastOfArray([5,2,4]) is: ${lastOfArray(array_1)} <br> lastOfArray(["t","y","u","x"] is ${lastOfArray(array_2)} `;
/*
6
Using console make this array to be like this one (push, unshift, shift, pop)

var array = [0,5,7,9]
=> [1,3,4,6,8,9,10]
*/
var array = [0, 5, 7, 9];
array.push(10);
array.shift();
array.shift();
array.shift();
array.unshift(1, 3, 4, 6, 8);
console.log(array);
document.getElementById("q5").innerHTML = "Q5: var array = [0,5,7,9] to [1,3,4,6,8,9,10]";
document.getElementById("ans5").innerHTML = array;
/*
7
Using the console try to figure out what the thing that’s (push, unshift, shift, pop) return to you

var array2 = [5,9,-7,3.5]
*/
var array = [0, 5, 7, 9];
array.shift();
array.pop();
array.pop();
array.push(9, -7, 3.5);
console.log(array);
document.getElementById("q6").innerHTML = "Q6: var array2 = [0,5,7,9] to [5,9,-7,3.5] ";
document.getElementById("ans6").innerHTML = array;

/*
8
Create a function called middleOfArray
that take an array as a parameter
and return the middle element in an array if it is have an odd elemnets
and return the two middle elemnt in an array if it is have an even elemnets

Ex: middleOfArray([1,4,5]) => 4
Ex: middleOfArray(["t","u","g","x"]) =>"u and g"
*/
///????????????
let arr_1 = [1, 4, 5];
let arr_2 = ["t", "u", "g", "x"];

function middleOfArray(arr) {
    if (arr.length % 2 == 0) {
        return (arr[(arr.length / 2 - 1)] + " , " + arr[(arr.length) / 2]);
    }
    else {
        return arr[((arr.length / 2) - 0.5)];
    }
}
console.log(middleOfArray(arr_1));
console.log(middleOfArray(arr_2));
document.getElementById("q7").innerHTML = "Q7: Create a function called middleOfArray";
document.getElementById("ans7").innerHTML = `middleOfArray([1,4,5]) = ${middleOfArray(arr_1)} <br> middleOfArray(["t","u","g","x"]) = ${middleOfArray(arr_2)}`;

///////////////////////////////////////////////////////
/*
9
Using assignment operator (=)
make the animals array have these animals
var animals = ['cat', 'ele', 'bird']
animals; => ['zebra', 'elephant']
** hint: animals[0]=something


var nums= [1,2,3,8,9]
nums => [5,-22,3.5,44,98,44]
*/

let animals = ['cat', 'ele', 'bird'];
animals[0] = "zebra";
animals[1] = "elephant";
animals[2] = " ";
// animals.splice(2,1);
console.log(animals);

let nums = [1, 2, 3, 8, 9]
nums[0] = 5;
nums[1] = -22;
nums[2] = 3.5;
nums[3] = 44;
nums[4] = 98;
nums.push(44);
console.log(nums);

document.getElementById("q7").innerHTML = "Q7: Using assignment operator";
document.getElementById("ans7").innerHTML = `animals = ['cat', 'ele', 'bird']==> ${animals} <br>nums= [1,2,3,8,9] ==> ${nums}`;

//////////////////////////////////////////////////////////
/*
10
Create a function called indexOfArray
that accept an array and index
and return what this array have in this index

var nums= [1,2,3,8,9]
Ex: indexOfArray(nums,3) => 8
Ex: indexOfArray(nums,1) => 2
Ex: indexOfArray(nums,4) => 9

**try more cases by your self
*/

function indexOfArray(array, index) {
    return array[index];
}
nums = [1, 2, 3, 8, 9];
console.log(indexOfArray(nums, 3));
console.log(indexOfArray(nums, 1));
console.log(indexOfArray(nums, 4));

document.getElementById("q8").innerHTML = "Q8:what this array have in this index. nums=[1,2,3,8,9]";
document.getElementById("ans8").innerHTML = `indexOfArray(nums,3)==> ${indexOfArray(nums, 3)} <br> indexOfArray(nums,1)==> ${indexOfArray(nums, 1)} <br> indexOfArray(nums,4) ==>  ${indexOfArray(nums, 4)} `;

///////////////////////////////////////////////////////
/*
11
Create a function called arrayExceptLast
that accept an array
and return the entire array except the last elemnt
** hint: search abou the function that will cut the array on MDN
var nums= [1,2,3,8,9]
Ex: arrayExceptLast(nums) =>  [1,2,3,8]

**try more cases by your self
*/

function arrayExceptLast(array) {
    array.pop();
    return array;
}
let nums_1 = [1, 2, 3, 8, 9];
console.log(arrayExceptLast(nums_1));
document.getElementById("q9").innerHTML = "Q9:Create a function called arrayExceptLast";
document.getElementById("ans9").innerHTML = `arrayExceptLast([1,2,3,8,9])==> ${arrayExceptLast([1, 2, 3, 8, 9])}`;

/*
12
Create a function called addToEnd
that accept an array and value
and return the entire array with add this value to the end of this array

var nums= [1,2,3,8,9]
Ex: addToEnd(nums,55) =>  [1,2,3,8,55]

**try more cases by your self
*/
var nums_2 = [1, 2, 3, 8, 9]
function addToEnd(array) {
    array.pop();
    array.push(55);
    return array;
}
console.log(addToEnd(nums_2));
document.getElementById("q10").innerHTML = "Q10:Create a function called addToEnd";
document.getElementById("ans10").innerHTML = `addToEnd([1,2,3,8,9],55) ==> ${addToEnd([1, 2, 3, 8, 9], 55)}`;

//////////////////////////////////////////////
// all the exercises below should solved 2 times: 1- for loop 2- while lopp
/*
13
Create a function called sumArray
that accept an array
and return the summation of all elemnt in this array

var nums= [1,2,3,8,9]
Ex: sumArray(nums) => 23

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let nums_3 = [1, 2, 3, 8, 9];
let sum_1 = 0;
for (let i = 0; i < nums_3.length; i++) {
    sum_1 += nums_3[i];
}
console.log(sum_1);
document.getElementById("q11").innerHTML = "Q11:Create a function called sumArray";
document.getElementById("ans11").innerHTML = `sumArray([1,2,3,8,9]) ==> ${sum_1}`;

////////////////////////////while loop///////////////////////////
function sumArray(array) {
    let d = array.length;
    let sum_2 = 0;
    let o = 0;
    while (o < d) {
        sum_2 = sum_2 + array[o];
        o++;
    }
    return sum_2;
}
console.log(sumArray(nums_3));

/*

14
Create a function called minInArray
that accept an array
and return the minimum value inside this array

var nums= [1,2,3,8,9]
Ex: minInArray(nums) => 1

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
let nums_4 = [1, 2, 3, 8, 9];
let max = Infinity;
for (let i = 0; nums_4.length > i; i++) {

    if (nums_4[i] < max) {

        max = nums_4[i];
    }
}

console.log(max);;
document.getElementById("q12").innerHTML = "Q12:Create a function called minInArray";
document.getElementById("ans12").innerHTML = `minInArray( [1,2,3,8,9]) ==> ${max}`;

/////////////////////////while loop//////////////////
function minInArray(array) {
    let mini = array[0];
    let i = 1;
    while (i < array.length) {
        if (array[i] < mini) {
            mini = array[i];
        }
        i++;
    }
    return mini;
}
console.log(minInArray([1, 2, 3, 8, 9]));
///////////////////////////////////////////////////////////////
/*
15
Create a function called removeFromArray
that accept an array and elemnt to remove
and return the array after remove this elemnt from it

var nums= [1,2,3,8,9]
Ex: minInArray(nums,8) => [1,2,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/
function removeFromArray(array, element) {
    let l = array.length;
    for (let i = 0; i < l; i++) {
        if (array[i] == element) {
            array.splice(i, 1)
        }
    }
    return array;
}
console.log(removeFromArray([1,2,3,8,9],8));
document.getElementById("q13").innerHTML = "Q13:Create a function called removeFromArray";
document.getElementById("ans13").innerHTML = `removeFromArray([1,2,3,8,9],8) ==> ${removeFromArray([1,2,3,8,9],8)}`;
//////////////////

let remove = [1, 2, 3, 8, 9]
function removeFromArray(remove) {
    remove.splice(3, 1)
    console.log(remove);
}
removeFromArray(remove);

/*
16
Create a function called oddArray
that accept an array
and return an array have only the odd elemnts

var nums= [1,2,3,8,9]
Ex: oddArray(nums) => [1,3,9]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
17
Create a function called aveArray
that accept an array
and return the average of the numbers inside this array

var nums= [1,2,3,8,9]
Ex: aveArray(nums) => 4.6

var nums2= [1,2,3,8,9,77]
Ex: aveArray(nums) => 16.6

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
18
Create a function called shorterInArray
that accept an array of strings
and return the shortest string inside this array (first)

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: shorterInArray(strings) => "alex"

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

function shorterInArray(...str) {
    for (let i = 0; i < str.length; i++) {
        var shorter = str.reduce(function (a, b) { return a.length <= b.length ? a : b; });
    } return shorter;
}


console.log((shorterInArray("alex", "mercer", "madrasa", "rashed2", "emad", "hala")));
document.getElementById("q16").innerHTML = "Q16:Create a function calledshorterInArray";
document.getElementById("ans16").innerHTML = `shorterInArray["alex","mercer","madrasa","rashed2","emad","hala"] ==> ${shorterInArray("alex", "mercer", "madrasa", "rashed2", "emad", "hala")}`;

/////////////////////////////////while//////////////////
function shorterInArray1(...str) {
    let i = 0;
    while (i < str.length) {
        var shorter = str.reduce(function (a, b) { return a.length <= b.length ? a : b; });
        i++;
    } return shorter;
}
console.log((shorterInArray1("alex", "mercer", "madrasa", "rashed2", "emad", "hala")));
/*
19
Create a function called repeatChar
that accept a string and char
and return the times that this char repeat inside this string

var string= "alex mercer madrasa rashed2 emad hala"
Ex: repeatChar(string,"a") => 6
Ex: repeatChar(string,"z") => 0

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
20
Create a function called evenIndexOddLength
that accept an array of strings
and return a new array that have the string with odd length in even index

var strings= ["alex","mercer","madrasa","rashed2","emad","hala"]
Ex: evenIndexOddLength(strings) => ["madrasa"]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*





21
Create a function called powerElementIndex
that accept an array of number
and return a new array that have the elemnt power by the index of it self

var nums= [44, 5, 4, 3, 2, 10]
Ex: powerElementIndex(nums) => [0, 5, 16, 27, 16, 100000]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/


/*
22
Create a function called evenNumberEvenIndex
that accept an array of nums
and return a new array that have the even number in even index

var nums= [5,2,2,1,8,66,55,77,34,9,55,1]
Ex: evenNumberEvenIndex(nums) => [2,8,34]

** solve it one time using for loop and another using while loop
**try more cases by your self
*/

