"use strict";
let mobileForm= document.getElementById("mobForm");
// let tableContact= document.getElementById("tableCon");
let tableBody=document.getElementById("boadTa");
let mobileArray = [ ];

///////////////////////////////////////////////////////////////////////

mobileForm.addEventListener( "submit" , handleSubmit);

function handleSubmit( event ){
   event.preventDefault();
   let userName=event.target.useName.value;
   let typeDevice=event.target.typeNameD.value;
   new mobileStore (userName , typeDevice);
    
}
// handleSubmit();

//////////////////////////////////////////////////////////////////////

function mobileStore ( userName , typeDevice ){
    this.userName = userName ;
    this.typeDevice = typeDevice ;
    this.price = priceOfMobile (50 , 500);
    this.conditionOfMobile = condition();

    mobileArray.push(this);
    showData( );
    storeInLocalStorage( );
    console.log(mobileArray);
}
////////////////////////////////////////////////////////////////

function priceOfMobile (min , max ){
    var x=Math.ceil(Math.random() * (max - min) + min);
    return x;
}
///////////////////////////////////////////////////////////////

function condition (){
    if ( mobileStore.price < 100){
        return "used";
    }else {
        return "new Device";
    }
}
///////////////////////////////////////////////////////////////

function showData( ){
    let tableRow = document.createElement("tr")
    let tablecol_1 = document.createElement("td");
    let tablecol_2  = document.createElement("td");
    let tablecol_3 = document.createElement("td");
    let tablecol_4  = document.createElement("td");

    for (let i = 0; i < mobileArray.length; i++) {
        tableBody.appendChild(tableRow);
        tableRow.appendChild(tablecol_1);
        tableRow.appendChild(tablecol_2);
        tableRow.appendChild(tablecol_3);
        tableRow.appendChild(tablecol_4);

        tablecol_1.textContent = mobileArray[i].userName;
        tablecol_2.textContent = mobileArray[i].typeDevice;
        tablecol_3.textContent = mobileArray[i].price;
        tablecol_4.textContent = mobileArray[i].conditionOfMobile;
    }
}
////////////////////////////////////////////////////

function storeInLocalStorage ( ){
    let stringArray=JSON.stringify(mobileArray);
    localStorage.setItem("data",stringArray);
}

function callFromLocalStorage(){
    let dataObj=localStorage.getItem("data");
    // console.log(dataObj,"typeOf dataObj ",typeof dataObj);

    let strToObject=JSON.parse(dataObj);
    // console.log(strToObject,"strToObjectr");
    if(strToObject != null){
        mobileArray=strToObject;
        // renderOrder(); 
    }
    showData( ); 
}
callFromLocalStorage( );