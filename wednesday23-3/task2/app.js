'use strict';
// let d=document.getElementById("change_color");
// d.style.backgroundColor="blue";


function color1(){
    let bg_color=["blue" ,"red" ,"green"];
    for (let i=0;i<=2;i++){
    document.getElementById("change_color").style.backgroundColor=bg_color[i];
    }
}