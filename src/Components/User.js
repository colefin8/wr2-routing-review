import React from "react";

function User(props) {
  return (
    <div>
      <p>{`You are user ${props.match.params.username}`}</p>
    </div>
  );
}

export default User;
