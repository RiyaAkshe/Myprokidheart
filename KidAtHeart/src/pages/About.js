import React from "react";
import Kitties from "../assets/Kitties.jpg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${Kitties})` }}
      ></div>
      <div className="aboutBottom">
        <h1>Know our Vision!</h1>
        <p>
        Welcome to our whimsical world of wonder at KID AT HEART!, where joy and satisfication are our top priorities! Nestled in the heart of playtime delight, our carefully curated collection of toys is crafted from 100% pure cotton, ensuring a soft and secure heaven for your little ones. From cuddly companions to enchanting playsets, every creation is a testament to our commitment to quality and comfort.We believe in turning playtime into precious memories, one plush hug at a time. Join us on this delightful journey where safety meets smiles, and let the magic of pure cotton play fill your little one's world with endless joy!
        </p>
      </div>
    </div>
  );
}

export default About;