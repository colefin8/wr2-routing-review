import React from "react";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div>
      <Link to="/dash">Dashboard</Link>
      <Link to="/user/1">User Profile</Link>
      {/* {props.reduxState.user.userId ? (
        <Link to="/">Logout</Link>
      ) : (
        <button>Login</button>
      )} */}
    </div>
  );
}

export default Nav;
