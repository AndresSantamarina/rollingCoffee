import { Card, Button } from "react-bootstrap";
import cafe from "../../../assets/cafeAmericano.webp";
import capuchino from "../../../assets/capuccino.jpg";
import croissant from "../../../assets/croissantChocolate.jpg";
import teVerde from "../../../assets/teVerde.webp";

const CardProducto = () => {
  return (
    <>
      <Card className="m-3">
        <Card.Img variant="top" src={cafe} className="img-fluid" />
        <Card.Body>
          <Card.Title>Café americano</Card.Title>
          <Card.Text>
            Descripción: Una taza de café suave y aromático.
          </Card.Text>
          <Card.Subtitle className="fw-bold">Precio: $250</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="d-flex ms-auto">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
      <Card className="m-3">
        <Card.Img variant="top" src={capuchino} className="img-fluid" />
        <Card.Body>
          <Card.Title>Capuchino</Card.Title>
          <Card.Text>
            Descripción: Espuma de leche cremosa sobre un espresso fuerte.
          </Card.Text>
          <Card.Subtitle className="fw-bold">Precio: $350</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="d-flex ms-auto">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
      <Card className="m-3">
        <Card.Img variant="top" src={croissant} className="img-fluid" />
        <Card.Body>
          <Card.Title>Croissant de chocolate</Card.Title>
          <Card.Text>
            Descripción: Delicioso croissant relleno de suave chocolate.{" "}
          </Card.Text>
          <Card.Subtitle className="fw-bold">Precio: $180</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="d-flex ms-auto">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
      <Card className="m-3">
        <Card.Img variant="top" src={teVerde} className="img-fluid" />
        <Card.Body>
          <Card.Title>Té verde</Card.Title>
          <Card.Text>
            Descripción: Té verde orgánico con un sabor suave y revitalizante.{" "}
          </Card.Text>
          <Card.Subtitle className="fw-bold"> Precio: $200</Card.Subtitle>
        </Card.Body>
        <Card.Footer>
          <Button variant="success" className="d-flex ms-auto">
            Ver más
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default CardProducto;
