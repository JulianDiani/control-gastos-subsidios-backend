const config = {
  username: process.env.SQL_USERNAME,
  password: process.env.SQL_PASSWORD,
  database: process.env.SQL_DATABASE,
  host: process.env.SQL_HOST,
  port: process.env.SQL_PORT,
  dialect: process.env.SQL_DIALECT,
};

export default {
  development: config,
  test: config,
  production: config,
};
