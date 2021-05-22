import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "./firebase";
import logo from "./finalLogo.png";
import { actionTypes } from "./reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [{}, dispatch] = useStateValue();
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then((result) => {
        dispatch({
          type: actionTypes.SET_USER,
          user: result.user,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login-container">
        <img src={logo} alt="CoolChat" />
        <div className="login-text">
          <h1>SIGN IN TO COOLCHAT</h1>
        </div>
        <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
      </div>
    </div>
  );
}

export default Login;
