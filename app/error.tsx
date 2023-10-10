"use client";

import Link from "next/link";
import { FaArrowRotateLeft } from "react-icons/fa6";

type ErrorProps = {
  error: Error;
  reset: () => void;
};

const Error = ({ error, reset }: ErrorProps) => {
  return (
    <>
      <div className="hero min-h-screen">
        <div className="hero-content text-center">
          <div className="flex flex-col items-center gap-12">
            <h1 className="text-3xl font-bold sm:text-4xl md:text-5xl">
              An error occurred!{" "}
            </h1>
            <div dir="ltr" className="mockup-code">
              <pre>
                <code className="text-error whitespace-pre-wrap">
                  {error.message}
                </code>
              </pre>
            </div>
            <p className="max-w-lg text-sm sm:text-md">
              Please try again or shut the f*ck up!
            </p>
            <div className="flex flex-col justify-center items-center gap-4 sm:flex-row">
              <Link href="/">
                <button className="btn btn-outline">Go back Home</button>
              </Link>
              <button className="btn btn-primary" onClick={reset}>
                Try Again <FaArrowRotateLeft />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
