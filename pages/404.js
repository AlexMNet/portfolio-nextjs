import Link from 'next/link'

export default function errorPage() {
  return (
    <div className="flex flex-col md:flex-row h-screen justify-center items-center bg-cloud-bg bg-center bg-no-repeat bg-cover">
      <div className="flex flex-1 items-center justify-center px-3">
        <img
          src="/images/rocket.svg"
          alt="Rocket Ship Photo"
          className="md:block animate-bounceSlow h-60 md:h-full"
        />
      </div>
      <div className="flex flex-1 flex-col items-center px-3">
        <h1 className="font-mono text-3xl md:text-5xl text-gray-300 text-center mb-5">
          404 | Page Not Found
        </h1>
        <Link legacyBehavior href="/">
          <a className=" bg-blue-500 text-white active:bg-pink-600 font-bold uppercase text-base px-6 py-3 rounded shadow-md outline-none transition duration-500 ease-in-out hover:bg-blue-800 transform hover:-translate-y-1 hover:scale-110">
            come back Home
          </a>
        </Link>
      </div>
    </div>
  )
}
