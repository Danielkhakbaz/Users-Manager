"use client";

import Link from "next/link";
import MotionSpan from "layout/navbar/motion/span";
import { MenuItems } from "layout/menu-items";
import { useSession } from "next-auth/react";
import { stat } from "fs";

const Navbar = () => {
  const { status, data } = useSession();

  // {
  //   id: 2,
  //   link: "/api/auth/signin",
  //   title: "Sign-in",
  // },

  return (
    <>
      <div className="navbar bg-base-300">
        <div className="flex-1">
          <Link className="btn btn-ghost normal-case text-xl" href="/">
            Users Manager
          </Link>
        </div>
        <div className="flex-none mx-4">
          <ul className="menu-horizontal flex flex-row items-start gap-8">
            {MenuItems.map(({ id, link, title }) => (
              <Link key={id} href={link}>
                <li className="p-2">
                  {title}
                  <MotionSpan link={link} />
                </li>
              </Link>
            ))}
            {status === "authenticated" ? (
              <>
                <li className="bg-red-400 rounded p-2">{data.user!.name}</li>
                <Link href="/api/auth/signout">
                  <li className="p-2">Sign Out</li>
                </Link>
              </>
            ) : (
              status === "unauthenticated" && (
                <Link href="/api/auth/signin">
                  <li className="p-2">Sign in</li>
                </Link>
              )
            )}
            {/* {status === "authenticated" && (
              <>
                <li className="p-2">
                  {data.user!.name}
                  <MotionSpan link="" />
                </li>
                <Link href="api/auth/signout">
                  <li className="p-2">Sign out</li>
                </Link>
              </>
            )} */}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
