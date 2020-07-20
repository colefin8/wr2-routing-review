import React, { useState } from "react";

function Auth(props) {

  const handleClick = () => {
    props.history.push("/dash");
  };

  return (
    <div>
      <p>Login:</p>
      <input />
      <input type="password" />
      <button onClick={handleClick}>Login</button>
    </div>
  );
}

export default Auth;
