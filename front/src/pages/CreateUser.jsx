/* eslint-disable jsx-a11y/label-has-associated-control */
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { NavLink, useNavigate } from 'react-router-dom';
import { setStorageValue } from '../../data/LocalStorage.js';
import toast from 'react-hot-toast';
import { useMutation } from 'react-query';
import { addOneUser } from '../../data/tasks.js';

const CreateUser = () => {
  const validationCreate = Yup.object().shape({
    email: Yup.string().email('E-mail est invalide').required('E-mail obligatoire'),
    password: Yup.string()
      .required('Mot de passe obligatoire')
      .min(5, 'Mot de passe doit être plus grand que 5 caractères')
      .max(50, 'Mot de passe doit être plus petit que 50 caractères'),
    lastname: Yup.string().required('Nom obligatoire'),
    entreprise: Yup.string().required('Entreprise obligatoire'),
    passwordConfirm: Yup.string()
      .required('Mot de passe obligatoire')
      .min(5, 'Mot de passe doit être plus grand que 5 caractères')
      .max(50, 'Mot de passe doit être plus petit que 50 caractères'),
    firstname: Yup.string().required('Prénom obligatoire'),
    phonenumber: Yup.number().required('Numéro de téléphone obligatoire'),
    img: Yup.string().required(`Url de l'image requise`),
  });

  const navigate = useNavigate();
  const { mutate } = useMutation(addOneUser);

  const initialValues = {
    lastname: '',
    firstname: '',
    phonenumber: '',
    email: '',
    password: '',
    entreprise: '',
    passwordConfirm: '',
    img: '',
  };

  const handleSubmit = async (values) => {
    mutate(values, {
      onSuccess: () => {
        toast.success('Votre compte a bien été créé :)');
        setTimeout(() => navigate(`/`), 1000);
      },
      onError: () =>
        toast('Ce mail est déja associer a un compte ', { className: 'errorToast' }),
    });
    // const apilogin = await fetch(`http://localhost:8000/users`, {
    //   method: 'POST',
    //   body: JSON.stringify(values),
    //   headers: {
    //     Accept: 'application/json',
    //     'Content-Type': 'application/json',
    //   },
    // });
    // const response = await apilogin.json();
    // setStorageValue('token', response);
    // if (response.error) {
    //   toast('Ce mail est déja associer a un compte ', { className: 'errorToast' });
    // } else {
    //   navigate(`/`);
    // }
  };

  return (
    <div className="h-screen overflow-hidden flex items-center justify-center relative lg:bg-[url(/img/createUserLeft.svg)] lg:bg-no-repeat">
      <NavLink to="/">
        <button
          type="button"
          className="w-32 h-16 py-4 bg-sky-600 lg:bg-amber-400 rounded-full text-white absolute bottom-2 right-2 lg:top-5 lg:right-5 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>
          <div className="flex flex-row items-center justify-center">
            <div className="font-bold">Retour</div>
          </div>
        </button>
      </NavLink>

      <img src="/img/d3.svg" alt="" className="absolute bottom-0 right-0 -z-10" />
      <img src="/img/d4.svg" alt="" className="absolute bottom-10 right-0 -z-20" />

      <div className="container px-6 mx-auto lg:w-6/12">
        <div className="flex flex-col-reverse text-center lg:flex-row h-screen justify-center items-center">
          <div className="flex flex-col w-full">
            <div className="p-10 flex flex-col w-full justify-center items-center">
              <img src="/img/logo.png" alt="logo" className="max-w-sm" />
              <h1 className="lg:text-2xl pb-4 lg:pb-8">Créer un nouveau compte</h1>
              <Formik
                initialValues={initialValues}
                validationSchema={validationCreate}
                onSubmit={(values) => handleSubmit(values)}>
                <Form className="w-auto bg-sky-600 rounded-3xl p-10 ">
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="text"
                        id="lastname"
                        name="lastname"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="Nom"
                      />
                      <ErrorMessage
                        name="lastname"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="text"
                        id="firstname"
                        name="firstname"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="Prénom"
                      />
                      <ErrorMessage
                        name="firstname"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="text"
                        id="entreprise"
                        name="entreprise"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="Entreprise"
                      />
                      <ErrorMessage
                        name="entreprise"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="number"
                        id="phonenumber"
                        name="phonenumber"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="Téléphone"
                      />
                      <ErrorMessage
                        name="phonenumber"
                        component="phonenumber"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col md:flex-row">
                    <div className="flex flex-col w-full input-container mb-4 px-2">
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
                        className="text-white text-xs pt-2"
                      />
                    </div>
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="password"
                        id="passwordConfirm"
                        name="passwordConfirm"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg "
                        placeholder="Confirmer mot de passe"
                      />
                      <ErrorMessage
                        name="password"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                  </div>

                  <div className="md:flex">
                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="mail"
                        id="email"
                        name="email"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="E-mail"
                      />
                      <ErrorMessage
                        name="email"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>

                    <div className="flex flex-col w-full input-container mb-4 px-2">
                      <Field
                        type="text"
                        id="img"
                        name="img"
                        className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
                        placeholder="Url image de profil"
                      />
                      <ErrorMessage
                        name="img"
                        component="small"
                        className="text-white text-xs pt-2"
                      />
                    </div>
                  </div>
                  <div id="button" className="flex flex-col w-full px-2">
                      <button
                        type="submit"
                        className="w-full px-4 py-3 bg-amber-400 rounded-full text-white">
                        <div className="flex flex-row items-center justify-center">
                          <div className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-6 w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
                              />
                            </svg>
                          </div>
                          <div className="font-bold">Créer un compte</div>
                        </div>
                      </button>
                    </div>
                </Form>
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateUser;

// /* eslint-disable jsx-a11y/label-has-associated-control */
// import { Formik, Field, Form, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { NavLink } from 'react-router-dom';
// import toast from 'react-hot-toast';

// const CreateUser = () => {
//   const validationCreate = Yup.object().shape({
//     email: Yup.string().email('E-mail est invalide').required('E-mail obligatoire'),
//     password: Yup.string()
//       .required('Mot de passe obligatoire')
//       .min(5, 'Mot de passe doit être plus grand que 5 caractères')
//       .max(50, 'Mot de passe doit être plus petit que 50 caractères'),
//     lastname: Yup.string().required('Nom obligatoire'),
//     entreprise: Yup.string().required('Entreprise obligatoire'),
//     firstname: Yup.string().required('Prénom obligatoire'),
//     phonenumber: Yup.number().required('Numéro de téléphone obligatoire'),
//     passwordConfirm: Yup.string()
//       .required('Mot de passe obligatoire')
//       .min(5, 'Mot de passe doit être plus grand que 5 caractères')
//       .max(50, 'Mot de passe doit être plus petit que 50 caractères'),
//     prenom: Yup.string().required('Prénom obligatoire'),
//     img: Yup.string().required(`Url de l'image requise`),
//     telNum: Yup.number().required('Numéro de téléphone obligatoire'),
//   });
//   const initialValues = {
//     lastname: '',
//     firstname: '',
//     phonenumber: '',
//     email: '',
//     password: '',
//     entreprise: '',
//     passwordConfirm: '',
//     img: '',
//   };

//   const handleSubmit = () => {
//     console.log('ok');
//     // console.log(values);
//     // const apilogin = await fetch(`http://localhost:8000/users`, {
//     //   method: 'POST',
//     //   body: JSON.stringify(values),
//     //   headers: {
//     //     Accept: 'application/json',
//     //     'Content-Type': 'application/json',
//     //   },
//     // });
//     // const response = await apilogin.json();
//     // console.log(response.error);
//     // setStorageValue('token', response);
//     // console.log(response);
//     // if (response.error) {
//     //   console.log('ok');
//     //   toast('Le mail ou le mot de passe est incorrect', { className: 'errorToast' });
//     // } else {
//     //   navigate(`/welcome`);
//     // }
//   };
//   const test = () => {
//     console.log('okoko');
//   };

//   return (
//     <div className="h-screen overflow-hidden flex items-center justify-center relative lg:bg-[url(/img/createUserLeft.svg)] lg:bg-no-repeat">
//       <NavLink to="/">
//         <button
//           type="button"
//           className="w-32 h-16 py-4 bg-sky-600 lg:bg-amber-400 rounded-full text-white absolute bottom-2 right-2 lg:top-5 lg:right-5 flex items-center justify-center">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             className="h-6 w-6 mr-2"
//             fill="none"
//             viewBox="0 0 24 24"
//             stroke="currentColor"
//             strokeWidth={2}>
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
//             />
//           </svg>
//           <div className="flex flex-row items-center justify-center">
//             <div className="font-bold">Retour</div>
//           </div>
//         </button>
//       </NavLink>

//       <img src="/img/d3.svg" alt="" className="absolute bottom-0 right-0 -z-10" />
//       <img src="/img/d4.svg" alt="" className="absolute bottom-10 right-0 -z-20" />

//       <div className="container px-6 mx-auto lg:w-6/12">
//         <div className="flex flex-col-reverse text-center lg:flex-row h-screen justify-center items-center">
//           <div className="flex flex-col w-full">
//             <div className="p-10 flex flex-col w-full justify-center items-center">
//               <img src="/img/logo.png" alt="logo" className="max-w-sm" />
//               <h1 className="lg:text-2xl pb-4 lg:pb-8">Créer un nouveau compte</h1>
//               <Formik
//                 initialValues={initialValues}
//                 validationSchema={validationCreate}
//                 onSubmit={(values) => console.log('okokoko')}>
//                 <Form className="w-auto bg-sky-600 rounded-3xl p-10 ">
//                   <div className="flex flex-col md:flex-row">
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="text"
//                         id="lastname"
//                         name="lastname"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Nom"
//                       />
//                       <ErrorMessage
//                         name="lastname"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="text"
//                         id="firstname"
//                         name="firstname"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Prénom"
//                       />
//                       <ErrorMessage
//                         name="firstname"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:flex-row">
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="text"
//                         id="entreprise"
//                         name="entreprise"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Entreprise"
//                       />
//                       <ErrorMessage
//                         name="entreprise"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="number"
//                         id="phonenumber"
//                         name="phonenumber"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Téléphone"
//                       />
//                       <ErrorMessage
//                         name="phonenumber"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                   </div>
//                   <div className="flex flex-col md:flex-row">
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="password"
//                         id="password"
//                         name="password"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Votre mot de passe"
//                       />
//                       <ErrorMessage
//                         name="password"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="password"
//                         id="passwordConfirm"
//                         name="passwordConfirm"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg "
//                         placeholder="Confirmer mot de passe"
//                       />
//                       <ErrorMessage
//                         name="password"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                   </div>

//                   <div className="md:flex">
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="email"
//                         id="email"
//                         name="email"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="E-mail"
//                       />
//                       <ErrorMessage
//                         name="email"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                     <div className="flex flex-col w-full input-container mb-4 px-2">
//                       <Field
//                         type="text"
//                         id="img"
//                         name="img"
//                         className="border-2 border-gray-400 rounded-full px-4 py-3 placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:shadow-lg"
//                         placeholder="Url image de profil"
//                       />
//                       <ErrorMessage
//                         name="img"
//                         component="small"
//                         className="text-white text-xs pt-2"
//                       />
//                     </div>
//                   </div>
//                   <div id="button" className="flex flex-col w-full px-2">
//                     <button
//                       type="submit"
//                       className="w-full px-4 py-3 bg-amber-400 rounded-full text-white">
//                       <div className="flex flex-row items-center justify-center">
//                         <div className="mr-2">
//                           <svg
//                             xmlns="http://www.w3.org/2000/svg"
//                             className="h-6 w-6"
//                             fill="none"
//                             viewBox="0 0 24 24"
//                             stroke="currentColor"
//                             strokeWidth={2}>
//                             <path
//                               strokeLinecap="round"
//                               strokeLinejoin="round"
//                               d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"
//                             />
//                           </svg>
//                         </div>
//                         <div className="font-bold">Créer un compte</div>
//                       </div>
//                     </button>
//                   </div>
//                 </Form>
//               </Formik>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CreateUser;
