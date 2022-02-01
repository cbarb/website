import React from "react";
import { Stack, Button } from "@mui/material";
import { motion } from "framer-motion";

const Footer = () => {
  const links = ["Projects", "About", "Contact"];

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
        className="fixed-bottom my-3"
        direction="row"
        spacing={4}
        alignItems={"center"}
        justifyContent={"center"}
      >
        {links.map((link, i) => (
          <Button
            component={motion.a}
            variants={linkVariants}
            initial="initial"
            animate="animate"
            whileHover={{ scale: 1.2 }}
            transition={{ duration: 1, delay: 2 + i * 0.25, ease: "easeInOut" }}
            key={link}
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            {" "}
            {link}{" "}
          </Button>
        ))}
      </Stack>
    </>
  );
};

export default Footer;
