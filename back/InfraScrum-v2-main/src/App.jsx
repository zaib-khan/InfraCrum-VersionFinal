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

const App = () => {
  const queryClient = new QueryClient();
  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <div className="">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="tasks">
              <Route index element={<Tasks />} />
              <Route path=":tasksId" element={<TasksDetail />} />
            </Route>
            <Route path="welcome" element={<Welcome />} />
            <Route path="*" element={<NotFound />} />
            <Route path="create-profile" element={<CreateUser />} />
            <Route path="user-profile" element={<UserProfil />} />
          </Routes>
        </div>
        <Toaster
          position="top-right"
          toastOptions={{ duration: 2000, className: 'toastStyle' }}
        />
      </Router>
    </QueryClientProvider>
  );
};

export default App;
