import React from "react";

function Footer() {
  return (
    <div data-aos="fade-right" data-aos-offset="300" className="footerWrapper">
      <div className="content-card footer">
        <h6 className="footerTitle">Lets Talk</h6>
        <div className="contact">
          <img className="footerImage" src="./images/phone.gif" alt="ww" />
          <div className="contactInfo">
            <div
              data-aos="fade-right"
              data-aos-offset="10"
              className="stackItem"
            >
              <img
                className="stackLinkImage"
                src="./images/icons/gmail.png"
                alt="react"
              />
              <a href="mailto:nikola.dj.87@gmail.com">
                <p className="linkName">Gmail</p>
              </a>
              {/* <p className="linkNameSpan">- nikola.dj.87@gmail.com</p> */}
            </div>
            <div
              data-aos="fade-right"
              data-aos-offset="10"
              className="stackItem"
            >
              <img
                className="stackLinkImage"
                src="./images/icons/linkedIn.png"
                alt="react"
              />
              <a href="https://www.linkedin.com/in/nikola-djordjevic-503066193/">
                <p className="linkName">LinkedIn</p>
              </a>
              {/* <p className="linkNameSpan">- nikola.dj.87@gmail.com</p> */}
            </div>
          </div>
        </div>
        <div className="thisWebsite">
          <p>This website is built with :</p>
          <img
            className="stackLinkImage"
            src="./images/icons/js.png"
            alt="react"
          />
          <img
            className="stackLinkImage"
            src="./images/icons/react.png"
            alt="react"
          />
          <img
            className="stackLinkImage"
            src="./images/icons/framer.png"
            alt="react"
          />
          <p>by: Nikola Djordjevic</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
