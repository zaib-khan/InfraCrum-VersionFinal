import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { useQuery } from 'react-query';
import ProjectTable from '../components/ProjectTable/ProjectTable';
import Header from '../components/Header';
import { getAllProjet } from '../../data/tasks';

const Project = () => {
  const {
    data: projet,
    isError,
    isFetching,
    isLoading,
    refetch: reloadData,
  } = useQuery('projet', getAllProjet);
  useEffect(() => {
    if (isError) {
      toast('Il y a une erreur', { className: 'errorToast' });
    }
  }, [isError]);

  return (
    <div>
      <Header />

      {isLoading && isFetching}

      <div className="flex flex-col lg:flex-row">
        {projet && !isFetching && <ProjectTable data={projet} reloadData={reloadData} />}
        
      </div>
    </div>
  );
};

export default Project;
