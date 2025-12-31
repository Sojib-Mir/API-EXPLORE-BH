import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "../firebase/firebase";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

const AddProduct = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.title.value;
    const price = e.target.price.value;
    const image = e.target.image.value;
    const category = e.target.category.value;
    const description = e.target.description.value;

    const newData = {
      managerName: user?.displayName,
      managerEmail: user?.email,
      name,
      price,
      image,
      category,
      description,
      createdAt: new Date(),
    };
    console.log("Form Data Submitted:", newData);

    fetch("http://localhost:5000/products", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newData),
    })
      .then((res) => res.json())

      .then(() => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your product added successful!.",
          showConfirmButton: false,
          timer: 1000,
        });
        navigate("/products");
      })
      .catch((err) => {
        toast.error(err);
        alert(err)
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
            defaultValue={user?.displayName}
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
            defaultValue={user?.email}
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

        {/* Product Category Dropdown */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Category
          </label>
          <select
            name="category"
            className="mt-1 block text-black w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
            required
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
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Description
          </label>
          <textarea
            type="text"
            name="description"
            className="mt-1 text-black block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 "
            cols="30"
            rows="5"
            placeholder="Product Descripton here"
            step="0.01"
            required
          ></textarea>
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
