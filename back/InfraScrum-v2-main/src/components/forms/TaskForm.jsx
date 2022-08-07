/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';

const TaskForm = ({
  mode,
  nom,
  temps,
  description,
  utilisateurs,
  saveFunction,
  cancelFunction,
}) => {
  const formik = useFormik({
    initialValues: {
      nom: nom || '',
      description: description || '',
      temps: temps || '',
      utilisateurs: utilisateurs || '',
    },
    validationSchema: Yup.object({
      nom: Yup.string().required('Le nom est requis').min(3, 'Min. 3 caractères'),
      temps: Yup.string().required('Le temps est requis'),
      description: Yup.string().required('La description est requise'),
    }),
    onSubmit: (values) => {
      saveFunction(values);
    },
  });

  return (
    <form className="grid grid-cols-4 items-center gap-8" onSubmit={formik.handleSubmit}>
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="nom">Nom de la tâche</label>}
        <input
          type="text"
          id="nom"
          name="nom"
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
        {mode !== 'edit' && <label htmlFor="temps">Temps</label>}
        <input
          type="text"
          id="temps"
          name="temps"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.temps}
        />
        {formik.touched.temps && formik.errors.temps ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.temps}
          </div>
        ) : null}
      </div>
      <div className="form-control input">
        {mode !== 'edit' && <label htmlFor="type">Utilisateurs</label>}
        <input
          type="text"
          id="utilisateurs"
          name="utilisateurs"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.utilisateurs}
        />
        {formik.touched.utilisateurs && formik.errors.utilisateurs ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.utilisateurs}
          </div>
        ) : null}
      </div>
      <div className="mb-1 flex justify-center items-center pb-10">
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn primary mr-4 w-full">
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
