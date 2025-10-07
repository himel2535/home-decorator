import React from "react";
import { useParams } from "react-router";
import useProducts from "../Hooks/useProducts";

const ProductDetails = () => {
  const { id } = useParams();
  const parsedId = parseInt(id);

  const { products, loading } = useProducts();

  const product = products.find((p) => p.id === parsedId);

  if (loading) return <p>Loading...</p>;

  const { image, name, price, category, description } = product;
  return (
    <div className="flex justify-center items-center">
      <div className="card bg-base-100 border shadow-sm w-full md:w-1/2 lg:w-2/5">
        <figure className="h-[250px] overflow-hidden">
          <img className=" w-full object-cover" src={image} alt="decorator" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Description : {description}</p>
          <p>Price:{price}</p>
          <p>Category:{category}</p>
          <div className="card-actions justify-end">
            <button to={`/wishlist`} className="btn btn-outline">
              Add To WishList
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
