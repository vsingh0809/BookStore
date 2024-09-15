import React from "react";
import list from "../../public/List.json";
import Cards from "./Cards";
import { Link } from "react-router-dom";
export default function Course() {
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className="text-pink-500">here!:</span>
          </h1>
          <p className="mt-12 max-w-screen-2xl container mx-auto md:px-20 px-4 ">
            Welcome to our bookstore, where every book opens a new world of
            imagination, knowledge, and adventure. Whether you're a fan of
            gripping mysteries, heartwarming romances, inspiring self-help
            guides, or thought-provoking non-fiction, our carefully curated
            selection has something for everyone. From timeless classics to the
            latest bestsellers, we offer a diverse range of genres to satisfy
            every reader's taste. Step inside and let your next great read find
            you, as we strive to bring the magic of books to life with every
            page you turn.
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 roundend-md mt-6 hover:bg-pink-700 duration-300">
              Back
            </button>
          </Link>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => (
            <Cards item={item} key={item.id}></Cards>
          ))}
        </div>
      </div>
    </>
  );
}
