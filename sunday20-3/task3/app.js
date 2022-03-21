'use strict';
let operation=prompt("please choose the operation(+,-,*,/)");
let first_num=prompt("please Enter the first number!");
let x=Number(first_num);
let second_num=prompt("please Enter the second number!");
let y=Number(second_num);

if(operation=='+'){
   console.log(`the result of ${first_num} + ${second_num}=${x+y}`); 
   document.getElementById('plus').innerHTML=`the result of ${first_num} + ${second_num}=${x+y}`;
}
else if(operation=='-'){
    console.log(`the result of ${first_num} - ${second_num}=${x-y}`); 
    document.getElementById('sub').innerHTML=`the result of ${first_num} - ${second_num}=${x-y}`;
}
else if(operation=='*'){
    console.log(`the result of ${first_num} * ${second_num}=${x*y}`); 
    document.getElementById('multiply').innerHTML=`the result of ${first_num} * ${second_num}=${x*y}`;
}
else if(operation=='/'){
    console.log(`the result of ${first_num} / ${second_num}=${x/y}`); 
    document.getElementById('division').innerHTML=`the result of ${first_num} / ${second_num}=${x/y}`;
}
else{
    alert("the operation not valid ")
    document.write("<h2>the operation not valid</h2>")
}