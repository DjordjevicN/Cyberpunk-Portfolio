import React from "react";
import { motion } from "framer-motion";

function Header() {
  return (
    <div className="headerWrapper" data-tilt>
      <motion.div
        initial={{ y: 200, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ stiffness: 1 }}
        className="content-card header-bg"
      >
        <div className="spacer">
          <div className="headerText">
            <motion.h1
              animate={{
                opacity: [0, 1, 0, 0, 1, 0, 0, 1, 0, 1],
              }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              HI !
            </motion.h1>
            <motion.h1
              animate={{
                opacity: [0, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
              }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              My name is <span>Nikola</span>
            </motion.h1>
            <motion.h2
              animate={{ opacity: [0, 1, 0, 1, 0, 1, 0, 0, 1, 0, 1] }}
              transition={{ duration: 0.8, delay: 1.3 }}
            >
              I am a <span>Web Developer</span>
            </motion.h2>
            <p></p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Header;
