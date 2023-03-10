import { useParams } from "react-router";

const ProductDetails = () => {
    const params = useParams();

    return <>
    <main>
        <ul>
            <li>{params.productId}</li>
        </ul>
    </main>
    </>
};

export default ProductDetails;