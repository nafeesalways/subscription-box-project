import React from "react";
import { Link } from "react-router";

const FeatureCard = ({ feature }) => {
  const { id, features } = feature;
  return (
    <div className="max-w-xs shadow-md border rounded-lg dark:bg-gray-50 dark:text-gray-800">
      <img src={feature.thumbnail} />
      <div className="flex flex-col justify-between p-6 space-y-8">
        <div className="space-y-2">
          <h2 className="text-3xl font-semibold tracking-wide">
            {feature.name}
          </h2>
          <p className="dark:text-gray-800">{feature.description}</p>
          <p className="dark:text-gray-800 text-sm mb-3">
            {features.slice(0, 200)}...
            <Link
              to={`/feature-details/${id}`}
              className="text-secondary font-semibold cursor-pointer"
            >
              {" "}
              View More
            </Link>
          </p>
        </div>
        <button className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md btn bg-base-100 border-0 hover:bg-secondary hover:text-white">
       Buy {feature.price}
        </button>
      </div>
    </div>
  );
};

export default FeatureCard;
