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
    };

    // Backend API call for Update (PATCH)
    fetch(`http://localhost:5000/products/${product._id}`, {
      method: "PATCH",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(updatedInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
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
          <div className="form-control">
            <label className="label">Product Name</label>
            <input
              name="name"
              type="text"
              defaultValue={product.name}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Price</label>
            <input
              name="price"
              type="number"
              defaultValue={product.price}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Category</label>
            <input
              name="category"
              type="text"
              defaultValue={product.category}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control">
            <label className="label">Image URL</label>
            <input
              name="image"
              type="text"
              defaultValue={product.image}
              className="input input-bordered"
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
