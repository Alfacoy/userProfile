//React
import React, { useState, useEffect, useRef } from "react";
import { useHistory } from "react-router-dom";

//Firebase
import firebase from "../../firebase";
import provider from "../../firebase/auth";

//Components
import Button from "../Button";

const Login = () => {
  const [isActive, setActive] = useState(false);
  let history = useHistory();
  const isMounted = useRef(null);

  //Observer
  if (isMounted) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setActive(true);
      } else {
        setActive(false);
      }
    });
  }
  useEffect(() => {
    isMounted.current = true;
    return () => (isMounted.current = false);
  }, [isActive]);

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
      <div>
        {isActive ? <h3>Bye bye</h3> : <h3>Login with</h3>}
        {isActive ? (
          <Button buttonValue={"Logout"} eventClick={LogoutUser} />
        ) : (
          <Button buttonValue={"Google"} eventClick={LoginUserWithPopUp} />
        )}
      </div>
    </section>
  );
};

export default Login;
