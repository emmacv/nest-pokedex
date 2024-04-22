const EnvConfig = () => ({
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV,
  MONGO_DB_URI: process.env.MONGO_DB_URI,
  SECRET: process.env.A_SECRET_KEY,
});

export default EnvConfig;
