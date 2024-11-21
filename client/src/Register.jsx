import { useState, useEffect } from "react";
import postRequest from "./postRequest";
export default function Resgister(props) {
  

  const [userR, setUserR]=useState("")
  const [password, setPassword] = useState("");
const [error, setError] =useState(null)

  const [validatePassword, setValidatePassword] = useState("");
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validatePassword === password){
    const userObj={
        userName:userR,
        password:password
    
      }
      const url= `http://localhost:4001/register`
      const currentUser= await postRequest(userObj, url);
      console.log(currentUser)
      if(currentUser==="something went wrong"){
        setError("this user does already exist")
        
      }
      else{
        setError("good")
        props.setUserName(userR);
 
    } }

  }


  return (
    <>
    <h3 className="font">sign up:</h3>
    <form onSubmit={handleSubmit}>
      <label className="font">
        Enter your user-name:
        <input
          type="text"
          name="userR"
          value={userR}
          onChange={(e) => setUserR(e.target.value)}
          required
        />
      </label>
      <br/>
      <label className="font">
        Enter your password:
        <input
          type="password"
          name="website"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </label>
      <br/>
      <label className="font">
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