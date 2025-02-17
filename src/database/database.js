import  Sequelize from "sequelize";

export const sequelize = new Sequelize('enterprisesmanagerdb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});