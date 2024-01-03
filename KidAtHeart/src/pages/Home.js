import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/Differenttoys.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Kid At Heart</h1>
        <p> Toys Galore, Smiles Even More!</p>
        <Link to="/menu">
          <button>Vibrant Treats!</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;