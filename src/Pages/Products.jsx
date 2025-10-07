import React, { useState } from "react";
import useProducts from "../Hooks/useProducts";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";

const Products = () => {
  const { products } = useProducts();

  const [search, setSearch] = useState("");

  const term = search.trim().toLowerCase();

  const searchedProducts = term
    ? products.filter((product) => product.name.toLowerCase().includes(term))
    : products;

    // console.log(searchedProducts)

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl">
          All Products{" "}
          <span className="text-sm text-gray-500">
            ({searchedProducts.length}) founds
          </span>
        </h1>
        <label className="input">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            type="search"
            placeholder="Search Products"
          />
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {searchedProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Products;
