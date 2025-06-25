import React, { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch("/categories.json").then((res) => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  return (
    <div>
      <h2 className="text-2xl font-bold">
        All Categories({categories.length})
      </h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map((cat) => (
          <NavLink
            className={
              "btn bg-base-100 border-0 hover:bg-secondary hover:text-white"
            }
            to={`/category/${cat.id}`}
            key={cat.id}
            cat={cat}
          >
            {cat.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
