import dotenv from 'dotenv';

dotenv.config();

const setting = {
  url: process.env.EDB_URL,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
};

module.exports = {
  development: { ...setting },
  test: { ...setting },
  production: { ...setting },
};