// "use client";

// import React, { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";

// const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

// export default function SellerHistory() {
//   const { user } = useUser();
//   const [products, setProducts] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     if (!user?.id) return;

//     axios
//       .get(`${BASE_URI}/seller-products/${user.id}`)
//       .then((res) => setProducts(res.data))
//       .catch((err) => console.error("Failed to fetch seller products:", err))
//       .finally(() => setLoading(false));
//   }, [user]);

//   return (
//     <div className="min-h-screen bg-[#f9f8ff] px-6 py-6 w-full">
//       <h1 className="text-xl font-bold text-center text-[#6d46fa] mb-4">
//         Your Added Products
//       </h1>

//       {loading ? (
//         <div className="text-center text-[#6d46fa] text-lg font-semibold">
//           Loading your products...
//         </div>
//       ) : products.length === 0 ? (
//         <div className="text-center text-gray-500 text-md italic">
//           You haven’t added any products yet.
//         </div>
//       ) : (
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//           {products.map((product) => (
//             <div
//               key={product._id}
//               className="bg-white rounded-2xl shadow-lg p-5 border border-[#6d46fa]/20 hover:shadow-xl transition duration-300"
//             >
//               <img
//                 src={product.image}
//                 alt={product.name}
//                 className="w-full h-48 object-cover rounded-lg mb-4"
//               />
//               <h2 className="text-lg font-bold text-[#6d46fa] mb-2">
//                 {product.name}
//               </h2>
//               <div className="flex items-center justify-between text-sm mb-1">
//                 <span className="text-gray-700">
//                   <strong>Price:</strong> ₹{product.price}
//                 </span>
//                 <span className="bg-[#e0d7ff] text-[#6d46fa] px-3 py-1 rounded-full text-xs font-medium">
//                   {product.category}
//                 </span>
//               </div>
//               <p className="text-gray-600 text-sm mt-2">
//                 {product.description}
//               </p>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

export default function SellerHistory() {
  const { user } = useUser();
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user?.id) return;

    axios
      .get(`${BASE_URI}/seller-products/${user.id}`)
      .then((res) => setProducts(res.data))
      .catch((err) => console.error("Failed to fetch seller products:", err))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <div className="min-h-screen bg-[#f9f8ff] px-6 py-6 w-full">
      <h1 className="text-xl font-bold text-center text-[#6d46fa] mb-4">
        Your Added Products
      </h1>

      {loading ? (
        <div className="text-center text-[#6d46fa] text-lg font-semibold">
          Loading your products...
        </div>
      ) : products.length === 0 ? (
        <div className="text-center text-gray-500 text-md italic">
          You haven’t added any products yet.
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-2xl shadow-lg p-5 border border-[#6d46fa]/20 hover:shadow-xl transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="text-lg font-bold text-[#6d46fa] mb-2">
                {product.name}
              </h2>
              <div className="flex items-center justify-between text-sm mb-1">
                <span className="text-gray-700">
                  <strong>Price:</strong> ₹{product.price}
                </span>
                <span className="bg-[#e0d7ff] text-[#6d46fa] px-3 py-1 rounded-full text-xs font-medium">
                  {product.category}
                </span>
              </div>
              <p className="text-gray-600 text-sm mt-2">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
