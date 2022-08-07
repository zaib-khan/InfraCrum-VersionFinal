import { useState } from 'react';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { add } from '../../../data/tasks';
import TaskForm from '../forms/TaskForm';
import TaskTableRow from './TaskTableRow';

const TaskTable = ({ data, reloadData }) => {
  const [isAdd, setIsAdd] = useState(false);
  const { isLoading, mutate: addTache } = useMutation(
    '/tache',
    async (values) => add(values),
    {
      onSuccess: () => {
        setIsAdd(false);
        toast('La tâche a été ajoutée', { className: 'successToast' });
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
    <>
      {isLoading}
      <div className="bg-white shadow-sm mt-8 px-20">
        <div className="grid grid-cols-5 mb-4">
          <div className="font-semibold">Nom de la tâche</div>
          <div className="font-semibold">Description</div>
          <div className="font-semibold">Temps</div>
          <div className="font-semibold">Utilisateurs</div>
          <div className="font-semibold j">Action</div>
        </div>
        {data.length === 0 ? (
          <div className="flex flex-col items-center text-lg mt-20">
            Aucune tâche disponible
          </div>
        ) : (
          ''
        )}
        {data.map((element) => (
          <TaskTableRow key={element.id} element={element} reloadData={reloadData} />
        ))}
        {isAdd ? (
          <div className="mt-4">
            <TaskForm saveFunction={saveTache} cancelFunction={cancelTache} />
          </div>
        ) : (
          <div className="flex mt-10 justify-end">
            <button
              type="button"
              className="bg-amber-400 rounded-full text-xl p-2 text-white w-40 mb-10"
              onClick={() => setIsAdd(true)}>
              +
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default TaskTable;
