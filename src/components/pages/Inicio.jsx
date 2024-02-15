import { Col, Container, Row } from "react-bootstrap";
import banner from "../../assets/bannerCafeteria.jpg";
import CardProducto from "./producto/CardProducto";

const Inicio = () => {
  return (
    <section className="mainSection">
      <article className="banner mb-4">
        <img src={banner} alt="imagen de la cafetería" className="img-fluid " />
      </article>
      <Container>
        <h1 className="mb-4 display-4">Nuestros Productos</h1>
        <Row>
          <CardProducto />
          <CardProducto />
          <CardProducto />
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
