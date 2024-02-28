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
import { useState } from "react";
import RutasProtegidas from "./components/routes/RutasProtegidas";
import RutasAdmin from "./components/routes/RutasAdmin";
//npx json-server db.json

function App() {
  const usuario =
    JSON.parse(sessionStorage.getItem("usuarioRollingCoffee")) || "";
  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      />
      <Routes>
        <Route exact path="/" element={<Inicio />}></Route>
        <Route
          exact
          path="/administrador/*"
          element={
            <RutasProtegidas>
              <RutasAdmin />
            </RutasProtegidas>
          }
        ></Route>
        <Route exact path="/detalle/:id" element={<DetalleProducto />}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado} />}
        ></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
