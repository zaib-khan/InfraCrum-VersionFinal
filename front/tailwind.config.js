/* eslint-disable global-require */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  mode: 'jit',
  plugins: [require('@tailwindcss/forms'), require('flowbite/plugin')],

  theme: {
    extend: {
      minHeight: {
        96: '24rem',
      },
    },
  },
  variants: {
    extend: {},
  },
};
