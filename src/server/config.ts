require('dotenv').config();

export const config = {
  authentication: {
    options: {
      userName: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD
    },
    type: 'default'
  },
  server: process.env.DB_SERVER,
  options: {
    database: process.env.DB_NAME,
    encrypt: true
  }
};
