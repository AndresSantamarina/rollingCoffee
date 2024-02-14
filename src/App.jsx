import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import "bootstrap-icons/font/bootstrap-icons.css";

function App() {
  return (
    <section className="contenedor">
      <div className="contenido">
        <Menu />
        {/* <Inicio /> */}
        <Administrador/>
        {/* <Error404/> */}
      </div>
      <Footer />
    </section>
  );
}

export default App;
