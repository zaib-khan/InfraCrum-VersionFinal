import Header from '../components/Header';
import { useQuery } from 'react-query';
import { getAllDataOfCurrentuser } from '../../data/tasks';
import { useEffect, useState } from 'react';

const UserProfil = () => {

  const { data, isLoading } = useQuery('users', getAllDataOfCurrentuser);

  // useEffect(() => {
  //   if (!isLoading) {
  //     setCurentUser(data);
  //   }
  // });

  return (
    <div className="relative">
      <p className="absolute top-0 bg-gradient-to-r from-sky-700 to-sky-400 h-screen w-1/3 -z-20 right-0 brperso4" />
      <Header />
      <div>
        <div className="max-w-4xl flex items-center persoh flex-wrap mx-auto my-32 lg:my-0">
          <div
            id="profile"
            className="w-full lg:w-3/5 brperso3 shadow-2xl bg-white  mx-6 lg:mx-0">
            <div className="p-4 md:p-12 text-center lg:text-left">
              <div className="block lg:hidden rounded-full shadow-xl mx-auto -mt-16 h-48 w-48 bg-cover bg-center bg-[url(/img/wolf.jpg)]" />

              <h1 className="text-4xl font-bold pt-8 lg:pt-0 text-sky-600">
                {!isLoading
                  ? data.data[0].firstname.charAt(0).toUpperCase() +
                    data.data[0].firstname.slice(1) +
                    ' ' +
                    data.data[0].lastname.charAt(0).toUpperCase() +
                    data.data[0].lastname.slice(1)
                  : 'Prénom'}
              </h1>
              <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-sky-600 opacity-25" />
              <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
                <svg
                  className="h-4 fill-current text-sky-600 pr-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20">
                  <path d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z" />
                </svg>
                <h2 className="text-sky-600">
                  Team :{' '}
                  <span className="text-gray-600 font-normal">
                    {!isLoading ? data.data[0].entreprise : 'Entreprise'}
                  </span>
                </h2>
              </div>
              <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-current text-sky-600 pr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
                <h2 className="text-sky-600">
                  E-mail :{' '}
                  <span className="text-gray-600 font-normal">
                    {!isLoading ? data.data[0].email : 'Email'}
                  </span>
                </h2>
              </div>
              <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-current text-sky-600 pr-4"
                  viewBox="0 0 20 20"
                  fill="currentColor">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <h2 className="text-sky-600">
                  Téléphone :{' '}
                  <span className="text-gray-600 font-normal">
                    {!isLoading ? '0' + data.data[0].phonenumber : 'Phone Number'}
                  </span>
                </h2>
              </div>
              <div className="pt-4 font-bold flex items-center justify-center lg:justify-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 fill-current text-sky-600 pr-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                  />
                </svg>
                <h2 className="text-sky-600">
                  Mot de passe : <span className="text-gray-600 font-normal">******</span>
                </h2>
              </div>
              {/* <button
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
            </button> */}
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <img
              src={!isLoading ? data.data[0].img : '/img/wolf.jpg'}
              alt="img"
              className="brperso2 shadow-2xl hidden lg:block"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfil;
