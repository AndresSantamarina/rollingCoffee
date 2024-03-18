import { Col, Card, Button } from "react-bootstrap";
import cafe from "../../../assets/cafeAmericano.webp";
import capuchino from "../../../assets/capuccino.jpg";
import croissant from "../../../assets/croissantChocolate.jpg";
import teVerde from "../../../assets/teVerde.webp";
import { Link } from "react-router-dom";

const CardProducto = ({producto}) => {
  return (
    <Col md={4} lg={3} className="mb-3">
      <Card className="h-100">
        <div>
          <img
            src={producto.imagen}
            alt={producto.nombreProducto}
            className="card-img-top-nueva img-fluid"
          />
        </div>
        <Card.Body>
          <Card.Title className="primary-font">{producto.nombreProducto}</Card.Title>
          <Card.Text>
            Descripción: {producto.descripcion}
            <br className="mb-2" />
            <span className="fw-bold">Precio: ${producto.precio}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="text-end">
          <Link to={"detalle/" + producto._id}className="btn btn-success me-2">Ver más</Link>
        </Card.Footer>
      </Card>
    </Col>
  );
};

export default CardProducto;
