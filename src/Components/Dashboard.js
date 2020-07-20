import React, { Component } from "react";
import { Link } from "react-router-dom";

class Dashboard extends Component {
  render() {
    return (
      <div style={{ display: "flex", flexDirection: "column" }}>
        <h1>Dashboard</h1>
        <Link to={`/user/colefinlayson`}>User Profile</Link>
        <div>
          <h2>Cole's Favorite Games</h2>
          <div
            style={{
              height: "20vh",
              width: "20vw",
              backgroundImage:
                "url(https://specials-images.forbesimg.com/imageserve/5f11b4392a16ba0007e2bbf5/960x0.jpg?fit=scale)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
          <div
            style={{
              height: "20vh",
              width: "20vw",
              backgroundImage:
                "url(https://cdn02.nintendo-europe.com/media/images/10_share_images/games_15/nintendo_switch_4/H2x1_NSwitch_AnimalCrossingNewHorizons_image1600w.jpg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
