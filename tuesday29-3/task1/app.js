"use srtrict";
let ulElement = document.getElementById("test1");

async function getData() {
    let response = await fetch('https://eu1.locationiq.com/v1/search.php?key=pk.b2276be61ce386922b2493e591075217&q=amman&format=json');
    console.log(response);
    let data = await response.json();
    console.log(data);

    let output = " ";
    let displayName_array = data.map((name1, index) => {
        output += `<li>displayName: ${name1.display_name.slice(0, 26)
            } .</li> <li> longitude : ${name1.lon}.</li> <li> latitude: ${name1.lat}.</li>`;
        console.log(output);

    });
    // document.body.innerHTML= output;
    let liElement = document.createElement("li");
    ulElement.appendChild(liElement);
    liElement.innerHTML = output;

    // let output=``;
    // displayName=data.map((name_1,index) => 
    // output += `<li>display_name: ${name_1.display_name.slice(0,26)}  ||  Longitude: ${name_1.lon.slice(0,2)}  ||  Latitude: ${name_1.lat.slice(0,2)}<br><hr></li>`

    // );

}
getData();
console.log("get data out side the function");
