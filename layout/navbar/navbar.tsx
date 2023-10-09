import Link from "next/link";
import MotionSpan from "layout/navbar/motion/span";
import { MenuItems } from "layout/menu-items";

const Navbar = () => {
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
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
