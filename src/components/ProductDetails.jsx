import { useLoaderData, useNavigate } from "react-router";

const ProductDetails = () => {
  const data = useLoaderData();
  const navigate = useNavigate();


  

  // Data destructuring
  const { name, description, price, image, category } = data || {};

  if (!data) {
    return (
      <div className="text-center py-20 text-2xl font-bold text-red-500">
        Product not found!
      </div>
    );
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
        <div className="flex flex-col md:flex-row">
          {/* Left Side: Product Image */}
          <div className="md:w-1/2 relative group">
            <img
              src={image || "https://via.placeholder.com/500"}
              alt={name}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider shadow-lg">
                {category}
              </span>
            </div>
          </div>

          {/* Right Side: Product Info */}
          <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
            <button
              onClick={() => navigate(-1)}
              className="text-gray-400 hover:text-blue-600 flex items-center gap-2 mb-6 transition-colors"
            >
              ← <span className="text-sm font-medium">Back to Shop</span>
            </button>

            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight">
              {name}
            </h1>

            <div className="flex items-center mb-6">
              <span className="text-3xl font-bold text-blue-600">${price}</span>
              <span className="ml-4 px-2 py-1 bg-green-100 text-green-700 text-xs font-bold rounded">
                In Stock
              </span>
            </div>

            <p className="text-gray-600 leading-relaxed mb-8 text-lg">
              {description}
            </p>

            <div className="space-y-4">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-blue-200 active:scale-[0.98]">
                Add to Cart
              </button>

              <button className="w-full bg-gray-900 hover:bg-black text-white font-bold py-4 rounded-xl transition-all shadow-lg active:scale-[0.98]">
                Buy Now
              </button>
            </div>

            {/* Extra Info */}
            <div className="mt-8 pt-8 border-t border-gray-100 grid grid-cols-2 gap-4">
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                  Category
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  {category}
                </p>
              </div>
              <div>
                <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">
                  Shipping
                </p>
                <p className="text-sm font-semibold text-gray-700">
                  Free Worldwide
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
