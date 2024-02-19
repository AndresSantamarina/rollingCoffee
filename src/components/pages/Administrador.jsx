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
        <Link to="formulario" className="my-3 btn btn-primary">
          <i className="bi bi-file-earmark-plus"></i>
        </Link>
      </div>

      <Table responsive bordered hover className="text-center">
        <thead>
          <tr>
            <th>Cod</th>
            <th>Producto</th>
            <th>Precio</th>
            <th>URL de Imagen</th>
            <th>Categoría</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => 
            <ItemProducto key={producto.id} producto={producto} />)
          }
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;

{
  /* <tr> */
}
{
  /* <td>1</td>
            <td>Café americano</td>
            <td>$250</td>
            <td>
              <img src={cafe} alt="cafe" className="img-fluid" width={500} />
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
              <Link to="" className="my-3 btn btn-warning">
                {" "}
                <i className="bi bi-pencil-square p-2 rounded m-2"></i>
              </Link>
              <Button className="my-3 btn btn-danger">
                <i className="bi bi-trash3 p-2 rounded m-2"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Capuchino</td>
            <td>$350</td>
            <td>
              <img
                src={capuchino}
                alt="capuchino"
                className="img-fluid"
                width={500}
              />
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
              <Link to="" className="my-3 btn btn-warning">
                {" "}
                <i className="bi bi-pencil-square p-2 rounded m-2"></i>
              </Link>
              <Button className="my-3 btn btn-danger">
                <i className="bi bi-trash3 p-2 rounded m-2"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>Croissant de chocolate</td>
            <td>$180</td>
            <td>
              <img
                src={croissant}
                alt="croissant"
                className="img-fluid"
                width={500}
              />
            </td>
            <td>Repostería</td>
            <td className="text-center">
              <Link to="" className="my-3 btn btn-warning">
                {" "}
                <i className="bi bi-pencil-square p-2 rounded m-2"></i>
              </Link>
              <Button className="my-3 btn btn-danger">
                <i className="bi bi-trash3 p-2 rounded m-2"></i>
              </Button>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>Té verde</td>
            <td>$200</td>
            <td>
              <img
                src={teVerde}
                alt="te verde"
                className="img-fluid"
                width={500}
              />
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
              <Link to="" className="my-3 btn btn-warning">
                {" "}
                <i className="bi bi-pencil-square p-2 rounded m-2"></i>
              </Link>
              <Button className="my-3 btn btn-danger">
                <i className="bi bi-trash3 p-2 rounded m-2"></i>
              </Button>
            </td> */
}
{
  /* </tr> */
}
