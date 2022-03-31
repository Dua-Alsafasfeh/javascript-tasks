ferEach :/*
* Exercise 1: 
* Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled
*
* Test Case:
*    Test Case 1: doubleValues([1,2,3]) 
*    Test Case 2: doubleValues([5,1,2,3,10])  
*
* Result: 
* Test Case 1:  [2,4,6]
* Test Case 2: [10,2,4,6,20]
*
*
*/
function doubleValues(arr){
  let array=[];
  arr.forEach(element => {array.push(element*2)});
  return array;
}

console.log(doubleValues([1,2,3]));
console.log(doubleValues([5,1,2,3,10]));
document.getElementById("q1").innerHTML ="Q1:Write a function named doubleValues";
document.getElementById("ans1").innerHTML =`doubleValues([1,2,3])= ${doubleValues([1,2,3])}`;

/*
* Exercise 2:
* Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function
*
* Test Cases:
*   onlyEvenValues([1,2,3]) 
*   onlyEvenValues([5,1,2,3,10]) 
* 
* Result:
*  Test Case 1:  [2]
*  Test Case 2: [2,10]
*/
function onlyEvenValues(arr){
  let array=[];
  arr.forEach(element => {
      if(element %2 ==0){
      array.push(element)
      }
  });
  return array;
}

console.log(onlyEvenValues([1,2,3]));
console.log(onlyEvenValues([5,1,2,3,10]));
document.getElementById("q2").innerHTML ="Q2:Write a function named onlyEvenValues";
document.getElementById("ans2").innerHTML =`onlyEvenValues([1,2,3])= ${onlyEvenValues([1,2,3])}`;
/*
* Exercise 3:
* Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.
*
* Test Case:
*   Test Case 1: showFirstAndLast(['colt','matt', 'tim', 'udemy'])  
*   Test Case 2 :showFirstAndLast(['hi', 'goodbye', 'smile'])  
*  
* Result:
* Test Case 1: ["ct", "mt", "tm", "uy"]
* Test Case 2: ['hi', 'ge', 'se']
*
*/
function showFirstAndLast(arr){
  let array=[];
  arr.forEach(element => {
      let firstAndLast= element[0]+element[element.length-1];
      array.push(firstAndLast);
  });
  return array;
}

console.log(showFirstAndLast(['colt','matt', 'tim', 'udemy']));
console.log(showFirstAndLast(['hi', 'goodbye', 'smile']));
document.getElementById("q3").innerHTML ="Q3:Write a function named showFirstAndLast";
document.getElementById("ans3").innerHTML =`showFirstAndLast(['colt','matt', 'tim', 'udemy'])= ${showFirstAndLast(['colt','matt', 'tim', 'udemy'])}`;
/*
* Exercise 4:
* Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed 
* to the function with the new key and value added for each object 
* 
* Test Cases:
*   Test Case :addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
*   
* Result:
*   [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]
*
*/
function addKeyAndValue(array, key, value){
  array.forEach(element => {
      element[key] =value;
  });
  return array;
}

console.log(addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor'));
document.getElementById("q4").innerHTML ="Q4:Write a function named addKeyAndValue";
document.getElementById("ans4").innerHTML =`addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')==> ${addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor')}`;
/*
* Exercise 5:
* Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the 
* values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count
* 
* Test Cases 1: vowelCount('Elie') // {e:2,i:1};
* Test Cases 2:  vowelCount('Tim') // {i:1};
* Test Cases 3:  vowelCount('Matt') // {a:1})
* Test Cases 4:  vowelCount('hmmm') // {};
* Test Cases 5:  vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*   
* Result:
* Test Cases 1: {e:2,i:1};
* Test Cases 2: {i:1};
* Test Cases 3: {a:1})
* Test Cases 4: {};
* Test Cases 5: {i: 1, a: 4, e: 3, o: 3, u: 1};
*
*/

function vowelCount(str){
  let obj={};
  let list=[];
  for(let ind=0; ind<str.length; ind++){
      list.push(str[ind])
  }
      let a= 0;
      let e= 0;
      let i= 0;
      let o= 0;
      let u= 0;
  list.forEach(element => {
      if (element == 'a' || element == 'A'){
          a++;
          obj.a=a;
      }
      if (element == 'e' || element == 'E'){
          e++;
          obj.e=e;
      }
      if (element == 'i' || element == 'I'){
          i++;
          obj.i=i;
      }
      if (element == 'o' || element == 'O'){
          o++;
          obj.o=o;
      }
      if (element == 'u' || element == 'U'){
          u++;
          obj.u=u;
      }
  });
return obj;
}

console.log(vowelCount('Elie'));
console.log(vowelCount('Tim'));
console.log(vowelCount('Matt'));
console.log(vowelCount('hmmm'));
console.log(vowelCount('I Am awesome and so are you'));
document.getElementById("q5").innerHTML ="Q5:Write a function named vowelCount";
document.getElementById("ans5").innerHTML =`vowelCount('I Am awesome and so are you')==> ${vowelCount('I Am awesome and so are you')}`;