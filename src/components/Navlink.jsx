'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navlink = ({href, children}) => {
    const pathname = usePathname()
    const isActive = href == pathname 
    return (
        <Link href={href} className={`${isActive ? "bg-gradient-gold font-bold":"hover:text-[#f59e0b]"} `}>{children}</Link>
    );
};

export default Navlink;