import { UserButton } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="relative w-full h-20 overflow-hidden">
      {/* Polygon background */}
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#6d46fa] to-[#7552f5] clip-header z-0" />

      {/* Header content */}
      <div className="relative z-10 flex items-center justify-between h-full px-6">
        {/* Logo text */}
        <span className="text-white font-extrabold text-2xl tracking-wide select-none">
          <Link href={"/"}>Leafy</Link>
        </span>

        {/* Clerk User Button */}
        <UserButton />
      </div>
    </div>
  );
};

export default Navbar;
