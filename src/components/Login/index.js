//React
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

//Firebase
import firebase from "../../firebase";
import provider from "../../firebase/auth";

//Components
import Button from "../Button";

const Login = () => {
  const [isActive, setActive] = useState(false);
  let history = useHistory();

  //Observer
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  function LoginUserWithPopUp() {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(() => {
        history.push("/profile");
      })
      .catch(() => {
        history.push("/error");
      });
  }

  function LogoutUser() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setActive(false);
      })
      .catch(() => {
        history.push("/error");
      });
  }

  return (
    <section>
      <h3>Login</h3>
      {isActive ? (
        <Button buttonValue={"Logout"} eventClick={LogoutUser} />
      ) : (
        <Button buttonValue={"Google"} eventClick={LoginUserWithPopUp} />
      )}
    </section>
  );
};

export default Login;
