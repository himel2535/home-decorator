import React from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl">
          All Products{" "}
          <span className="text-sm text-gray-500">
            ({products.length}) founds
          </span>
        </h1>
        <label className="input">
          <input type="search" placeholder="Search Products" />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
