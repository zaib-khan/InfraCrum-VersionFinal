import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { NavLink } from 'react-router-dom';
import { remove, update } from '../../../data/tasks';
import TaskForm from '../forms/TaskForm';

const TaskTableRow = ({ element, reloadData }) => {
  const [mode, setMode] = useState(false);
  const cancelTache = () => {
    setMode(false);
  };
  const { isLoading, mutate: deleteTache } = useMutation(
    '/tache',
    async (values) => remove(values),
    {
      onSuccess: () => {
        toast('La tâche a été supprimée', { className: 'successToast' });
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la supression', { className: 'errorToast' });
      },
    },
  );
  const { isLoading: isLoadingUpdate, mutate: updateTache } = useMutation(
    '/tache',
    async (values) => update({ id: element.id, ...values }),
    {
      onSuccess: () => {
        toast('La tâche a été mise à jour', { className: 'successToast' });
        setMode(false);
        reloadData();
      },
      onError: () => {
        toast('Il y a une erreur dans la mise à jour', { className: 'errorToast' });
      },
    },
  );

  return (
    <>
      {isLoading || isLoadingUpdate}
      {mode === 'edit' ? (
        <div className="py-8 pt-3 border-b border-gray-200 last:border-none">
          <TaskForm
            nom={element.nom}
            description={element.description}
            temps={element.temps}
            utilisateurs={element.utilisateurs}
            saveFunction={updateTache}
            cancelFunction={cancelTache}
            mode="edit"
          />
        </div>
      ) : (
        <div className="grid grid-cols-5 py-3  items-center">
          <div className="bg-red-400 m-0 p-4 h-40 flex items-center">{element.nom}</div>
          <div className="bg-blue-300 m-0 p-4 h-40 flex items-center">
            {element.description}
          </div>
          <div className="bg-yellow-200 m-0 p-4 h-40 flex items-center">
            {element.temps}
          </div>
          <div className="bg-purple-300 m-0 p-4 h-40 flex items-center">
            {element.utilisateurs}
          </div>
          <div className="flex justify-end items-center actions bg-gray-100 m-0 p-4 h-40">
            <NavLink to={`/tasks/${element.id}`} className="mr-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 duration-100 text-green-400 hover:text-green-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </NavLink>
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
            <button type="button" onClick={() => deleteTache(element)}>
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

export default TaskTableRow;
