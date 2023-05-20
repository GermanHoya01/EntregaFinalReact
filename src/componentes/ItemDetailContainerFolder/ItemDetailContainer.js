import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import mock from "../../asyncMock";
import ItemDetail from "./ItemDetail";

const ItemDetailContainer = () => {
    const [product, setProduct] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { id } = useParams();

    useEffect(() => {
        setIsLoading(true);

        function getProducts() {
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(mock);
                }, 2000);
            });
        }

        getProducts(id)
            .then((product) => {
                setProduct(product.find((x) => x.id === id));
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [id]);

    return (
        <div>
            {isLoading ? (
                <div className="d-flex justify-content-center">
                    <Spinner animation="grow" className="m-5" />
                </div>
            ) : (
                <>
                    <ItemDetail {...product} />
                </>
            )}
        </div>
    );
};

export default ItemDetailContainer;
