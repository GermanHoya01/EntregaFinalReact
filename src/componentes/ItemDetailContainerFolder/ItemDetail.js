import { Container, Row, Col, Image } from "react-bootstrap";
import ItemCount from "./ItemCount";

function ItemDetail({ id, title, stock, price, img, description }) {
    function handleOnAdd(quantity) {
        alert(`Agregaste ${quantity} de ${title}`);
    }

    return (
        <Container className="mt-5">
            <Row>
                <Col xs={12} lg={6}>
                    <Image src={img} alt={title} thumbnail />
                </Col>
                <Col xs={12} lg={6}>
                    <h4 className="fs-4" style={{ color: "#212529" }}>
                        {title}
                    </h4>
                    <h5 className="fs-5" style={{ color: "#212529" }}>
                        ${price} - {stock} unidades disponibles
                    </h5>
                    <p style={{ color: "#51585e" }}>{description}</p>
                    <div className="d-flex justify-content-center mt-4">
                        <ItemCount
                            initial={0}
                            stock={stock}
                            onAdd={handleOnAdd}
                            className="w-50"
                        />
                    </div>
                </Col>
            </Row>
        </Container>
    );
}

export default ItemDetail;
