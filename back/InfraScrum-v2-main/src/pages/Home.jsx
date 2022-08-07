import LoginUserHome from '../components/LoginUserHome/LoginUserHome';

const Home = () => (
  <div className="h-screen overflow-hidden flex items-center justify-center relative lg:bg-[url(/img/bg1.svg)] lg:bg-contain lg:bg-no-repeat">
    <img src="/img/d3.svg" alt="" className="absolute bottom-0 right-0 -z-10" />
    <img src="/img/d4.svg" alt="" className="absolute bottom-10 right-0 -z-20" />
    <div className="container px-6 mx-auto">
      <div className="flex flex-col-reverse text-center lg:text-left lg:flex-row h-screen justify-evenly md:items-center">
        <div className="flex flex-col w-full">
          <p className="mx-auto md:mx-0 text-amber-400 lg:font-2xl font-bold mb-2 lg:w-5/12">
            Gestion de :
          </p>
          <p className="lg:text-6xl font-bold md:mb-2 lg:text-white">Tâches</p>
          <p className="lg:text-6xl font-bold md:mb-2 lg:text-white">Planning</p>
          <p className="lg:text-6xl font-bold md:mb-2 lg:text-white">Ressources</p>
        </div>
        <div className="w-full md:w-full lg:w-9/12 mx-auto md:mx-0 lg:mr-20">
          <LoginUserHome />
        </div>
      </div>
    </div>
  </div>
);

export default Home;
