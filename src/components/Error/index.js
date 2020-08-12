import React from "react";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <h1>¡Oops, sorry my friend!</h1>
      <p>Please, try again.</p>
      <Link to="/">Go back</Link>
    </section>
  );
};

export default Error;
