function checkPass()
{
    let pass1 = document.getElementById('pa1');
    let pass2 = document.getElementById('pa2');
    let message = document.getElementById('sp1');
    let message2 = document.getElementById('sp2');
    let btn=document.getElementById("btn1");
    let goodColor = "#66cc66";
    let badColor = "#ff6666";


    if(pass1.value.length > 5)
    {
        // pass1.style.backgroundColor = goodColor;
        message.style.color = goodColor;
        message.innerHTML = "number ok!"
    }
    else
    {
        // pass1.style.backgroundColor = badColor;
        message.style.color = badColor;
        message.innerHTML = " Too Short"
        return;
    }

    if(pass1.value == pass2.value)
    {
        // pass2.style.backgroundColor = goodColor;
        message2.style.color = goodColor;
        message2.innerHTML = "Match!";
        btn.style.display="block";
    }
    else
    {
        // pass2.style.backgroundColor = badColor;
        // message2.style.color = badColor;
        message2.innerHTML = "passwords don't match";
    }
}