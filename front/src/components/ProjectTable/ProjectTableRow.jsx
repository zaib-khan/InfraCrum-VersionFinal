import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { deleteOneProjet, updateOneProjet } from '../../../data/tasks';
import ProjectForm from '../ProjectForm/ProjectForm';

const  ProjectTableRow = ({ element, reloadData }) => {
  const [mode, setMode] = useState(false);
  const cancelProjet = () => {
    setMode(false);
  };
  const { isLoading, mutate: deleteProjet } = useMutation(
    '/projet',
    async (values) => deleteOneProjet(values),
    {
      onSuccess: () => {
        toast('La tâche a été supprimée', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast("Vous n'avez pas le droit de supprimer", { className: 'errorToast' });
      },
    },
  );
  const { isLoading: isLoadingUpdate, mutate: updateProjet } = useMutation(
    '/projet',
    async (values) => updateOneProjet({ id: element.id, ...values }),
    {
      onSuccess: () => {
        toast('Le projet a été mis à jour', { className: 'successToast' });
        setMode(false);
        reloadData();
      },
      onError: () => {
        toast("Vous n'avez pas le droit d'éditer", { className: 'errorToast' });
      },
    },
  );

  const navigate = useNavigate();

  const Click = () => {
    navigate(`/project/${element.id}/tasks`);
  };
  return (
    <>
      {isLoading || isLoadingUpdate}
      {mode === 'edit' ? (
        <div className="py-8">
          <ProjectForm
            nom={element.name}
            description={element.description}
            temps={element.temps}
            deadline={element.deadline}
            utilisateurs={element.utilisateurs}
            projet={element.projet}
            saveFunction={updateProjet}
            cancelFunction={cancelProjet}
            mode="edit"
          />
        </div>
      ) : (
        <div className="flex justify-between items-center mt-8">
          <div className="m-4 h-40 flex flex-col items-center px-6 text-center justify-center text-md font-medium text-white bg-gradient-to-r from-sky-600 to-sky-400 w-80 brperso shadow-2xl">
            {element.name.charAt(0).toUpperCase() + element.name.slice(1)}
            <button
              type="button"
              className="btn bg-sky-800 text-sm mt-4 hover:bg-amber-400"
              onClick={Click}>
              Voir les tâches
            </button>
          </div>
          <div className="actions flex flex-col w-auto">
            <button type="button" className="mr-4" onClick={() => setMode('edit')}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 duration-100 text-blue-400 hover:text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </button>
            <button type="button" onClick={() => deleteProjet(element.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-10 w-10 duration-100 text-red-400 hover:text-red-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProjectTableRow;
