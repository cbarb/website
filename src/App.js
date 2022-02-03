import Header from "./components/Header";
import { Container } from "@mui/material";
import Home from "./components/Home";
import Footer from "./components/Footer";
import About from "./components/About";
import Projects from "./components/Projects";
import { useEffect, useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material";

const theme = createTheme({
  palette: {
    primary: {
      main: "#1ee314",
    },
    secondary: {
      main: "rgba(255,255,255,0.7)",
    }
  },
});

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [inView, setInView] = useState('');

  function handlePageChange(currentPage) {
    setInView(currentPage);
  }
  console.log(inView);

  return (
    <ThemeProvider theme={theme}>
      <div className="App" style={{ backgroundColor: "#031124" }}>
        <Header />
        <Container>
          <Home />
          <Projects value={inView} onPageChange={handlePageChange} />
          <About value={inView} onPageChange={handlePageChange} />
        </Container>
        <Footer projectLink={inView}/>
      </div>
    </ThemeProvider>
  );
}

export default App;
