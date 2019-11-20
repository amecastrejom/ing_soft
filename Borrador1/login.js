const regITAM = /^[_a-zA-Z0-9]*@itam\.mx/;
function validate(){
  var username = document.getElementById("username").value;
  var valido = regITAM.test(username);

  if(!valido){
    alert("Tu correo debe tener dominio @itam.mx")
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
  }else{
    window.location.replace("Home.html")
  }


}
