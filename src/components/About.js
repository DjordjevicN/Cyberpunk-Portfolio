import React from "react";

function About() {
  return (
    <div data-aos="zoom-in-up" data-aos-offset="300" className="AboutWrapper">
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
          {/* *******  */}
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/react.png"
              alt="react"
            />
            <a href="https://reactjs.org/">
              <p className="linkName">React</p>
            </a>
            <p className="linkNameSpan">- UI Library</p>
          </div>
          {/* ********** */}
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/nodejs.png"
              alt="react"
            />
            <a href="https://nodejs.org/en/">
              <p className="linkName">Node JS</p>
            </a>
            <p className="linkNameSpan">- JavaScript Runtime</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/express.png"
              alt="react"
            />
            <a href="https://expressjs.com/">
              <p className="linkName">Express</p>
            </a>
            <p className="linkNameSpan">- Node.js Framework</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/mongoDB.png"
              alt="react"
            />
            <a href="https://www.mongodb.com/">
              <p className="linkName">MongoDB</p>
            </a>
            <p className="linkNameSpan">- NoSQL Database</p>
          </div>
          <h3 className="mainStackTitle">Tools:</h3>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/figma.png"
              alt="react"
            />
            <a href="https://www.figma.com/">
              <p className="linkName">Figma</p>
            </a>
            <p className="linkNameSpan">- Interface Design</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/XD.png"
              alt="react"
            />
            <a href="https://www.adobe.com/">
              <p className="linkName">Adobe XD</p>
            </a>
            <p className="linkNameSpan">- Interface Design</p>
          </div>
          <div
            data-aos="fade-right"
            data-aos-offset="200"
            className="stackItem"
          >
            <img
              className="stackLinkImage"
              src="./images/icons/trello.png"
              alt="react"
            />
            <a href="https://trello.com/en">
              <p className="linkName">Trello</p>
            </a>
            <p className="linkNameSpan">- Todo / Management</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
