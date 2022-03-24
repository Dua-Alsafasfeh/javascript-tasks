'use strict';
function change_photo(){
    let x=document.getElementById('flag').value;
    if (x=="jordan"){
    document.getElementById('image').src="https://flagsworld.org/img/cflags/jordan-flag.png";
    }
    else if(x=="syria") {
        document.getElementById('image').src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Flag_of_Syria.svg/1024px-Flag_of_Syria.svg.png";
    }else if(x=="palestine"){
        document.getElementById('image').src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Palestine_Flag.svg/1200px-Palestine_Flag.svg.png";
    }else if(x=="iraq"){
        document.getElementById('image').src="https://flagsworld.org/img/cflags/iraq-flag.png";
    }  
}
