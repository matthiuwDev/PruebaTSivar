import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const User = sequelize.define('users', {
    document: {
        type: DataTypes.INTEGER, 
        primarykey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
}, {
    timestamps: false
});


