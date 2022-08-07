/* eslint-disable jsx-a11y/label-has-associated-control */
import { useFormik } from 'formik';
import * as Yup from 'yup';

const ProjectForm = ({ mode, name, saveFunction, cancelFunction }) => {
  const formik = useFormik({
    initialValues: {
      name: name || '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Le nom est requis').min(3, 'Min. 3 caractères'),
    }),
    onSubmit: (values) => {
      saveFunction(values);
    },
  });

  return (
    <form
      className="flex flex-col bg-amber-400 h-40 w-80 rounded-full justify-center brperso items-center"
      onSubmit={formik.handleSubmit}>
      <div className="form-control input w-60 text-center">
        {mode !== 'edit' && <label htmlFor="name">Nom du projet</label>}
        <input
          type="text"
          id="name"
          name="name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
        />
        {formik.touched.name && formik.errors.name ? (
          <div className="absolute -bottom-5 text-sm text-red-600">
            {formik.errors.name}
          </div>
        ) : null}
      </div>
      <div className="mt-4 flex justify-center items-center">
        <button
          type="submit"
          disabled={!formik.isValid}
          className="btn text-white bg-sky-600 hover:bg-sky-800 mr-4 w-full">
          {mode !== 'edit' ? 'Créer' : 'Editer'}
        </button>
        <button type="button" className="btn cancel w-full" onClick={cancelFunction}>
          Annuler
        </button>
      </div>
    </form>
  );
};

export default ProjectForm;
