/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from "react";
import "./styles/Contact.css";
import sitelogo from "../assets/logo-site.jpg";
import email from "../assets/email.png";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";

export default function Contact() {
  function refreshPage() {
    // eslint-disable-next-line no-undef
    window.location.reload(false);
  }

  return (
    <div className="contact" id="contact">
      <p>WANT TO KNOW MORE ABOUT US?</p>
      <div className="viewposts"><a href="https://www.ysbryd.net/blog/">View All Posts</a></div>
      <div className="TitleLabels">CONTACT US</div>
      <div className="subtitlecontact">
        FUN FACT: “YSBRYD” IS WELSH FOR
        {" "}
        <span>“SPIRIT”.</span>
      </div>
      <div className="bottomlineis">
        <p>
          The bottom line is, we`re here to help you get your
          game steered and prepped for a successful journey .
          We`ve hit awesome highs, we`ve sunk to dread lows,
          and we`ve gained a lot of wisdom along the way,
          and that can only benefit you.
        </p>
        <p>
          The best way to make contact with us is to make something
          so freaking awesome that we can`t help but get
          in touch with you. Otherwise, hop on Twitter
          and ping @YsbrydGames.
        </p>
      </div>
      <div className="footer">
        <img onClick={refreshPage} className="footerlogo" src={sitelogo} alt="Logo of website" />
        <div className="socials">
          <div className="email">
            <a href="hello@ysbryd.net"><img className="socialicon emailicon" src={email} alt="Email anim" /></a>
          </div>
          <div className="facebook">
            <a href="http://www.facebook.com/YsbrydGames"><img className="socialicon fbicon" src={facebook} alt="Facebook anim" /></a>
          </div>
          <div className="twitter">
            <a href="http://www.twitter.com/YsbrydGames/"><img className="socialicon twticon" src={twitter} alt="Twitter anim" /></a>
          </div>
        </div>
        <p>© Ysbryd Games Pte Ltd. 2014. All rights reserved.</p>
      </div>

    </div>
  );
}
