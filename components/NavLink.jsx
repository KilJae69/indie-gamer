"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NavLink({ href, children, prefetch }) {
  const pathname = usePathname();
  

  if (href === pathname)
    return <span className=" text-orange-800">{children}</span>;

  return (
    <Link
      href={href}
      className=" text-orange-800 hover:underline"
      prefetch={prefetch}
    >
      {children}
    </Link>
  );
}
