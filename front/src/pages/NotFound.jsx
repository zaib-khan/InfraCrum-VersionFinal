import { NavLink } from 'react-router-dom';

const NotFound = () => (
  <div className="h-screen overflow-hidden  flex flex-col items-center justify-center relative lg:bg-[url(/img/lucaswelcome.svg)] lg:bg-right-top  bg-contain bg-no-repeat">
    <div>
      <img src="/img/left1.svg" alt="" className=" absolute bottom-0 left-0 -z-10 " />
      <img src="/img/left2.svg" alt="" className=" absolute bottom-0 left-0 -z-20 " />
      <div className="container flex flex-col items-center justify-center px-6 mx-auto">
        <img
          src="/img/Error404.png"
          alt="error 404"
          className="spinhead w-32 rounded-full lg:w-64 bg-contain pt-50 bg-amber-400 -z-10 drop-shadow-lg"
        />

        <h1 className="animWelcome text-sky-600 mt-8 text-xl font-bold z-20 drop-shadow-lg">
          WOOOOOOPS!
        </h1>
        <h3 className="animWelcome text-sky-600 text-xl font-bold z-20 drop-shadow-lg">
          ERROR 404
        </h3>

        <NavLink to="/welcome">
          <button
            type="submit"
            className="animWelcome mt-4 w-full py-4 bg-gradient-to-r bg-sky-600 rounded-full text-white p-2 z-30  border-4 border-transparent hover:border-amber-400 drop-shadow-2xl ">
            <div className="flex flex-col items-center justify-center">
              <div className="m-2 p-2">
                <div className="font-extrabold text-xl text-amber-400 ">Accueil</div>
              </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                />
              </svg>
            </div>
          </button>
        </NavLink>
      </div>
    </div>
  </div>
);

export default NotFound;
