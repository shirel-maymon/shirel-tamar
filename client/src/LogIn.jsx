import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import  postRequest from "./postRequest";
// import { useNavigate } from "react-router-dom";

function LogIn() {
  // const navigate = useNavigate();
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError]= useState(null)

  const handleSubmit = (e) => {
    e.preventDefault();
  const userObj={
    userName:userName,
    password:password

  }
  const url= `http://localhost:3007/logIn`
  const currentUser= postRequest(userObj, url);
  console.log(currentUser)
  if(currentUser.status===200){
    // navigate (`/contact/${userName}`)
    setError("good")
  }
  else{
    setError("this user does not exist")
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
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
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
          {/* <NavLink to="/SignUp" className="button">
            Sign Up
          </NavLink> */}
        </form>
      </div>
      <div>{error}</div>
    </>
  );
}

export default LogIn;
