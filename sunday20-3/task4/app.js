'use strict';
let x=prompt("please Enter number1");
let a=Number(x);
let y=prompt("please Enter number2");
let b=Number(y);
let z=prompt("please Enter number3");
let c=Number(z);

if(a%3==0){
    if(a%5==0){
        console.log(`the number ${x} fizz buzz`);
        document.write(`<h3>the number ${x} fizz buzz</h3>`);
    }else
    console.log(`the number ${x} fizz`);
    document.write(`<h3>the number ${x} fizz</h3>`)
}
else if(a%5==0){
    console.log(`the number ${x} buzz`);
    document.write(`<h3>the number ${x} buzz</h3>`)
}
else{
    console.log(`the number ${x} is not divisible on 3 and 5`)
    document.write(`<h3>the number ${x} is not divisible on 3 and 5</h3>`)
}
//////////////////
if(b%3==0){
    if(b%5==0){
        console.log(`the number ${y} fizz buzz`);
        document.write(`<h3>the number ${y} fizz buzz</h3>`)
    }else
    console.log(`the number ${y} fizz`);
    document.write(`<h3>the number ${y} fizz</h3>`)
}
else if(b%5==0){
    console.log(`the number ${y} buzz`);
    document.write(`<h3>the number ${y} buzz</h3>`)
}
else{
    console.log(`the number ${y} is not divisible on 3 and 5`)
    document.write(`<h3>the number ${y} is not divisible on 3 and 5</h3>`)
}
/////////////////
if(c%3==0){
    if(c%5==0){
        console.log(`the number ${z} fizz buzz`);
        document.write(`<h3>the number ${z} fizz buzz</h3>`)
    }else
    console.log(`the number ${z} fizz`);
    document.write(`<h3>the number ${z} fizz</h3>`)
}
else if(c%5==0){
    console.log(`the number ${z} buzz`);
    document.write(`<h3>the number ${z} buzz</h3>`)
}
else{
    console.log(`the number ${z} is not divisible on 3 and 5`)
    document.write(`<h3>the number ${z} is not divisible on 3 and 5</h3>`)
}
