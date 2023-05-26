import { useEffect, useState } from "react";
import { Spinner } from "react-bootstrap";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import { getDoc, doc} from "firebase/firestore"
import { db } from "../../firebase"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    
    const { itemId } = useParams();

    useEffect(() => {
        setIsLoading(true);

        const docRef = doc(db, "products", itemId)
        
        getDoc(docRef)
            .then(response => {
                const data = response.data()
                const productAdapted = { id: response.id, ...data }
                setProduct(productAdapted)
            })
            .catch(error => {
                console.log(error)
            })
    }, [itemId])

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
