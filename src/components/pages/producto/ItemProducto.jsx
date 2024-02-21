import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { borrarProductoAPI } from "../../../helpers/queries";

const ItemProducto = ({ producto }) => {
  const borrarProducto = () => {
    Swal.fire({
      title: "Estás seguro de eliminar el producto?",
      text: "No se puede revertir este proceso",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Borrar",
      cancelButtonText: "Salir",
    }).then(async (result) => {
      if (result.isConfirmed) {
        //Agregar la lógica si quiero borrar
        const respuesta = await borrarProductoAPI(producto.id);
        if(respuesta.status === 200){
          Swal.fire({
            title: "Producto eliminado!",
            text: `El producto "${producto.nombreProducto}" fue eliminado correctamente`,
            icon: "success",
          });
        }else{
          Swal.fire({
            title: "Ocurrió un error",
            text: `El producto "${producto.nombreProducto}" no fue eliminado, intente realizar esta operación en unos minutos`,
            icon: "error",
          });
        }

       
      }
    });
  };

  return (
    <tr>
      <td className="text-center">{producto.id}</td>
      <td>{producto.nombreProducto}</td>
      <td className="text-end">{producto.precio}</td>
      <td className="text-center">
        <img
          src={producto.imagen}
          alt={producto.nombreProducto}
          className="img-thumbnail"
        />
      </td>
      <td>{producto.categoria}</td>
      <td className="text-center">
        <Button variant="warning" className="me-lg-2">
          <i className="bi bi-pencil-square"></i>
        </Button>
        <Button variant="danger" onClick={borrarProducto}>
          <i className="bi bi-trash"></i>
        </Button>
      </td>
    </tr>
  );
};

export default ItemProducto;
