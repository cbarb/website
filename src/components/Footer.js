import React from "react";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Footer = () => {
  const links = ["projects", "about", "contact"];

  const linkVariants = {
    initial: { opacity: 0, y: 40 },
    animate: {
      opacity: 1,
      y: 0,
    },
  };
  return (
    <>
      <Stack
        sx={{
          background: "rgb(3, 17, 36)",
          display: {
            sm: "flex",
            md: "none",
          },
        }}
        className="fixed-bottom py-3"
        direction="row"
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {links.map((link, i) => (
          <Button
            component={motion.div}
            variants={linkVariants}
            initial="initial"
            animate="animate"
            transition={{ duration: 1, delay: 2 + i * 0.25, ease: "easeInOut" }}
            key={link}
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            <Link to={link} smooth={true} duration={400}>
              {link}
            </Link>
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default Footer;
