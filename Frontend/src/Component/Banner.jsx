import React from "react";
import banner from "../../public/Bookstore.jpg";
export default function Banner() {
  return (
    <>
      <div className=" max-w-screen-2x1 container mt-12 md:mt-32 mx-auto md:px-20 px-4 flex my-10 mx-5">
        <div className="w-full md:w-1/2">
          left
          <div className="space-y-12">
            <h1 className="text-4xl font-bold">
              hello, welcome here to learn somthing{" "}
              <span className="text-pink-500">new everyday!!!</span>
            </h1>
            <p>
              Whether you're a lover of fiction, a business professional seeking
              the latest in self-development, or a student looking for academic
              resources, our collection has something for everyone.
            </p>

            <label className="input input-bordered flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <button className=" mt-4 btn btn-secondary">Secondary</button>
        </div>
        <div className="w-full md:w-1/2 mx-15 my-10">
          <img src={banner} className="w-102 h-202" alt="" />
        </div>
      </div>
    </>
  );
}
