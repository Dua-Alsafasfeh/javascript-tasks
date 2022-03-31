"use strict";
let regForm=document.getElementById("divForm");
 let firstName= document.getElementById("fName");
 let lastName= document.getElementById("lName");
 let password= document.getElementById("pass");
 let passwordConfirm= document.getElementById("passCon");
 let BirthDate= document.getElementById("date");
 let email= document.getElementById("email");
 let emailConfirm= document.getElementById("emailCon");

function con(firstName ,lastName ,password ,passwordConfirm, BirthDate, email, emailConfirm){
this.firstName=firstName;
this.lastName=lastName;
this.password=password;
this.passwordConfirm= passwordConfirm;
this.BirthDate=BirthDate;
this.email=email;
this.emailConfirm=emailConfirm;
approved(firstName ,lastName ,password ,passwordConfirm, BirthDate, email, emailConfirm );

}
button.addEventListener("submit" , function(event) {
    event.preventDefault();
    let firstName=event.target.firstName.value;
    let lastName=event.target.lastName.value;
    let password=event.target.password.value;
    let passwordConfirm=event.target.passwordConfirm.value;
    let BirthDate=event.target.BirthDate.value;
    let email=event.target.email.value;
    let emailConfirm=event.target.emailConfirm.value;
    new con =(firstName,lastName,password,passwordConfirm,BirthDate,email,emailConfirm);

})
approved();
var capLetter= /A-Z/;
var letters = /[A-Za-z]/;
var pwd_expression = /\b[A-Z](?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-])/;
var filter = /([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
 function approved(firstName ,lastName ,password ,passwordConfirm, BirthDate, email, emailConfirm ){
    if( firstName.value=='')
    alert("please Enter your firstname");
    else if(!letters.test(firstName.value))
    alert('First name field required only alphabet characters');;

    if( lastName.value=='')
    alert("please Enter your lastname");
    else if(!letters.test(lastName.value))
    alert('Last name field required only alphabet characters');;


    if( password.value=='')
    alert('Please enter Password');
    else if(!pwd_expression.test(password.password) && !capLetter.test(password.value[0]))
    alert ('password must begin with Upper case letter.and Lower case, Special character and Numeric letter are required in Password filed');

    if(password.value.length<8 )
    alert ('Password minimum length is 8');
    else if(password.value.length>32)
    alert ('Password max length is 12');

    if (passwordConfirm.value=='')
    alert('Enter Confirm Password');
    else if(password.value != passwordConfirm.value)
     alert ('Password not Matched');

     if (BirthDate.value=='')
     alert('please Enter your Birthdate');

     else if(email.value=='')
        alert('Please enter your user email');
        else if(!filter.test(email.value))
        alert('Invalid email,, EX:aS_23.@example.com');

        if (email.value != emailConfirm.value)
        alert ('Email not Matched');
           
    // else if(passwordConfirm =='')
 }
 console.log(approved());
