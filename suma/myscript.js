
function myFunction() {  
  //variables
  var x,y,res,text;  
  //Asignar numeros ingresados a variables
  x = document.getElementById("num1").value;  
  y = document.getElementById("num2").value;  

  //Si los campos estan vacios se muestra un mensaje

  if (isNaN(parseFloat(document.getElementById('num1').value))) {
    document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número </span>";
    document.getElementById("num1").innerText = "0";
    document.getElementById("num1").focus();
    } else if (isNaN(parseFloat(document.getElementById('num2').value))) {
    document.getElementById('resultado').innerHTML="<span style='color: red;'>Por favor, escriba un número </span>";
    document.getElementById("num2").innerText = "0";
    document.getElementById("num2").focus();
}
else {
  
    //si no ponemos parseFloat concatenaría x con y  
    res=parseFloat(x) + parseFloat(y);  
    text= res;  
  document.getElementById("resultado").innerHTML = text;  
}

  
}  