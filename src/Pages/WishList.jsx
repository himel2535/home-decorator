import React, { useEffect, useState } from "react";

const WishList = () => {
  const [wishlist, setWishlist] = useState([]);

  const [sortOrder, setSortOrder] = useState("none");

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem("wishlist"));
    if (savedList) setWishlist(savedList);
  }, []);

  const sortedItem = (() => {
    if (sortOrder === "price-asc") {
      return [...wishlist].sort((a, b) => a.price - b.price);
    } else if (sortOrder === "price-dsc") {
      return [...wishlist].sort((a, b) => b.price - a.price);
    } else {
      return wishlist;
    }
  })();

  const handleRemoveToWishlist = id => {

    const existingList = JSON.parse(localStorage.getItem("wishlist"));

    let updatedList=existingList.filter(p=>p.id !== id)

    setWishlist(updatedList)

    localStorage.setItem("wishlist", JSON.stringify(updatedList));

  };

  return (
    <div>
      <div className="flex justify-between items-center mb-5">
        <h1 className="font-semibold text-3xl">
          WishList Products{" "}
          <span className="text-sm text-gray-500">
            ({wishlist.length}) founds
          </span>
        </h1>
        <label className="form-control w-full max-w-xs">
          <select
            className="select select-bordered"
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="none">Sort By Price</option>
            <option value="price-asc">Low-&gt;High</option>
            <option value="price-dsc">High-&gt;Low</option>
          </select>
        </label>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"></div>

      <div className="space-y-3">
        {sortedItem.map((p) => (
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
                <button onClick={()=>handleRemoveToWishlist(p.id)} className="btn btn-primary">Remove</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default WishList;
