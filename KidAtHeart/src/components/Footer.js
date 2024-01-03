import React from "react";
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <InstagramIcon /> <TwitterIcon /> <FacebookIcon /> <LinkedInIcon />
      </div>
      <p><a href="https://www.thetoystoreonline.com/service/privacy-policy">Explore our Privacy Policy</a></p>
      <p><a href="https://www.thetoystoreonline.com/service/">FAQ</a></p>
    </div>
  );
}
export default Footer;