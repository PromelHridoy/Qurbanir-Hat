"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";

const Navbar = () => {
  // প্রজেক্টে যখন Auth Context যোগ করবে, তখন এই 'user' ডাটা সেখান থেকে আসবে।
  // বর্তমানে টেস্ট করার জন্য এটি null অথবা ডাটা দিয়ে চেক করতে পারো।
  const user = null; // লগইন চেক করার জন্য: user = { photoURL: '...', displayName: '...' }

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 md:px-8 sticky top-0 z-50">
      {/* Left Section */}
      <div className="navbar-start">
        {/* Mobile menu */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <GiHamburgerMenu className="text-xl" />
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li><NavLink href="/">Home</NavLink></li>
            <li><NavLink href="/all-animals">All Animals</NavLink></li>
            {/* লগইন থাকলে মোবাইল মেনুতেও প্রোফাইল দেখানো যেতে পারে */}
            {user && <li><NavLink href="/my-profile">My Profile</NavLink></li>}
          </ul>
        </div>

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 ml-2">
          <Image src={logo} alt="logo" width={40} height={40} />
          <span className="font-bold text-lg text-green-900 md:text-2xl">
            Qurbani<span className="text-green-600">Hat</span>
          </span>
        </Link>
      </div>

      {/* Center (Desktop Menu) */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 font-medium gap-2">
          <li><NavLink href="/">Home</NavLink></li>
          <li><NavLink href="/all-animals">All Animals</NavLink></li>
          {/* প্রোফাইল লিঙ্কটি প্রাইভেট রাউট হিসেবে এখানে রাখা যায় */}
          {user && <li><NavLink href="/my-profile">My Profile</NavLink></li>}
        </ul>
      </div>

      {/* Right Section (Conditional Rendering) */}
      <div className="navbar-end gap-4">
        {user ? (
          <div className="dropdown dropdown-end flex items-center gap-3">
            {/* Avatar */}
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar border border-success">
              <div className="w-10 rounded-full">
                <img 
                  alt="User Avatar" 
                  src={user?.photoURL || "https://api.dicebear.com/7.x/avataaars/svg?seed=user"} 
                />
              </div>
            </div>
            {/* Dropdown for Logout */}
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-40 top-12">
              <li className="font-bold px-4 py-2 text-success">{user.displayName}</li>
              <li><button className="text-red-500 font-semibold">Logout</button></li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login" className="btn btn-warning btn-sm md:btn-md">
              Login
            </Link>
            <Link href="/register" className="btn btn-outline btn-success btn-sm md:btn-md hidden sm:flex">
              Register
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;