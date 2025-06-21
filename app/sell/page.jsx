
// "use client";

// import React, { useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

// export default function Sell() {
//   const { user } = useUser();
//   const router = useRouter();

//   const [form, setForm] = useState({
//     name: "",
//     price: "",
//     description: "",
//     image: "",
//     category: "Pesticide",
//   });

//   const [loading, setLoading] = useState(false);
//   const [message, setMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     if (!user?.id) return;

//     setLoading(true);
//     setMessage("");

//     try {
//       await axios.post(`${BASE_URI}/add-product`, {
//         ...form,
//         sellerId: user.id,
//       });

//       setMessage("Product added successfully.");
//       setForm({
//         name: "",
//         price: "",
//         description: "",
//         image: "",
//         category: "Pesticide",
//       });
//     } catch (err) {
//       console.error("Error adding product:", err);
//       setMessage("Failed to add product. Please try again.");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <div className="min-h-screen bg-[#f4f4ff] px-4 py-12">
//       <div className="max-w-4xl mx-auto flex items-center justify-between mb-10">
//         <h1 className="text-3xl font-bold text-[#6d46fa]">Sell a Product</h1>
//         <button
//           onClick={() => router.push("/sell-history")}
//           className="bg-[#6d46fa] hover:bg-[#5a38db] text-white px-6 py-2 rounded-lg shadow transition"
//         >
//           View Product History
//         </button>
//       </div>

//       <form
//         onSubmit={handleSubmit}
//         className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#6d46fa]/20 space-y-6"
//       >
//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Product Name
//           </label>
//           <input
//             type="text"
//             name="name"
//             value={form.name}
//             onChange={handleChange}
//             required
//             placeholder="e.g. Neem Pesticide"
//             className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Price (₹)
//           </label>
//           <input
//             type="number"
//             name="price"
//             value={form.price}
//             onChange={handleChange}
//             required
//             placeholder="e.g. 250"
//             className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Description
//           </label>
//           <textarea
//             name="description"
//             value={form.description}
//             onChange={handleChange}
//             rows={3}
//             required
//             placeholder="Brief description of the product..."
//             className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
//           ></textarea>
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Image URL
//           </label>
//           <input
//             type="url"
//             name="image"
//             value={form.image}
//             onChange={handleChange}
//             required
//             placeholder="https://example.com/image.jpg"
//             className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
//           />
//         </div>

//         <div>
//           <label className="block text-sm font-medium text-gray-700">
//             Category
//           </label>
//           <select
//             name="category"
//             value={form.category}
//             onChange={handleChange}
//             className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
//           >
//             <option value="Pesticide">Pesticide</option>
//             <option value="Fertilizer">Fertilizer</option>
//             <option value="Tool">Tool</option>
//             <option value="Other">Other</option>
//           </select>
//         </div>

//         <button
//           type="submit"
//           disabled={loading}
//           className="w-full bg-[#6d46fa] hover:bg-[#5a38db] text-white font-semibold py-3 rounded-lg transition"
//         >
//           {loading ? "Submitting..." : "Add Product"}
//         </button>

//         {message && (
//           <div
//             className={`text-center font-medium ${
//               message.includes("successfully")
//                 ? "text-green-600"
//                 : "text-red-600"
//             }`}
//           >
//             {message}
//           </div>
//         )}
//       </form>
//     </div>
//   );
// }
"use client";

import React, { useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

export default function Sell() {
  const { user } = useUser();
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    price: "",
    description: "",
    image: "",
    category: "Pesticide",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user?.id) return;

    setLoading(true);
    setMessage("");

    try {
      await axios.post(`${BASE_URI}/add-product`, {
        ...form,
        sellerId: user.id,
      });

      setMessage("Product added successfully.");
      setForm({
        name: "",
        price: "",
        description: "",
        image: "",
        category: "Pesticide",
      });
    } catch (err) {
      console.error("Error adding product:", err);
      setMessage("Failed to add product. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#f4f4ff] px-4 py-12">
      <div className="max-w-4xl mx-auto flex items-center justify-between mb-10">
        <h1 className="text-3xl font-bold text-[#6d46fa]">Sell a Product</h1>
        <button
          onClick={() => router.push("/sell-history")}
          className="bg-[#6d46fa] hover:bg-[#5a38db] text-white px-6 py-2 rounded-lg shadow transition"
        >
          View Product History
        </button>
      </div>

      <form
        onSubmit={handleSubmit}
        className="max-w-3xl mx-auto bg-white p-8 rounded-2xl shadow-lg border border-[#6d46fa]/20 space-y-6"
      >
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="e.g. Neem Pesticide"
            className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Price (₹)
          </label>
          <input
            type="number"
            name="price"
            value={form.price}
            onChange={handleChange}
            required
            placeholder="e.g. 250"
            className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            name="description"
            value={form.description}
            onChange={handleChange}
            rows={3}
            required
            placeholder="Brief description of the product..."
            className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Image URL
          </label>
          <input
            type="url"
            name="image"
            value={form.image}
            onChange={handleChange}
            required
            placeholder="https://example.com/image.jpg"
            className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">
            Category
          </label>
          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full mt-1 px-4 py-2 bg-white border border-gray-300 text-gray-800 rounded-md placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-[#6d46fa] focus:border-[#6d46fa] transition"
          >
            <option value="Pesticide">Pesticide</option>
            <option value="Fertilizer">Fertilizer</option>
            <option value="Tool">Tool</option>
            <option value="Other">Other</option>
          </select>
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-[#6d46fa] hover:bg-[#5a38db] text-white font-semibold py-3 rounded-lg transition"
        >
          {loading ? "Submitting..." : "Add Product"}
        </button>

        {message && (
          <div
            className={`text-center font-medium ${
              message.includes("successfully")
                ? "text-green-600"
                : "text-red-600"
            }`}
          >
            {message}
          </div>
        )}
      </form>
    </div>
  );
}
