/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink } from 'react-router-dom';
import { setStorageValue } from '../localstorage/Localstorage.jsx';

const LoginUserHome = () => {
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail invalide').required('E-mail obligatoire'),
    password: Yup.string()
      .required('Mot de passe obligatoire')
      .min(8, 'Mot de passe doit être plus grand que 5 caractères')
      .max(50, 'Mot de passe doit être plus petit que 12 caractères'),
  });

  const initialValues = {
    email: '',
    password: '',
  };

  const handleSubmit = async (values) => {
    console.log(values);
    const apilogin = await fetch(`http://localhost:8000/login`, {
      method: 'POST',
      body: JSON.stringify(values),
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    });

    const response = await apilogin.json();
    console.log(response);
    setStorageValue('token', response);
    if (response.error) {
      alert(`there is an error with message : ${response.error.message}`);
    }
  };

  return (
    <div className="p-10 flex flex-col w-full">
      <img src="/img/logo.png" alt="logo" className="h-auto w-auto" />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={(values) => handleSubmit(values)}>
        <Form className="w-full">
          <div id="input" className="flex flex-col w-full my-5 input-container">
            <label htmlFor="mail" className="pb-2">
              E-mail :
            </label>

            <Field
              type="email"
              id="email"
              name="email"
              className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
              placeholder="Votre adresse E-mail"
            />
            <ErrorMessage
              name="email"
              component="small"
              className="text-red-600 text-xs pt-2"
            />
          </div>
          <div id="input" className="flex flex-col w-full my-5 input-container pt-4">
            <label htmlFor="password" className="pb-2">
              Mot de passe :
            </label>
            <Field
              type="password"
              id="password"
              name="password"
              className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
              placeholder="Votre mot de passe"
            />
            <ErrorMessage
              name="password"
              component="small"
              className="text-red-600 text-xs pt-2"
            />
          </div>
          <a href="/" className="block mb-4 text-xs text-right italic">
            Mot de passe oublié ?
          </a>
          <div id="button" className="flex flex-col w-full my-5">
            <button
              type="submit"
              className="w-full py-4 bg-sky-600 rounded-full text-white">
              <div className="flex flex-row items-center justify-center">
                <div className="mr-2">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                    />
                  </svg>
                </div>
                <div className="font-bold">Se connecter</div>
              </div>
            </button>
            <NavLink to="/create-profile">
              <button
                type="button"
                className="w-full py-4 bg-amber-400 rounded-full text-white mt-2">
                <div className="flex flex-row items-center justify-center">
                  <div className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-6 h-6"
                      viewBox="0 0 20 20"
                      fill="currentColor">
                      <path d="M8 9a3 3 0 100-6 3 3 0 000 6zM8 11a6 6 0 016 6H2a6 6 0 016-6zM16 7a1 1 0 10-2 0v1h-1a1 1 0 100 2h1v1a1 1 0 102 0v-1h1a1 1 0 100-2h-1V7z" />
                    </svg>
                  </div>
                  <div className="font-bold">Créer un compte</div>
                </div>
              </button>
            </NavLink>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginUserHome;
