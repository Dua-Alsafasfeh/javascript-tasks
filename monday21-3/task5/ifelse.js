`use strict`;
console.log("if else :");
let marks=[
    {name: 'David', mark: 80},
    {name: 'Vinoth', mark: 77},
    {name: 'Divya', mark: 88},
    {name: 'Ishitha', mark: 95},
    {name: 'Thomas', mark: 68},
]
let l= marks.length;
let sum = 0;
for (let i=0; i<l ; i++){
    sum+= marks[i].mark;
}
let average= sum/l;
console.log('Average= ', average);

console.log('-----------------');
console.log('The grades of students:');
for (let i=0; i<l ; i++){
    let markOfStd= marks[i].mark;
    if(markOfStd<60){
        console.log(marks[i].name, `grade: F`);
    }
    if(60<=markOfStd && markOfStd<70){
        console.log(marks[i].name, `grade: D`);
    }    
    if(70<=markOfStd && markOfStd<80){
        console.log(marks[i].name, `grade: C`);
    }
    if(80<=markOfStd && markOfStd<90){
        console.log(marks[i].name, `grade: B`);
    }
    if(90<=markOfStd && markOfStd<100){
        console.log(marks[i].name, `grade: A`);
    }
}