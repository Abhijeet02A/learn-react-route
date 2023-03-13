import { useParams } from "react-router";
import { Link } from "react-router-dom";

const ProductDetails = () => {
    const params = useParams();

    return <>
    <main>
        <ul>
            <li>{params.productId}</li>
            <li><Link to='..' relative="path">Back</Link> </li>
        </ul>
    </main>
    </>
};

export default ProductDetails;