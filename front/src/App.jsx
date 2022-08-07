import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { QueryClientProvider, QueryClient } from 'react-query';
import { Toaster } from 'react-hot-toast';
import Home from './pages/Home';
import Tasks from './pages/Tasks';
import TasksDetail from './pages/TasksDetail';
import Welcome from './pages/Welcome';
import NotFound from './pages/NotFound';
import UserProfil from './pages/UserProfil';
import CreateUser from './pages/CreateUser';
import Projet from './pages/Projet';

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="welcome" element={<Welcome />} />
          {/* <Route path="project" element={<Projet />} /> */}

          {/* <Route path="project" element={<Projet />}>
            <Route path=":projectId" index element={<Projet />}>
              <Route path="tasks" element={<Tasks />}>
                <Route path=":tasksId" element={<TasksDetail />} />
              </Route>
            </Route>
          </Route> */}
          <Route path="project" element={<Projet />} />
          <Route path="project/:projectId/tasks" element={<Tasks />} />
          <Route path="project/:projectId/tasks/:tasksId" element={<TasksDetail />} />

          {/* <Route path="/tasks">
            <Route index element={<Tasks />} />
            <Route path=":tasksId" element={<TasksDetail />} />
          </Route> */}
          <Route path="create-profile" element={<CreateUser />} />
          <Route path="user-profile" element={<UserProfil />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 2000, className: 'toastStyle' }}
        />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
