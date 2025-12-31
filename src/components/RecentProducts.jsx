import { Link } from "react-router";

const RecentProducts = ({ product }) => {
  const { name, image, description, price, _id } = product;

  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col h-full">
      {/* ইমেজ সেকশন */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={image || "https://via.placeholder.com/300"}
          alt={name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
        {/* প্রাইস ট্যাগ */}
        <div className="absolute top-4 right-4 bg-pink-600 text-white px-3 py-1 rounded-full font-bold shadow-lg">
          ${price}
        </div>
      </div>

      {/* কন্টেন্ট সেকশন */}
      <div className="p-6 flex flex-col grow">
        <h2 className="text-xl font-bold text-gray-800 mb-2 truncate">
          {name}
        </h2>

        <p className="text-gray-600 text-sm line-clamp-2 mb-4 grow">
          {description ||
            "No description provided for this product. High quality and best price guaranteed."}
        </p>

        {/* বাটন সেকশন */}
        <div className="flex items-center justify-between mt-auto">
          <Link
            to={`/product-details/${_id}`}
            className="bg-slate-800 hover:bg-pink-600 text-white text-sm font-semibold px-6 py-2.5 rounded-xl transition-colors duration-300 w-full shadow-md text-center"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecentProducts;
