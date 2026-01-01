import Swal from "sweetalert2";

const UpdateProduct = ({ isOpen, setIsEditModalOpen, product }) => {
  if (!isOpen) return null;

  const handleUpdate = (e) => {
    e.preventDefault();
    const form = e.target;
    const updatedInfo = {
      name: form.name.value,
      price: form.price.value,
      category: form.category.value,
      image: form.image.value,
      description: form.description.value,
    };

    // Backend API call for Update (PATCH)
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount === 1) {
          Swal.fire("Success", "Product Updated Successfully!", "success");
          setIsEditModalOpen(false);
          window.location.reload();
        }
      });
  };

  return (
    <div className="modal modal-open">
      <div className="modal-box relative">
        <button
          onClick={() => setIsEditModalOpen(false)}
          className="btn btn-sm btn-circle absolute right-2 top-2 text-red-500"
        >
          ✕
        </button>

        <h3 className="text-lg font-bold mb-4">
          Update Product: {product.name}
        </h3>

        <form onSubmit={handleUpdate} className="space-y-4">
          {/* name */}
          <div className="form-control">
            <label className="label text-white">Product Name</label>
            <input
              name="name"
              type="text"
              defaultValue={product.name}
              className="mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>
          {/* price */}
          <div className="form-control">
            <label className="label text-white">Price</label>
            <input
              name="price"
              type="number"
              defaultValue={product.price}
              className="mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          {/* Category */}
          <div className="form-control">
            <label className="block text-sm font-medium  ">
              Product Category
            </label>
            <select
              name="category"
              className="mt-1 block  w-full px-3 py-2 bg-sky-400/30 text-black border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
              defaultValue={product.category}
            >
              <option value="">Select a Category</option>
              <option value="Electronics">Electronics</option>
              <option value="Home Decor">Home Decor</option>
              <option value="Fashion">Fashion</option>
              <option value="Internet">Internet</option>
              <option value="Beauty">Health & Beauty</option>
              <option value="Sports">Sports & Outdoors</option>
            </select>
          </div>

          {/* Description */}
          <div className="form-control">
            <label className="block text-sm font-medium  ">
              Product Description
            </label>
            <textarea
              type="text"
              name="description"
              className="mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 "
              cols="30"
              rows="5"
              placeholder="Product Descripton here"
              step="0.01"
               defaultValue={product.description}
              required
            ></textarea>
          </div>

          {/* Image URL */}
          <div className="form-control">
            <label className="label text-white">Image URL</label>
            <input
              name="image"
              type="text"
              defaultValue={product.image}
              className="mt-1  block w-full px-3 py-2 border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
              required
            />
          </div>

          <div className="modal-action">
            <button type="submit" className="btn btn-success text-white">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
