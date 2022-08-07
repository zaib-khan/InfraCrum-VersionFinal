import { NavLink } from 'react-router-dom';
import { Navbar } from 'flowbite-react';
import LogoutButton from './LogoutButton';
import { useQuery } from 'react-query';
import { getAllDataOfCurrentuser } from '../../data/tasks';

const Header = () => {
  const { data, isLoading } = useQuery('users', getAllDataOfCurrentuser);
  return (
    <div className="shadow-md">
      <Navbar fluid rounded>
        <Navbar.Brand href="http://localhost:3000/project">
          <img src="/img/logo.png" alt="logo" className="ml-8 my-2 h-16 " />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <div className="w-full md:block md:w-auto md:h-auto h-screen flex justify-center items-center bg-sky-600 text-white md:text-black md:bg-white">
            <div className="flex flex-col items-center justify-center md:flex-row md:p-0">
              <NavLink to="/project">
                <button
                  type="button"
                  className="flex justify-center items-center md:text-lg hover:bg-amber-400 md:hover:bg-sky-600  rounded-xl py-2 px-4 hover:text-white md:mb-0 mb-10 text-3xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}>
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 19a2 2 0 01-2-2V7a2 2 0 012-2h4l2 2h4a2 2 0 012 2v1M5 19h14a2 2 0 002-2v-5a2 2 0 00-2-2H9a2 2 0 00-2 2v5a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="pl-2 md:hidden lg:block">Projets</p>
                </button>
              </NavLink>
              <NavLink to="/tasks">
                <button
                  type="button"
                  className="flex justify-center items-center md:text-lg py-2 px-4 rounded-xl hover:text-white md:mb-0 mb-10 text-3xl hover:bg-amber-400 md:hover:bg-sky-600 ">
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
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                  <p className="pl-2 md:hidden lg:block">Tâches</p>
                </button>
              </NavLink>

              <NavLink to="/user-profile">
                <img
                  src={!isLoading ? data.data[0].img : '/img/wolf.jpg'}
                  alt="ihsbf"
                  className="md:ml-4 md:w-16 md:h-16 w-24 h-24 rounded-full border-4 border-transparent mb-10 md:mb-0 hover:border-amber-400 md:hover:border-sky-600 "
                />
              </NavLink>
              <LogoutButton />
            </div>
          </div>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
