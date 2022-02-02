import Header from "./components/Header";
import { Container } from "@mui/material";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  return (
    <div className="App" style={{ backgroundColor: "#031124" }}>
      <Header />
      <Container>
        <Home />
        <Projects />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
