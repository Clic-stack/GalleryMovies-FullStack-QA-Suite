import { Sequelize } from "sequelize";

const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  logging: false,
  timezone: "+00:00",
  dialectOptions: {
        ssl: process.env.NODE_ENV === 'production' 
            ? { require: true, rejectUnauthorized: false } 
            : false
    }
});

export const connectDB = async () => {
    console.log('Connecting to Database...')
    await sequelize.authenticate()
    console.log('Database connected')
    console.log('Sincronizing models...')
    await sequelize.sync({ force: false, alter: false})
    console.log('Models sincronized')
}

export default sequelize