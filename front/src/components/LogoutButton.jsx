import { useNavigate } from 'react-router-dom';
import { verifyUser } from '../../data/tasks';
import { emptyLocalStorage } from '../../data/LocalStorage';

const LogoutButton = () => {
  const navigate = useNavigate();
  const onClick = async () => {
    // const res = await verifyUser();
    // if (!res.existe === true) {
    //   res.existe = false;
    //   console.log(res);
    //   navigate(`/`);
    // }
    emptyLocalStorage();
    navigate(`/`);
  };
  return (
    <button
      type="button"
      onClick={onClick}
      className="text-2xl md:text-base md:mr-4 md:ml-4 lg:ml-4 bg-gradient-to-r from-red-800 to-red-500 text-white py-2 px-4 rounded-xl">
      Se déconnecter
    </button>
  );
};
export default LogoutButton;
