'use strict';
let d=document.getElementById("change_color").style.backgroundColor ="blue";

function color1(x){
    if (x.style.backgroundColor == "blue"){
        x.style.backgroundColor = "red";
    }
   else {
        if (x.style.backgroundColor == "red"){
        x.style.backgroundColor = "green";
        }
        else {
            if (x.style.backgroundColor == "green"){
            x.style.backgroundColor = "blue";
            }
    }
   }
}

// function color1(){
//     let bg_color=["blue" ,"red" ,"green"];
//     for (let i=0;i<=2;i++){
//     document.getElementById("change_color").style.backgroundColor=bg_color[i];
//     }
// }