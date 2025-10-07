import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const {id}=useParams();
  console.log(typeof(id))
  const {products}=useProducts()
  console.log(products)
  return (
    <div>
      <h1>Product Details</h1>
    </div>
  );
};

export default ProductDetails;
