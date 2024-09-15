import React from "react";

export default function Cards({ item }) {
  return (
    <>
      <div className="mt-4 my-2">
        <div className="card bg-base-100 w-85 mx-1  shadow-xl hover:scale-105 durition-200">
          <figure>
            <img src={item.image} alt="books" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">
              {item.name}
              <div className="badge badge-secondary">{item.category}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">${item.price}</div>
              <div className="cursor-pointer badge badge-outline   hover:bg-pink-500 hover:text-white">
                Buy Now
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
