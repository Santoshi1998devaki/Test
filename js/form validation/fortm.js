function seterror(id,error){
element=document.getElementById(id)
element.getElementsByClassName("error")[0].innerHTML=error
}


function clearerror(){

let error = document.getElementsByClassName("error")
for(let value of error){
    value.innerHTML="";
}


}



function formvalidation(){
var retvalue=true;
clearerror()

var name =document.forms["myform"]["name"].value
if(name.length<5)
{
    seterror("fname","*** length is too short");
    retvalue=false
}
var name =document.forms["myform"]["name"].value
if(name.length==0)
{
    
    seterror("fname","*** length1 is too short");
    retvalue=false
}
var email =document.forms["myform"]["email"].value
if(email.length<7)
{
    
    seterror("mail","*** enter vaild email");
    retvalue=false
}
var password =document.forms["myform"]["password"].value
if(password.length!=4)

{
    
    seterror("password","*** enter vaild password");
    retvalue=false
}
var phone =document.forms["myform"]["phonenumber"].value
if(phone.length!=10)
{
    
    seterror("phone","*** enter vaild password");
    retvalue=false
}
// console.log(name)
return retvalue;
}