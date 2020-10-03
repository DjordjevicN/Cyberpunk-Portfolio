import React from "react";

function Projects() {
  const arr = [1, 2, 3];
  return (
    <div className="projectsWrapper">
      {arr.map((item) => (
        <div
          className="projects"
          style={{
            // backgroundImage: `url("${project.mainImage}")`,
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
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled{" "}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Projects;
