"use client";
import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation"; 
import React from "react";

const Navbar = () => {
  const { data: session } = useSession();
  const pathname = usePathname(); 

  const links = (
    <>
      <Link
        className={`m-2 text-primary ${pathname === "/" ? "underline" : ""}`}
        href="/"
      >
        Home
      </Link>
      <Link
        className={`m-2 text-primary ${pathname === "/service" ? "underline" : ""}`}
        href="/service"
      >
        Services
      </Link>
      <Link
        className={`m-2 text-primary ${pathname === "/about" ? "underline" : ""}`}
        href="/about"
      >
        About
      </Link>

      {session && (
        <Link
          className={`m-2 text-primary ${pathname === "/myBookings" ? "underline" : ""}`}
          href="/myBookings"
        >
          My Bookings
        </Link>
      )}
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm px-5">
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
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <Link className="text-2xl text-primary font-bold" href={"/"}>
          Care.xyz
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>

      <div className="navbar-end">
        {session ? (
          <button
            onClick={() => signOut()}
            className="btn btn-outline btn-primary"
          >
            Logout
          </button>
        ) : (
          <Link
            href="/login"
            className={`btn btn-primary ${pathname === "/login" ? "underline" : ""}`}
          >
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
