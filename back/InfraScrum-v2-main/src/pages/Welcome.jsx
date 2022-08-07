import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { getStorageValue } from '../components/localstorage/Localstorage.jsx';

const Welcome = () => {
  const [res, setRes] = useState({});
  console.log('hcjs');
  console.log(res);
  console.log(`${getStorageValue('token')}`);
  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    const data = await fetch(`http://localhost:8000/welcomepage`, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${getStorageValue('token')}`,
      },
    });
    const response = await data.json();
    console.log(response);
    setRes(response);
  };

  return (
    <div>
      <div className=" h-screen overflow-hidden flex flex-col items-center justify-center relative lg:bg-[url(/img/frame.svg)] lg:bg-right-top  bg-contain bg-no-repeat">
        <div>
          <p className="persoabso text-4xl font-bold">Tâches - Planning - Ressources</p>
        </div>
        <img src="/img/left1.svg" alt="" className="absolute bottom-0 left-0 -z-10" />
        <img src="/img/left2.svg" alt="" className="absolute bottom-0 left-0 -z-20" />
        <div className="container px-6 mx-auto">
          <div className="animWelcome flex flex-col items-center  lg:items-start ">
            <div className="flex flex-col justify-start">
              <p className=" text-4xl text-sky-600  lg:font-6xl font-bold pb-4 text-center lg:text-left ">
                Bienvenue sur
              </p>
              <img
                src="/img/logo.png"
                alt="Infrascrum Logo"
                className=" object-contain w-full lg:w-[44rem] lg:-ml-16"
              />
            </div>
            <div className="flex-col items-center w-full">
              <div
                div
                className="flex flex-col items-center justify-center mt-8 lg:flex-row lg:justify-start
                mx-auto lg:m-0">
                <p className=" text-4xl lg:text-6xl font-bold md:mb-2 text-sky-600  ">
                  {res.alldata}
                </p>
                <p className="text-4xl lg:text-6xl font-bold text-amber-400 md:mb-2 lg:text-amber-400 lg:pl-4">
                  Boon
                </p>
              </div>
              <div className="flex flex-col  items-center lg:items-center lg:flex-row  ">
                <NavLink to="/taches">
                  <button
                    type="button"
                    className="text-xl lg:text-2xl p-2 font-bold lg:p-4 mt-8 text-white rounded-full bg-sky-600 md:mb-2 lg:mr-4 ">
                    Vers les Projets
                  </button>
                </NavLink>
                <NavLink to="/profil">
                  <button
                    type="button"
                    className="text-xl lg:text-2xl lg:p-4 p-2 mt-8 font-bold text-white rounded-full bg-amber-400 md:mb-2 ">
                    Vers mon profil
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Welcome;
