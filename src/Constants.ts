import Config from 'react-native-config';

type ConfigTypes = 'development' | 'staging' | 'production';

const systemEnv: ConfigTypes = Config.ENV as ConfigTypes;

export const DEFAULT_CONFIG = systemEnv || 'development';

export const APP_NAME = 'e eu sei la';

export const APP_VERSION = '0.0.1';

const CONFIG = {
  development: {
    AUTH_URL: `authenticate`,
    BASE_URL: `https://localhost:3000/api`,
  },
  staging: {
    AUTH_URL: `authenticate`,
    BASE_URL: `https://localhost:3000/api`,
  },
  production: {
    AUTH_URL: `authenticate`,
    BASE_URL: `https://localhost:3000/api`,
  },
};

export const env = DEFAULT_CONFIG;
const config = CONFIG[env];

export default config;
