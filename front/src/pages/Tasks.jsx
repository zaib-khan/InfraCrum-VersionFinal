import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import TaskTable from '../components/tables/TaskTable';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { getAllTache } from '../../data/tasks';
import { useParams } from 'react-router-dom';
import { getAllTacksByProject } from '../../data/tasks';

const Tasks = () => {
  const { projectId } = useParams();
  const {
    data: tache,
    isError,
    isFetching,
    isLoading,
    refetch: reloadData,
  } = useQuery('tache', () => getAllTacksByProject(projectId));
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    } else {
    }
  }, [isError]);

  // if (!isLoading) console.log(tache.findTaskbyProject);

  return (
    <div>
      <Header />

      {isLoading && isFetching}

      <div className=" flex flex-col lg:flex-row">
        <SideBar />
        {tache && !isFetching && (
          <TaskTable data={tache} reloadData={reloadData} projectId={projectId} />
        )}
      </div>
    </div>
  );
};

export default Tasks;
