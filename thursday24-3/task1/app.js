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
function repeatWord(str) {
 let split = str.split(" "),
  obj = {};
  
  for (let i = 0; i < split.length; i++) {
  if (obj[split[i]] === undefined) {
    obj[split[i]] = 1;
  }
   else {
    obj[split[i]]++;
  }
  }
    return obj;
  };
      
  console.log(repeatWord("My name is alex mercer class name B my baba mama hello Hello HELLO"));
  document.getElementById("q6").innerHTML="Question6: Create a function called repeatWord";
document.getElementById("ans6").innerHTML=`repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO") ==>${repeatWord("My name is alex mercer class name B baba mama hello Hello HELLO")}`;
  

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
function repeatChar(str) {
  var obj={};
  for(let x = 0, length = str.length; x < length; x++) {
      var l = str.charAt(x)
      obj[l] = (isNaN(obj[l]) ? 1 : obj[l] + 1);
    }
    return obj;
  };
  console.log(repeatChar("mamababatetacedo"));
  document.getElementById("q7").innerHTML="Question7: Create a function called repeatChar";
  document.getElementById("ans7").innerHTML=`repeatChar("mamababatetacedo") ==>${repeatChar("mamababatetacedo")}`;

  ////or/////
  // function repeatChar1(string){
  //   let subSting=string.toLowerCase(); // To count Uppercase and Lowercase
  //   var obj={}
  //   for(let i = 0, length = subSting.length; i < length; i++) {
  //       var objIndex = subSting.charAt(i)
  //       obj[objIndex] = (isNaN(obj[objIndex]) ? 1 : obj[objIndex] + 1); //Another way to write if statment
  //   } 
  //   return obj;
  // }
  // console.log(repeatChar1("mamababatetacedo"));
/*
9
Create a function called selectFromObject
that accept an object and an array
and return an object have the key that inside the array

Ex: selectFromObject({a: 1, cat: 3}, ['a', 'cat', 'd'])
=>  {a: 1, cat: 3}
*/
function selectFromObject(x,y){
  let obj = {}
      for(let i =0 ; i<y.length ; i++)
      {
          // console.log(Object.keys(x)[0]);
          // console.log(y[0]);
          if(Object.keys(x)[i]==y[i])
          {
              // console.log(x[y[i]]);
              obj[y[i]] = x[y[i]];
          }
      }
  return obj
  }
  console.log(selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd']));
  document.getElementById("q8").innerHTML="Question8: Create a function called selectFromObject";
  document.getElementById("ans8").innerHTML=`selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd']) ==>${selectFromObject({a: 1, cat: 3 }, ['a', 'cat', 'd'])}`;
  ///////////////////////////
/*
10
Create a function called objectToArray
that accept an object
and return an array of the keys and values in this object

Ex: objectToArray({firstName:"Moh",age:24})
=> ["firstName","Moh","age",24]
*/
function objectToArray(obj){
  let arr=[];
  let objkeys= Object.keys(obj);
  let objvals=Object.values(obj);
  let l=objkeys.length;
  for(let i=0; i<l; i++){
      arr.push(objkeys[i]);
      arr.push(objvals[i]);
  }
  return arr; 
}

console.log(objectToArray({firstName:"Moh",age:24}));
document.getElementById("q8").innerHTML="Question8: Create a function called objectToArray";
  document.getElementById("ans8").innerHTML=`objectToArray({firstName:"Moh",age:24}) ==>${objectToArray({firstName:"Moh",age:24})}`;

/*
11
Create a function called arrayToObject
that accept an array
and return an object of the keys and values in this object

Ex: arrayToObject(["firstName","Moh","age",24])
=> {firstName:"Moh",age:24}
*/
function arrayToObject(arr){
  let obj={};
  let l= arr.length;
  for (let i=0; i<l;){
      obj[arr[i]]=arr[i+1];
      i+=2;
  }
  return obj;
}

console.log(arrayToObject(["firstName","Moh","age",24]));
document.getElementById("q9").innerHTML="Question9: Create a function called arrayToObject";
  document.getElementById("ans9").innerHTML=`arrayToObject(["firstName","Moh","age",24]) ==> ${arrayToObject(["firstName","Moh","age",24])}`;

/*
12
Create a function called onlyNumber
that accept an object
and return a new object that have only the values that is a number
**hint: search in MDN how to know the type of variable

Ex: onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {age:24}
*/
function onlyNumber(obj) {
  let newObj={};
  for (let i = 0; i < Object.keys(obj).length; i++) {
    if (typeof(Object.values(obj)[i]) == `number`) {
      newObj[Object.keys(obj)[i]] = Object.values(obj)[i];
    }
  } return newObj;
}
console.log(onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById("q10").innerHTML="Question10: Create a function called onlyNumber";
  document.getElementById("ans10").innerHTML=`onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"], he:7,she:9}) ==> ${onlyNumber({firstName:"Moh",age:24,movies:[1,5,"string"]})}`;

/*
13
Create a function called onlyString
that accept an object
and return a new object that have only the values that is a string
**hint: search in MDN how to know the type of variable

Ex: onlyString({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {firstName:"Moh"}
*/
function onlyString(obj){
  let newobj={};
  let objkeys= Object.keys(obj);
  let objvals= Object.values(obj);
  let l= objkeys.length;
  for (let i=0; i<l;i++){
      if(typeof(objvals[i]) == 'string'){
        newobj[objkeys[i]] = objvals[i];
      }
  }
  return newobj;
}

console.log(onlyString({firstName:"Moh",age:34,movies:[1,5,"string"]}));
document.getElementById("q11").innerHTML="Question11: Create a function called onlyString";
  document.getElementById("ans11").innerHTML=`onlyString({firstName:"Moh",age:34,movies:[1,5,"string"]}) ==> ${onlyString({firstName:"Moh",age:34,movies:[1,5,"string"]})}`;

/*
14
Create a function called onlyArray
that accept an object
and return a new object that have only the values that is a array
**hint: search in MDN how to know the type of variable

Ex: onlyArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> {movies:[1,5,"string"]}
*/
function onlyArray(obj){
  let newobj={};
  let objkeys= Object.keys(obj);
  let objvals= Object.values(obj);
  let l= objkeys.length;
  for (let i=0; i<l;i++){
      if(Array.isArray(objvals[i])){
        newobj[objkeys[i]] = objvals[i];
      }
  }
  return newobj;
}

console.log(onlyArray({firstName:"Moh",age:34,movies:[1,5,"string"]})); 
document.getElementById("q12").innerHTML="Question12: Create a function called onlyArray";
  document.getElementById("ans12").innerHTML=`onlyArray({firstName:"Moh",age:34,movies:[1,5,"string"]}) ==> ${onlyArray({firstName:"Moh",age:34,movies:[1,5,"string"]})}`;
/*
15
Create a function called keysArray
that accept an object
and return an array have the key inside this object

Ex: keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})
=> ['firstName', 'age', 'movies']

*/
function keysArray(obj){
  let list=Object.keys(obj);
  return list;
}

console.log(keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}));
document.getElementById("q13").innerHTML="Question13: Create a function called keysArray";
  document.getElementById("ans13").innerHTML=`keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]}) ==> ${keysArray({firstName:"Moh",age:24,movies:[1,5,"string"]})}`;