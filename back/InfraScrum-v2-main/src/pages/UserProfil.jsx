import Header from '../components/Header';

const UserProfil = () => (
  <div>
    <Header />
    <div>
      <div className="max-w-4xl flex items-center persoh flex-wrap mx-auto my-32 lg:my-0">
        <div
          id="profile"
          className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-90 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left">
            <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url(/img/wolf.jpg)]" />

            <h1 className="text-4xl font-bold pt-8 lg:pt-0 text-sky-600">Thomas Boon</h1>
            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-600 opacity-25" />
            <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-sky-600 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <h2 className="text-sky-600">
                Team : <span className="text-gray-600 font-normal">Technocité</span>
              </h2>
            </div>
            <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-sky-600 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <h2 className="text-sky-600">
                E-mail :{' '}
                <span className="text-gray-600 font-normal">thomas@hotmail.com</span>
              </h2>
            </div>
            <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-sky-600 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <h2 className="text-sky-600">
                Téléphone :{' '}
                <span className="text-gray-600 font-normal">0472 57 41 58</span>
              </h2>
            </div>
            <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
              <svg
                className="h-4 fill-current text-sky-600 pr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20">
                <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
              </svg>
              <h2 className="text-sky-600">
                Mot de passe : <span className="text-gray-600 font-normal">******</span>
              </h2>
            </div>
            <button
              type="button"
              className="w-auto bg-amber-400 rounded-full text-white text-sm mt-4 px-4 py-2">
              <div className="flex flex-row items-center justify-center">
                <div className="mr-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div className="font-bold">Modifier mes informations</div>
              </div>
            </button>
          </div>
        </div>
        <div className="w-full lg:w-2/5">
          <img
            src="/img/wolf.jpg"
            alt="img"
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block"
          />
        </div>
      </div>
    </div>
  </div>
);

export default UserProfil;
