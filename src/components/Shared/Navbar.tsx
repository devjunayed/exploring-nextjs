import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end">
        <a className="btn">Button</a>
      </div>
    </div>
  );
};

const links = (
  <>
    <li>
      <Link href={"/"}>Home</Link>
    </li>
    <li>
      <Link href={"/products"}>Products</Link>
    </li>
    <li>
      <Link href={"/about"}>About</Link>
    </li>
    <li>
      <Link href={"/contact"}>Contact</Link>
    </li>
    <li>
      <Link href={"/suspense"}>Suspense</Link>
    </li>
    <li>
      <Link href={"/parallel"}>Parallel Route</Link>
    </li>
    <li>
      <Link href={"/parallel/posts/single"}>Single Parallel</Link>
    </li>
    <li className="">
      <details>
        <summary>
          <Link href="/news">News</Link>
        </summary>
        <ul className="p-2 w-[200px]">
          <li className="w-full">
            <Link href="/news/article">Article</Link>
          </li>
          <li>
            <Link href="/news/blog">Blog</Link>
          </li>
        </ul>
      </details>
    </li>
    <li className="">
      <details>
        <summary>Dashboard</summary>
        <ul className="p-2 w-[200px]">
          <li className="w-full">
            <Link href="/dashboard/user">User Dashboard</Link>
          </li>
          <li>
            <Link href="/dashboard/admin">Admin Dashboard</Link>
          </li>
        </ul>
      </details>
    </li>
  </>
);

export default Navbar;
