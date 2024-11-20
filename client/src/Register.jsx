import { useState, useEffect } from "react";
import postRequest from "./postRequest";
export default function Resgister() {
  

  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
const [error, setError] =useState(null)

  const [validatePassword, setValidatePassword] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validatePassword === password){
    const userObj={
        userName:userName,
        password:password
    
      }
      const url= `http://localhost:3002/register`
      const currentUser= await postRequest(userObj, url);
      console.log(currentUser)
      if(currentUser==="something went wrong"){
        setError("this user does already exist")
        
      }
      else{
        setError("good")
    
 
    } }

  }


  return (
    <>
    <form onSubmit={handleSubmit}>
      <label>
        Enter your user-name:
        <input
          type="text"
          name="username"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          required
        />
      </label>
      <br/>
      <label>
        Enter your password:
        <input
          type="password"
          name="website"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br/>
      <label>
        Verify your password:
        <input
          type="password"
          name="verifyPassword"
          onChange={(e) => setValidatePassword(e.target.value)}
          value={validatePassword}
        />
      </label>
      <br/>
      <input type="submit" />
    </form>
    <div>{error}</div>
    </>
  );
}