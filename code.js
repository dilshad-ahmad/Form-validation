function data(){
var a = document.getElementById("User").value;
var b = document.getElementById("contact").value;
var c = document.getElementById("password").value;
var d = document.getElementById("newpass").value;

if(a==""||b==""||c==""||d==""){
    alert("All field are mendatory ");
    return false
}
else if(b.length<10 ||b.length>10) {
    alert("Number should be 10 digit ! Please enter a valid number")
    false

}
else if(isNaN(b)){
    alert("Only number are allowed ! Please enter a valid number")
    return false;
}
else if(c.length<6||c.length>6) {
    alert ("Enter a valid password!Atlest 6 digit ")
    false;
}
else if(c!=d) {
    alert("Please enter the same password ")
    return false;

}
else 
{
    true
}
}
