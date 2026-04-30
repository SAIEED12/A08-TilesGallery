'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = href == pathname 
    return (
        <Link href={href} className={`${isActive ? "bg-gradient-gold font-bold":"hover:text-[#e09f2d]"} `}>{children}</Link>
    );
};

export default Navlink;