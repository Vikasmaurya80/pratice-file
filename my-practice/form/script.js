
// console.log(window.pageYOffset)
  var user = document.getElementById("userName")
  var email = document.getElementById("email")
  var password = document.getElementById("password")
  var confirmPassword = document.getElementById("confirmPassword")

   function formValidate(){
    event.preventDefault()
    if(user.value == ""){
    document.getElementById("span").innerText="Please enter username "
    document.getElementById("span").style.color = "red"
     }
     if(email.value == ""){
        document.getElementById("span").innerText="Please enter username "
        document.getElementById("span").style.color = "red" 
     }
    
   }



