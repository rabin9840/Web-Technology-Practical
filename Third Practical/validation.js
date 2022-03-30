function showMessage(message,location,color){
    document.getElementById(location).innerHTML=message;
    document.getElementById(location).style.color=color;
}


function valname(){
    var uname=document.getElementById('uname').value;
    if(uname.length==0){
        showMessage("Name field can't be empty.","errname",'red');
    }
    else if(uname.length<5){
        showMessage("Not Enough Characters",'errname','red');
    }
    else if(!uname.match(/^[a-zA-Z]{3,30}\s{1}[a-zA-Z]{3,30}$/))
        showMessage("Enter valid name","errname",'red');
    else
        showMessage("Valid Name",'errname','green');
}

function validphone(){
    var phno=document.getElementById('phno').value;
    if(phno==0){
        showMessage("Field can't be empty.","errphone",'red');
    }
    else if(!phno.match(/^[0-9]*$/))
        showMessage("Enter Number only","errphone","red");
    else if(phno.substr(0,2)!=98)
        showMessage("Must start with 98","errphone","blue");
    else if(phno.length!=10)
        showMessage("Phone Number should be of exactly 10 digits","errphone","red");
    else
        showMessage("Valid Phone Number","errphone",'green');
}

function validcom(){
    var com=document.getElementById("comment").value;
    var required=40;
    var remaning=required-com.length;

    if(remaning>0){
        showMessage(remaning+" character","errcomment","red");
    }
    else{
        showMessage("valid comment","errcomment","green",);
    }
}


function validcheckbox(){
    var rad=document.getElementById("checkbox").checked;
    if(rad==true){
        showMessage("Thank you","errcheckbox","green");
    }
    else{
        showMessage("Invalid","errcheckbox","red");
    }
}

function valemail(){
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+[.]+(?:\.[a-zA-Z0-9-]+)*$/;
    var mail=document.getElementById('email').value;
    if(mail.length==0){
        showMessage("Email is required",'erremail','red');
    }
    else if(!mail.match(mailformat)){
        showMessage("Enter valid email","erremail",'red');
    }
    else{
        showMessage("Valid Email",'erremail','green');
    }
    
}

function valpsw(){

    var psw=document.getElementById('psw').value;
    var uppercase=/[A-Z]/g;
    var lowercase=/[a-z]/g;
    var number=/[0-9]/g;

    if(!psw.match(uppercase)){
        showMessage("A <b>capital (uppercase)","capital",'red');
    }
    else{
        showMessage("A <b>capital (uppercase)","capital",'green');
    }
    if(!psw.match(number)){
        showMessage("A <b>number</b>","number",'red');
    }
    else{
        showMessage("A <b>number</b>","number",'green');
    }
    if(!psw.match(lowercase)){
        showMessage("A <b>lowercase</b> letter","letter",'red');
    }
    else{
        showMessage("A <b>lowercase</b> letter","letter",'green');
    }
    if(psw.length<8){
        showMessage("Minimum <b>8 characters</b>","length",'red');
    }
    else{
        showMessage("Minimum <b>8 characters</b>","length",'green');
    }
    
}
