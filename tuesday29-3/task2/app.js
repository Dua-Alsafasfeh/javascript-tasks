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
    let x;
    if (this.price<100){
        x= 'Used';
    }else{
        x= 'New Device';
    };
    this.conditionOfMobile= x;

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

function showData( ){
    tableBody.textContent=" ";

    for (let i = 0; i < mobileArray.length; i++) {
        let tableRow = document.createElement("tr")
        let tablecol_1 = document.createElement("td");
        let tablecol_2  = document.createElement("td");
        let tablecol_3 = document.createElement("td");
        let tablecol_4  = document.createElement("td");
        
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
/////////////////////////////////////////////////////////////////////////////////////////////
let localForm=document.getElementById("locForm");
let localPara=document.getElementById("cityResult");
let button=document.getElementById("submit2");

localForm.addEventListener("submit", function(event){
    event.preventDefault( );
    let city=event.target.locName.value;
    getData(city);
  });

async function getData(x) {
    let responce = await fetch(`https://eu1.locationiq.com/v1/search.php?key=pk.b2276be61ce386922b2493e591075217&q=${x}&format=json`);
    let data = await responce.json( );
    console.log(data[0]);
    localPara.innerHTML=`City name is :${data[0].display_name.split(",",2)} || Longitude is :${data[0].lon} || latitude is:${data[0].lat}`;
    document.querySelector(`#img`).src= data[0].icon;
};




