import  Sequelize from "sequelize";

//Conexión a base de datos MySQL
export const sequelize = new Sequelize('managerenterprisedb', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});