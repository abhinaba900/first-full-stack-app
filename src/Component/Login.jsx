import React, { useEffect } from "react";
import { AuthContext } from "../AuthContext/AuthContextProvider";
import axios from "axios";
function Login() {
  const [userName, setUserName] = React.useState("");
  const [pass, setPass] = React.useState("");
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  const handleChange = (e) => {
    if (e.target.name === "userName") {
      setUserName(e.target.value);
    } else if (e.target.name === "pass") {
      setPass(e.target.value);
    }
  }



  const handleSubmit = async() => {
    try {
      const response = await axios.post(
        "https://mysterious-handkerchief-frog.cyclic.app/user/login",
        {
          userName,
          pass,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response.status === 200) {
        setIsAuth(true);
        console.log(response.data);
      }
      
    } catch (error) {
      
    }
  } 




  return (
    <div className="container">
      <form onSubmit={(e) => {e.preventDefault()
        handleSubmit()
      }}>
        <input type="text" name="userName" onChange={handleChange} /> <br />
        <input type="password" name="pass" onChange={handleChange} />
        <br />
        <input type="submit" value="Login" />
      </form>
    </div>
  );
}

export default Login;
