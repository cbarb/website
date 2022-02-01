import Header from "./Header";
import { Container } from "@mui/material";
import Home from "./Home";
import Footer from "./Footer";
import Projects from "./Projects";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#031124" }}>
      <Header />
      <Container>
        <Home />
        <Projects />
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
