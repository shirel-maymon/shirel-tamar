import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function SignUp({ isConnected, setIsConnected }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newUser = {
      username: userName,
      password: password,
    };

    fetch("http://localhost:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("There was a problem creating the account");
        }
        return response.json();
      })
      .then((data) => {
        localStorage.setItem("currentUser", JSON.stringify(data));
        setIsConnected(true);
        navigate("/");
      })
      .catch((error) => {
        alert(`Error: ${error.message}`);
      });
  };

  return (
    <>
      <h3 className="font">Sign Up</h3>
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

          <button>Sign Up</button>
          <br />
          <br />
          <br />
        </div>
      </form>
    </>
  );
}

export default SignUp;
