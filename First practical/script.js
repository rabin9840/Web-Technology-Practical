function showMessage(location,message,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}

function nameValid(){
    var name=document.getElementById('uname').value;
    if(name.length==0)
        showMessage("errname","enter name","red");
    else
        showMessage("errname","valid name","green");
}
