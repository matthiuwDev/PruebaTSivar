import  Sequelize from "sequelize";

export const sequelize = new Sequelize('enterprisesdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});