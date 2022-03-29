document.getElementById("submit").onclick = function ( ){

let _promise = new Promise (function(resolve1 , reject1){
if (document.getElementById("input").value =="Sure"){
    resolve1("it will a nice trip");
}else{
    reject1("you will be dissappointed");
 }
});

_promise.then( 
    function (resolve1){
        document.getElementById("result1").textContent = resolve1;
    })
    .catch(
        function (reject1) {
            document.getElementById ("result").textContent = reject1;
        }
    );
}