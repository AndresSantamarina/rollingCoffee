import { Container, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../../helpers/queries";
import "../pages/producto/ItemProducto";
import { useState, useEffect } from "react";
import { leerProductosAPI } from "../../helpers/queries";
import ItemProducto from "../pages/producto/ItemProducto";

const Administrador = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    consultarAPI();
  }, []);

  const consultarAPI = async () => {
    try {
      const respuesta = await leerProductosAPI();
      setProductos(respuesta);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-5 my-3">Productos disponibles</h1>
        <Link to="crear" className="my-3 btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>

      <Table responsive bordered hover className="text-center">
        <thead>
          <tr>
            {/* <th>Cod</th> */}
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => 
            <ItemProducto key={producto._id} producto={producto} setProductos={setProductos} />)
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;