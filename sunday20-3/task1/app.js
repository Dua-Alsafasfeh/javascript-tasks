'use strict';
let x=prompt("please enter number1");
let num1=Number(x);
let y=prompt("please enter number2");
let num2=Number(y);

if(num1>num2){
    console.log("Hello world");
    document.getElementById("hello").innerHTML="Hello World";
}
else{
    alert("Goodbye")
}