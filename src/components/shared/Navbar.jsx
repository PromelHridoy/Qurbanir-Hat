"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import NavLink from "./NavLink";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const {data: session, isPending} = authClient.useSession();
    const user = session?.user;
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
            <li><NavLink href="/profile">My Profile</NavLink></li>
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
          <li><NavLink href="/profile">My Profile</NavLink></li>
        </ul>
      </div>

      {/* Right Section (Conditional Rendering) */}
      <div className="navbar-end gap-4">
        { isPending ? "Loading..."
            
            : user ? ( <div className="flex items-center gap-4">
            <p>Hello! {user?.name}</p>
            <Image src={user?.image || userAvatar} alt="User Avatar" width={40} height={40} />
            <button className="btn bg-purple-500 text-white" onClick={( async () => await authClient.signOut())}>Logout</button>
            </div>
            ) : (
                <button className="btn bg-purple-500 text-white">
                <Link href="/login">Login</Link>
            </button>
            )
          }
      </div>
    </div>
  );
};

export default Navbar;