import React from "react";
import { motion } from "framer-motion";
import "../App.css";
import { Container, Button, Stack } from "@mui/material";

const Header = () => {
  const links = ["Projects", "About", "Contact"];

  const pathVariants = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
      transition: {
        duration: 2,
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
    <Container>
      <div
        className="w-100"
        style={{
          display: "flex",
          // position: "absolute",
          // top: "0",
          // zIndex: "1030",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 383.96 341.82"
          style={{ width: "40px", marginTop: "20px", marginBottom: "20px" }}
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
        </svg>
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
      </div>
    </Container>
  );
};

export default Header;
