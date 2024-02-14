import { Button } from "react-bootstrap";
import imgError from "../../assets/error404.png"

const Error404 = () => {
    return (
        <section className="text-center ">
            <img src={imgError} alt="Error 404" className="img-fluid mx-auto d-block"/>
            <Button className="my-3">Volver al inicio</Button>
        </section>
    );
};

export default Error404;