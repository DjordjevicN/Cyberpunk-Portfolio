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
          backgroundImage: 'url("./images/vrtirep.jpg")',
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
        <a href="https://github.com/DjordjevicN/Cyberpunk-Portfolio">
          <motion.p whileHover={{ scale: 1.1 }} className="linkToProject">
            DETAILS
          </motion.p>
        </a>
      </div>
      {/* ********************** */}
    </div>
  );
}

export default Projects;
