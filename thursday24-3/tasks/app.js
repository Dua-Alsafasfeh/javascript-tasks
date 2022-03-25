"use strict";
/*
1
Create an object represents you
have your first name, last name, age, dob(date of birth), favorite food (3),favorite movie (5)
*/
let mine = {
  firstName: "Duaa",
  lastName: "Alsafasfeh",
  DOB:"25/2/1993",
  favourite_food:["Humburger", "pizza","fruits"],
  favourite_movie:["the man who know infinity" ,"the shawshank redemption", "judy abbott"]
};
console.log("Question 1: Create an object represents you");
console.log(`my name is ${mine.firstName} ${mine.lastName} I was born in ${mine.DOB} . My favourite foods are ${mine.favourite_food} . My favourite Movies are ${mine.favourite_movie}. `);
document.getElementById("q1").innerHTML="Question 1: Create an object represents you";
document.getElementById("ans1").innerHTML=(`my name is ${mine.firstName} ${mine.lastName} I was born in ${mine.DOB} . My favourite foods are ${mine.favourite_food} . My favourite Movies are ${mine.favourite_movie}. `);

/////////////////////////////////////////////////////////////////////////////
var persons = [
  { name: { first: 'John', last: 'Hob' }, age: 35 },
  { name: { first: 'Alex', last: 'Mercer' }, age: 25 },
  { name: { first: 'Alice', last: 'Zaheer' }, age: 24 },
  { name: { first: 'Zues', last: 'Odin' }, age: 55 },
  { name: { first: 'Soso', last: 'Al-Amora' }, age: 67 }
];

/*
2
Using the varabile persons
Create a function called firstName
that accept an object
and return all the first name of the person insides

Ex: firstName(persons) => ['John', 'Alex', 'Alice', 'Thor', 'Soso']
*/
function firstName(fname){
  let array=[];
  for (let i=0 ; i< fname.length; i++){
    array.push(fname[i].name.first);
  }
  return array;
}
console.log("Question 2: Create a function called firstName");
console.log(firstName(persons));
document.getElementById("q2").innerHTML="Question 2: Create a function called firstName";
document.getElementById("ans2").innerHTML=firstName(persons);

/////////////////////////////////////////////////////////////////////
/*
3
Using the varabile persons
Create a function called averageAge
that accept an object
and return the average age of those persons

Ex: averageAge(persons) => 41.2
*/
function averageAge(avgage){
  let sum=0;
  for (let i=0 ; i< avgage.length ; i++){
    let x=avgage[i].age;
    sum= sum+x;
  }
  return sum/avgage.length;
}
console.log("Question 3: Create a function called averageAge");
console.log(averageAge(persons));
document.getElementById("q3").innerHTML="Question 3: Create a function called averageAge";
document.getElementById("ans3").innerHTML=averageAge(persons);
/*
4
Using the varabile persons
Create a function called olderPerson
that accept an object
and return the full name of the older person

Ex: olderPerson(persons) => "Soso Al-Amora"
*/
function olderPerson(oldest){
  let the_older=" ";
  for ( let i=0 ; i< oldest.length-1 ; i++){
      if (oldest[i].age < oldest[i+1].age){
        the_older=oldest[i+1].name.first +" "+ oldest[i+1].name.last ;
      }
  }
  return the_older;
}
console.log("Question 4: Create a function called olderPerson");
console.log(olderPerson(persons));
document.getElementById("q4").innerHTML="Question4: Create a function called olderPerson";
document.getElementById("ans4").innerHTML= olderPerson(persons);
//////////////////////////////////////////////////////////////////////

/*
5
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/
function longestName(longest){
  let longer=" ";
  for (let i=0 ; i < longest.length ; i++){
      let x=longest[i].name.first.length + longest[i].name.last.length;
      if ( x[i] < x[i+1]){
          longer=`${longest[i+1].name.first}  ${longest[i+1].name.last}`;
      }else{
        longer=`${longest[i].name.first}  ${longest[i].name.last}`;
      }

  }return longer;
}
console.log("Question 5: Create a function called longestName");
console.log(longestName(persons));
document.getElementById("q5").innerHTML="Question5: Create a function called longestName";
document.getElementById("ans5").innerHTML= longestName(persons);
/////////////////////////////////////////////////////////////////////
/*
6
Using the varabile persons
Create a function called longestName
that accept an object
and return the full name of the person have longest full name

Ex: longestName(persons) => "Soso Al-Amora"
*/

//////////////////////////////////////////////////////////////////

/*
7
Create a function called repeatWord
that accept a string
and return an object that represents how many times each word repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to words??

Ex: repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")
=> {
  my:1,
  name:2,
  is:1,
  alex:1,
  mercer:1,
  class:1,
  b:1,
  baba:1,
  mama:1,
  hello:3
}
*/
// function repeatWord(str){

// }


/*
8
Create a function called repeatChar
that accept a string
and return an object that represents how many times each char repeat
** no matter it is upper case or lower case
** Search on MDN about something can cut the string to char??

Ex: repeatChar("mamababatetacedo")
=> { m:2,  a:5, b:2, t2:, e:2, c:1, d:1, o:1}
*/


/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/


/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/


/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/


/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/


/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/


/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/


/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
