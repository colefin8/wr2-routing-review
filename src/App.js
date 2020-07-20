import React from "react";
import routes from "./routes";
import { withRouter } from "react-router-dom";
import Nav from "./Components/Nav";
import "./App.css";

function App(props) {
  return (
    <>
      {props.location.pathname === "/" ? null : <Nav />}
      <div>{routes}</div>
    </>
  );
}

export default withRouter(App);
