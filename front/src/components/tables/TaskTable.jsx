import { useState } from 'react';
import toast from 'react-hot-toast';
import { Tooltip } from 'flowbite-react';
import { useMutation } from 'react-query';
import { addOneTache } from '../../../data/tasks';
import TaskForm from '../forms/TaskForm';
import TaskTableRow from './TaskTableRow';
import SubHeader from '../SubHeader';

const TaskTable = ({ data, reloadData, projectId }) => {
  const scroll = () => {
    window.scrollTo(0, document.body.scrollHeight);
  };
  const [isAdd, setIsAdd] = useState(false);
  const { isLoading, mutate: addTache } = useMutation(
    '/tache',
    async (values) => addOneTache(values, projectId),
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
    <div className="flex flex-col">
      <SubHeader />
      {isLoading}
      <div className="bg-white shadow-sm px-20">
        <div
          className="lg:grid lg:grid-cols-5 mb-4 border-b-2 text-center
border-sky-500 pb-6">
          <div className="font-semibold ">Tâche</div>
          <div className="font-semibold ">Description</div>
          <div className="font-semibold ">Temps & deadline</div>
          <div className="font-semibold ">Utilisateurs</div>
          <div className="font-semibold  lg:text-right">Action</div>
        </div>
        {data.findTaskbyProject.length === 0 ? (
          <div className="flex flex-col items-center text-lg mt-20">
            Aucune tâche disponible
          </div>
        ) : (
          ''
        )}
        {data.findTaskbyProject.map((element) => (
          <TaskTableRow
            key={element.id}
            projectId={projectId}
            element={element}
            reloadData={reloadData}
          />
        ))}
        {isAdd ? (
          <div className="mt-4">
            <TaskForm
              projectId={projectId}
              saveFunction={saveTache}
              cancelFunction={cancelTache}
            />
          </div>
        ) : (
          <div className=" flex h-12 w-36  fixed right-6 bottom-6 ">
            <Tooltip
              content="Création d'une nouvelle tâche"
              trigger="hover"
              // eslint-disable-next-line react/style-prop-object
              style="light"
              placement="right">
              <button
                className="flex flex-col bg-amber-400 h-12 w-36 rounded-3xl text-white tracking-widest justify-center items-center align-center text-xs "
                type="button"
                href="#"
                onClick={() => {
                  setIsAdd(true);
                  scroll();
                }}>
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
      <div id="scrolBottom" className="pt-40" />
    </div>
  );
};

export default TaskTable;
