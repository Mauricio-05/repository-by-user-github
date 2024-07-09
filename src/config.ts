type environmentConfig = {
  PORT: string | number;
  API_URL_GITHUB: string;
};

const environmentConfig: environmentConfig = {
  PORT: process.env.PORT ?? 5006,
  API_URL_GITHUB: process.env.API_URL_GITHUB ?? "https://api.github.com",
};

export default environmentConfig;
