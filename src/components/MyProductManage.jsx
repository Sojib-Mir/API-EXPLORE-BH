import { useLoaderData } from "react-router";
import { FaEdit, FaTrashAlt } from "react-icons/fa";
import { toast } from "react-toastify";
import UpdateProduct from "./UpdateProduct";
import { useState } from "react";
import Swal from "sweetalert2";

const MyProductManage = () => {
  const initialData = useLoaderData();

  const [products, setProducts] = useState(initialData);

  console.log("products=====>", products);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  // delete
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount === 1) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Product has been deleted.",
                icon: "success",
              });

              setProducts(products.filter((p) => p._id !== id));
            }
          });
      }
    });
  };

  // all delete
  const handleAllDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/products/`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log("deleted data====>", data);
            if (data.deletedCount > 0) {
              toast.success("Deleted successfully!");
              window.location.reload();
            }
          });
      }
    });
  };

  // এডিট মোডাল ওপেন করার ফাংশন
  const handleEditClick = (product) => {
    setSelectedProduct(product);
    setIsEditModalOpen(true);
  };

  return (
    <div className="p-8">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold mb-6">
          My Managed Products ({products.length})
        </h2>

        <button onClick={handleAllDelete} className="btn btn-secondary btn-sm">
          All Delete
        </button>
      </div>

      <div className="overflow-x-auto shadow-lg rounded-lg border border-gray-200">
        <table className="table w-full">
          <thead className="bg-sky-400 text-black">
            <tr>
              <th>Image</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Price</th>
              <th className="text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product._id} className="">
                <td>
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={product.image} alt={product.name} />
                  </div>
                </td>
                <td className="font-semibold">{product.name}</td>
                <td>
                  <span className="badge badge-ghost">{product.category}</span>
                </td>
                <td className="font-bold text-blue-600">${product.price}</td>

                <td className="text-center flex justify-center gap-2">
                  {/* Edit Button */}
                  <button
                    onClick={() => handleEditClick(product)}
                    className="btn btn-sm btn-success text-white"
                  >
                    <FaEdit /> Edit
                  </button>

                  {/* Delete Button */}
                  <button
                    onClick={() => handleDelete(product._id)}
                    className="btn btn-sm btn-outline btn-error"
                  >
                    <FaTrashAlt /> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Update Modal (লুপের বাইরে একবারই থাকবে) */}
      {selectedProduct && (
        <UpdateProduct
          isOpen={isEditModalOpen}
          setIsEditModalOpen={setIsEditModalOpen}
          product={selectedProduct}
        />
      )}
    </div>
  );
};

export default MyProductManage;
