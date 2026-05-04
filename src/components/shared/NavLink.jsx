'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({children, href, className}) => {
    const pathName = usePathname()
    console.log(pathName);
    const isActive = href === pathName;
    
    return <Link href={href} className={`${isActive ? "border-2 border-green-500 p-1 rounded-md text-green-500" : ""} ${className}` }>{children}</Link>
};

export default NavLink;