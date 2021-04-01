import React from "react";
import "../Component/FooterStyle.css";

const Footer = () => {
  return (
    <footer id="footer">
      <p className="contact">
        <u>Contact Us:</u>
      </p>
      <div className="footer-link-div">
        <a href="https://www.instagram.com/">
          {" "}
          <i className="fab fa-instagram-square fa-3x footer-link "></i>
        </a>
        <a href="https://twitter.com/">
          {" "}
          <i className="fab fa-twitter-square fa-3x footer-link"></i>
        </a>
        <a href="https://www.facebook.com/">
          {" "}
          <i className="fab fa-facebook-square fa-3x footer-link"></i>
        </a>
        <a href="https://www.linkedin.com/">
          {" "}
          <i className="fab fa-linkedin fa-3x footer-link"></i>
        </a>
        <a href="https://www.gmail.com">
          {" "}
          <i class="far fa-envelope fa-3x footer-link"></i>
        </a>
      </div>
      <p className="foot">All Rights Reserved 2020 @Cpagemini </p>
    </footer>
  );
};

export default Footer;
