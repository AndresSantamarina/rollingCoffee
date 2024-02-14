import { Button, Container, Table } from "react-bootstrap";
import cafe from "../../assets/cafeAmericano.webp";
import capuchino from "../../assets/capuccino.jpg";
import croissant from "../../assets/croissantChocolate.jpg";
import teVerde from "../../assets/teVerde.webp";

const Administrador = () => {
  return (
    <Container>
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="display-5 my-3">Productos disponibles</h1>
        <Button>
          <i className="bi bi-file-earmark-plus"></i>
        </Button>
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
          <tr>
            <td>1</td>
            <td>Café americano</td>
            <td>$250</td>
            <td>
              <img src={cafe} alt="cafe" className="img-fluid" width={500} />
            </td>
            <td>Bebida caliente</td>
            <td className="text-center">
              <i className="bi bi-pencil-square bg-warning p-2 rounded m-2"></i>
              <i className="bi bi-trash3 bg-danger p-2 rounded m-2"></i>
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
              <i className="bi bi-pencil-square bg-warning p-2 rounded m-2"></i>
              <i className="bi bi-trash3 bg-danger p-2 rounded m-2"></i>
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
              <i className="bi bi-pencil-square bg-warning p-2 rounded m-2"></i>
              <i className="bi bi-trash3 bg-danger p-2 rounded m-2"></i>
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
              <i className="bi bi-pencil-square bg-warning p-2 rounded m-2"></i>
              <i className="bi bi-trash3 bg-danger p-2 rounded m-2"></i>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
};

export default Administrador;
