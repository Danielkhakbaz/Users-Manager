import Link from "next/link";

const HomePage = async () => {
  return (
    <>
      <div className="hero h-screen">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-5xl font-bold">Hi there 👋🏻</h1>
            <p className="leading-8 py-6">
              This website is created by <b>Next.js</b> as the full-stack
              framework. The point is that pretty much all of the components are
              <b> server-side-rendered(SSR)</b> and all the data is coming from
              the database which is <b>SQL</b>.
            </p>
            <Link className="btn btn-primary" href="/users">
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
