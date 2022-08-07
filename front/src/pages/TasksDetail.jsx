import { useQuery } from 'react-query';
import { NavLink, useParams } from 'react-router-dom';
import { getOneTache } from '../../data/tasks';
import Header from '../components/Header';

const TasksDetail = () => {
  const { tasksId } = useParams();
  const { data, isLoading } = useQuery('tache', async () => getOneTache(tasksId));

  return (
    <div>
      {isLoading}
      {data && (
        <div className="relative">
          <Header />
          <div className="flex justify-center m-2 flex-wrap mt-10">
            <h1 className="text-2xl lg:text-4xl flex justify-center">
              Bienvenue sur la tâche :
            </h1>
            <h2 className=" text-2xl lg:text-4xl flex justify-center text-sky-600 pl-2">
              {data.nom}
            </h2>
          </div>
          <section className="relative pt-16">
            <div className="">
              <div className="flex flex-wrap items-center">
                <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-78">
                  <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded-lg bg-gradient-to-r from-sky-600 to-sky-300">
                    <img
                      alt="..."
                      src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=700&amp;q=80"
                      className="w-full align-middle rounded-t-lg"
                    />
                    <blockquote className="relative p-8 mb-4">
                      <h4 className="text-xl font-bold text-white">{data.nom}</h4>
                      <p className="text-md font-light mt-2 text-white">
                        {data.description}
                      </p>
                    </blockquote>
                  </div>
                </div>

                <div className="w-full md:w-6/12 px-4">
                  <div className="flex flex-wrap">
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
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
                          </div>
                          <h6 className="text-xl mb-1 font-semibold text-sky-600">
                            Projet
                          </h6>
                          <p className="mb-4 text-blueGray-500">{data.nom}</p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                              />
                            </svg>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold text-sky-600">
                            Temps accordé
                          </h6>
                          <p className="mb-4 text-blueGray-500">{data.temps}</p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full md:w-6/12 px-4">
                      <div className="relative flex flex-col min-w-0 mt-4">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                              />
                            </svg>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold text-sky-600">
                            Utilisateurs
                          </h6>
                          <p className="mb-4 text-blueGray-500">{data.utilisateurs}</p>
                        </div>
                      </div>
                      <div className="relative flex flex-col min-w-0">
                        <div className="px-4 py-5 flex-auto">
                          <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                              />
                            </svg>
                          </div>
                          <h6 className="text-xl mb-1 font-semibold text-sky-600">
                            Date maximum
                          </h6>
                          <p className="mb-4 text-blueGray-500">{data.deadline}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex fixed right-6 bottom-6 ">
              <NavLink to="/tasks">
                <button
                  className="flex bg-amber-400 h-auto w-auto rounded-full p-4 text-white tracking-widest justify-center items-center align-center"
                  type="button"
                  href="#">
                  Retournez aux tâches
                </button>
              </NavLink>
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

export default TasksDetail;
