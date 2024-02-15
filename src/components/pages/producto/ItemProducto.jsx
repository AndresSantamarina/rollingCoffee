import { Button } from "react-bootstrap";
import cafe from "../../../assets/cafeAmericano.webp";
import capuchino from "../../../assets/capuccino.jpg";
import croissant from "../../../assets/croissantChocolate.jpg";
import teVerde from "../../../assets/teVerde.webp";

const ItemProducto = () => {
  return (
    <tr>
      <td className="text-center">1</td>
      <td>Café americano</td>
      <td className="text-end">$250</td>
      <td className="text-center">
        <img src={cafe} alt="cafe" className="img-thumbnail" />
      </td>
      <td>Bebida caliente</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger">
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
