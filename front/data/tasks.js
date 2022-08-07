import axios from 'axios';
import { getStorageValue, setStorageValue } from './LocalStorage';

/* -------------------------------------------------------------------------- */
/*                                 ENTREPRISE                                 */
/* -------------------------------------------------------------------------- */

export const getAllEntreprise = async () => {
  const { data } = await axios.get(' http://localhost:8000/entreprise');
  return data;
};

export const getOneEntreprise = async (entrpriseId) => {
  const { data } = await axios.get(`http://localhost:8000/entreprise/${entrpriseId}`);
  return data;
};

export const addOneEntreprise = async (entrpriseObj) => {
  const { data } = await axios.post(`http://localhost:8000/entreprise`, entrpriseObj);
  return data;
};

export const updateOneEntreprise = async (entrepriseObj) => {
  const { data } = await axios.put(
    `http://localhost:8000/entreprise/${entrepriseObj.id}`,
    entrepriseObj,
  );
  return data;
};

export const deleteOneEntreprise = async (entrepriseId) => {
  const { data } = await axios.delete(`http://localhost:8000/entreprise/${entrepriseId}`);
  return data;
};

/* -------------------------------------------------------------------------- */
/*                                   PROJET                                   */
/* -------------------------------------------------------------------------- */

export const getAllProjet = async () => {
  const { data } = await axios.get(' http://localhost:8000/project', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

export const getOneProjet = async (projetId) => {
  const { data } = await axios.get(`http://localhost:8000/projet/${projetId}`);
  return data;
};

export const addOneProjet = async (projetObj) => {
  const { data } = await axios.post(`http://localhost:8000/project`, projetObj, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

export const updateOneProjet = async (projetObj) => {
  const { data } = await axios.patch(
    `http://localhost:8000/project/${projetObj.id}`,
    projetObj,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${getStorageValue('token')}`,
      },
    },
  );
  return data;
};
export const deleteOneProjet = async (projetId) => {
  const { data } = await axios.delete(`http://localhost:8000/project/${projetId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

/* -------------------------------------------------------------------------- */
/*                                    TACHE                                   */
/* -------------------------------------------------------------------------- */

export const getAllTache = async () => {
  const { data } = await axios.get(' http://localhost:8000/id/tasks', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

export const getAllTacksByProject = async (projectId) => {
  const { data } = await axios.get(`http://localhost:8000/${projectId}/tasks`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

export const getOneTache = async (tacheId) => {
  const { data } = await axios.get(`http://localhost:8000/tasks/${tacheId}`);
  return data;
};

export const addOneTache = async (tacheObj, projectId) => {
  const { data } = await axios.post(
    `http://localhost:8000/${projectId}/createTasks`,
    tacheObj,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${getStorageValue('token')}`,
      },
    },
  );
  return data;
};

export const updateOneTache = async (tacheObj, projectId) => {
  console.log(`${tacheObj}`);
  const { data } = await axios.patch(
    `http://localhost:8000/${projectId}/${tacheObj.id}`,
    tacheObj,
    {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: `Bearer ${getStorageValue('token')}`,
      },
    },
  );
  return data;
};

export const deleteOneTache = async (tacheId, projectId) => {
  const { data } = await axios.delete(`http://localhost:8000/${projectId}/${tacheId}`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};
/* -------------------------------------------------------------------------- */
/*                                   STATUS                                   */
/* -------------------------------------------------------------------------- */

export const getAllStatus = async () => {
  const { data } = await axios.get(' http://localhost:8000/status');
  return data;
};

export const getOneStatus = async (statusId) => {
  const { data } = await axios.get(`http://localhost:8000/projet/${statusId}`);
  return data;
};

/* -------------------------------------------------------------------------- */
/*                                    USER                                    */
/* -------------------------------------------------------------------------- */

export const getAllUsers = async () => {
  const { data } = await axios.get(' http://localhost:8000/getAllUsers', {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};

export const getOneUser = async (userId) => {
  const { data } = await axios.get(`http://localhost:8000/projet/${userId}`);
  return data;
};

export const addOneUser = async (userObj) => {
  const data = await axios.post(`http://localhost:8000/users`, userObj);
  // const response = await apilogin.json();
  // setStorageValue('token', response);
  return data;
};

export const updateOneUser = async (userObj) => {
  const { data } = await axios.put(
    `http://localhost:8000/entreprise/${userObj.id}`,
    userObj,
  );
  return data;
};
export const deleteOneUser = async (userid) => {
  const { data } = await axios.delete(`http://localhost:8000/entreprise/${userid}`);
  return data;
};

/* -------------------------------------------------------------------------- */
/*                            fonction de recherche                           */
/* -------------------------------------------------------------------------- */

export const getAllTacheByUser = async (userId) => {
  let data = await getAllTache();
  data = data.filter((taches) => taches.user_id.includes(userId));
  return data;
};

/* -------------------------------------------------------------------------- /
/                           FONCTION DE CONNECTION                           /
/ -------------------------------------------------------------------------- */

export const verifyUser = async (mail, password) => {
  const allUsers = await getAllUsers();
  let i = 0;
  const res = {
    userId: 0,
    existe: false,
  };
  while (allUsers.length > i) {
    if (allUsers[i].mail === mail && allUsers[i].password === password) {
      res.userId = allUsers[i].id;
      res.existe = true;
    }
    i += 1;
  }
  return res;
};

/* -------------------------------------------------------------------------- */
/*                               TEST AXIOS ZAIB                              */
/* -------------------------------------------------------------------------- */

export const getAllDataOfCurrentuser = async () => {
  const { data } = await axios.get(`http://localhost:8000/users`, {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${getStorageValue('token')}`,
    },
  });
  return data;
};
