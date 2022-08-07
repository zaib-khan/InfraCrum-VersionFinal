import axios from 'axios';

export const get = async () => {
  const { data } = await axios.get('http://localhost:8000/tache');
  return data;
};

export const getOne = async (id) => {
  const { data } = await axios.get(`http://localhost:8000/tache/${id}`);
  return data;
};

export const add = async (tache) => {
  const { data } = await axios.post('http://localhost:8000/tache', tache);
  return data;
};

export const update = async (tache) => {
  const { data } = await axios.put(`http://localhost:8000/tache/${tache.id}`, tache);
  return data;
};

export const remove = async (tache) => {
  const { data } = await axios.delete(`http://localhost:8000/tache/${tache.id}`);
  return data;
};
