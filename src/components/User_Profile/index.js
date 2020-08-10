//React
import React, { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom";

//Firebase
import firebase from "../../firebase";

//Components
import Button from "../Button";

//Styles
import "./style.css";

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
      {isActive ? (
        <h1 className="title">Tu perfil</h1>
      ) : (
        <h1 className="title">Desconectado</h1>
      )}
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
    <div className="card">
      <img
        className="card__image"
        src={data.photoURL}
        alt={`Foto de perfil de ${data.displayName}`}
      ></img>
      <h2 className="card__title">{data.displayName}</h2>
      <p className="card__email">{data.email}</p>
      <Button buttonValue={"Logout"} eventClick={event} />
    </div>
  );
}

function UserDisconnected() {
  return (
    <div>
      <p>Porfavor, logeate a nuestra plataforma.</p>
      <Link to="/">Volver Atras</Link>
    </div>
  );
}

export default Profile;
