import "./App.css";
import Footer from "./components/common/Footer";
import Menu from "./components/common/Menu";
import Inicio from "./components/pages/Inicio";
import "bootstrap/dist/css/bootstrap.min.css";
import Error404 from "./components/pages/Error404";
import Administrador from "./components/pages/Administrador";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import FormularioProducto from "./components/pages/producto/FormularioProducto";
import DetalleProducto from "./components/pages/producto/DetalleProducto";
import Login from "./components/pages/producto/Login";
//npx json-server db.json

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route exact path="/administrador" element={<Administrador />}></Route>
        <Route
          exact
          path="/administrador/crear"
          element={
            <FormularioProducto editar={false} titulo="Nuevo producto" />
          }
        ></Route>
        <Route
          exact
          path="/administrador/editar/:id"
          element={
            <FormularioProducto editar={true} titulo="Editar producto" />
          }
        ></Route>
        <Route exact path="/detalle" element={<DetalleProducto />}></Route>
        <Route exact path="/login" element={<Login />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
