import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container } from "react-bootstrap";
import Error404 from "./components/pages/Error404";

function App() {
  return (
    <Container fluid className="mainPage">
      <Menu />
      {/* <Inicio /> */}
      <Error404/>
      <Footer />
    </Container>
  );
}

export default App;
