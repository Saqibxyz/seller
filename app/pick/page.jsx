
// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";
// import { useRouter } from "next/navigation";

// const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

// export default function Pick() {
//   const router = useRouter();
//   const { user } = useUser();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const fetchOrders = async () => {
//       if (!user?.id) return;
//       try {
//         const res = await axios.get(`${BASE_URI}/unpicked-orders`);
//         const pendingOrders = res.data.filter(
//           (order) => order.status !== "Picked" && order.isReceived === false
//         );
//         setOrders(pendingOrders);
//       } catch (err) {
//         console.error("Error fetching orders:", err);
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOrders();
//   }, [user]);

//   const handlePick = async (orderId) => {
//     try {
//       await axios.put(`${BASE_URI}/update-order-status/${orderId}`, {
//         status: "Picked",
//         pickedBy: user.id,
//       });
//       setOrders((prev) => prev.filter((order) => order._id !== orderId));
//     } catch (err) {
//       console.error("Failed to mark order as picked:", err);
//     }
//   };

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#6d46fa] text-xl font-semibold">
//         Loading Orders...
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-[#f7f8fd] px-4 py-10">
//       <div className="max-w-5xl mx-auto">
//         <div className="flex justify-between items-center mb-8">
//           <h1 className="text-3xl font-bold text-[#6d46fa]">Pick Orders</h1>
//           <button
//             onClick={() => router.push("/pick-history")}
//             className="bg-[#6d46fa] hover:bg-[#5538c9] text-white px-6 py-3 rounded-xl shadow-md transition"
//           >
//             View Pick History
//           </button>
//         </div>

//         {orders.length === 0 ? (
//           <div className="text-center text-gray-600 text-lg mt-20">
//             No pending orders to pick.
//           </div>
//         ) : (
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//             {orders.map((order) => {
//               const u = order.userDetails || {};
//               const address = [
//                 u.address_line,
//                 u.village_or_locality,
//                 u.landmark,
//                 u.city,
//                 u.district,
//                 u.state,
//                 u.pincode,
//               ]
//                 .filter(Boolean)
//                 .join(", ");

//               return (
//                 <div
//                   key={order._id}
//                   className="bg-white border border-[#6d46fa]/20 rounded-2xl shadow-sm p-6"
//                 >
//                   <div className="mb-4">
//                     <p className="text-sm text-gray-700 mt-1">
//                       <strong>Name:</strong> {u.name || "N/A"}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Phone:</strong> {u.phone || "N/A"}
//                     </p>
//                     <p className="text-sm text-gray-700">
//                       <strong>Address:</strong> {address || "N/A"}
//                     </p>
//                     <p className="text-sm text-gray-700 mt-2">
//                       <strong>Total:</strong> ₹{order.totalAmount} &mdash;{" "}
//                       <strong>Payment:</strong> {order.paymentMethod}
//                     </p>
//                   </div>

//                   <div className="bg-gray-50 rounded-lg p-4 mb-4">
//                     <p className="text-sm font-medium mb-2 text-gray-700">
//                       Items:
//                     </p>
//                     <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
//                       {order.items.map((item, idx) => (
//                         <li key={idx}>
//                           {item.name} × {item.quantity} — ₹{item.price}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>

//                   <button
//                     onClick={() => handlePick(order._id)}
//                     className="w-full bg-[#6d46fa] hover:bg-[#4e2cc4] text-white py-2 rounded-lg text-sm font-medium transition"
//                   >
//                     Mark as Picked
//                   </button>
//                 </div>
//               );
//             })}
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";
import { useRouter } from "next/navigation";

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

export default function Pick() {
  const router = useRouter();
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrders = async () => {
      if (!user?.id) return;
      try {
        const res = await axios.get(`${BASE_URI}/unpicked-orders`);
        const pendingOrders = res.data.filter(
          (order) => order.status !== "Picked" && order.isReceived === false
        );
        setOrders(pendingOrders);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, [user]);

  const handlePick = async (orderId) => {
    try {
      await axios.put(`${BASE_URI}/update-order-status/${orderId}`, {
        status: "Picked",
        pickedBy: user.id,
      });
      setOrders((prev) => prev.filter((order) => order._id !== orderId));
    } catch (err) {
      console.error("Failed to mark order as picked:", err);
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#6d46fa] text-xl font-semibold">
        Loading Orders...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f7f8fd] px-4 py-10">
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-[#6d46fa]">Pick Orders</h1>
          <button
            onClick={() => router.push("/pick-history")}
            className="bg-[#6d46fa] hover:bg-[#5538c9] text-white px-6 py-3 rounded-xl shadow-md transition"
          >
            View Pick History
          </button>
        </div>

        {orders.length === 0 ? (
          <div className="text-center text-gray-600 text-lg mt-20">
            No pending orders to pick.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {orders.map((order) => {
              const u = order.userDetails || {};
              const address = [
                u.address_line,
                u.village_or_locality,
                u.landmark,
                u.city,
                u.district,
                u.state,
                u.pincode,
              ]
                .filter(Boolean)
                .join(", ");

              return (
                <div
                  key={order._id}
                  className="bg-white border border-[#6d46fa]/20 rounded-2xl shadow-sm p-6"
                >
                  <div className="mb-4">
                    <p className="text-sm text-gray-700 mt-1">
                      <strong>Name:</strong> {u.name || "N/A"}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Phone:</strong> {u.phone || "N/A"}
                    </p>
                    <p className="text-sm text-gray-700">
                      <strong>Address:</strong> {address || "N/A"}
                    </p>
                    <p className="text-sm text-gray-700 mt-2">
                      <strong>Total:</strong> ₹{order.totalAmount} &mdash;{" "}
                      <strong>Payment:</strong> {order.paymentMethod}
                    </p>
                  </div>

                  <div className="bg-gray-50 rounded-lg p-4 mb-4">
                    <p className="text-sm font-medium mb-2 text-gray-700">
                      Items:
                    </p>
                    <ul className="list-disc list-inside text-sm text-gray-800 space-y-1">
                      {order.items.map((item, idx) => (
                        <li key={idx}>
                          {item.name} × {item.quantity} — ₹{item.price}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <button
                    onClick={() => handlePick(order._id)}
                    className="w-full bg-[#6d46fa] hover:bg-[#4e2cc4] text-white py-2 rounded-lg text-sm font-medium transition"
                  >
                    Mark as Picked
                  </button>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
