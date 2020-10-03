import React from "react";

function About() {
  return (
    <div className="AboutWrapper">
      <div className="content-card aboutMe">
        <h1>About me</h1>
        <div className="aboutMeDescription">
          <p>
            I am a front end developer with a passion for programming as well as
            a creative eye and a pragmatic mind. I love learning about new
            things and implementing them into my work. Let me tell you a little
            bit about myself!
          </p>
        </div>
        <div className="mainStack">
          <h3 className="mainStackTitle">Preferred web stack:</h3>
          <div className="stackItem">
            <img
              className="stackLinkImage"
              src="./images/icons/react.png"
              alt="react"
            />
            <a href="#">
              <p className="linkName">React</p>
            </a>
            <p className="linkNameSpan">- UI Library</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
