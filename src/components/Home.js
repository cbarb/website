import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  const headingVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 2, ease: "easeInOut" },
    },
  };

  const heading2Variants = {
    initial: { opacity: 0, y: 10 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, delay: 3, ease: "easeInOut" },
    },
  };
  const arrowVariants = {
    initial: { opacity: 0, y: 0 },
    animate: {
      opacity: 1,
      y: 100,
      transition: {
        duration: 1.5,
        delay: 5,
        ease: "easeIn",
        fade: 1,
      },
    },
  };
  return (
    <div
      className="heading-text page-height"
      style={{ color: "rgba(255, 255, 255, 0.7" }}
    >
      <motion.h1 variants={headingVariants} initial="initial" animate="animate">
        HI THERE,
      </motion.h1>
      <motion.h1
        variants={heading2Variants}
        initial="initial"
        animate="animate"
      >
        WELCOME TO MY SITE
      </motion.h1>
      <div>
        <Link to="projects" smooth={true} duration={400}>
          <motion.div
            variants={arrowVariants}
            initial="initial"
            animate="animate"
            className="scroll-down "
          ></motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Home;
