const regITAM = /^[_a-zA-Z0-9]*@itam\.mx/;
function validate(){
  var username = document.getElementById("username").value;
  var valido = regITAM.test(username);

  if(!valido){
    alert("Tu correo debe tener dominio @itam.mx")
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
  }else{
    window.location.replace("Pagina_principal.html")
  }


}

var connection = new ActiveXObject("ADODB.Connection") ;

var connectionstring="Data Source=<server>;Initial Catalog=<catalog>;User ID=<user>;Password=<password>;Provider=SQLOLEDB";

connection.Open(connectionstring);
var rs = new ActiveXObject("ADODB.Recordset");

rs.Open("SELECT * FROM usuarios", connection);
rs.MoveFirst
while(!rs.eof)
{
  alert(rs.fields(1));
   //document.write(rs.fields(1));
   rs.movenext;
}

rs.close;
connection.close;
