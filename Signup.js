function SignUp_valid()
{
  var User = document.SignUp.Username.value;  
  var Pass = document.SignUp.Password.value; 
  var check = document.SignUp.TermsPolicy.value; 
  var valid = true; 
  
  if(User === "")
  {
      valid=false;
      euser.style.visibility = "visible";
     username.style.border ="1px solid red";
  }
  else
  {
     euser.style.visibility = "hidden";
     
  }
  
  
    if(Pass === "")
  {
      valid=false;
      epass.style.visibility = "visible";
      password.style.border ="1px solid red";
  }
  else
  {
     epass.style.visibility = "hidden";
  
  }
  
  if(check === "1")
  {
      valid=false;
      checkbox.style.visibility = "visible";
      Checkbox.value=""
      
  }
  else
  {
     checkbox.style.visibility = "hidden";
  Checkbox.value="1"
  }

  if(valid)
  {
 
      return true;
  }
  else
  {
      return false;
  }
}
          
   
