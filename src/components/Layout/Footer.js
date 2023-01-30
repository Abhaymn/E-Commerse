import React from "react";
import classes from "./Footer.module.css";
import FacebookLogo from "../../assests/FacebookLogo.png";
import SpotifyLogo from '../../assests/SpotifyLogo.png';
import YoutubeLogo from '../../assests/YoutubeLogo.png';

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <div className={classes["footer-title"]}>The Generics</div>
      <div className={classes["footer-icons"]}>
        <ul>
          
          <li>
            <a href="www.youtube.com">
              <img src={YoutubeLogo} alt="logo of youtube" />
            </a>
          </li>
          <li>
            <a href="https://spotify.com/">
              <img src={SpotifyLogo} alt="logo of spotify" />
            </a>
          </li>
          <li>
            <a href="https://facebook.com/">
              <img src={FacebookLogo} alt="logo of facebook" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;