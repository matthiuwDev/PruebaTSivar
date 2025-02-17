import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const PointSale = sequelize.define('pointsSale', {
    idPoint: {
        type: DataTypes.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true,
        },
    },
    direction: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
            notEmpty: true
        }
    },
}, {
    timestamps: false
});