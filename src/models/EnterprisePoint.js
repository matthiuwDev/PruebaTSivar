import { DataTypes } from "sequelize";
import { sequelize } from "../database/database.js";

export const EnterprisePoint = sequelize.define("EnterprisePoint", {
    nitEnterprise: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    idPoint: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    timestamps: false
});
