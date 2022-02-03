import {
  Card,
  Button,
  CardActions,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const projects = [
  {
    name: "ARW Home",
    link: "https://arwhome.com/",
    stack: "Codeigniter, PHP, SQL, Javascript, HTML, CSS",
  },
  {
    name: "ARW Home Services",
    link: "https://arwhomeservices.com/",
    stack: "Codeigniter, PHP, SQL, Javascript, HTML, CSS",
  },
  {
    name: "ARW Buy",
    link: "https://arwhomeservices.com/",
    stack: "Codeigniter, PHP, SQL, Javascript, HTML, CSS",
  },
  {
    name: "ARW Plan Builder",
    link: "https://planbuilder.arwhome.com/",
    stack: "Codeigniter, PHP, SQL, AngularJS, Javascript, HTML, CSS",
  },
  {
    name: "Mathbotics",
    link: "somegithublink.com",
    stack: "React, Apollo, GraphQL, PostgresQL, Javascript, HTML, CSS",
  },
];

const Projects = (props) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      props.onPageChange("about");
      animation.start({
        opacity: 1,
        x: 0,
      });
    }
    if (!inView) {
      props.onPageChange("");
      animation.start({
        opacity: 0,
        x: -400,
      });
    }
  }, [inView]);

  return (
    <div
      id="about"
      style={{ paddingTop: "75.61px", paddingBottom: "68.5px" }}
    >
      <h1 className="text-color">Projects</h1>
      <Stack
        ref={ref}
        spacing={2}
        className="py-3"
        direction={{ xs: "column", sm: "row" }}
      >
        {projects.map((project, i) => (
          <Card
            key={i}
            component={motion.div}
            animate={animation}
            transition={{ duration: 1, ease: "easeInOut", delay: i * 0.15 }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14 }}
                color="text.secondary"
                gutterBottom
              >
                {project.name}
              </Typography>
              <Typography variant="body2">{project.stack}</Typography>
            </CardContent>
            <CardActions>
              <Button href={project.link} size="small">
                View Project
              </Button>
            </CardActions>
          </Card>
        ))}
      </Stack>
    </div>
  );
};

export default Projects;
