import React from "react";
import Hero from "./Hero";
import RecentProducts from "./RecentProducts";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data)
  return (
    <div className="mt-2 mb-80">
      <Hero></Hero>

      {/* Recent Products */}
      <div className="">
        <h1 className="text-center text-4xl text-yellow-300 font-bold pt-10 pb-5">
          Recent Products <span className="text-white">({data.length})</span> {" "}
          Found
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {data.map((product) => (
            <RecentProducts key={product._id} product={product} />
          ))}
        </div>
      </div>

      
    </div>
  );
};

export default Home;
