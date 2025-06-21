
"use client";

import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex items-center justify-center px-4">
      <div className="text-center space-y-12">
        <div>
          <h1 className="text-4xl font-bold text-[#6d46fa] mb-4">
            Welcome to the Seller Panel
          </h1>
    
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <button
            onClick={() => router.push("/sell")}
            className="bg-[#6d46fa] hover:bg-[#5e005e] text-white px-10 py-4 text-lg rounded-xl shadow-md transition-all"
          >
            Sell Product
          </button>

          <button
            onClick={() => router.push("/pick")}
            className="bg-[#6d46fa] hover:bg-[#5e005e] text-white px-10 py-4 text-lg rounded-xl shadow-md transition-all"
          >
            Pick Order
          </button>
        </div>
      </div>
    </div>
  );
}
