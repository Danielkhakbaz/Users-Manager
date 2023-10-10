import Link from "next/link";
import { FaHome } from "react-icons/fa";

const NotFound = async () => {
  return (
    <>
      <div dir="rtl" className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md flex flex-col items-center gap-4">
            <h3 className="font-extrabold" style={{ fontSize: "15rem" }}>
              404
            </h3>
            <div className="flex flex-col items-center gap-12">
              <h3
                className="text-2xl font-bold sm:text-3xl md:text-4xl"
                dir="ltr"
              >
                PAGE NOT FOUND!
              </h3>
              <Link href="/">
                <button className="btn btn-primary text-white">
                  Go back Home <FaHome />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
