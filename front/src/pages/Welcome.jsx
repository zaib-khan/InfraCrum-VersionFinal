import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useQuery } from 'react-query';
import { getStorageValue } from '../../data/LocalStorage.js';
import { getAllDataOfCurrentuser } from '../../data/tasks.js';

const Welcome = () => {
  const [prenom, setPrenom] = useState('prénom');
  const [nom, setNom] = useState('nom');

  const { data: currentUserdata, isLoading } = useQuery('users', getAllDataOfCurrentuser);

  // const getData = async () => {
  //   const newData = await fetch(`http://localhost:8000/users`, {
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //       'Content-Type': 'application/json',
  //       authorization: `Bearer ${getStorageValue('token')}`,
  //     },
  //   });
  //   const { data } = await newData.json();
  //   setNom(data[0].lastname);
  //   setPrenom(data[0].firstname);
  // };

  useEffect(() => {
    if (!isLoading) {
      setPrenom(currentUserdata.data[0].firstname);
      setNom(currentUserdata.data[0].lastname);
    }
  });

  return (
    <div className=" h-screen overflow-hidden flex flex-col items-center justify-center relative lg:bg-[url(/img/lucaswelcome.svg)] lg:bg-right-top  bg-contain bg-no-repeat">
      <div className="fade3">
        <p className="persoabso text-4xl font-bold top-5 ">
          Tâches - Planning - Ressources
        </p>
      </div>
      <img src="/img/left1.svg" alt="" className="absolute bottom-0 left-0 -z-10" />
      <img src="/img/left2.svg" alt="" className="absolute bottom-0 left-0 -z-20" />
      <div className="container px-6 mx-auto">
        <div className="animWelcome flex flex-col items-center  lg:items-start ">
          <div className="fade flex flex-col lg:flex-row justify-start lg:items-center">
            <p className=" text-4xl text-sky-600  lg:font-6xl font-normal text-center lg:text-left ">
              Bienvenue sur
            </p>
            <img
              src="/img/logo.png"
              alt="Infrascrum Logo"
              className=" object-contain w-full lg:w-[12rem]"
            />
          </div>
          <div className="flex-col items-center w-full pt-8">
            <div
              className="fade2 flex flex-col items-center justify-center lg:flex-row lg:justify-start
                mx-auto lg:m-0">
              <p className=" text-4xl lg:text-8xl font-bold md:mb-2 text-sky-600  drop-shadow-2xl">
                {prenom.charAt(0).toUpperCase() + prenom.slice(1)}
              </p>
              <p className="text-4xl lg:text-8xl font-bold text-amber-400 md:mb-2 lg:text-amber-400 lg:pl-4">
                {nom.charAt(0).toUpperCase() + nom.slice(1)}
              </p>
            </div>
            <div className="flex flex-col  items-center lg:items-center lg:flex-row  ">
              <NavLink to="/project">
                <div className="fade4">
                  <button
                    type="button"
                    className="hovergradient  p-2 font-bold lg:p-4 mt-8 text-white rounded-full   border-transparent md:mb-2 lg:mr-4 ">
                    Vers les Projets
                  </button>
                </div>
              </NavLink>
              <NavLink to="/user-profile">
                <div className="fade5">
                  <button
                    type="button"
                    className=" lg:p-4 p-2 mt-4 lg:mt-8 font-bold text-white rounded-full bg-amber-400 hoveryellow border-transparent md:mb-2 hover:bg-gradient-to-r ">
                    Vers mon profil
                  </button>
                </div>
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
