/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Select from 'react-select';
import { useQuery } from 'react-query';
import { getAllUsers } from '../../../data/tasks';
import { useEffect } from 'react';
const TaskForm = ({
  mode,
  taskName,
  time,
  description,
  users,
  saveFunction,
  cancelFunction,
  deadline,
  status,
  projectId,
}) => {
  const formik = useFormik({
    initialValues: {
      taskName: taskName || '',
      description: description || '',
      time: time || '',
      users: users || [],
      deadline: deadline || '',
      status: status || '',
    },
    validationSchema: Yup.object({
      taskName: Yup.string().required('Le nom est requis').min(3, 'Min. 3 caractères'),
      description: Yup.string().required('La tâche est requise'),
      deadline: Yup.string().required('La deadline est requise'),
    }),
    onSubmit: (values) => {
      values['projectId'] = projectId;
      saveFunction(values);
    },
  });
  const { data: allUsers, isLoading } = useQuery('users', getAllUsers);
  const options = [];
  if (!isLoading) {
    for (let i of allUsers.data) {
      let temp = {
        value: i.id,
        label: i.firstname + ' ' + i.lastname,
      };
      options.push(temp);
    }
  }
  useEffect(() => {
    if (!isLoading) {
    }
  });

  return (
    <form
      className="lg:grid lg:grid-cols-5 items-center gap-8"
      onSubmit={formik.handleSubmit}>
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="nom">Tâche</label>}
        <input
          type="text"
          id="taskName"
          name="taskName"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.nom}
        />
        {formik.touched.nom && formik.errors.nom ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.nom}
          </div>
        ) : null}
      </div>
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="description">Description</label>}
        <input
          type="text"
          id="description"
          name="description"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.description}
        />
        {formik.touched.description && formik.errors.description ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.description}
          </div>
        ) : null}
      </div>
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="deadline">Date limite</label>}
        <input
          type="text"
          id="deadline"
          name="deadline"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.deadline}
        />
        {formik.touched.deadline && formik.errors.deadline ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.deadline}
          </div>
        ) : null}
      </div>
      {/* <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="temps">Temps</label>}
        <input
          type="text"
          id="time"
          name="time"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.time}
        />
        {formik.touched.time && formik.errors.time ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.time}
          </div>
        ) : null}
      </div> */}
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="type">Utilisateurs</label>}
        {/* <input
          type="text"
          id="utilisateurs"
          name="utilisateurs"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.utilisateurs}
        /> */}
        <Select
          isMulti
          name="users"
          className="basic-multi-select"
          classNamePrefix="select"
          options={options}
          // onChange={(e) => console.log(e)}
          onChange={(selectedValues) => {
            let temp = [];
            for (let i of selectedValues) {
              temp.push(i.value);
            }
            formik.values.users = temp;
            //console.log(temp);
            //console.log(selectedValues);
            // console.log(formik.values.users.push('1'));
          }}
          onBlur={formik.handleBlur}
          //value={formik.values.users}
        />
        {formik.touched.users && formik.errors.users ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.users}
          </div>
        ) : null}
      </div>
      <div className="mb-1 flex justify-center items-center">
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn bg-amber-400 hover:bg-sky-600 text-white mr-4 w-full">
          {mode !== 'edit' ? 'Créer' : 'Editer'}
        </button>
        <button type="button" className="btn cancel w-full" onClick={cancelFunction}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default TaskForm;
