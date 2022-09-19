import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div class="ending">
        <ul>
          <li>
            <h2 id="upperfont">Explore</h2>
            <a href="#about">Home</a>
            <a href="#about">Questions</a>
            <a href="#about">Articles</a>
            <a href="#about">Tutorials</a>
          </li>
          <li>
            <h2 id="upperfont">Support</h2>
            <a href="#about">FAQs</a>
            <a href="#about">Help</a>
            <a href="#about">Contact Us</a>
          </li>
          <li>
            <h2 id="upperfont">Stay Connected</h2>
            <a href="#about">Facebook</a>
            <a href="#about">Twitter</a>
            <a href="#about">Instagram</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Footer;
