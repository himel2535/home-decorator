import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl">
          WishList Products{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) founds
          </span>
        </h1>
        <button className="btn btn-outline">Sort By</button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>

      <div className="space-y-3">
        {wishlist.map((p) => (
          <div className="card card-side bg-base-100 shadow-sm items-center">
            <figure>
              <img
                className="h-28 w-40 object-cover"
                src={p.image}
                alt="image"
              />
            </figure>

            <div className="flex justify-between items-center w-full px-4">
              <div>
                <h2 className="card-title">{p.name}</h2>
                <p className="text-base-content/70">{p.category}</p>
              </div>

              <div className="flex items-center gap-4">
                <h4 className="text-xl font-semibold">Price: {p.price}</h4>
                <button className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
