import { Button, Container, Table } from "react-bootstrap";
import cafe from "../../../assets/cafeAmericano.webp";
import capuchino from "../../../assets/capuccino.jpg";
import croissant from "../../../assets/croissantChocolate.jpg";
import teVerde from "../../../assets/teVerde.webp";

const ItemProducto = () => {
  return (
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
  );
};

export default ItemProducto;
