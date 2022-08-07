import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import TaskTable from '../components/tables/TaskTable';
import SubHeader from '../components/SubHeader';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import { get } from '../../data/tasks';

const Tasks = () => {
  const {
    data: tache,
    isError,
    isFetching,
    isLoading,
    refetch: reloadData,
  } = useQuery('tache', get);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);
  return (
    <div>
      <Header />
      {isLoading && isFetching}
      <SideBar />
      <SubHeader />
      {tache && !isFetching && <TaskTable data={tache} reloadData={reloadData} />}
    </div>
  );
};

export default Tasks;
