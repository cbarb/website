import {
  Card,
  Button,
  CardActions,
  Typography,
  CardContent,
  Stack,
} from "@mui/material";

const Projects = () => {
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
  return (
    <div
      id="projects"
      style={{ paddingTop: "75.61px", paddingBottom: "68.5px" }}
    >
      <h1 className="text-color">Projects</h1>
      <Stack
        spacing={2}
        className="py-3"
        direction={{ xs: "column", sm: "row" }}
      >
        {projects.map((project, i) => (
          <Card key={i}>
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
