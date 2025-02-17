import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const UserEnterpriseRole = sequelize.define('UserEnterpriseRole', {
    docUser : {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    nitEnterprise: {
        type: DataTypes.INTEGER, 
        primaryKey: true
    },
    idRol: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});