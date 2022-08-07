import { useState } from 'react';
import toast from 'react-hot-toast';
import { Tooltip } from 'flowbite-react';
import { useMutation } from 'react-query';
import { addOneProjet } from '../../../data/tasks';
import ProjectTableRow from './ProjectTableRow';
import ProjectTitle from '../ProjectTitle';
import ProjectForm from '../ProjectForm/ProjectForm';

const ProjectTable = ({ data, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { isLoading, mutate: addTache } = useMutation(
    '/tache',
    async (values) => addOneProjet(values),
    {
      onSuccess: () => {
        setIsAdd(false);
        toast('Le projet a été ajouté', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast("Il y a une erreur dans l'ajout", { className: 'errorToast' });
      },
    },
  );

  const saveTache = (values) => {
    addTache(values);
  };
  const cancelTache = () => {
    setIsAdd(false);
  };
  return (
    <div className="flex flex-col">
      <ProjectTitle />
      {isLoading}
      <div className="bg-white shadow-sm px-20 flex flex-wrap justify-center items-center">
        {data.length === 0 ? (
          <div className="flex items-center justify-center text-lg mt-20">
            Aucun projet disponible
          </div>
        ) : (
          ''
        )}
        {data.map((element) => (
          <ProjectTableRow key={element.id} element={element} reloadData={reloadData} />
        ))}
        {isAdd ? (
          <div className="mt-4">
            <ProjectForm saveFunction={saveTache} cancelFunction={cancelTache} />
          </div>
        ) : (
          <div className=" flex h-12 w-36  fixed right-6 bottom-6 ">
            <Tooltip
              content="Création d'un nouveau projet"
              trigger="hover"
              // eslint-disable-next-line react/style-prop-object
              style="light"
              placement="right">
              <button
                className="flex flex-col bg-amber-400 h-12 w-36 rounded-3xl text-white tracking-widest justify-center items-center align-center text-xs "
                type="button"
                href="#"
                onClick={() => setIsAdd(true)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                </svg>
              </button>
            </Tooltip>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectTable;
