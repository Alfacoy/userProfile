//React
import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

//Firebase
import firebase from "../../firebase";

//Components
import Button from "../Button";

//Styles
import style from "./style.module.scss";

const Profile = () => {
  const [isActive, setActive] = useState(false);
  const data = firebase.auth().currentUser;
  let history = useHistory();

  //Observer
  firebase.auth().onAuthStateChanged((user) => {
    if (user) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  function LogoutUser() {
    firebase
      .auth()
      .signOut()
      .then(function () {
        setActive(false);
      })
      .catch(function (error) {
        history.push("/error");
      });
  }

  return (
    <section>
      {isActive ? <h1>My profile</h1> : <h1>Disconnected</h1>}
      {isActive ? (
        <DataUser data={data} event={LogoutUser} />
      ) : (
        <UserDisconnected />
      )}
    </section>
  );
};

function DataUser({ data, event }) {
  return (
    <div className={style.card}>
      <img
        className={style.card__image}
        src={data.photoURL}
        alt={`Foto de perfil de ${data.displayName}`}
      ></img>
      <h2 className={style.card__title}>{data.displayName}</h2>
      <p>{data.email}</p>
      <Button variant={style.blue} buttonValue={"Logout"} eventClick={event} />
    </div>
  );
}

function UserDisconnected() {
  return (
    <div>
      <p>Please, login to our platform.</p>
      <Link to="/">Go back</Link>
    </div>
  );
}

export default Profile;
