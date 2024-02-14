import { Col, Container, Row } from "react-bootstrap";
import banner from "../../assets/bannerCafeteria.jpg";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
  return (
    <>
      <section className="banner mb-4">
        <img src={banner} alt="imagen de la cafetería" className="img-fluid " />
      </section>
      <Container>
        <h1 className="mb-4 display-4">Nuestros Productos</h1>
        <section>
          <Row>
            <Col>
              <CardProducto />
            </Col>
            <Col>
              <CardProducto />
            </Col>
            <Col>
              <CardProducto />
            </Col>
          </Row>
        </section>
      </Container>
    </>
  );
};

export default Inicio;
