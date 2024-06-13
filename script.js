function validate(){
 x=document.myForm
  txt=x.myInput.value
  if (txt >=1 && txt <=5){
    alert("Es un numero valido, ily")
    return true
  } else {
   if (txt < 1) alert("Es menor que 1, debe estar entre 1 y 5")
    else if (txt > 5) alert("Es mayor que 5, debe estar entre 1 y 5")
    else 
    return false
  }
}