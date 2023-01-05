import React from "react";
// import classes from "./Footer.module.css";
// import FacebookLogo from "../../assets/Facebook Logo.png";
// import SpotifyLogo from "../../assets/Spotify Logo.png";
// import YoutubeLogo from "../../assets/youtube.jpg";

const Footer = () => {
  return (
    <footer>
      <div className="footer-title">The Generics</div>
      <div className="footer-icons">
        <ul>
          <li>
            <a href="www.youtube.com">
              {/* <img src={YoutubeLogo} alt="logo of youtube" /> */}
            </a>
          </li>
          <li>
            <a href="https://spotify.com/">
              {/* <img src={SpotifyLogo} alt="logo of spotify" /> */}
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              {/* <img src={FacebookLogo} alt="logo of facebook" /> */}
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;