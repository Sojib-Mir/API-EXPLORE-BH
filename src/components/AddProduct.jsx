const AddProduct = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const username = e.target.username.value;
    const email = e.target.email.value;
    const title = e.target.title.value;
    const price = e.target.price.value;
    const image = e.target.image.value;

    console.log("Form Data Submitted:", {
      username,
      email,
      title,
      price,
      image,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-xl shadow-md border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Add New Product
      </h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Username */}
        <div>
          <label className="block text-sm font-medium text-gray-700 ">
            Username
          </label>
          <input
            type="text"
            name="username"
            className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 text-black"
            placeholder="johndoe"
            defaultValue={"PriMe"}
            required
            readOnly
          />
        </div>

        {/* User Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Email Address
          </label>
          <input
            type="email"
            name="email"
            className="mt-1 block text-black  w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="you@example.com"
            defaultValue={"byteprime2025@gmail.com"}
            required
            readOnly
          />
        </div>

        {/* Product Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Title
          </label>
          <input
            type="text"
            name="title"
            className="mt-1 block text-black w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Vintage Camera"
            required
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price ($)
          </label>
          <input
            type="number"
            name="price"
            className="mt-1 text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="0.00"
            step="0.01"
            required
          />
        </div>

        {/* Image Upload */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Image
          </label>
          <input
            type="text"
            name="image"
            className="mt-1 text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            placeholder="Photo URL"
            step="0.01"
            required
          />
        </div>

        {/* Product Button */}
        <button
          type="submit"
          className="w-full cursor-pointer mt-4 bg-indigo-600 text-white py-2 px-4 rounded-md font-semibold hover:bg-indigo-700 transition duration-200 ease-in-out shadow-lg"
        >
          Add Product
        </button>
      </form>
    </div>
  );
};

export default AddProduct;
