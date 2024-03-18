import { useState, useEffect } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { obtenerDetallesProductoAPI } from "../../../helpers/queries";

const DetalleProducto = () => {
  const { id } = useParams();
  const [producto, setProducto] = useState();

  const cargarDatosProducto = async () => {
    try {
      const detallesProducto = await obtenerDetallesProductoAPI(id);

      setProducto(detallesProducto);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    cargarDatosProducto();
  }, []);
  return (
    <Container className="d-flex justify-content-center">
      <Card className="d-flex w-75">
        <Row>
          <Col>
            {producto && producto.imagen && (
              <Card.Img
                src={producto.imagen}
                alt={producto.nombreProducto}
                className="img-fluid align-self-start"
              />
            )}
          </Col>
          <Col>
            <Card.Body className="d-flex flex-column justify-content-start">
              <Card.Title className="fw-bold">
                {producto ? producto.nombreProducto : "Cargando..."}
              </Card.Title>
              <Card.Text className="descripcionAmplia">
                {producto ? producto.descripcionAmplia : "Cargando..."}{" "}
                <span className="text-success fw-bold"> Categoría: </span>
                {producto ? producto.categoria : "Cargando..."} <br />
                <span className="text-success fw-bold">Precio: $</span>{" "}
                {producto ? producto.precio : "Cargando..."}
              </Card.Text>
            </Card.Body>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};

export default DetalleProducto;

{
  /* <p className="descripcionAmplia">
{producto ? producto.descripcionAmplia : "Cargando..."}
</p>
<p>
{" "}
<span className="text-success fw-bold"> Categoría: </span>
{producto ? producto.categoria : "Cargando..."} <br />
<span className="text-success fw-bold">Precio: $</span>  {producto ? producto.precio : "Cargando..."}
</p> */
}
