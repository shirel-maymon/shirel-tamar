import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  postRequest from "./postRequest";
import { useNavigate } from "react-router-dom";

function LogIn(props) {
  const navigate = useNavigate();

  const [password, setPassword] = useState("");
  const [error, setError]= useState(null)
 const [user, setUser]= useState("")
  const handleSubmit =async (e) => {
    e.preventDefault();
  const userObj={
    userName:user,
    password:password

  }
  const url= `http://localhost:4001/logIn`
  const currentUser= await postRequest(userObj, url);
  console.log(currentUser)
  if(currentUser==="something went wrong"){
    setError("this user does not exist")
    
  }
  else{
    setError("good")
    navigate("Home");
    props.setUserName(user);

  }
  
  

  }
  

  return (
    <>
      <div id="LogIn">
        <h3 className="font">Log In</h3>
        <form onSubmit={handleSubmit}>
          <div>
            <label className="font">
              <b>Username:&ensp;</b>
            </label>
            <input
              type="text"
              value={user}
              onChange={(e) => setUser(e.target.value)}
              required
            />
            <br />
            <br />

            <label className="font">
              <b>Password:&ensp;</b>
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <br />
            <br />

            <button className="button">Login</button>
            <br />
            <br />
            <br />
          </div>
          <button onClick={()=>navigate("register")}>להרשמה</button>

        </form>
      </div>
      <div>{error}</div>
    </>
  );
}

export default LogIn;
