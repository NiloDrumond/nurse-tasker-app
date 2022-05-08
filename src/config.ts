import Config from 'react-native-config';

type ConfigTypes = 'development' | 'staging' | 'production';

const systemEnv: ConfigTypes = Config.ENV as ConfigTypes;

export const APP_NAME = 'NurseTasker';

export const APP_VERSION = '0.0.1';

// const CONFIG = {
//   development: {
//     AUTH_URL: `authenticate`,
//     BASE_URL: `https://localhost:3000/api`,
//   },
//   staging: {
//     AUTH_URL: `authenticate`,
//     BASE_URL: `https://localhost:3000/api`,
//   },
//   production: {
//     AUTH_URL: `authenticate`,
//     BASE_URL: `https://localhost:3000/api`,
//   },
// };

// export const env = systemEnv || 'development';
// const config = CONFIG[env];

const config = {
  BASE_URL: 'https://nurse-tasker.herokuapp.com/api/v1',
  AUTH_URL: 'authenticate',
  PRESCRIPTIONS_URL: 'prescricoes',
  USERS_URL: 'pessoas/usuarios',
  PATIENTS_URL: 'pacientes',
  OCCURRENCES: 'ocurrencias',
};

export default config;
