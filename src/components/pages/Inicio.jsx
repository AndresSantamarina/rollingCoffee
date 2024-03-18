import { Col, Container, Row } from "react-bootstrap";
import banner from "../../assets/bannerCafeteria.jpg";
import CardProducto from "./producto/CardProducto";
import { leerProductosAPI } from "../../helpers/queries";
import { useState, useEffect } from "react";

const Inicio = () => {
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
    <section className="mainSection">
      <article className="banner mb-4">
        <img src={banner} alt="imagen de la cafetería" className="img-fluid " />
      </article>
      <Container>
        <h1 className="mb-4 display-4">Nuestros Productos</h1>
        <Row>
        {productos.map((producto) => 
            <CardProducto key={producto._id} producto={producto}/>
          )}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
