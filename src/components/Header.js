import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { Container, Button, Stack } from "@mui/material";

const Header = () => {
  const links = ["Projects", "About", "Contact"];
  let screenWidth = window.innerWidth;
  const logoVariants = {
    initial: {
      x: screenWidth > 1200 ? `500px` : "calc(50vw - 86px)",
      y: "calc(50vh - 62px)",
      width: "140px",
      originX: "70px",
      originY: "62px",
    },
    animate: {
      x: 0,
      y: 0,
      width: "40px",
      transition: {
        duration: 0.8,
        delay: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };
  const linkVariants = {
    initial: { opacity: 0, y: -40 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <div
      className="w-100 sticky-top "
      style={{
        display: "flex",
      }}
    >
      <Container
        className="header-container"
        sx={{
          display: "flex",
          background:
            "linear-gradient(0deg, rgba(123,97,255,0) 0%, rgba(3,17,36,1) 100%, rgba(220,145,1,1) 100%, rgba(0,212,255,1) 100%);",
        }}
      >
        <motion.svg
          variants={logoVariants}
          initial="initial"
          animate="animate"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 383.96 341.82"
          style={{ marginTop: "20px", marginBottom: "20px" }}
        >
          <defs></defs>
          <g id="Layer_2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1">
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                className="cls-1"
                d="M152.44,151.8H106.26a83.76,83.76,0,0,0,0,167.52h46.18"
              />
              <motion.path
                variants={pathVariants}
                initial="hidden"
                animate="visible"
                className="cls-2"
                d="M231.53,319.32h46.18a83.76,83.76,0,0,0,0-167.52H231.53V22.5"
              />
            </g>
          </g>
        </motion.svg>
        <Stack
          sx={{ display: { xs: "none", md: "flex" }, marginLeft: "auto" }}
          direction="row"
          spacing={4}
          alignItems={"center"}
        >
          {links.map((link, i) => (
            <Button
              component={motion.a}
              variants={linkVariants}
              initial="initial"
              animate="animate"
              whileHover={{ scale: 1.2 }}
              transition={{
                duration: 1,
                delay: 2 + i * 0.25,
                ease: "easeInOut",
              }}
              key={link}
              style={{ color: "rgba(255,255,255,0.7)" }}
            >
              {" "}
              {link}{" "}
            </Button>
          ))}
        </Stack>
      </Container>
    </div>
  );
};

export default Header;
