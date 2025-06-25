import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router";
import FeatureCard from "../components/FeatureCard";

const CategoryFeature = () => {
  const { id } = useParams();
  const data = useLoaderData();
  const [categoryFeature, setCategoryFeature] = useState([]);
  useEffect(() => {
    if (id == "0") {
      setCategoryFeature(data);
    } else if (id == "1") {
      const filteredFeature = data?.filter(
        (feature) => feature?.others?.is_today_pick == true
      );
      setCategoryFeature(filteredFeature);
    } else {
      const filteredFeature = data?.filter((feature) => feature?.category_id == id);
      setCategoryFeature(filteredFeature);
    }
  }, [data, id]);
  return (
    <div>
     <h2 className="font-bold text-center text-2xl mb-5"> Total <span className="text-secondary"> {categoryFeature?.length}</span> feature found</h2>
      <div className="grid grid-cols-2 gap-5">
        {categoryFeature?.map((feature) => (
          <FeatureCard feature={feature} key={feature.id}></FeatureCard>
        ))}
      </div>
    </div>
  );
};

export default CategoryFeature;
