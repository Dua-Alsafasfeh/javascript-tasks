'use strict';
/*
1
Write a function named tellFortune that:
takes 4 arguments: number of children,
partner's name, geographic location, job title.
outputs your fortune to the screen like so:
"You will be a X in Y, and married to Z with N kids."

Ex: tellFortune('software engineer', 'Jordan', 'Alice', 3);
=> "You will be a software engineer in Jordan, and married to Alice with 3 kids."
*/
let partner_name=prompt("please Enter your partner's name!");
let job_title=prompt("please Enter your job title!");
let geographic_location=prompt("please Enter your geographic location!");
let number_of_children=prompt("please Enter your number of children!");

function tellFortune(X ,Y ,Z ,N){
  console.log(`You will be a ${X} in ${Y}, and married to ${Z} with ${N} kids.`);
}
tellFortune(job_title, geographic_location, partner_name, number_of_children);
document.getElementById("q1").innerHTML="Q1:Write a function named tellFortune";
document.getElementById("ans1").innerHTML=`You will be a ${job_title} in ${geographic_location}, and married to ${ partner_name} with ${ number_of_children} kids.`;

/*
2
Write a function named calculateDogAge that:
takes 1 argument: your puppy's age.
calculates your dog's age based on the conversion
rate of 1 human year to 7 dog years.
outputs the result to the screen like so:
"Your doggie is NN years old in dog years!"

Ex: calculateDogAge(1);
=> "Your doggie is 7 years old in dog years!"
*/
function calculateDogAge(puppy_age){
  let age= puppy_age*7;
  return (`Your doggie is ${age} years old in dog years!`);
}
calculateDogAge(1);
console.log(calculateDogAge(1));
document.getElementById("q2").innerHTML ="Q2:Write a function named calculateDogAge";
document.getElementById("ans2").innerHTML =` ${calculateDogAge(1)}`;

/*
3
Write a function named calculateSupply that:
takes 2 arguments: age, amount per day.
calculates the amount consumed for rest of the life (based on a constant max age 100).
outputs the result to the screen like so:
"You will need NN to last you until the ripe old age of X"

Ex: calculateSupply(30, 3);
=> 'You will need 76650 cups of tea to last you until the ripe old age of 100;
*/
function calculateSupply( age , amount_per_day ){
  let the_age= (100 - age );
  let the_tea= (the_age*365) * amount_per_day;
  return (`You will need ${the_tea} cups of tea to last you until the ripe old age of 100`)
}
calculateSupply(30, 3);
console.log(calculateSupply(30, 3));
document.getElementById("q3").innerHTML ="Q3:Write a function named calculateSupply";
document.getElementById("ans3").innerHTML =`${calculateSupply(30, 3)}`;
///////////////////////////////////////////////////
/*
4
Write a function called greet that:
takes 1 argument: name.
and it will return hello + name

Ex: greet("Adam")
=> "Hello Adam"
*/
let your_name=prompt("please Enter your name!")
function greet(name){
  console.log(`Hello ${name}`);
}
greet(your_name);
document.getElementById("q4").innerHTML="Q4:Write a function called greet that return hello name";
document.getElementById("ans4").innerHTML=(`Hello ${your_name}`);

//////////////////////////////////////////////////////////////
/*
5
what is the error:
function double(cat) {
  return 2 * x;
}
//x is undefined ,,,so x must be "cat" 

function double(7) {
  return 2 * 7;
}
//the parameter of function must'nt be a number

function double('7') {
  return 2 * 'x';
}
//parameter must'nt be string 
*/


///////////////////////////////////////////////////////////////////
/*
6
fix these functions:
func double1(x {
  return 2 * x ;
}
//function double1(x){
  return 2 * x ;
}


functiondouble2 x)
return 2 * x;
}
//function double2 (x){
return 2 * x;
}

function (x) double3 {
  return 2 * x;
//function double3 (x)  {
  return 2 * x;
}
*/

/////////////////////////////////////////////////////////////////
/*
7
Write a function called cube that:
accept 1 parameter and calculate the cube of this number

Ex: cube(4)
=> 64
*/
function cube(x){
  return (x**3);
  
}
cube(4);
console.log(cube(4));
document.getElementById("q5").innerHTML="Q5:Write a function called cube";
document.getElementById("ans5").innerHTML=(`the cube of 4 = ${cube(4)}`);

///or math.pow(x,3)

/////////////////////////////////////////////////
/*
8
Write a function called multiply that:
accept 2 parameters and calculate the multiply of these 2 numbers

Ex: multiply(3,4)
=> 12
Ex: multiply(5,4)
=> 20
*/
function multiply(x ,y){
  return ( x*y );
}
multiply(3,4);
console.log(multiply(3,4));
document.getElementById("q6").innerHTML ="Q6:Write a function called multiply";
document.getElementById("ans6").innerHTML =`the multiply of 3 with 4 = ${multiply(3,4)}`;

/////////////////////////////////////////////////////////
/*
9
Write a function called canIGetADrivingLicense that:
accept 1 parameter represent the age
and if the age greater than or equal to 20 return "yes you can"
otherwise return "please come back after X years to get one"

Ex: canIGetADrivingLicense(21)
=> "yes you can"

Ex: canIGetADrivingLicense(17)
=> "please come back after 3 years to get one"

Ex: canIGetADrivingLicense(20)
=> "yes you can"
*/
function canIGetADrivingLicense(age){
  if (age>=20){
    return ('yes you can');
  }
  else {
    let age_must_be=20-age;
    return (`please come back after ${age_must_be} years to get one`);
  }
}
canIGetADrivingLicense(20);
canIGetADrivingLicense(17);

document.getElementById("q7").innerHTML ="Q7:Write a function called canIGetADrivingLicense";
document.getElementById("ans7").innerHTML =`canIGetADrivingLicense(20)? ${canIGetADrivingLicense(20)} <br> canIGetADrivingLicense(17) ? ${canIGetADrivingLicense(17)} `;

//////////////////////////////////////////////////////////////
/*
10
Write a function called sameLength
that accepts two strings as arguments,
and returns true if those strings have the same length, and false otherwise.

**hint: how we can know string length   Ex: : "tree".length   => 4

Ex: sameLength("tree","clue")
=> true

Ex: sameLength("tree","car")
=> false
*/
function sameLength(word1 , word2){
  if (word1.length == word2.length){
    return ('true');
  }
  else{
    return ('false');
  }
}
sameLength("tree" , "clue");
sameLength("tree","car")
document.getElementById("q8").innerHTML ="Q8:Write a function called sameLength";
document.getElementById("ans8").innerHTML =`canIGetADrivingLicense(20)? ${canIGetADrivingLicense(20)} <br> canIGetADrivingLicense(17) ? ${canIGetADrivingLicense(17)} `;

/////////////////////////////////////////////////////
/*
11
Write a function called largerNubmer
that accept two numbers as arguments,
and return the first larger numbers

Ex: largerNubmer(5,6)
=> 6

Ex: largerNubmer(5,3)
=> 5
*/
function largerNubmer(n1 , n2){
  if (n1>n2){
    return n1;
  }
  else{
    return n2;
  }
}
largerNubmer(5 , 7);
console.log(largerNubmer(5 , 7));
document.getElementById("q9").innerHTML ="Q9:Write a function called largerNubmer";
document.getElementById("ans9").innerHTML =`largerNubmer  of (5 , 7) is: ${largerNubmer(5 , 7)}`;
///////////////////////////////////////////////////////////////////
/*
12
Write a function called smallerNubmer
that accept three numbers as arguments,
and return the first smaller number

Ex: smallerNubmer(8,6,7)
=> 6

Ex: smallerNubmer(5,99,34)
=> 5

Ex: smallerNubmer(5,99,3)
=> 3

Ex: smallerNubmer(5,3,3)
=> 3
*/
function smallerNubmer(n1 , n2 , n3){
  if (n1<n2){
    if (n1<n3){
      return n1;
    }else{
      return n3;
    }
  }else if(n2<n3){
    return n2;
  }
    else{
      return n3;
    }
  } 
smallerNubmer(5 , 7, 9);
console.log(smallerNubmer(5 , 7, 9));
document.getElementById("q10").innerHTML ="Q10:Write a function called smallerNubmer";
document.getElementById("ans10").innerHTML =`smallerNubmer  of (5 , 7, 9) is: ${smallerNubmer(5 , 7, 9)}`;

////////////////////////////////////////////////////////////////////////
/*
13
Write a function called shorterString
that accept five string as an arguments,
and return the first shorter string

Ex: shorterString("air","school","car","by","github")
=> by

Ex: shorterString("air","tr","car","by","github")
=> tr

Ex: shorterString("by","tr","car","air","github")
=> by

Ex: shorterString("air","by","car","school","github")
=> by

Ex: shorterString("air","tr","by","car","github")
=> by

Ex: shorterString("air","tr","car","github","by")
=> by

*/

function shorterString(str1 ,str2 ,str3 ,str4, str5){
  let str11= str1.length;
  let str22= str2.length;
  let str33= str3.length;
  let str44= str4.length;
  let str55= str5.length;
  let shortest=str1;
  if (str22<str11){
      shortest=str2;
  }
  if (str33<str11 && str33<str22){
      shortest=str3;
  }
  if (str44<str11 && str44<str22 && str44<str33){
      shortest=str4;
  }
  if (str55<str11 && str55<str22 && str55<str33 && str55<str44){
      shortest=str5;
  }
  return shortest;
}
shorterString("air","school","car","by","github");
console.log(shorterString("air","school","car","by","github"));
document.getElementById("q11").innerHTML ="Q11:Write a function called shorterString";
document.getElementById("ans11").innerHTML =`shorterString("air","school","car","by","github") ${shorterString("air","school","car","by","github")}`;
//////////////////////////////////////////////////////////////////
/*
14
Write a function called longerString
that accept four string as an arguments,
and return the first longer string

Ex: longerString("air","school","car","github")
=> school

Ex: longerString("air","schoo","car","github")
=> github

try all the cases (change the order of the longestString)
*/
function longerString(str1 ,str2 ,str3 ,str4){
  let str11= str1.length;
  let str22= str2.length;
  let str33= str3.length;
  let str44= str4.length;
  let longest=str1;
  if (str22>str11){
      longest=str2;
  }
  if (str33>str11 && str33>str22){
      longest=str3;
  }
  if (str44>str11 && str44>str22 && str44>str333){
      longest=str4;
  }
  return longest;
}
longerString("air","school","car","github")
console.log( longerString("air","school","car","github"));
document.getElementById("q12").innerHTML ="Q12:Write a function called longerString";
document.getElementById("ans12").innerHTML =` longerString("air","school","car","github") is ${ longerString("air","school","car","github")}`;

//////////////////////////////////////////////////////////////////////
/*
15
Write a function called isEven
that accept 1 argument as a number,
and return true if this number is even
and false if this number is odd

Ex: isEven(1)
=> false
Ex: isEven(2)
=> true

*/
function isEven(number){
  if (number%2==0){
    return true;
  }
  else {
    return false;
  }
}
isEven(5);
console.log(isEven(5));
document.getElementById("q13").innerHTML ="Q13:Write a function called isEven";
document.getElementById("ans13").innerHTML =`isEven(5)? ${isEven(5)} <br>  isEven(2)? ${ isEven(2)}`;

///////////////////////////////////////////////////////////////
/*
16
Write a function called isOdd
that accept 1 argument as a number,
and return true if this number is Odd
and false if this number is Even

Ex: isOdd(4)
=> false
Ex: isOdd(5)
=> true
*/
function isOdd(number){
  if (number%2!=0){
    return true;
  }
  else {
    return false;
  }
}
isOdd(5);
console.log(isOdd(5));
document.getElementById("q14").innerHTML ="Q14:Write a function called isOdd";
document.getElementById("ans14").innerHTML =`isOdd(5)? ${isOdd(5)} <br> isOdd(4)? ${isOdd(4)}`;

///////////////////////////////////////////////////////////////////////
/*
17
Write a function called positive
that accept 1 argument as a number,
and return the positive version of the number passed

Ex: positive(4)
=> 4
Ex: positive(-5)
=> 5
*/
function positive(number){
  if (number>0){
    return number;
  }
  else{
    let num=number*(-1);
    return num;
  }
}
positive (-5);
console.log(positive (-5));
document.getElementById("q15").innerHTML ="Q15:Write a function called positive";
document.getElementById("ans15").innerHTML =`positive (-5)= ${positive (-5)} <br> positive(4)= ${positive(4)}`;
//////////////////////////////////////////////////////////////////
/*
18
Write a function called fullName
that accept two parameters, firstName and lastName,
and returns the firstName and lastName concatenated
together with a space in between.

Ex: fullName("Adam","McCallen")
=> "Adam McCallen"
Ex: fullName("Alex", "Mercer")
=> "Alex Mercer"
*/
function fullName(firstName, lastNname){
  return firstName+' '+lastNname;
}

console.log(fullName("Adam","McCallen"));
document.getElementById("q16").innerHTML ="Q16:Write a function called fullName";
document.getElementById("ans16").innerHTML =`fullName("Adam","McCallen") ${fullName("Adam","McCallen")}`;


/*
19
Write a function called average
that takes five numbers as inputs
and returns the average of those numbers.

Ex: average(1,2,3,4,5)
=> 3

Ex: average(5,7,9,3,5)
=> 5.8

*/
function average(n1, n2, n3, n4, n5){
  let sum= n1+n2+n3+n4+n5;
  let average= sum/5;
  return average;
}
console.log(average(1,2,3,4,5));
document.getElementById("q17").innerHTML ="Q17:Write a function called average";
document.getElementById("ans17").innerHTML =`average(1,2,3,4,5) ${average(1,2,3,4,5)}`;
/*
20
Write a function called randomNumber
that didnt takes any parameter
and returns a random number between 0-1
** hint: you can seacrh using MDN

Ex: randomNumber()
=> 0.2278

Ex: randomNumber()
=> 0.475

*/
function randomNumber(){
  return Math.random();
}
console.log(randomNumber());
document.getElementById("q18").innerHTML ="Q18:Write a function called randomNumber";
document.getElementById("ans18").innerHTML =`randomNumber() ${randomNumber()}`;

//////////Task21


/*
21
Write a function called randomBetweenNumbers
that takes 2 parameters
and returns a random number between them
** hint: you can seacrh using MDN

Ex: randomBetweenNumbers(1,8)
=> 7.5412

Ex: randomBetweenNumbers(3,100)
=> 23

*/
function randomBetweenNumbers(num1, num2){
  return (num2-num1)*Math.random()+num1;
}
console.log(randomBetweenNumbers(1,8));
document.getElementById("q19").innerHTML ="Q19:Write a function called randomBetweenNumbers";
document.getElementById("ans19").innerHTML =`randomBetweenNumbers(1,8) ${randomBetweenNumbers(1,8)}`;

/*
22
Write a function called scoreInUniversty
that takes 1 parameters
and returns the alpabet in the unevirsty
A => 95-100
B => 85-94
C => 70-84
D=> 50-69
F=> 0-49

Ex: scoreInUniversty(96)
=> "A"

Ex: scoreInUniversty(3)
=> "F"

Ex: scoreInUniversty(71)
=> "C"
*/
function scoreInUniversity(score){
  let grade= '';
  if (0<=score && score<=49){
      grade= 'F';
  }
  if (50<=score && score<=69){
      grade= 'D';
  }
  if (70<=score && score<=84){
      grade= 'C';
  }
  if (85<=score && score<=94){
      grade= 'B';
  }
  if (95<=score && score<=100){
      grade= 'A';
  }
  return grade;
}
console.log(scoreInUniversity(96));
document.getElementById("q20").innerHTML ="Q20:Write a function called randomBetweenNumbers";
document.getElementById("ans20").innerHTML =`scoreInUniversity(96) ${scoreInUniversity(96)}`;
/*
23
Write a function called counter
that will returns a number bigger
than the one that returnd before
and start from 0

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

*/
let counter_num=0;
function counter(){
    return ++counter_num;
}

console.log(counter());
document.getElementById("q21").innerHTML ="Q21:Write a function called counter";
document.getElementById("ans21").innerHTML =`counter() ${counter()}`;
/*
24
Write a function called resetCounter
that will reset the previuos function
and return the number before reset and
a string say that the counter reset

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: counter()
=> 3

Ex: resetCounter()
=> 3 and the counter reset now

Ex: counter()
=> 1

Ex: counter()
=> 2

Ex: resetCounter()
=> 2 and the counter reset now

Ex: counter()
=> 1
*/
function resetCounter(){
  let oldCounter_num= counter_num;
  counter_num= 0;
  return oldCounter_num + ' and the counter is reset now.';
}
console.log(counter());
console.log(counter());
console.log(resetCounter());
console.log(counter());

