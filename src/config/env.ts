const EnvConfig = () => ({
  PORT: process.env.PORT || 3000,
  ENV: process.env.NODE_ENV,
  MONGO_DB: process.env.MONGO_DB,
});

export default EnvConfig;
