import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const {ProductId} = useParams();
    return (
        <div>
            ProductDetails: {ProductId};
        </div>
    );
}
export default ProductDetails;