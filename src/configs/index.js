const dotenv = require('dotenv')
dotenv.config()

module.exports = {
  NODE_ENV: process.env.NODE_ENV,
  APP: {
    HOST: process.env.HOST,
    PORT: process.env.PORT
  },
  DB: {
    USERNAME: process.env.DB_USERNAME,
    PASSWORD: process.env.DB_PASSWORD,
    DATABASE: process.env.DATABASE,
    HOST: process.env.DB_HOST,
    OPERATION_ALIAS: false
  }
}
