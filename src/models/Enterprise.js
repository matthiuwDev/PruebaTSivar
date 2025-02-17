import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";
import { PointSale } from "./PointSale.js";

export const Enterprise = sequelize.define('enterprises', {
    nitEnterprise: {
        type: DataTypes.INTEGER,
        primaryKey: true
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
            notEmpty: true,
        },
    }
}, {
    timestamps: false
});

Enterprise.belongsToMany(PointSale, { through: 'EnterprisePoint', timestamps: false });

PointSale.belongsToMany(Enterprise, { through: 'EnterprisePoint', timestamps: false });