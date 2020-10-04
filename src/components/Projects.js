import React from "react";
import { motion } from "framer-motion";
function Projects() {
  return (
    <div className="projectsWrapper">
      {/* PROJECT  */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="projects"
        style={{
          backgroundImage: 'url("./images/vrtirep2.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="title">
          <h1>Vrtirep.com</h1>
        </div>
        <div className="buildWidth">
          <p>Build width:</p>
          <img
            className="techIcon"
            src="./images/icons/react.png"
            alt="react"
          />
          <img
            className="techIcon"
            src="./images/icons/redux.png"
            alt="react"
          />
          <img
            className="techIcon"
            src="./images/icons/nodejs.png"
            alt="react"
          />
          <img
            className="techIcon"
            src="./images/icons/mongoDB.png"
            alt="react"
          />
        </div>
        <div className="description">
          <p>
            This project was build with React, Redux for state management,
            Node.js, MongoDb data base. For UI i used Material UI. For this
            project i used Object oriented programming.
          </p>
        </div>
        <a href="https://github.com/DjordjevicN/Vrtirep">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/github.png"
              alt="github"
            />
          </motion.p>
        </a>
      </div>
      {/* ********************** */}
      {/* PROJECT  */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="projects"
        style={{
          backgroundImage: 'url("./images/pizza.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="title">
          <h1>Make your pizza</h1>
        </div>
        <div className="buildWidth">
          <p>Build width:</p>
          <img className="techIcon" src="./images/icons/js.png" alt="react" />
        </div>
        <div className="description">
          <p>This project was made with JavaScript and Scroll magic.</p>
        </div>
        <a href="https://github.com/DjordjevicN/PizzaScroll">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/github.png"
              alt="github"
            />
          </motion.p>
        </a>
        <a href="https://pizzascroll.netlify.app/">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/netlify.png"
              alt="github"
            />
          </motion.p>
        </a>
      </div>
      {/* ********************** */}
      {/* PROJECT  */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="projects"
        style={{
          backgroundImage: 'url("./images/digi.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="title">
          <h1>Digital agency</h1>
        </div>
        <div className="buildWidth">
          <p>Build width:</p>
          <img className="techIcon" src="./images/icons/js.png" alt="react" />
        </div>
        <div className="description">
          <p>This project was made with JavaScript and Scroll magic.</p>
        </div>

        <a href="https://github.com/DjordjevicN/Digital-Scroll">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/github.png"
              alt="github"
            />
          </motion.p>
        </a>

        <a href="https://digitalscroll.netlify.app/">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/netlify.png"
              alt="github"
            />
          </motion.p>
        </a>
      </div>
      {/* ********************** */}
      {/* PROJECT  */}
      <div
        data-aos="fade-right"
        data-aos-offset="300"
        className="projects"
        style={{
          backgroundImage: 'url("./images/gallery.png")',
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="title">
          <h1>Belgrade Gallery</h1>
        </div>
        <div className="buildWidth">
          <p>Build width:</p>
          <img className="techIcon" src="./images/icons/js.png" alt="react" />
        </div>
        <div className="description">
          <p>This project is made With JavaScript. </p>
        </div>

        <a href="https://github.com/DjordjevicN/Belgrade-Galery">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/github.png"
              alt="github"
            />
          </motion.p>
        </a>

        <a href="https://gifted-mcnulty-060bb9.netlify.app/">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            <img
              className="stackLinkImage"
              src="./images/icons/netlify.png"
              alt="github"
            />
          </motion.p>
        </a>
      </div>
      {/* ********************** */}
    </div>
  );
}

export default Projects;
