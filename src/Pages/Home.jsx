import React from "react";
import { Link } from "react-router";
import ProductCard from "../Components/ProductCard";
import useProducts from "../Hooks/useProducts";

const Home = () => {
  //   const products = useLoaderData();
  const data = useProducts();
  const { products, loading, error } = data;
  const featuredProducts = products.slice(0, 6);

  console.log(data);
  //   console.log(products);
  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl">Featured Products</h1>
        <Link to="/products" className="btn btn-outline">
          See More
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {featuredProducts.map((product) => (
          <ProductCard key={product.id} product={product}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
