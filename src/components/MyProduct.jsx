import { useLoaderData } from "react-router";
import MyProductCard from "./MyProductCard";

const MyProduct = () => {
  const productData = useLoaderData();

  console.log("myproduct data==========>", productData);

  return (
    <div>
      <h1 className="text-4xl text-center text-pink-600 my-40 font-bold">
        My Product{" "}
        <span className="text-white bg-red-500 px-5 rounded">
          {productData.length}
        </span>{" "}
        (found)
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {productData.map((product) => (
          <MyProductCard key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default MyProduct;
