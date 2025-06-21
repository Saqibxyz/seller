
// "use client";

// import { useEffect, useState } from "react";
// import { useUser } from "@clerk/nextjs";
// import axios from "axios";

// const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

// export default function PickedHistory() {
//   const { user } = useUser();
//   const [orders, setOrders] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [filter, setFilter] = useState("pending");

//   useEffect(() => {
//     const fetchPickedOrders = async () => {
//       if (!user?.id) return;

//       try {
//         const res = await axios.get(
//           `${BASE_URI}/picked-orders-history/${user.id}`
//         );
//         setOrders(res.data);
//       } catch (err) {
//         console.error("Error fetching picked orders history:", err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchPickedOrders();
//   }, [user]);

//   if (loading) {
//     return (
//       <div className="min-h-screen flex items-center justify-center text-[#6d46fa] font-semibold text-xl">
//         Loading Picked Orders...
//       </div>
//     );
//   }

//   const filteredOrders = orders.filter((order) =>
//     filter === "pending" ? !order.isReceived : order.isReceived
//   );

//   return (
//     <div className="min-h-screen bg-[#f9f8ff] px-6 py-10">
//       <h1 className="text-3xl font-bold text-[#6d46fa] mb-8 text-center">
//         Your Picked Orders
//       </h1>

//       <div className="flex justify-center gap-4 mb-6">
//         <button
//           className={`px-6 py-2 rounded-lg text-sm font-medium transition-all shadow ${
//             filter === "pending"
//               ? "bg-[#6d46fa] text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//           onClick={() => setFilter("pending")}
//         >
//           Pending
//         </button>
//         <button
//           className={`px-6 py-2 rounded-lg text-sm font-medium transition-all shadow ${
//             filter === "delivered"
//               ? "bg-[#6d46fa] text-white"
//               : "bg-gray-200 text-gray-700 hover:bg-gray-300"
//           }`}
//           onClick={() => setFilter("delivered")}
//         >
//           Delivery History
//         </button>
//       </div>

//       {filteredOrders.length === 0 ? (
//         <div className="text-center text-gray-500">
//           No {filter === "pending" ? "pending" : "delivered"} orders found.
//         </div>
//       ) : (
//         <div className="space-y-6 max-w-3xl mx-auto">
//           {filteredOrders.map((order) => (
//             <div
//               key={order._id}
//               className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#6d46fa]"
//             >
//               <div className="text-lg font-semibold text-[#6d46fa] mb-2">
//                 Order #{order._id.slice(0, 6)}
//               </div>

//               <div className="text-sm text-gray-700 mb-1">
//                 <strong>To:</strong> {order.userDetails.name}
//               </div>
//               <div className="text-sm text-gray-700 mb-1">
//                 <strong>Phone:</strong> {order.userDetails.phone}
//               </div>
//               <div className="text-sm text-gray-700 mb-2">
//                 <strong>Address:</strong> {order.userDetails.address_line}
//               </div>

//               <div className="text-sm text-gray-700 mb-1">
//                 <strong>Payment:</strong> {order.paymentMethod}
//               </div>

//               <div className="text-sm text-gray-700 mb-2">
//                 <strong>Items:</strong>
//                 <ul className="list-disc ml-6 mt-1">
//                   {order.items?.map((item, i) => (
//                     <li key={i}>
//                       {item.name} × {item.quantity} — ₹{item.price}
//                     </li>
//                   ))}
//                 </ul>
//               </div>

//               <div className="text-sm text-gray-700 font-semibold mb-2">
//                 <strong>Total:</strong> ₹{order.totalAmount}
//               </div>

//               <div className="text-sm font-semibold text-gray-600">
//                 Status:{" "}
//                 {order.isReceived ? (
//                   <span className="text-green-600">Delivered</span>
//                 ) : (
//                   <span className="text-yellow-600">In Progress</span>
//                 )}
//               </div>

//               {!order.isReceived && (
//                 <div className="text-sm text-gray-500 italic mt-2">
//                   Awaiting status update from delivery agent...
//                 </div>
//               )}
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }
"use client";

import { useEffect, useState } from "react";
import { useUser } from "@clerk/nextjs";
import axios from "axios";

const BASE_URI = process.env.NEXT_PUBLIC_BASE_URI;

export default function PickedHistory() {
  const { user } = useUser();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("pending");

  useEffect(() => {
    const fetchPickedOrders = async () => {
      if (!user?.id) return;

      try {
        const res = await axios.get(
          `${BASE_URI}/picked-orders-history/${user.id}`
        );
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching picked orders history:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPickedOrders();
  }, [user]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-[#6d46fa] font-semibold text-xl">
        Loading Picked Orders...
      </div>
    );
  }

  const filteredOrders = orders.filter((order) =>
    filter === "pending" ? !order.isReceived : order.isReceived
  );

  return (
    <div className="min-h-screen bg-[#f9f8ff] px-6 py-10">
      <h1 className="text-3xl font-bold text-[#6d46fa] mb-8 text-center">
        Your Picked Orders
      </h1>

      <div className="flex justify-center gap-4 mb-6">
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all shadow ${
            filter === "pending"
              ? "bg-[#6d46fa] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("pending")}
        >
          Pending
        </button>
        <button
          className={`px-6 py-2 rounded-lg text-sm font-medium transition-all shadow ${
            filter === "delivered"
              ? "bg-[#6d46fa] text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
          onClick={() => setFilter("delivered")}
        >
          Delivery History
        </button>
      </div>

      {filteredOrders.length === 0 ? (
        <div className="text-center text-gray-500">
          No {filter === "pending" ? "pending" : "delivered"} orders found.
        </div>
      ) : (
        <div className="space-y-6 max-w-3xl mx-auto">
          {filteredOrders.map((order) => (
            <div
              key={order._id}
              className="bg-white rounded-xl shadow-md p-6 border-l-4 border-[#6d46fa]"
            >
              <div className="text-lg font-semibold text-[#6d46fa] mb-2">
                Order #{order._id.slice(0, 6)}
              </div>

              <div className="text-sm text-gray-700 mb-1">
                <strong>To:</strong> {order.userDetails.name}
              </div>
              <div className="text-sm text-gray-700 mb-1">
                <strong>Phone:</strong> {order.userDetails.phone}
              </div>
              <div className="text-sm text-gray-700 mb-2">
                <strong>Address:</strong> {order.userDetails.address_line}
              </div>

              <div className="text-sm text-gray-700 mb-1">
                <strong>Payment:</strong> {order.paymentMethod}
              </div>

              <div className="text-sm text-gray-700 mb-2">
                <strong>Items:</strong>
                <ul className="list-disc ml-6 mt-1">
                  {order.items?.map((item, i) => (
                    <li key={i}>
                      {item.name} × {item.quantity} — ₹{item.price}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="text-sm text-gray-700 font-semibold mb-2">
                <strong>Total:</strong> ₹{order.totalAmount}
              </div>

              <div className="text-sm font-semibold text-gray-600">
                Status:{" "}
                {order.isReceived ? (
                  <span className="text-green-600">Delivered</span>
                ) : (
                  <span className="text-yellow-600">In Progress</span>
                )}
              </div>

              {!order.isReceived && (
                <div className="text-sm text-gray-500 italic mt-2">
                  Awaiting status update from delivery agent...
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
