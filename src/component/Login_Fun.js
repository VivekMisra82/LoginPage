import React from 'react'

function myFunction()
{   
    alert('Your respose saved successfully')
    console.log("User name : "+ document.getElementById("vivek").value)
    console.log("Password: "+ document.getElementById("pwd").value)
    
}

function Login_Fun() {
  return (
    <div>
      
      <h4>User Name</h4>
      <input type="text" placeholder='Enter your user name' id="vivek"></input>
      <br/>
      <h4>Password</h4>
      <input type="password" placeholder='Enter your Password' id="pwd"></input>
      <br></br>
      <button type="Submit" onClick={myFunction}>Submit</button>
      
    </div>
  )
}

export default Login_Fun
